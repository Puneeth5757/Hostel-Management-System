import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import "../../component/Header.css";

export default function Index() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
