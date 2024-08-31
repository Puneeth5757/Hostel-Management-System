import { Link } from "react-router-dom";
import { HeroSVG } from "./HeroSVG";

function HeroSection() {
  return (
    <main className="row mr-2 ml-2" >
      <div className="col-7">
        <br />
        <br />
        <br />
        <div className="row align-items-center  mt-5">
          <div className="col-12 text-center mt-5">
          <h1 className="ml-4">
            <b style={{fontSize: 60}}>Hostel Management System</b>
          </h1>
          <p className="" style={{fontSize: 30}} >One Solution For All Of The Hostel&apos;s Needs</p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-12 text-center">
          <Link to="/login" className="btn btn-primary mt-4" >
            <h3>Login</h3>
          </Link>
          <p className="mt-3">OR</p>
          <Link to="/register" className="" >
            Request Registration
          </Link>
          </div>
        </div>
      </div>
      <div className="col-5">
        <HeroSVG />
      </div>
    </main>
  );
}
export { HeroSection };
