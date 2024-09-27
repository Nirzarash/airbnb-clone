import React from "react";
import "../App.css";
import { AiFillStar } from "react-icons/ai";

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={`/images/${props.coverImg}`} className="card-img" />
      <div className="card-stats">
        <AiFillStar className="card-star" />
        <span>&nbsp;{props.stats.rating}</span>
        <span className="gray">&nbsp;({props.stats.reviewCount}) |&nbsp;</span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <b>From ${props.price}</b>
        /person
      </p>
    </div>
  );
}

export default Card;
