import React from 'react';
import { richTextResolver } from '@storyblok/richtext';
const { render } = richTextResolver();

const Education = ({blok}) => {
    return (
        <div>
            <h2>{blok.headline}</h2>

            {blok.education_experiences.map((work_experience) => (
                <div key={work_experience._uid}>
                    <img src={work_experience.icon.filename} alt="" width={24} height={24} />
                    <h4>{work_experience.headline}</h4>
                    <h5>{work_experience.subheading}</h5>
                    <h6>{work_experience.date}</h6>

                    <p dangerouslySetInnerHTML={{ __html: render(work_experience.job_description)}}></p>

                </div>
            ))}
        </div>
    );
};

export default Education;
