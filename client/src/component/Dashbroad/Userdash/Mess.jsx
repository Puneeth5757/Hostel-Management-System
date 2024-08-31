import  { useState, useEffect } from 'react';

const Mess = () => {

  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/mess/Admin-mess')
      .then(response => response.json())
      .then(data => setMenus(data))
      .catch(error => console.error('Error fetching menu:', error));
  }, []);
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4"><b>Weekly Menu</b></h1>
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
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-info">Make payment here</button>
    </div>
  )
}

export default Mess