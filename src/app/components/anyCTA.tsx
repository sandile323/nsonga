import { title } from "process";
import { FunctionComponent } from "react";

interface AnyCTAProps {
  type: "btn" | "link";
  link: string;
  title: string;
  onClick?: () => {};
  children?: any;
}

const AnyCTA: FunctionComponent<AnyCTAProps> = ({
  type,
  link,
  onClick,
  title,
  children,
}) => {
  switch (type) {
    case "btn":
      return (
        <button className="" onClick={onClick} title={title}>
          {children}
        </button>
      );
    case "link":
      return (
        <a href={link} title={title}>
          {children}
        </a>
      );
  }
};

export default AnyCTA;
