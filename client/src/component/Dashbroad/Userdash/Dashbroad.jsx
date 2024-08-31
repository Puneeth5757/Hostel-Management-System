import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Sidebar from "./common/Sidebar";
import Header from "./common/Header";
import { LoginContext } from "../../LandingSite/Auth/ContextProvider/Context";

const Dashbroad = () => {
  const { setLoginData } = useContext(LoginContext);
  // console.log(logindata.ValidUserOne);

  const history = useNavigate();

  const DashboardValid = async () => {
    let token = localStorage.getItem("usersdatatoken");
    // console.log(token)

    const res = await fetch("http://localhost:3000/api/user/validuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const data = await res.json();

    if (data.status == 401 || !data) {
      console.log("redirected to error page");
      history("*");
    } else {
      console.log("user verify");
      setLoginData(data);
      history("/dashbroad");
    }
  };
  useEffect(() => {
    DashboardValid();
  }, []);

  return (
    <>
      <div className="row ">
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

{
  /* <div className="row">
        <div className="col-2 d-flex flex-column bg-dark text-white vh-100">
          <div className="row">
            <Link to="" className="">
              <div className="col-1 flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <div className="">
                <span className="">Dashboard</span>
              </div>
            </Link>
          </div>

          <div className="">
            <button onClick="" type="submit" className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
              Log Out
            </button>
          </div>
        </div>
        <div className="col-10"></div>
      </div> */
}
