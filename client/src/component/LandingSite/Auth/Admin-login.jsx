import { useState } from "react";
import "./Mix.css";

import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [passShow, setPassShow] = useState(false);

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });
  // console.log(inpval)

  const history = useNavigate();

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

  const loginadmin = async (e) => {
    e.preventDefault();

    const { email, password } = inpval;

    if (email === "") {
      console.log("password is required!");
    } else if (!email.includes("@")) {
      console.log("password is required!");
    } else if (password === "") {
      console.log("password is required!");
    } else if (password.length < 6) {
      console.log("password must be 6 char!");
    } else {
      const data = await fetch("http://localhost:3000/api/admin/admin-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const res = await data.json();
      // console.log(res);

      if (res.status === 201) {
        localStorage.setItem("admindatatoken", res.result.token);
        history("/admin-dash");
        setInpval({
          ...inpval,
          email: "",
          password: "",
        });
      }
    }
  };

  return (
    <>
      <br />
      <br />
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Admin-login</h1>
            <p>welcomw</p>
          </div>
          <form>
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

            <button className="btn" onClick={loginadmin}>
              Login
            </button>
            <p>
              You are a student ? <NavLink to="/register">Signin Here.</NavLink>{" "}
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
