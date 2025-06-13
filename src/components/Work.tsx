import React from 'react';
import { richTextResolver } from '@storyblok/richtext';
import {WorkExperienceSectionStoryblok, WorkExperienceStoryblok} from "@/types/component-types-sb";
import {StoryblokRichTextNode} from "@storyblok/react";

const { render } = richTextResolver();

const Work = ({blok}: {blok: WorkExperienceSectionStoryblok}) => {


    return (
        <div>
            <h2>{blok?.headline}</h2>

            {blok?.work_experiences?.map((item) => {
                if (item.component === "work_experience") {
                    const work_experience = item as WorkExperienceStoryblok

                    return (
                        <div key={work_experience?._uid}>
                            <img src={work_experience?.icon?.filename as string} alt="" width={24} height={24} />
                            <h4>{work_experience?.headline}</h4>
                            <h5>{work_experience?.subheading}</h5>
                            <h6>{work_experience?.date}</h6>
                            <div dangerouslySetInnerHTML={{__html: render(work_experience.job_description as StoryblokRichTextNode<unknown>) as string}} />
                        </div>
                    )
                }
            })}
        </div>
    );
};

export default Work;
