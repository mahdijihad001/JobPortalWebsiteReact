/* eslint-disable react/prop-types */
import JobCard from "./JobCard";

const JobDetailsInfo = ({job}) => {

  const {job_description , job_responsibility , educational_requirements , experiences } = job;

  return (
    <section>
      <div className="max-w-[1100px] mx-auto pt-[50px] pb-[67px] detailsPage grid md:px-3 sm:px-3 lg:grid-cols-3 gap-6 max-sm:grid-cols-1 sm:grid-cols-1 max-sm:px-2 md:grid-cols-3">
        <div className="col-span-2 max-sm:col-span-1">
          <h1 className="text-[18px] font-normal">
            <span className="font-bold text-[25px]">Job Description :</span>
             {job_description}
          </h1>
          <h2 className="text-[18px] font-normal">
            <span className="font-bold text-[25px]">Job Responsibility: </span>
       {job_responsibility}
          </h2>
          <h3 className="font-bold text-[25px]" >Educational Requirements:</h3>
          <p className="text-[18px] font-normal">{educational_requirements}</p>
          <h4 className="font-bold text-[25px]">Experiences:</h4>
          <h3 className="text-[18px] font-normal">{experiences}</h3>
        </div>
        {/* Job Card */}
        <JobCard job={job} />
      </div>
    </section>
  );
};

export default JobDetailsInfo;


