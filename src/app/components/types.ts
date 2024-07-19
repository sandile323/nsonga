// types.ts

export interface Image {
  imageAlt: string;
  imageSrc: string;
  width: string;
  height: string;
}

export interface Heading {
  size: string;
  children: string;
}

export interface Paragraph {
  heading: Heading;
  children: string;
  className?: string;
}

export interface Section {
  sectionType: "twoColumnLayout" | "sliderLayout" | "jobListing" | "JobLayout";
  image?: Image;
  paraGraph?: Paragraph;
  imageFirst?: boolean;
  fullWidth?: boolean;
  availableJobs?: Job[];
  job?: Job;
}

export interface Job {
  title: string;
  description?: string;
  link: string;
}

export interface Page {
  title: string;
  slug: string;
  sections: Section[];
}

export interface SocialLink {
  title: string;
  link: string;
}

export interface LegalLink {
  title: string;
  link: string;
}

export interface Footer {
  socialLinks: SocialLink[];
  legalLinks: LegalLink[];
}

interface RootObject {
  pages: Page[];
  footer: Footer;
}
