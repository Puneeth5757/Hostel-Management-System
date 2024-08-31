// import React from 'react'
import { useState, useEffect } from "react";

const Invoices = () => {
  const [notices, setNotices] = useState([]);
  const [newNotice, setNewNotice] = useState({ title: "", description: "" });

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/invoice/Admin-invoices"
        );
        const data = await response.json();
        setNotices(data);
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };

    fetchNotices();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewNotice({ ...newNotice, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3000/api/invoice/Admin-invoices",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newNotice),
        }
      );
      const data = await response.json();
      setNotices([...notices, data]); // Add new notice to state
      setNewNotice({ title: "", description: "" }); // Clear form fields
    } catch (error) {
      console.error("Error adding notice:", error);
    }
  };

  const handleDelete = async (noticeId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/invoice/Admin-invoices/${noticeId}`,
        { method: "DELETE" }
      );
      if (response.ok) {
        setNotices(notices.filter((notice) => notice._id !== noticeId)); 
      } else {
        console.error("Error deleting notice:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting notice:", error);
    }
  };
  return (
    <div className="container mt-3">
      <h2>Noticeboard</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-2 mb-2">
          <label htmlFor="noticeTitle">Title</label>
          <input
            type="text"
            value={newNotice.title}
            onChange={handleChange}
            name="title"
            className="form-control"
            id="noticeTitle"
            placeholder="Enter title"
            required
          />
        </div>
        <div className="form-group mt-3 mb-3">
          <label htmlFor="noticeDescription">Description</label>
          <textarea
            value={newNotice.description}
            onChange={handleChange}
            name="description"
            className="form-control"
            id="noticeDescription"
            rows="5"
            placeholder="Write detailed notice description"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Notice
        </button>
      </form>

      {notices.length > 0 ? (
        <ul className="list-group mt-3">
          {notices.map((notice) => (
            <li key={notice._id} className="list-group-item">
              <h5>{notice.title}</h5>
              <p>{notice.description}</p>
              <button
                className="btn btn-sm btn-danger float-end"
                onClick={() => handleDelete(notice._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3">No notices found.</p>
      )}
    </div>
  );
};

export default Invoices;
