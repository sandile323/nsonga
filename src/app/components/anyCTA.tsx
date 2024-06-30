import { title } from "process";
import { FunctionComponent } from "react";

interface AnyCTAProps {
  type: "btn" | "link";
  link: string;
  title: string;
  onClick?: () => {};
  children?: any;
  className?: string;
}

const AnyCTA: FunctionComponent<AnyCTAProps> = ({
  type,
  link,
  onClick,
  title,
  children,
  className,
}) => {
  switch (type) {
    case "btn":
      return (
        <button className="" onClick={onClick} title={title}>
          {children}
        </button>
      );
    case "link":
      return link.includes("indeed") ? (
        <a href={link} title={title} className={className} target="_blank">
          {children}
        </a>
      ) : (
        <a href={link} title={title} className={className}>
          {children}
        </a>
      );
  }
};

export default AnyCTA;
