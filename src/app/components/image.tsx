import { FunctionComponent } from "react";
//import Image from "next/image"; //for later use next js

export interface ImageProps {
  imageSrc: string;
  imageAlt: string;
  width: string;
  height: string;
  className: string;
}

const Picture: FunctionComponent<ImageProps> = ({
  imageAlt,
  imageSrc,
  width = "400",
  height = "400",
  className = "",
}) => {
  return (
    <img
      className={className}
      src={imageSrc}
      alt={imageAlt}
      width={width}
      height={height}
    />
  );
};

export default Picture;
