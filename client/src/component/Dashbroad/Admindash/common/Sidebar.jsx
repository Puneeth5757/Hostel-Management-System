// import React from 'react'
import { FaHome, FaBookOpen, FaFileInvoice } from "react-icons/fa";
import { GrCompliance } from "react-icons/gr";
import { MdSpaceDashboard, MdOutlineFoodBank,MdOutlineGroups2  } from "react-icons/md";
import { BsStars } from "react-icons/bs";
// import { PiStudentFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="d-flex flex-column p-4 vh-100 position-fixed sidebar ">
      <div className="">
        <div className="header">
          <MdSpaceDashboard className="" /> Dashboard
        </div>
      </div>
      <ul className="list-group list-unstyled" style={{ listStyle: "none" }}>
        <li className="list-group-item  ">
          <Link to={"/admin-dash"}>
            <FaHome className="icon" /> Home
          </Link>
        </li>
        {/* <li className="list-group-item "> 
        <Link to={"/admin-dash/Resigterstudent"}>
            <PiStudentFill className="icon" /> Register Student
          </Link>
        </li> */}
        <li className="list-group-item ">
          <Link to={"/admin-dash/Admin-attendance"}>
            <FaBookOpen className="icon" /> Attendance
          </Link>
        </li>
        <li className="list-group-item ">
          <Link to={"/admin-dash/Admin-mess"}>
            <MdOutlineFoodBank className="icon" /> Mess Off
          </Link>
        </li>
        <li className="list-group-item ">
        <Link to={"/admin-dash/Admin-invoices"}>
            <FaFileInvoice className="icon" /> invoices
          </Link>
        </li>
        <li className="list-group-item ">
          <Link to={"/admin-dash/Admin-complaints"}>
            <GrCompliance className="icon" /> Complaints
          </Link>
        </li>
        <li className="list-group-item ">
          <Link to={"/admin-dash/Admin-suggestions"}>
            <BsStars className="icon" /> Suggestions
          </Link>
        </li>
        <li className="list-group-item ">
          <Link to={"/admin-dash/allstudents"}>
            <MdOutlineGroups2 className="icon" /> All students
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
