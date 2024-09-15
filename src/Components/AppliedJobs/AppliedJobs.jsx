import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredJobApplication } from "../Utility/LocalStorage";

export default function AppliedJobs() {
  const JobsData = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJob, setDisplayJob] = useState([]);

  useEffect(() => {
    const StoredJobApplication = getStoredJobApplication();

    if (JobsData.length > 0) {
      const jobapplied = JobsData.filter((job) =>
        StoredJobApplication.includes(job.id)
      );
      setAppliedJobs(jobapplied);
      setDisplayJob(jobapplied);
    }
  }, []);

  const HandleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJob(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJob(remoteJobs);
    } else if (filter === "onsite") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJob(remoteJobs);
    }
  };
  // Onsite
  return (
    <div className="max-w-[1100px] mx-auto">
      <div className="text-center pt-[100px] pb-[100px]">
        <h1 className="font-bold text-7xl">
          Applied Jobs : {appliedJobs.length}
        </h1>
      </div>
      {/* Job Filter */}
      <div className="flex justify-end mb-3 mr-4">
        <details className="dropdown">
          <summary className="btn m-1">Filter Job</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={() => HandleJobsFilter("all")}>
              <a>All</a>
            </li>
            <li onClick={() => HandleJobsFilter("remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => HandleJobsFilter("onside")}>
              <a>Onside</a>
            </li>
          </ul>
        </details>
      </div>

      {/* Applied All Card */}
      <div className="grid grid-cols-1 gap-4 mb-[30px] max-sm:px-2 md:px-3 sm:px-2">
        {/* Applied Item */}
        {displayJob.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-4 justify-between items-center AppliedJobsShadow max-sm:grid-cols-1 max-sm:gap-3"
          >
            {/* img */}
            <div className="w-[150px] h-[150px] rounded-[10px] bg-slate-400 flex items-center justify-center">
              <img src={item.logo} alt="" />
            </div>
            {/* Info */}
            <div className="col-span-2 flex flex-col">
              <h1 className="font-bold text-[17px]">{item.job_title}</h1>
              <h3 className="text-slate-400 text-[20px]">
                {item.company_name}
              </h3>
              <div className="flex gap-5 mt-[8px] mb-[8px]">
                <button className="px-3 py-1 font-extrabold border rounded border-[#7E90FE] btn text-[#7E90FE]">
                  {item.remote_or_onsite}
                </button>
                <button className="px-3 py-1 font-extrabold border rounded border-[#7E90FE] btn text-[#7E90FE]">
                  {item.job_type}
                </button>
              </div>
              <div className="flex gap-5 mt-[10px] max-sm:flex-col">
                <div className="flex gap-2 text-slate-500">
                  <img
                    className="w-[20px] h-[20px]"
                    src="/public/location2.png"
                    alt=""
                  />
                  <h2 className="">{item.location}</h2>
                </div>
                <div className="flex gap-2 text-slate-500">
                  <img
                    className="w-[20px] h-[20px]"
                    src="/public/money.png"
                    alt=""
                  />
                  <h2>Salary : {item.salary}</h2>
                </div>
              </div>
            </div>
            {/* Button */}
            <div className="flex justify-end mr-[30px] max-sm:justify-center">
              <button className="bg-gradient-to-tr from-[#7E90FE] to-[#9873FF] bg-opacity-20 flex flex-col gap-[15px] btn pr-[15px] rounded-[7px] text-white">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
