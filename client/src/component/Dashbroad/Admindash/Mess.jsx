import { useState, useEffect } from "react";

const Mess = () => {
  const [menus, setMenus] = useState([]);
  const [formData, setFormData] = useState({
    day: "",
    breakfast: "",
    lunch: "",
    dinner: "",
    price: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [currentMenuId, setCurrentMenuId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/mess/Admin-mess")
      .then((response) => response.json())
      .then((data) => setMenus(data))
      .catch((error) => console.error("Error fetching menu:", error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      fetch(`http://localhost:3000/api/mess/Admin-mess/${currentMenuId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((updatedMenu) => {
          setMenus(
            menus.map((menu) =>
              menu._id === currentMenuId ? updatedMenu : menu
            )
          );
          setEditMode(false);
          setFormData({
            day: "",
            breakfast: "",
            lunch: "",
            dinner: "",
            price: "",
          });
        })
        .catch((error) => console.error("Error updating menu:", error));
    } else {
      fetch("http://localhost:3000/api/mess/Admin-mess", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((newMenu) => setMenus([...menus, newMenu]))
        .catch((error) => console.error("Error adding menu:", error));
    }
  };

  const handleEdit = (menu) => {
    setEditMode(true);
    setCurrentMenuId(menu._id);
    setFormData({
      day: menu.day,
      breakfast: menu.breakfast,
      lunch: menu.lunch,
      dinner: menu.dinner,
      price: menu.price,
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Weekly Menu</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <input type="text" name="day" value={formData.day} onChange={handleChange} className="form-control" placeholder="Day" required />
        </div>
        <div className="mb-3">
          <input type="text" name="breakfast" value={formData.breakfast} onChange={handleChange} className="form-control" placeholder="Breakfast" required />
        </div>
        <div className="mb-3">
          <input type="text" name="lunch" value={formData.lunch} onChange={handleChange} className="form-control" placeholder="Lunch" required />
        </div>
        <div className="mb-3">
          <input type="text" name="dinner" value={formData.dinner} onChange={handleChange} className="form-control" placeholder="Dinner" required />
        </div>
        <div className="mb-3">
          <input type="number" name="price" value={formData.price} onChange={handleChange} className="form-control" placeholder="Price" required />
        </div>
        <button type="submit" className="btn btn-primary">{editMode ? 'Update Menu' : 'Add Menu'}</button>
      </form>
      <div className="row">
        {menus.map(menu => (
          <div className="col-md-4 mb-4" key={menu._id}>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{menu.day}</h3>
                <p className="card-text"><strong>Breakfast:</strong> {menu.breakfast}</p>
                <p className="card-text"><strong>Lunch:</strong> {menu.lunch}</p>
                <p className="card-text"><strong>Dinner:</strong> {menu.dinner}</p>
                <p className="card-text"><strong>Price:</strong> {menu.price}</p>
                <button className="btn btn-success" onClick={() => handleEdit(menu)}>Edit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mess;
