import { FunctionComponent } from "react";
import { section } from "../section";
import Paragraph, { paraGraphProps } from "../paragraph";
import Image from "next/image";

export interface SliderProps extends section {
  imageSrc: string;
  imageAlt: string;
  paraGraph?: paraGraphProps;
}

const Slider: FunctionComponent<SliderProps> = ({
  imageAlt,
  imageSrc,
  paraGraph,
}) => {
  return (
    <section>
      <Image src={imageSrc} alt={imageAlt} />
      <Paragraph heading={paraGraph?.heading}>{paraGraph?.children}</Paragraph>
    </section>
  );
};

export default Slider;
