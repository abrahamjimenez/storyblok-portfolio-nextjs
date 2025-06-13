import React from 'react';
import {
    storyblokEditable,
    StoryblokServerComponent,
} from '@storyblok/react/rsc';

const Page = ({blok}) => {
    return (
        <main>
            {blok.body.map((nestedBlok) => (
                <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </main>
    );
};

export default Page;
