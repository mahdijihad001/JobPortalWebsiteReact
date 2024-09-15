import { Link, NavLink } from "react-router-dom";
import { FaChartBar } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const route = [
    {id : 1 ,path : "/" , name : "Home"},
    {id : 2 ,path : "/Statistics" , name : "Statistics"},
    {id : 3 ,path : "/Applied" , name : "Applied Job"},

  ]


  return (
    <header className="py-3 bg-white shadow-md max-sm:px-2 sm:px-3">
      <div className="max-w-[1100px] mx-auto flex items-center justify-between relative">
        <div className="flex items-center gap-2">
          <span
            onClick={() => setOpen(!open)}
            className="text-4xl lg:hidden md:hidden max-sm:block sm:block w-[40px]"
          >
            {open === true ? (
              <IoCloseSharp className="text-5xl" />
            ) : (
              <FaChartBar />
            )}
          </span>
          <h1 className="lg:text-2xl sm:text-3xl max-sm:text-3xl font-bold">CareerHub</h1>
        </div>
        <nav className="max-sm:hidden sm:hidden md:block">
          <ul className="flex gap-5 text-[#7E90FE] text-[16px]">
            {
              route.map(item => (
                <NavLink key={item.id} to={item.path} >{item.name}</NavLink>
              ))
            }
          </ul>
        </nav>
        <div>
          <Link to={"/Statistics"} className="border text-[16px] border-[#7E90FE] px-7 py-2 rounded-[10px] bg-gradient-to-t from-[#7E90FE] to-[#9873FF] text-white font-medium btn">
            Start Applying
          </Link>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`w-[350px] bg-slate-600 fixed h-[100vh] pt-[40px] duration-500 pl-[15px] ${open === true ? "left-0" : "left-[-120%]"} `}>
        <ul className="flex font-bold text-[#7E90FE] text-[30px] flex-col gap-[40px]">
        {
              route.map(item => (
                <NavLink key={item.id} to={item.path} >{item.name}</NavLink>
              ))
            }
        </ul>
      </div>
    </header>
  );
}
