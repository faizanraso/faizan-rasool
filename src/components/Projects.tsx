import React, {useState} from "react";
import {useQuery} from 'react-query'
import axios from 'axios'
import ProjectCard from "./ProjectCard";
import Fade from 'react-reveal/Fade';
import '../styles/Projects.css'


async function fetchProjects(){
    const {data} = await axios.get('https://api.github.com/users/faizanraso/repos')    
    return data
}

function Projects(){

    const {data, error, isError, isLoading} = useQuery('projects', fetchProjects)

    if(isLoading) return <div>Loading...</div> 
    if(isError) return <div>An error has occured</div>


    return(
        <Fade bottom>
            <div className="projects-section-div">
                <h3 className="dark-blue-font">Projects</h3>
                <div className="projects-section">
                    {
                        data.map((project, index) =>{
                            if (project.stargazers_count != 0){
                                return <ProjectCard key={index} name={project.name} description={project.description} link={project.html_url}/>
                            }
                        })
                    }
                </div>
            </div>
        </Fade>
    )
}

export default Projects;