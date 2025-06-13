import React from 'react';
import { richTextResolver } from '@storyblok/richtext';
const { render } = richTextResolver();

const Hero = ({blok}) => {
    return (
        <div>
            <p>{blok.eyebrow}</p>
            <h1>{blok.headline}</h1>
            <p dangerouslySetInnerHTML={{ __html: render(blok.description)}}></p>
        </div>
    );
};

export default Hero;
