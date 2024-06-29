import { FunctionComponent } from "react";
import Heading from "../headings";
import Paragraph from "../paragraph";
import AnyCTA from "../anyCTA";
import { Job } from "./jobListing";
import { section } from "../section";

export interface JobProps extends section {
  job: Job;
}
const JobCard: FunctionComponent<JobProps> = ({ job }) => {
  return (
    <>
      <div>
        <Heading size="h2">{job.title}</Heading>
        <Paragraph>{job.description}</Paragraph>
        <AnyCTA title={job.title} link={job.link} type={"link"}>
          Learn More
        </AnyCTA>
      </div>
    </>
  );
};

export default JobCard;
