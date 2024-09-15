import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("/Data/Category.json")
      .then((item) => item.json())
      .then((data) => setCategory(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setCategory([]); // Set as empty array if error occurs
      });
  }, []);

  return (
    <div className="max-w-[1100px] mx-auto mb-[40px] max-sm:px-2">
      <div className="text-center">
        <h1 className="text-7xl font-bold mb-5">Job Category List</h1>
        <p className="text-[20px] text-slate-500">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="mt-[30px] grid grid-cols-4 gap-4 max-sm:grid-cols-1 sm:grid-cols-2 sm:px-[10px] md:col-span-4 lg:grid-cols-4">
        {category.length > 0 ? (
          category.slice(1, 5).map((data) => (
            <div
              key={data.id}
              className="bg-[#7E90FE] bg-opacity-15 rounded-[10px] p-[25px]"
            >
              <div className="bg-[#7E90FE] bg-opacity-35 w-[60px] h-[60px] flex items-center justify-center rounded-[10px] mb-4 ">
                <img  src={data.image} alt={data.jobName} />
              </div>
              <h1 className="font-bold text-[20px] text-black">
                {data.jobName}
              </h1>
              <p className="text-slate-400">{data.jobVacancy} Jobs Available</p>
            </div>
          ))
        ) : (
          <p>Loading job categories...</p>
        )}
      </div>
    </div>
  );
};

export default Category;
