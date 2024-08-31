import { useState } from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [passShow, setPassShow] = useState(false);
  const [cpassShow, setCPassShow] = useState(false);

  const [inpval, setInpval] = useState({
    fname: "",
    email: "",
    phone:"",
    password: "",
    cpassword: "",
  });

  const setVal = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addUserdata = async (e) => {
    e.preventDefault();
    const { fname, email, phone, password, cpassword } = inpval;
  
    if (fname === "" || email === "" || phone === "" || password === "" || cpassword === "") {
      alert("All fields are required!");
      return;
    } else if (phone.length !== 10) {
      alert("Phone number is invalid!");
      return;
    } else if (!email.includes("@")) {
      alert("Email is invalid!");
      return;
    } else if (password.length < 6) {
      alert("Password must be at least 6 characters!");
      return;
    } else if (password !== cpassword) {
      alert("Passwords do not match!");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:3000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fname, email, phone, password, cpassword }),
      });
  
      const res = await response.json();
  
      if (response.status === 201) {
        alert("Registration Successful!");
        setInpval({
          fname: "",
          email: "",
          phone: "",
          password: "",
          cpassword: "",
        });
      } else {
        alert(`Error: ${res.error}`);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred during registration. Please try again.");
    }
  };

  return (
    <>
    <br /><br />
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up</h1>
            <p style={{ textAlign: "center" }}>
              We are glad that you will be using Project Cloud to manage <br />
              your tasks! We hope that you will get like it.
            </p>
          </div>

          <form>
            <div className="form_input">
              <label htmlFor="fname">Name</label>
              <input
                type="text"
                onChange={setVal}
                value={inpval.fname}
                name="fname"
                id="fname"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onChange={setVal}
                value={inpval.email}
                name="email"
                id="email"
                placeholder="Enter Your Email Address"
              />
            </div>
            <div className="form_input">
              <label htmlFor="phone">Phone</label>
              <input
                type="number"
                onChange={setVal}
                value={inpval.phone}
                name="phone"
                id="phone"
                placeholder="Enter Your phone number"
              />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type={!passShow ? "password" : "text"}
                  onChange={setVal}
                  value={inpval.password}
                  name="password"
                  id="password"
                  placeholder="Enter Your password"
                />
                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>

            <div className="form_input">
              <label htmlFor="password">Confirm Password</label>
              <div className="two">
                <input
                  type={!cpassShow ? "password" : "text"}
                  onChange={setVal}
                  value={inpval.cpassword}
                  name="cpassword"
                  id="cpassword"
                  placeholder="Confirm password"
                />
                <div
                  className="showpass"
                  onClick={() => setCPassShow(!cpassShow)}
                >
                  {!cpassShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>

            <button className="btn" onClick={addUserdata}>
              Sign Up
            </button>
            <p>
              Already have an account? <NavLink to="/login">Log In</NavLink>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
