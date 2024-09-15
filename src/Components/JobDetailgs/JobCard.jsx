
/* eslint-disable react/prop-types */
import { BiPhone } from "react-icons/bi";
import { CiDollar } from "react-icons/ci";
import { IoFileTrayOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/LocalStorage";

export default function JobCard({job}) {

  const {id ,salary , job_title , contact_information} = job;

    const idInt = parseInt(id);

  const HandleTost = () =>{
    saveJobApplication(idInt);
    toast("Apply Successfully");
  }

  return (
    <div className="bg-gradient-to-tr from-[#7E90FE] to-[#9873FF] bg-opacity-20 flex flex-col gap-[15px] pt-[40px] pb-[25px] pl-[15px] pr-[15px] rounded-[7px] text-white">
    <h1 className="font-bold text-xl text-white">Job Details</h1>
    <hr />
    {/* Job Card Item */}
    <div className="">
      <div className="flex items-center gap-[15px] text-[18px]">
      <h2>{<CiDollar/>}</h2>
        <h2>
          <span>Salary :</span> {salary} (Per Month)
        </h2>
      </div>
      <div className="flex items-center gap-[15px] text-[18px]">
              <h2>{<IoFileTrayOutline />}</h2>
        <h2>
          <span>Job Title : </span> {job_title}
        </h2>
      </div>
    </div>
    <h1 className="font-bold text-xl text-white">Contact Information</h1>
      <hr />
    {/* Job Card item */}

    <div className="">
      <div className="flex items-center gap-[15px] text-[18px]">
      <h2>{<BiPhone/>}</h2>
        <h2>
          <span>Phone : </span>{contact_information.phone}
        </h2>
      </div>
      <div className="flex items-center gap-[15px] text-[18px]">
              <h2>{<MdEmail/>}</h2>
        <h2>
          <span>Email : </span> {contact_information.email}
        </h2>
      </div>
      <div className="flex items-center gap-[15px] text-[18px]">
              <h2>{<FaLocationDot />}</h2>
        <h2>
          <span>Address : </span> {contact_information.address}
        </h2>
      </div>
    </div>

      <button onClick={HandleTost} className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] btn text-[#7E90FE]" >Apply Now</button>
      <ToastContainer />

  </div>
  )
}
