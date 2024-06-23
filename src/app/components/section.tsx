import { FunctionComponent } from "react";
import TwoColumn, { TwoColumnProps } from "./sections/twoColumn";
import Slider from "./sections/slider";

export interface sectionCollectionProps {
  sections?: section[];
}

export interface section {
  sectionType: sectionType;
  children?: any;
}

export interface sectionType {
  type: "twoColumnLayout" | "sliderLayout";
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
  switch (section.sectionType.type) {
    case "twoColumnLayout":
      return (
        <TwoColumn {...(section as TwoColumnProps)}>
          {section.children}
        </TwoColumn>
      );
    case "sliderLayout":
    // return <Slider sectionType={sectionType}>{children}</Slider>;
  }
};

export default SectionCollection;
