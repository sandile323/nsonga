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
}

export interface JobListingProps extends section {
  availableJobs?: Job[];
}

const JobListing: FunctionComponent<JobListingProps> = ({ availableJobs }) => {
  return (
    <div className="px-2 py-16">
      {availableJobs && availableJobs.length > 0 ? (
        availableJobs.map((job, index) => (
          <div
            className="relative pl-2 border-l-4 border-olive custom-w-job mb-16"
            key={index}
          >
            <Heading
              size="h2"
              className="text-xl font-bold text-yellowish mb-2"
            >
              {job.title}
            </Heading>
            <Paragraph className="mb-6">{job.description}</Paragraph>
            <AnyCTA
              title={job.title}
              link={job.link}
              type={"link"}
              className=" border-2  border-olive  inline  py-2 px-4 mt-4"
            >
              Learn More
            </AnyCTA>
          </div>
        ))
      ) : (
        <Paragraph className="mb-4">
          We currently have no job listings.
        </Paragraph>
      )}
    </div>
  );
};

export default JobListing;
