import { FunctionComponent } from "react";
import TwoColumn, { TwoColumnProps } from "./sections/twoColumn";
import Slider, { SliderProps } from "./sections/slider";

export interface sectionCollectionProps {
  sections?: section[];
}

export interface section {
  sectionType: "twoColumnLayout" | "sliderLayout";
  children?: any;
}

const SectionCollection: FunctionComponent<sectionCollectionProps> = ({
  sections,
}) => (
  <>
    {sections &&
      sections.map((section, index) => (
        <div key={index}>{resolveCotentType(section)}</div>
      ))}
  </>
);

const resolveCotentType = (section: section) => {
  console.log(section);
  switch (section.sectionType) {
    case "twoColumnLayout":
      return <TwoColumn {...(section as TwoColumnProps)} />;
    case "sliderLayout":
      return <Slider {...(section as SliderProps)} />;
  }
};

export default SectionCollection;
