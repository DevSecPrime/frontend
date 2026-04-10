import { Share, Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <div className="cardContainer">
      {/* Share button */}
      <div className="shareBtnContainer">
        <span title="Share">
          <Share />
        </span>
      </div>

      {/* Profile info */}
      <div className="profileContainer">
        <img
          className="imageContainer"
          src={props.profileImage}
          alt="profile image"
        />
        <span>{props.fullName}</span>
        <span>{props.designation}</span>
        <div>
          {props.skills?.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div>
        <button>Get in touch</button>
        <span title="Bookmark">
          <Bookmark />
        </span>
      </div>
    </div>
  );
};

export default Card;
