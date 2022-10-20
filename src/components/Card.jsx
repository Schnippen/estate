import React from 'react'

function Card(props) {

  return (
    <li>
      <div className="landing__page-card-section-item">
        <div><img src={props.img}></img></div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <button className="landing__page-card-section-button">
          {props.buttonDescription}
        </button>
      </div>
    </li>
  );
}

export default Card

