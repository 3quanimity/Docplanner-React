import React from "react";

export default function CityCard(props) {
  return (
    <div className="thumbnail-box">
      <a href="#" className="thumbnail-link">
        <img src={props.img} alt={props.title} />
        <div>
          <p>{props.title}</p>
          <a href="#" className="thumbnail-button">
            SEE OPENINGS
          </a>
        </div>
      </a>
    </div>
  );
}
