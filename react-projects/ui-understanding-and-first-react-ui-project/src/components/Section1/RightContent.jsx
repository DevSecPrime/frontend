import RightContentCard from "./RightContentCard";

const RightContent = (props) => {
  return (
    <div className="h-auto md:h-full w-full p-3 sm:p-4 md:p-6 flex flex-col md:flex-row md:flex-nowrap gap-3 md:gap-5 overflow-y-auto md:overflow-y-hidden md:overflow-x-auto rounded-2xl md:rounded-4xl">
      {/* <RightContentCard />
      <RightContentCard />
      <RightContentCard /> */}

      {
        props.users.map((users, index) => {
          return <RightContentCard key={index} users={users} id={index} />
        })
      }

    </div>
  );
};

export default RightContent;
