import { useEffect, useState } from "react";
import FeaturedItem from "./FeaturedItem";


export default function Featured() {

    const [jobs , setJobs] = useState([]);
    const [dataLength , setDataLength] = useState(7);

    useEffect( () =>{
        fetch("/Data/Jobs.json")
        .then(item => item.json())
        .then(data => setJobs(data));
    } ,[])

  return (
    <div className="max-w-[1100px] mx-auto py-[50px] md:px-[15px] max-sm:px-4 sm:px-4">
        <div className="text-center" >
        <h1 className="text-7xl font-bold mb-5">Featured Jobs</h1>
        <p className="text-[20px] text-slate-500">
        Explore thousands of job opportunities with all the information you need. Its your future
        </p>
        </div>

    <div className="mt-5 grid grid-cols-2 lg:gap-[40px] max-sm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {
            jobs.slice(1 , dataLength).map(job => (
                <FeaturedItem key={job.id} job={job} />
            ))
        }
        
    </div>
    <div className={`mt-[25px] flex items-center justify-center ${dataLength === jobs.length && "hidden"}`} > 
        <button onClick={() => setDataLength(jobs.length)} className="border text-[16px] border-[#7E90FE] px-7 py-2 rounded-[10px] bg-gradient-to-t from-[#7E90FE] to-[#9873FF] text-white font-medium btn">See All Jobs</button>
    </div>
    </div>
  )
}
