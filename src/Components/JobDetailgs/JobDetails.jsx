import { useLoaderData, useNavigate, useParams } from "react-router";
import JobDetailsInfo from "./JobDetailsInfo";

export default function JobDetailgs() {
  const Jobs = useLoaderData();
const {id} = useParams();
const idInt = parseInt(id);

const job = Jobs.find(item => item.id === idInt);

  const posative = useNavigate();

  return (
    <div className="max-w-[1100px] mx-auto">
      <div className="bgLinear">
        <div className="max-w-[1100px] mx-auto pt-[80px] pb-[80px] ">
          <h1 className="text-center text-7xl font-bold text-black">
            Job Details
          </h1>
      </div>
      </div>
        <JobDetailsInfo job={job} />
      <div className="flex items-center justify-center pb-[40px]">
        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] btn text-[#7E90FE]" onClick={() => posative(-1)} >
          Back Page
        </button>
      </div>
    </div>
  );
}
