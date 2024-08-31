import { TeamCard } from "./TeamMember";
function About() {
  const Prajwal = {
    name: "Puneeth",
    designation: "Front-end Engineer",
    image:
      "./puneeth.jpeg",
  };
  const Manoj = {
    name: "Puneeth",
    designation: "Backend-end Developer",
    image:
      "./puneeth.jpeg",
  };
  const Puneeth = {
    name: "Puneeth",
    designation: "CSS",
    image:
      "./puneeth.jpeg",
  };

  return (
    <>
      <div className="container-fluid">
        <br />
        <br />
        <br />
        <h1 className="container text-center"><b>Hostel Wardens</b></h1>
        <div className="row mr-2 ml-2 mt-5">
          <div className="col-4">
            <TeamCard member={Prajwal} />
          </div>
          <div className="col-4">
            <TeamCard member={Manoj} />
          </div>
          <div className="col-4">
            <TeamCard member={Puneeth} />
          </div>
        </div>
      </div>
    </>
  );
}
export { About };
