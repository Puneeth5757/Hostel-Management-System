import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../../LandingSite/Auth/ContextProvider/Context";
import "./Header.css";

const Header = () => {
  const { logindata,setLoginData} = useContext(LoginContext);

  const history = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutadmin = async () => {
    let token = localStorage.getItem("admindatatoken");
    // console.log(token)

    const res = await fetch("http://localhost:3000/api/admin/admin-logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
        Accept: "application/json",
      },
      credentials: "include"
    });

    const data = await res.json();
    // console.log(data);

    if (data.status == 201) {
      alert("admin logout");
      localStorage.removeItem("ValidAdminOne");
      setLoginData(false);
      history("/");
      
    } else {
      console.log(" error");
    }
  };

  const goDash = () => {
    history("/admin-dash");
  };

  const goError = () => {
    history("*");
  };

  return (
    <>
      <header className="bgcolor p-3 ">
      <div className="container-fluid">
        <nav className="navbar ">
          <h1 className="navbar-brand mb-0 text-primary">
            Email: {logindata ? logindata.ValidAdminOne.email : ""}
          </h1>
          <div className="d-flex align-items-center">
            <AccountCircleIcon
              className=" cursor-pointer"
              onClick={handleClick}
              style={{fontSize: 30, color: "blue"}}
            />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {logindata.ValidAdminOne ? (
                [
                  <MenuItem
                    key="profile"
                    onClick={() => {
                      goDash();
                      handleClose();
                    }}
                  >
                    Profile
                  </MenuItem>,
                  <MenuItem
                    key="logout"
                    onClick={() => {
                      logoutadmin();
                      handleClose();
                    }}
                  >
                    Logout
                  </MenuItem>,
                ]
              ) : (
                <MenuItem
                  key="profile"
                  onClick={() => {
                    goError();
                    handleClose();
                  }}
                >
                  Profile
                </MenuItem>
              )}
            </Menu>
          </div>
        </nav>
      </div>
    </header>
    </>
  );
};

export default Header;
