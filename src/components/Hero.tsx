import React from 'react';
import type {HeroSectionStoryblok} from "@/types/component-types-sb";

const Hero = ({blok}: {blok: HeroSectionStoryblok}) => {
    return (
        <div>
            <p>{blok?.eyebrow}</p>
            <h1>{blok?.headline}</h1>
            <p>{blok?.description}</p>
        </div>
    );
};

export default Hero;
