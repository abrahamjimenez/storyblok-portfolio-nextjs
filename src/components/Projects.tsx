import React from 'react';

const Projects = ({blok}) => {
    return (
        <div>
            <h2>{blok.headline}</h2>
            <p>{blok.subheadline}</p>

            {blok.projects.map((project) => (
                <div>
                    <h3>{project.headline}</h3>
                    <p>{project.description}</p>

                </div>
            ))}
        </div>
    );
};

export default Projects;
