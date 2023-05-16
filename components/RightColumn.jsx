import React from "react";
import Image from "next/image";
import Subscription from "./Subscription";

const RightColumn = ({setPrice}) => {
  return (
    <div className="bg-[white] font-Roboto rounded px-4 pt-5 pb-2 flex flex-col items-center gap-4">
      <div className="flex justify-around  w-full">
        <div className="flex flex-col items-center">
          <span className="text-[25px] font-medium text-center leading-[40px] rounded-[50%] bg-[#0096FF] w-[40px] h-[40px]">
            1
          </span>
          <span className="text-[black]">Sign Up</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[25px] font-medium text-center leading-[40px] rounded-[50%] bg-[#0096FF] w-[40px] h-[40px]">
            2
          </span>
          <span className="text-[black]">Subscribe</span>
        </div>
      </div>

      <h2 className="text-[black] text-[24px] font-semibold">
        Select your subscription plan
      </h2>

{/* Subscription plans and radio buttons starts here */}
<Subscription setPrice={setPrice}/>

{/* Subscription plans and radio buttons ends here */}


      {/* Cancel and Proceed to pay button starts here */}
      <div className="flex gap-5">
        <button className="w-[230px]  text-[#F77171]  border-2 border-[#F77171] py-[10px] font-bold rounded hover:bg-[#F77171] hover:text-[white]">
          CANCEL
        </button>
        <button className="w-[230px] text-[white] border-2 border-[#47BA68] py-[10px] font-bold bg-[#47BA68] rounded hover:bg-[white] hover:text-[#47BA68]">
          PROCEED TO PAY
        </button>
      </div>
      {/* Cancel and Proceed to pay button ends here */}

      {/* razorpay image starts here */}
      <Image
        src="/razerpay.png"
        width="150"
        height="100"
        alt="razorpay"
        className="self-start"
      />
      {/* razorpay image ends here */}
      <div></div>
    </div>
  );
};

export default RightColumn;
