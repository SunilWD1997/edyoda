import React from "react";
import Link from "next/link";
import Image from "next/image";

import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <header className=" w-[100%]">
      <nav className="h-[72px] max-w-[1520px] mx-auto flex items-center justify-between font-Raleway">
        {/* left column starts here */}
        <div className="flex  gap-12">
          {/*Site logo starts here */}
          <Link href="/">
            <Image src="/logo.png" width="150" height="100" alt="logo" />
          </Link>
          {/*Site logo ends here */}

          {/* Courses menu starts here */}
          <Link href="/" className="flex items-center gap-1 font-medium ">
            <span className="text-[16px] ">Courses</span>
            <MdKeyboardArrowDown className="text-xl" />
          </Link>
          {/*Courses menu ends here */}

          {/* Courses menu starts here */}
          <Link href="/" className="flex items-center gap-1 font-medium ">
            <span className="text-[16px] ">Programs</span>
            <MdKeyboardArrowDown className="text-xl" />
          </Link>
          {/*Courses menu ends here */}
        </div>
        {/* left column ends here */}

        {/* right columns starts here */}
        <div className="flex items-center gap-12">
          {/* search logo starts here */}
          <AiOutlineSearch className="text-[25px]" />
          {/* search logo starts here */}

          {/* LogIn starts here */}
          <Link href="/" className="font-bold">Log in</Link>
          {/* LogIn ends here */}

          {/* Join now button starts here */}
          <button className="text-[white] px-10 py-2 rounded-[50px] font-bold bg-gradient-to-r from-[#0048FF] to-[#0096FF]">
            <Link href="/">JOIN NOW</Link>
          </button>
          {/* Join now button  ends here */}

        </div>
        {/* right columns ends here */}
      </nav>
    </header>
  );
};

export default Header;
