import React from 'react';


function Project({ title, description, link, image, deployed_link }) {
    return (

        <div className="card">
            <img className="card-img" src={image} />
            <div className="card-content">
                <div className="projectTitle">{title}</div>
                <div className="projectDescript">{description}</div>
                <div className="projectLink">
                    Link to Github Repo:  <a href={link}>
                        {link}
                    </a>
                </div>
                <div className="projectLink">
                    Link to Deployed Site:  <a href={deployed_link}>
                        {deployed_link}
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Project;