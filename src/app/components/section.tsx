import { FunctionComponent } from "react";
import TwoColumn, { TwoColumnProps } from "./sections/twoColumn";
import Slider, { SliderProps } from "./sections/slider";
import JobListing, { JobListingProps } from "./sections/jobListing";

export interface sectionCollectionProps {
  sections?: section[];
}

export interface section {
  sectionType: "twoColumnLayout" | "sliderLayout" | "jobListing";
  children?: any;
}

const SectionCollection: FunctionComponent<sectionCollectionProps> = ({
  sections,
}) => (
  <>
    {sections &&
      sections.map((section, index) => (
        <section key={index}>{resolveCotentType(section)}</section>
      ))}
  </>
);

const resolveCotentType = (section: section) => {
  switch (section.sectionType) {
    case "twoColumnLayout":
      return <TwoColumn {...(section as TwoColumnProps)} />;
    case "sliderLayout":
      return <Slider {...(section as SliderProps)} />;
    case "jobListing":
      return <JobListing {...(section as JobListingProps)} />;
  }
};

export default SectionCollection;
