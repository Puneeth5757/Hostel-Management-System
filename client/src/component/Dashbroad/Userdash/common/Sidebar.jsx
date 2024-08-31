// import React from 'react'
import { FaHome, FaBookOpen, FaFileInvoice } from "react-icons/fa";
import { GrCompliance } from "react-icons/gr";
import { MdSpaceDashboard, MdOutlineFoodBank } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="d-flex flex-column p-4 vh-100 position-fixed sidebar">
      <div className="">
        <div className="header">
          <MdSpaceDashboard className="" /> Dashboard
        </div>
      </div>
      <ul className="list-group list-unstyled " style={{ listStyle: "none" }}>
        <li className="list-group-item ">
          <Link to={"/dashbroad"}>
            <FaHome className="icon" /> Home
          </Link>
        </li>
        <li className="list-group-item">
          <Link to={"/dashbroad/mess"}>
            <MdOutlineFoodBank className="icon" /> Mess Off
          </Link>
        </li>
        <li className="list-group-item">
          <Link to={"/dashbroad/attendance"}>
            <FaBookOpen className="icon" /> Attendance
          </Link>
        </li>
        <li className="list-group-item">
          <Link to={"/dashbroad/invoices"}>
            <FaFileInvoice className="icon" /> invoices
          </Link>
        </li>
        <li className="list-group-item">
          <Link to={"/dashbroad/complaints"}>
            <GrCompliance className="icon" /> Complaints
          </Link>
        </li>
        <li className="list-group-item">
          <Link to={"/dashbroad/suggestions"}>
            <BsStars className="icon" /> Suggestions
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
