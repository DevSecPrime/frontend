import Navbar from "./Navbar";
import SectionOneContent from "./SectionOneContent";

const Section1 = (props) => {
  return (
    <div className="h-screen w-full flex flex-col">
      <Navbar />
      <SectionOneContent users={props.users} />
    </div>
  );
};

export default Section1;
