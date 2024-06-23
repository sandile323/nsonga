import { FunctionComponent } from "react";
import { section } from "../section";
import Image from "next/image";
import Paragraph, { paraGraphProps } from "../paragraph";

export interface TwoColumnProps extends section {
  imageSrc: string;
  imageAlt: string;
  paraGraph?: paraGraphProps;
}

const TwoColumn: FunctionComponent<TwoColumnProps> = ({
  imageSrc,
  imageAlt,
  paraGraph,
}) => {
  return (
    <section>
      <Image src={imageSrc} alt={imageAlt} />
      <div>
        <Paragraph heading={paraGraph?.heading}>
          {paraGraph?.children}
        </Paragraph>
      </div>
    </section>
  );
};

export default TwoColumn;
