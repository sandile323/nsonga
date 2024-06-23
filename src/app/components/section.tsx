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
}) => {
  {
    sections
      ? sections.map((section) => {
          resolveCotentType({ ...section });
        })
      : null;
  }
  return <></>;
};

const resolveCotentType = (section: section) => {
  switch (section.sectionType) {
    case "twoColumnLayout":
      return (
        <TwoColumn {...(section as TwoColumnProps)}>
          {section.children}
        </TwoColumn>
      );
      case "sliderLayout":
      return (
        <Slider {...(section as SliderProps)}>
          {section.children}
        </Slider>
      );
  }
};

export default SectionCollection;
