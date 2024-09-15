import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-700 pt-[90px] pb-[90px]">
      <div className="max-w-[1100px] mx-auto text-white ">
        <div className="grid gap-4  max-sm:grid-cols-1 sm:grid-cols-1 max-sm:pl-[20px] md:pl-[20px] sm:pl-[20px] lg:grid-cols-6 md:grid-cols-3">
            {/* Grid 1 */}
          <div className="grid gap-3 lg:col-span-2">
            <h1 className="font-bold text-2xl">CareerHub</h1>
            <p className="font-normal text-blue-200">
              There are many variations of <br /> passages of Lorem Ipsum , but the <br />
              majority have suffered alteration  <br />in some form.
            </p>
            <div className="flex items-center gap-4">
              <div className="bg-white w-[35px] h-[35px] rounded-[100%] flex items-center justify-center text-[#4267B2]">
                <FaFacebookF />
              </div>
              <div className="bg-white w-[35px] h-[35px] rounded-[100%] flex items-center justify-center text-[#1DA1F2]">
                <FaTwitter />
              </div>
              <div className="bg-white w-[35px] h-[35px] rounded-[100%] flex items-center justify-center text-[#F77737]">
                <FaInstagram />
              </div>
            </div>
          </div>
          {/* Grid 2 */}
          <div className="grid gap-3"> 
          <h1 className="font-bold text-2xl">Company</h1>
            <Link className="font-normal text-blue-200">About Us</Link>
            <Link className="font-normal text-blue-200">Work</Link>
            <Link className="font-normal text-blue-200">Latest News</Link>
            <Link className="font-normal text-blue-200">Careers</Link>
          </div>
          {/* Grid 3 */}
          <div className="grid gap-3"> 
          <h1 className="font-bold text-2xl">Product</h1>
            <Link className="font-normal text-blue-200">Prototype</Link>
            <Link className="font-normal text-blue-200">Plans & Pricing</Link>
            <Link className="font-normal text-blue-200">Customers</Link>
            <Link className="font-normal text-blue-200">Integrations</Link>
          </div>
          {/* Grid 4 */}
          <div className="grid gap-3"> 
          <h1 className="font-bold text-2xl">Support</h1>
            <Link className="font-normal text-blue-200">Help Desk</Link>
            <Link className="font-normal text-blue-200">Sales</Link>
            <Link className="font-normal text-blue-200">Become a Partner</Link>
            <Link className="font-normal text-blue-200">Developers</Link>
          </div>
          <div className="grid gap-3"> 
          <h1 className="font-bold text-2xl">Contact</h1>
            <Link className="font-normal text-blue-200">524 Broadway , NYC</Link>
            <Link className="font-normal text-blue-200">+1 777 - 978 - 5570</Link>
          </div>



        </div>
        <hr className="mt-[60px]" />
        <div className="flex items-center justify-between mt-[30px] max-sm:px-[30px] sm:px-[30px] ">
            <div className="text-gray-400 flex items-center">&#64;2023 CareerHub. All Rights Reserved</div>
            <div className="text-gray-400">Powered by CareerHub</div>
        </div>
      </div>
    </footer>
  );
}
