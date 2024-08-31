import  { useState } from 'react';

const Complaints = () => {
  const [complaintType, setComplaintType] = useState('');
  const [complaintTitle, setComplaintTitle] = useState('');
  const [complaintDescription, setComplaintDescription] = useState('');

  const handleComplaintTypeChange = (event) => {
    setComplaintType(event.target.value);
  };

  const handleComplaintTitleChange = (event) => {
    setComplaintTitle(event.target.value);
  };

  const handleComplaintDescriptionChange = (event) => {
    setComplaintDescription(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    // Submit the form data here
    try {
      const response = await fetch('http://localhost:3000/api/complaint/complaints', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          complaintType,
          complaintTitle,
          complaintDescription,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Complaint registered successfully:', data.message);
        // Clear form fields after successful submission (optional)
        setComplaintType('');
        setComplaintTitle('');
        setComplaintDescription('');
      } else {
        alert('Error registering complaint:', data.message);
        // Handle errors gracefully (e.g., display error message to user)
      }
    } catch (error) {
      console.error('Error submitting complaint:', error);
      // Handle network or other unexpected errors gracefully
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <br />
          <label htmlFor="complaintType">Complaint Type</label>
          <select value={complaintType} onChange={handleComplaintTypeChange} className="form-control" id="complaintType">
            <option value="Electric" >Electric</option>
            <option value="cleaning">cleaning</option>
            <option value="furniture">furniture</option>
            <option value="">others</option>

          </select>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="complaintTitle">Complaint Title</label>
          <input type="text" value={complaintTitle} onChange={handleComplaintTitleChange} className="form-control" id="complaintTitle" placeholder="Title" />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="complaintDescription">Complaint Description</label>
          <textarea value={complaintDescription} onChange={handleComplaintDescriptionChange} className="form-control" id="complaintDescription" rows="3" placeholder="Details of complaint" />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">Register Complaint</button>
      </form>
    </div>
  );
};
export default Complaints;
