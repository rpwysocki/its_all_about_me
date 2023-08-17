// Portfolio.js
import React from 'react';
import Project from '../components/Project';
import projectData from '../assets/project.json';


const Portfolio = () => {
  return (
    <div className='bg-color'>
      <div className="project">
        {projectData.map((proj, i) => {
          return <Project key={i} image={proj.image} title={proj.title} description={proj.description} link={proj.link} deployed_link={proj.deployed_link} />
        })}
      </div>
    </div>
  );
}

export default Portfolio;