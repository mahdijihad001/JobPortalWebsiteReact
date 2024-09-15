export default function Hero() {
  return (
   <div className="max-w-[1100px] mx-auto grid grid-cols-2 items-center justify-between py-[100px] max-sm:grid-cols-1 max-sm:px-2 md:px-3 sm:px-3">
        {/* Hero Text*/}
        <div>
          <div className="flex flex-col gap-3">
          <span className="text-6xl font-bold text-black" >One Step</span> <span className="text-6xl font-bold text-black" >Closer To Your </span><span className="dreamJob text-6xl font-bold" >Dream Job</span>
          </div>
          <p className="text-slate-400 mt-3 mb-5" >Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
          <button className="border text-[16px] border-[#7E90FE] px-7 py-2 rounded-[10px] bg-gradient-to-t from-[#7E90FE] to-[#9873FF] text-white font-medium btn">Get Started</button>
        </div>
        {/* Hero Image */}
        <div className="relative">
          <img className="w-full right-0" src="/public/HeroImahe.png" alt="" />
        </div>
   </div>
  );
}
