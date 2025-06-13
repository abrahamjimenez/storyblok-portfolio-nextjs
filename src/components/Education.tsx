import React from "react";
import Image from "next/image";
import type {
  EducationExperienceStoryblok,
  EducationSectionStoryblok,
} from "@/types/component-types-sb";

const Education = ({ blok }: { blok: EducationSectionStoryblok }) => {
  return (
    <div>
      <h2>{blok?.headline}</h2>

      {blok?.education_experiences?.map((item) => {
        if (item.component === "education_experience") {
          const education_experience = item as EducationExperienceStoryblok;

          return (
            <div key={education_experience._uid}>
              <Image
                src={education_experience?.icon?.filename as string}
                alt=""
                width={24}
                height={24}
              />
              <h4>{education_experience?.headline}</h4>
              <h5>{education_experience?.subheading}</h5>
              <h6>{education_experience?.date}</h6>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Education;
