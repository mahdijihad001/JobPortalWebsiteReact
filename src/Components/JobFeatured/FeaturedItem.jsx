import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const FeaturedItem = ({job}) =>{

    const {id, logo , job_title , company_name , remote_or_onsite , location , job_type , salary } = job;
 
    return(
        <section className="FeaturedJobItem lg:w-[540px]  md:p-4 lg:h-[320px] p-10 pb-6">
            <img className="w-[100px] h-[70px] mb-2" src={logo} alt="" />
            <h1 className="text-xl font-bold mb-2">{job_title}</h1>
            <h3 className="text-[14px] font-medium mb-3">{company_name}</h3>
            <div className="jobButton flex gap-4 mt-2 mb-2">
                <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] btn text-[#7E90FE]">{remote_or_onsite}</button>
                <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] btn text-[#7E90FE]">{job_type}</button>
            </div>
            <div className="flex gap-3 md:gap-2 mb-4 mt-3">
                <div className="location flex gap-2">
                    <img className="w-[30px] h-[30px]" src="/public/location2.png" alt="" />
                    <p>{location}</p>
                </div>
                <div className="location flex gap-2">
                    <img className="w-[30px] h-[30px]" src="/public/money.png" alt="" />
                    <p>Salary : Salary : {salary}</p>
                </div>
            </div>
            <Link className="border text-[16px] border-[#7E90FE] px-7 py-2 rounded-[10px] bg-gradient-to-t from-[#7E90FE] to-[#9873FF] text-white font-medium btn" to={`/jobs/${id}`} >View Details</Link>
        </section>
    )   
}

export default FeaturedItem;