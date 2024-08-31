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

  const loginuser = async (e) => {
    e.preventDefault();

    const { email, password } = inpval;

    if (email === "") {
      console.log("password is required!");

      // toast.error("email is required!", {
      //     position: "top-center"
      // });
    } else if (!email.includes("@")) {
      console.log("password is required!");

      // toast.warning("includes @ in your email!", {
      //     position: "top-center"
      // });
    } else if (password === "") {
      console.log("password is required!");

      // toast.error("password is required!", {
      //     position: "top-center"
      // });
    } else if (password.length < 6) {
      console.log("password must be 6 char!");
    } else {
      // console.log("user login succesfully done");"proxy": "http://localhost:3000",
      const data = await fetch("http://localhost:3000/api/user/login", {
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
      console.log(res);

      if (res.status === 201) {
        localStorage.setItem("usersdatatoken", res.result.token);
        history("/dashbroad");
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
    <br /><br />
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Login Page</h1>
            <p>welcome</p>
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

            <button className="btn" onClick={loginuser}>
              Login
            </button>
            <p>
              Don-t have an Account? <NavLink to="/register">Sign Up</NavLink>{" "}
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
