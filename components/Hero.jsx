import React from "react";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";
import Image from 'next/image'

const Hero = () => {

  

  return (
    <div className="relative">
      <div className="">
        <Image
          src="/BackGround.png"
          width='1500'
          height='100'
          alt="img"
          className="w-[100%] max-h-[804px] object-cover "
        />
      </div>

      <div className="w-[100%] absolute top-0 left-0 text-[white] flex justify-around gap-[200px] pt-10 px-20 ">
        {/* left column starts here */}
        <div>
        <LeftColumn />
        </div>
        {/* left column ends here */}
       
        {/* right column starts here */}
        <div>
            <RightColumn />
        </div>
        {/* right column ends here */}
      </div>
    </div>
  );
};

export default Hero;
