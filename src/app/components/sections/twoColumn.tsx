import { FunctionComponent } from "react";
import { section } from "../section";
import Paragraph, { paraGraphProps } from "../paragraph";
import Picture, { ImageProps } from "../image";

export interface TwoColumnProps extends section {
  image: ImageProps;
  paraGraph?: paraGraphProps;
  imageFirst?: boolean;
}

const TwoColumn: FunctionComponent<TwoColumnProps> = ({
  image,
  paraGraph,
  imageFirst = false,
}) => {
  return (
    <div className="px-4 md:flex md:justify-between py-16 gap-4">
      {!imageFirst ? (
        <div className="mb-6">
          <Paragraph
            heading={paraGraph?.heading}
            headerClassName="text-lg text-yellowish  font-bold mb-4"
          >
            {paraGraph?.children}
          </Paragraph>
        </div>
      ) : (
        ""
      )}

      <div className="min-image-two-col">
        <Picture
          imageSrc={image.imageSrc}
          imageAlt={image.imageAlt}
          width={image.width}
          height={image.height}
          className="object-cover"
        />
      </div>

      {imageFirst ? (
        <div>
          <Paragraph
            heading={paraGraph?.heading}
            headerClassName="mt-6 md:mt-0 text-2xl text-yellowish font-bold mb-4"
          >
            {paraGraph?.children}
          </Paragraph>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TwoColumn;
