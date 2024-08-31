import { Routes, Route } from "react-router-dom";
import LandingSite from "./component/LandingSite/Index";
import About from "./component/LandingSite/About/index";
import Contact from "./component/LandingSite/Contact/index";
import LandingPage from "./component/LandingSite/LandingPage/index";
import Login from "./component/LandingSite/Auth/Login";
import Register from "./component/LandingSite/Auth/Register";
import AdminSignIn from "./component/LandingSite/Auth/Admin-login";
import Dashbroad from "./component/Dashbroad/Userdash/Dashbroad";
import Home from "./component/Dashbroad/Userdash/Home";
import Mess from "./component/Dashbroad/Userdash/Mess";
import Attendance from "./component/Dashbroad/Userdash/Attendance";
import Complaints from "./component/Dashbroad/Userdash/Complaints";
import Suggestions from "./component/Dashbroad/Userdash/Suggestions";
import Invoices from "./component/Dashbroad/Userdash/Invoices";

import AdminDash from "./component/Dashbroad/Admindash/Dashbroad";
import AdminHome from "./component/Dashbroad/Admindash/Home";
import AdminMess from "./component/Dashbroad/Admindash/Mess";
import AdminAttendance from "./component/Dashbroad/Admindash/Attendance";
import AdminComplaints from "./component/Dashbroad/Admindash/Complaints";
import AdminSuggestions from "./component/Dashbroad/Admindash/Suggestions";
import AdminInvoices from "./component/Dashbroad/Admindash/Invoices";
import AllStudents from "./component/Dashbroad/Admindash/AllStudents"
import Error from "./component/LandingSite/Auth/Error";

function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingSite />}>
        <Route index element={<LandingPage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="admin-login" element={<AdminSignIn />} />
        <Route path="*" element={<Error />} />
      </Route>

      <Route path="admin-dash" element={<AdminDash />}>
        <Route index element={<AdminHome />} />
        <Route path="Admin-mess" element={<AdminMess />} />
        <Route path="Admin-attendance" element={<AdminAttendance />} />
        <Route path="Admin-complaints" element={<AdminComplaints />} />
        <Route path="Admin-suggestions" element={<AdminSuggestions />} />
        <Route path="Admin-invoices" element={<AdminInvoices />} />
        <Route path="allstudents" element={<AllStudents />} />
      </Route>
      
      <Route path="dashbroad" element={<Dashbroad />}>
        <Route index element={<Home />} />
        <Route path="mess" element={<Mess />} />
        <Route path="attendance" element={<Attendance  />} />
        <Route path="complaints" element={<Complaints />} />
        <Route path="suggestions" element={<Suggestions />} />
        <Route path="invoices" element={<Invoices />} />
      </Route>
    </Routes>
  );
}

export default App;
