import { FunctionComponent } from "react";
import Heading, { HeadingProps } from "./headings";

export interface paraGraphProps {
  heading?: HeadingProps;
  children?: any;
  className?: string;
  headerClassName?: string;
}
const Paragraph: FunctionComponent<paraGraphProps> = ({
  heading,
  children,
  className,
  headerClassName,
}) => {
  return (
    <>
      {heading ? (
        <Heading size={heading.size} className={headerClassName}>
          {heading.children}
        </Heading>
      ) : null}
      <p className={`whitespace-pre-line ${className ?? ""}`}>{children}</p>
    </>
  );
};

export default Paragraph;
