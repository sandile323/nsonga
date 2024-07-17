import { FunctionComponent } from "react";
import { section } from "../section";
import Paragraph, { paraGraphProps } from "../paragraph";
import Picture, { ImageProps } from "../image";

export interface SliderProps extends section {
  image: ImageProps;
  paraGraph?: paraGraphProps;
}

const Slider: FunctionComponent<SliderProps> = ({ image, paraGraph }) => {
  return (
    <div className="relative h-screen w-screen flex items-end">
      <Picture
        imageSrc={image.imageSrc}
        imageAlt={image.imageAlt}
        width={image.width}
        height={image.height}
        className="w-sreen h-screen object-cover"
      />
      <div className="custom-shadow absolute left-0 bottom-0 w-screen h-screen flex items-center justify-center flex-col pb-10 md:top-0 md:items-start pl-4 pt-8 bg-gradient-to-r from-[#333333] to-[rgba(51, 51, 51, 0)] ">
        <Paragraph
          heading={paraGraph?.heading}
          className="text-2xl md:text-4xl text-olive font-bold"
          headerClassName="text-yellowish font-bold text-4xl md:text-7xl "
        >
          {paraGraph?.children}
        </Paragraph>
      </div>
    </div>
  );
};

export default Slider;
