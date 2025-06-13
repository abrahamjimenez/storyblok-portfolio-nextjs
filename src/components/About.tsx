import React from 'react';
import {richTextResolver} from "@storyblok/richtext";
const { render } = richTextResolver();

const About = ({blok}) => {
    return (
        <div>
            <h2>{blok.headline}</h2>
            <p dangerouslySetInnerHTML={{ __html: render(blok.description)}}></p>

            {blok.social_links.map((link) => (
                <div key={link._uid}>
                    <img src={link.icon.filename} alt="" width={24} height={24} />
                    <p>{link.label}</p>
                </div>
            ))}
        </div>
    );
};

export default About;
