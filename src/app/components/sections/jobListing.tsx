import { FunctionComponent } from "react";
import Heading from "../headings";
import Paragraph from "../paragraph";
import { link } from "fs";
import { section } from "../section";
import AnyCTA from "../anyCTA";
import SalaryIcon from "../icons/salary";
import TimeIcon from "../icons/time";

export interface Job {
  title: string;
  description: string;
  link: string;
  jobType: "Full-time" | "Part-time" | "Contract";
  salary: string;
}

export interface JobListingProps extends section {
  availableJobs?: Job[];
}

const JobListing: FunctionComponent<JobListingProps> = ({ availableJobs }) => {
  return (
    <div className="px-2 py-16 flex flex-wrap justify-around">
      {availableJobs && availableJobs.length > 0 ? (
        availableJobs.map((job, index) => (
          <div
            className="relative pl-2 border-2 px-6 py-5 border-lBrown mb-16 md:w-1/4 mr-2 rounded-2xl"
            key={index}
          >
            <Heading size="h2" className="text-xl font-bold  mb-2 line-clamp-2">
              {job.title}
            </Heading>
            <Paragraph className="mb-6 my-5 line-clamp-4">
              {job.description}
            </Paragraph>
            <div className="flex justify-between">
              <div className="">
                <div className="flex gap-3 mb-2">
                  <TimeIcon />
                  <Heading size="h6" className="self-end text-sm">
                    {job.jobType ? job.jobType : "Full-time"}
                  </Heading>
                </div>
                <div className="flex gap-2">
                  <SalaryIcon />
                  <Heading size="h6" className="self-end text-sm">
                    {job.salary ? job.salary : "Negotiable"}
                  </Heading>
                </div>
              </div>
              <AnyCTA
                title={job.title}
                link={job.link}
                type={"link"}
                className="self-center text-white font-bold border-2  border-lBrown  inline  py-2 px-4 mt-4 rounded-xl bg-lBrown hover:bg-white hover:text-lBrown hover:no-underline"
              >
                Learn More
              </AnyCTA>
            </div>
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
