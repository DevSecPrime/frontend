import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const SectionOneContent = (props) => {
  return (
    <div className="py-4 px-4 sm:py-6 sm:px-6 md:py-8 md:px-10 lg:py-10 lg:px-18 flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10 h-auto md:h-[90vh]">
      <div className="w-full md:w-1/3 h-auto md:h-full flex items-center">
        <LeftContent />
      </div>
      <div className="w-full md:w-2/3 h-auto md:h-full">
        <RightContent users={props.users} />
      </div>
    </div>
  );
};

export default SectionOneContent;
