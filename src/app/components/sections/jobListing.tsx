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
    <div className="px-2 py-16 flex flex-wrap justify-around ">
      {availableJobs && availableJobs.length > 0 ? (
        availableJobs.map((job, index) => (
          <div
            className="relative pl-2 border-2 px-6 py-5 border-lBrown mb-16 md:w-1/4 mr-2 rounded-2xl"
            key={index}
          >
            <Heading size="h2" className="text-xl font-bold  mb-2">
              {job.title}
            </Heading>
            <Paragraph className="mb-6 my-5 line-clamp-4">
              {job.description}
            </Paragraph>
            <AnyCTA
              title={job.title}
              link={job.link}
              type={"link"}
              className=" text-white font-bold border-2  border-olive  inline  py-2 px-4 mt-4 rounded-xl bg-lBrown object-right-bottom"
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
