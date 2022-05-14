import React from 'react';
import GitHub from "@mui/icons-material/GitHub";
import '../styles/ProjectCard.css'

function ProjectCard(props) {

  return (
    <div className='card-component'>
        <a href={props.link} ><GitHub className="github-button-project" style={{fill: "#1DA1F2"}}/></a>
        <h3 className='project-card-title'>{props.name}</h3>
        <p className='project-card-description'>{props.description}</p>
    </div>
  );
}

export default ProjectCard;