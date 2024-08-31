import { useContext } from "react";
import { LoginContext } from "../../LandingSite/Auth/ContextProvider/Context";

const Home = () => {
  const { logindata } = useContext(LoginContext);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src="./man.png" style={{ width: "200px", marginTop: 20 }} alt="" />
      <h1 className="mt-5">
        <b>UserName: {logindata ? logindata.ValidUserOne.fname : ""}</b>
      </h1>
      <h1 className="mt-4">
        Email: {logindata ? logindata.ValidUserOne.email : ""}
      </h1>
    </div>
  );
};

export default Home;
