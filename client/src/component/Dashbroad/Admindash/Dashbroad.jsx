// index page   

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../LandingSite/Auth/ContextProvider/Context";
import { Outlet } from "react-router-dom";
import Sidebar from "./common/Sidebar";
import Header from "./common/Header";

const Dashbroad = () => {
  const { setLoginData } = useContext(LoginContext);
  // console.log(logindata.ValidUserOne);

  const history = useNavigate();

  const DashboardValid = async () => {
    let token = localStorage.getItem("admindatatoken");
    // console.log(token)

    const res = await fetch("http://localhost:3000/api/admin/validadmin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const data = await res.json();

    console.log(data);

    if (data.status == 401 || !data) {
      console.log("redirected to error page");
      history("*");
    } else {
      console.log("admin verify");
      setLoginData(data);
      history("/admin-dash");
    }
  };
  useEffect(() => {
    DashboardValid();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-sm-2">
          <Sidebar />
        </div>
        <div className="col-sm-10">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashbroad;
