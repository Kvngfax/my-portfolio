import "./CourseCardStyles.css";

import React from 'react';
import CourseCard from "./CourseCard.js";
import CourseCardData from "./CourseCardData.js";

const Course = () => {
  return (
    <div className="course-container">
      <h1 className="project-heading">Certificates</h1>
      <div className="project-container">
        {CourseCardData.map((val, ind) =>{
            return(
                <CourseCard key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                source={val.source}
                />
            )
        })}
      </div>
    </div>
  )
}

export default Course;
 