import { FunctionComponent } from "react";
import Heading from "./headings";
import Paragraph from "./paragraph";
import AnyCTA from "./anyCTA";
import { Job } from "./sections/jobListing";

const JobListing: FunctionComponent<Job> = ({ title, description, link }) => {
  return (
    <>
      <div>
        <Heading size="h2">{title}</Heading>
        <Paragraph>{description}</Paragraph>
        <AnyCTA title={title} link={link} type={"link"}>
          Learn More
        </AnyCTA>
      </div>
    </>
  );
};

export default JobListing;
