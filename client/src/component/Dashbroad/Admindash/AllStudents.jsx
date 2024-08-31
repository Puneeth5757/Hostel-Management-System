import {  useEffect, useState } from "react";

const AllStudents = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({ fname: '', email: '', phone: '' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/admin/users', {
        method: 'GET',
        credentials: 'include' // Ensure cookies are sent
      });
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/admin/${id}`, {
        method: 'DELETE'
      });
      fetchUsers(); // Refresh the list
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setFormData({ fname: user.fname, email: user.email, phone: user.phone });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:3000/api/admin/${editingUser._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      setEditingUser(null);
      fetchUsers();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="container mt-5">
  <h1 className="mb-4">User List</h1>
  <table className="table table-striped table-hover">
    <thead className="thead-dark">
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user._id}>
          <td>{user.fname}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>
            <button className="btn btn-primary btn-sm mr-2" onClick={() => handleEdit(user)}>
              Edit
            </button>
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user._id)}>
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>

  {editingUser && (
    <div className="mt-4">
      <h2>Edit User</h2>
      <form onSubmit={handleUpdate} className="form-inline">
        <div className="form-group mr-2">
          <label className="mr-2">Name:</label>
          <input
            type="text"
            name="fname"
            className="form-control"
            value={formData.fname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mr-2">
          <label className="mr-2">Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mr-2">
          <label className="mr-2">Phone:</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success mr-2">Update</button>
        <button type="button" className="btn btn-secondary" onClick={() => setEditingUser(null)}>Cancel</button>
      </form>
    </div>
  )}
</div>

  );
};

export default AllStudents