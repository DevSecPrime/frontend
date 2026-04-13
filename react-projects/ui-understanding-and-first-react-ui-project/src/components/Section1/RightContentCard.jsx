import RightCardContent from "./RightCardContent";

const RightContentCard = (props) => {


  return (
    <div className="h-64 sm:h-72 md:h-full w-64 sm:w-72 md:w-75 relative overflow-hidden rounded-2xl md:rounded-4xl shrink-0">
      <img
        className="w-full h-full object-cover"
        // src="https://images.unsplash.com/photo-1739993744866-a8a49ad052eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29yb2tpbmclMjBwcm9mZXNzaW9uYWxzJTIwd2l0aCUyMGNvbXB1dGVyJTIwZ2lybHMlMjBwb3RyYWl0JTIwaW1hZ2VzJTIwaW4lMjBibGFja3xlbnwwfHwwfHx8MA%3D%3D"
        src={props.users.backgroundImage}
        alt="didi ki photo"
      />
      <RightCardContent tag={props.users.tag} buttonColor={props.users.buttonColor} description={props.users.description} textColor={props.users.textColor} id={props.id} />
    </div>
  );
};

export default RightContentCard;
