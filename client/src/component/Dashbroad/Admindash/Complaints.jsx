import  { useState, useEffect } from 'react';

const Complaints = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/complaint/Admin-complaints');
        const data = await response.json();
        setComplaints(data);
      } catch (error) {
        console.error('Error fetching complaints:', error);
      }
    };

    fetchComplaints();
  }, []);
  return (
    <div className="container">
      <br />
    <h2>Complaints List</h2>
    <div className="row">
      {complaints.map((complaint) => (
        <div className="col-md-4" key={complaint._id}>
          <div className="card mb-3">
      <div className="card-body bg-light">
        <h5 className="card-text">Complaint Type: {complaint.complaintType}</h5>
        <p className ="card-title ">{complaint.complaintTitle}</p>
        <p className="card-text">{complaint.complaintDescription}</p>
        {/* Add buttons or links for further actions (optional) */}
      </div>
    </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Complaints