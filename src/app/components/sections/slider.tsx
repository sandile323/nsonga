import { FunctionComponent } from "react";
import { section } from "../section";
import Paragraph, { paraGraphProps } from "../paragraph";
import Picture, { ImageProps } from "../image";

export interface SliderProps extends section {
  image: ImageProps;
  paraGraph?: paraGraphProps;
}

const Slider: FunctionComponent<SliderProps> = ({
  image,
  paraGraph,
}) => {
  return (
    <div>
      <Picture imageSrc={image.imageSrc} imageAlt={image.imageAlt} width={image.width} height={image.height} />
      <Paragraph heading={paraGraph?.heading}>{paraGraph?.children}</Paragraph>
    </div>
  );
};

export default Slider;
