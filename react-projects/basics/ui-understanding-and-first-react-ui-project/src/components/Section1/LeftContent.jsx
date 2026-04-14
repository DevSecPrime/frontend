import "remixicon/fonts/remixicon.css";
import LeftSideHeroText from "./LeftSideHeroText";
import LeftSideArrow from "./LeftSideArrow";

const LeftContent = () => {
  return (
    <div className="w-full flex flex-col justify-between gap-8 md:gap-0">
      <LeftSideHeroText />
      <LeftSideArrow />
    </div>
  );
};

export default LeftContent;
