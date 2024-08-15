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
      <div className="px-4 py-16 custom-w-job2">
        <Heading size="h2" className="text-xl font-bold text-yellowish mb-4">
          {job.title}
        </Heading>
        <Paragraph className="mb-6">{job.description}</Paragraph>
        <AnyCTA
          title={job.title}
          link={job.link}
          type={"link"}
          className=" border-2  border-olive  inline  py-2 px-4 mt-4"
        >
          Apply here
        </AnyCTA>
      </div>
    </>
  );
};

export default JobCard;
