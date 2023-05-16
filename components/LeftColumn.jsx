import Image from "next/image";
import React from "react";
import { useContext } from "react";
import { rateContext } from "@/pages";


const LeftColumn = () => {

  const  {rate} = useContext(rateContext);
console.log(rate)
  return (
    <div className="mt-5 font-Raleway" >
      <h1 className="text-[56px] font-[600] leading-[60px]">
        Access curated courses worth <br /> <span>&#8377;</span>
        <span className="line-through text-[red]">
          
          <span className="text-[white]"> 18,500 </span>
        </span>
        at just <span> &#8377;</span> <span className="text-[#0096FF]">{rate}</span> per year!
      </h1>

      <div className="pt-12 flex flex-col gap-10">
        {/* Open book or courses starts here */}
        <div className="flex items-center gap-10">
          <Image src="/book.png" width="50" height="100" alt="openBook" />
          <div className="text-[32px]">
            <span className=" text-[#0096FF]">100+</span> Job relevant courses
          </div>
        </div>
        {/* Open book or courses ends here */}

        {/* hours of content starts here */}
        <div className="flex items-center gap-10">
          <Image src="/clock.png" width="50" height="100" alt="clock" />
          <div className="text-[32px]">
            <span className=" text-[#0096FF]">20,000+</span> Hours of content
          </div>
        </div>
         {/* hours of content ends here */}

         {/* Exclusive webinar starts here */}
        <div className="flex items-center gap-10">
          <Image src="/live.png" width="50" height="100" alt="openBook" />
          <div className="text-[32px]">
            <span className=" text-[#0096FF]">Exclusive</span> Webinar access
          </div>
        </div>
         {/* Exclusive webinar ends here */}

         {/* Scholarship starts here */}
        <div className="flex items-center gap-10">
          <Image src="/scholar.png" width="50" height="100" alt="openBook" />
          <div className="text-[32px]">
             Sholarship worth<span className=" text-[#0096FF]"><span> &#8377;</span>94,500</span>
          </div>
        </div>
         {/* Exclusive webinar ends here */}

         {/* Scholarship starts here */}
        <div className="flex items-center gap-10">
          <Image src="/ads.png" width="50" height="100" alt="openBook" />
          <div className="text-[32px]">
          <span className=" text-[#0096FF]">Ad Free</span> learning experience
          </div>
        </div>
         {/* Exclusive webinar ends here */}
      </div>
    </div>
  );
};

export default LeftColumn;
