import { FunctionComponent } from "react";
import Heading from "../headings";
import Paragraph from "../paragraph";
import { link } from "fs";
import { section } from "../section";
import AnyCTA from "../anyCTA";

export interface Job {
  title: string;
  description: string;
  link: string;
  shortDescription: string;
}

export interface JobListingProps extends section {
  availableJobs?: Job[];
}

const JobListing: FunctionComponent<JobListingProps> = ({ availableJobs }) => {
  return (
    <>
      {availableJobs && availableJobs.length > 0
        ? availableJobs.map((job, index) => (
            <div key={index}>
              <Heading size="h2">{job.title}</Heading>
              <Paragraph>{job.shortDescription}</Paragraph>
              <AnyCTA title={job.title} link={job.link} type={"link"}>
                Learn More
              </AnyCTA>
            </div>
          ))
        : null}
    </>
  );
};

export default JobListing;
