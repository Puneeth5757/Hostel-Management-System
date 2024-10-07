import React, { useContext } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { LoginContext } from "../../../LandingSite/Auth/ContextProvider/Context";
import "./Header.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
// import { blue } from "@mui/material/colors";

const Header = () => {
  const { logindata, setLoginData } = useContext(LoginContext);

  const history = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    const logoutuser = async () => {
      let token = localStorage.getItem("usersdatatoken");
      // console.log(token)

      const res = await fetch("http://localhost:3000/api/user/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
          Accept: "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      // console.log(data);

      if (data.status == 201) {
        console.log("user logout");
        localStorage.removeItem("usersdatatoken");
        setLoginData(false);
        history("/");
      } else {
        console.log(" error");
      }
    };

  const goDash = () => {
    history("/dashbroad");
  };

  const goError = () => {
    history("*");
  };

  return (
    <>
      <header className="bgcolor p-3  ">
        <div className="container-fluid">
          <nav className="navbar ">
            <h3 className="navbar-brand mb-0 text-primary">
              Email: {logindata ? logindata.ValidUserOne.email : ""}
            </h3>
            <div className="d-flex align-items-center">
              <AccountCircleIcon
                className="cursor-pointer"
                onClick={handleClick}
                style={{ fontSize: 30, color: "blue"}}
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
                {logindata.ValidUserOne ? (
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
                        logoutuser();
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
