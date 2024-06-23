import { FunctionComponent } from "react";
import Heading, { HeadingProps } from "./Headings";

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
        <Heading size={heading.size} children={heading.children} />
      ) : null}
      <p>{children}</p>
    </>
  );
};

export default Paragraph;
