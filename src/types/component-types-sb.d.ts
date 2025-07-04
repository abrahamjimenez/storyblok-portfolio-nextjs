// This file was generated by the storyblok CLI.
// DO NOT MODIFY THIS FILE BY HAND.
import type { ISbStoryData } from "storyblok";
export interface AboutMeSectionStoryblok {
  headline?: string;
  description?: string;
  social_links?: (
    | AboutMeSectionStoryblok
    | EducationExperienceStoryblok
    | EducationSectionStoryblok
    | HeaderStoryblok
    | HeroSectionStoryblok
    | NavLinksStoryblok
    | PageStoryblok
    | ProjectStoryblok
    | ProjectsSectionStoryblok
    | SkillStoryblok
    | SkillsSectionStoryblok
    | SocialLinkStoryblok
    | WorkExperienceStoryblok
    | WorkExperienceSectionStoryblok
  )[];
  component: "about_me_section";
  _uid: string;
  [k: string]: any;
}

export interface AssetStoryblok {
  alt: string | null;
  copyright?: string | null;
  fieldtype: "asset";
  id: number;
  filename: string | null;
  name: string;
  title: string | null;
  focus: string | null;
  meta_data?: {
    [k: string]: any;
  };
  source?: string | null;
  is_external_url?: boolean;
  is_private?: boolean;
  src?: string;
  updated_at?: string;
  width?: number | null;
  height?: number | null;
  aspect_ratio?: number | null;
  public_id?: string | null;
  content_type?: string;
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface EducationExperienceStoryblok {
  icon?: AssetStoryblok;
  headline?: string;
  subheading?: string;
  date?: string;
  job_description?: RichtextStoryblok;
  component: "education_experience";
  _uid: string;
  [k: string]: any;
}

export interface EducationSectionStoryblok {
  headline?: string;
  education_experiences?: (
    | AboutMeSectionStoryblok
    | EducationExperienceStoryblok
    | EducationSectionStoryblok
    | HeaderStoryblok
    | HeroSectionStoryblok
    | NavLinksStoryblok
    | PageStoryblok
    | ProjectStoryblok
    | ProjectsSectionStoryblok
    | SkillStoryblok
    | SkillsSectionStoryblok
    | SocialLinkStoryblok
    | WorkExperienceStoryblok
    | WorkExperienceSectionStoryblok
  )[];
  component: "education_section";
  _uid: string;
  [k: string]: any;
}

export interface HeaderStoryblok {
  title?: string;
  links?: (
    | AboutMeSectionStoryblok
    | EducationExperienceStoryblok
    | EducationSectionStoryblok
    | HeaderStoryblok
    | HeroSectionStoryblok
    | NavLinksStoryblok
    | PageStoryblok
    | ProjectStoryblok
    | ProjectsSectionStoryblok
    | SkillStoryblok
    | SkillsSectionStoryblok
    | SocialLinkStoryblok
    | WorkExperienceStoryblok
    | WorkExperienceSectionStoryblok
  )[];
  icon?: AssetStoryblok;
  component: "header";
  _uid: string;
  [k: string]: any;
}

export interface HeroSectionStoryblok {
  eyebrow?: string;
  headline?: string;
  description?: string;
  component: "hero_section";
  _uid: string;
  [k: string]: any;
}

export interface NavLinksStoryblok {
  label?: string;
  component: "nav-links";
  _uid: string;
  [k: string]: any;
}

export interface PageStoryblok {
  header?: (
    | AboutMeSectionStoryblok
    | EducationExperienceStoryblok
    | EducationSectionStoryblok
    | HeaderStoryblok
    | HeroSectionStoryblok
    | NavLinksStoryblok
    | PageStoryblok
    | ProjectStoryblok
    | ProjectsSectionStoryblok
    | SkillStoryblok
    | SkillsSectionStoryblok
    | SocialLinkStoryblok
    | WorkExperienceStoryblok
    | WorkExperienceSectionStoryblok
  )[];
  body?: (
    | AboutMeSectionStoryblok
    | EducationExperienceStoryblok
    | EducationSectionStoryblok
    | HeaderStoryblok
    | HeroSectionStoryblok
    | NavLinksStoryblok
    | PageStoryblok
    | ProjectStoryblok
    | ProjectsSectionStoryblok
    | SkillStoryblok
    | SkillsSectionStoryblok
    | SocialLinkStoryblok
    | WorkExperienceStoryblok
    | WorkExperienceSectionStoryblok
  )[];
  component: "page";
  _uid: string;
  [k: string]: any;
}

export type MultilinkStoryblok =
  | {
      fieldtype: "multilink";
      id: string;
      url: string;
      cached_url: string;
      target?: "_blank" | "_self";
      anchor?: string;
      rel?: string;
      title?: string;
      prep?: string;
      linktype: "story";
      story?: {
        name: string;
        created_at?: string;
        published_at?: string;
        id: number;
        uuid: string;
        content?: {
          [k: string]: any;
        };
        slug: string;
        full_slug: string;
        sort_by_date?: null | string;
        position?: number;
        tag_list?: string[];
        is_startpage?: boolean;
        parent_id?: null | number;
        meta_data?: null | {
          [k: string]: any;
        };
        group_id?: string;
        first_published_at?: string;
        release_id?: null | number;
        lang?: string;
        path?: null | string;
        alternates?: any[];
        default_full_slug?: null | string;
        translated_slugs?: null | any[];
        [k: string]: any;
      };
      [k: string]: any;
    }
  | {
      fieldtype: "multilink";
      id: string;
      url: string;
      cached_url: string;
      target?: "_blank" | "_self";
      linktype: "url";
      rel?: string;
      title?: string;
      [k: string]: any;
    }
  | {
      fieldtype: "multilink";
      id: string;
      url: string;
      cached_url: string;
      target?: "_blank" | "_self";
      email?: string;
      linktype: "email";
      [k: string]: any;
    }
  | {
      fieldtype: "multilink";
      id: string;
      url: string;
      cached_url: string;
      target?: "_blank" | "_self";
      linktype: "asset";
      [k: string]: any;
    };

export interface ProjectStoryblok {
  image?: AssetStoryblok;
  headline?: string;
  subheadline?: string;
  link?: Exclude<
    MultilinkStoryblok,
    { linktype?: "email" } | { linktype?: "asset" }
  >;
  description?: string;
  role?: string;
  component: "project";
  _uid: string;
  [k: string]: any;
}

export interface ProjectsSectionStoryblok {
  headline?: string;
  description?: string;
  projects?: (
    | AboutMeSectionStoryblok
    | EducationExperienceStoryblok
    | EducationSectionStoryblok
    | HeaderStoryblok
    | HeroSectionStoryblok
    | NavLinksStoryblok
    | PageStoryblok
    | ProjectStoryblok
    | ProjectsSectionStoryblok
    | SkillStoryblok
    | SkillsSectionStoryblok
    | SocialLinkStoryblok
    | WorkExperienceStoryblok
    | WorkExperienceSectionStoryblok
  )[];
  component: "projects_section";
  _uid: string;
  [k: string]: any;
}

export interface SkillStoryblok {
  headline?: string;
  description?: string;
  component: "skill";
  _uid: string;
  [k: string]: any;
}

export interface SkillsSectionStoryblok {
  headline?: string;
  subheadline?: string;
  skills?: (
    | AboutMeSectionStoryblok
    | EducationExperienceStoryblok
    | EducationSectionStoryblok
    | HeaderStoryblok
    | HeroSectionStoryblok
    | NavLinksStoryblok
    | PageStoryblok
    | ProjectStoryblok
    | ProjectsSectionStoryblok
    | SkillStoryblok
    | SkillsSectionStoryblok
    | SocialLinkStoryblok
    | WorkExperienceStoryblok
    | WorkExperienceSectionStoryblok
  )[];
  component: "skills_section";
  _uid: string;
  [k: string]: any;
}

export interface SocialLinkStoryblok {
  icon?: AssetStoryblok;
  label?: string;
  component: "social_link";
  _uid: string;
  [k: string]: any;
}

export interface WorkExperienceStoryblok {
  icon?: AssetStoryblok;
  headline?: string;
  subheading?: string;
  date?: string;
  job_description?: RichtextStoryblok;
  component: "work_experience";
  _uid: string;
  [k: string]: any;
}

export interface WorkExperienceSectionStoryblok {
  headline?: string;
  work_experiences?: (
    | AboutMeSectionStoryblok
    | EducationExperienceStoryblok
    | EducationSectionStoryblok
    | HeaderStoryblok
    | HeroSectionStoryblok
    | NavLinksStoryblok
    | PageStoryblok
    | ProjectStoryblok
    | ProjectsSectionStoryblok
    | SkillStoryblok
    | SkillsSectionStoryblok
    | SocialLinkStoryblok
    | WorkExperienceStoryblok
    | WorkExperienceSectionStoryblok
  )[];
  component: "work_experience_section";
  _uid: string;
  [k: string]: any;
}
