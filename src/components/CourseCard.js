import "./CourseCardStyles.css";

import React from 'react';
import { NavLink } from "react-router-dom";

const CourseCard = (props) => {
  return (
    <div className="course-card">
        <img src={props.imgsrc} alt="web-img"/>
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns">
                <NavLink to={props.view} className="btn">View</NavLink>
                <NavLink to={props.source} className="btn">Source</NavLink>
            </div>
            </div>
     </div>
  )
}

export default CourseCard;
