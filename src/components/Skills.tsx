import React from 'react';

const Skills = ({blok}) => {
    return (
        <div>
            <h2>{blok.headline}</h2>
            <p>{blok.subheadline}</p>

            {blok.skills.map((skill) => (
                <div>
                    <h3>{skill.headline}</h3>
                    <p>{skill.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Skills;
