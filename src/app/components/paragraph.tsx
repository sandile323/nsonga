import { FunctionComponent } from "react";
import Heading, { HeadingProps } from "./headings";

export interface paraGraphProps {
  heading?: HeadingProps;
  children?: any;
}
const Paragraph: FunctionComponent<paraGraphProps> = ({
  heading,
  children,
}) => {
  return (
    <>
      {heading ? (
        <Heading size={heading.size}>{heading.children}</Heading>
      ) : null}
      <p>{children}</p>
    </>
  );
};

export default Paragraph;
