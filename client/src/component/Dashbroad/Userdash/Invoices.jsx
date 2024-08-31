import { useState, useEffect } from 'react';

const Invoices = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/invoice/Admin-invoices'); 
        const data = await response.json();
        setNotices(data);
      } catch (error) {
        console.error('Error fetching notices:', error);
      }
    };

    fetchNotices();
  }, []);
  return (
    <div className="container mt-5 text-center">
    <h2><b>Noticeboard</b></h2>
    {notices.length > 0 ? (
      <ul className="list-group mt-5 mb-5">
        {notices.map((notice) => (
          <li key={notice._id} className="list-group-item">
            <h5>{notice.title}</h5>
            <p>{notice.description}</p>
            {/* Remove the delete button */}
          </li>
        ))}
      </ul>
    ) : (
      <p className="mt-3">No notices found.</p>
    )}
  </div>  )
}

export default Invoices