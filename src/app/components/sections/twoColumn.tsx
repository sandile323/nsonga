import { FunctionComponent } from "react";
import { section } from "../section";
import Paragraph, { paraGraphProps } from "../paragraph";
import Picture, { ImageProps } from "../image";

export interface TwoColumnProps extends section {
  image: ImageProps;
  paraGraph?: paraGraphProps;
}

const TwoColumn: FunctionComponent<TwoColumnProps> = ({
  image,
  paraGraph,
}) => {
  return (
    <div>
      <Picture imageSrc={image.imageSrc} imageAlt={image.imageAlt} width={image.width} height={image.height} />
      <div>
        <Paragraph heading={paraGraph?.heading}>
          {paraGraph?.children}
        </Paragraph>
      </div>
    </div>
  );
};

export default TwoColumn;
