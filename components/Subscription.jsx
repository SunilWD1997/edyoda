import React, { useState } from "react";

import { useContext } from "react";
import { rateContext } from "@/pages";

import {RiTimerLine} from 'react-icons/ri';

const Subscription = () => {
const{setRate, rate} = useContext(rateContext)

const[subs, setSubs]=useState(true)
    
  return (
    <div className="w-[100%] flex flex-col  gap-3">


   {/* 12 months expired subscription starts here */}
   <label className="w-[100%] cursor-pointer border-[3px]  rounded-[4px] relative" onClick={()=>{setRate(alert('Sorry, this offer is expired')), setRate(179)}}>
        <input type="radio" className=" peer sr-only" name="pricing" />

        <div className=" max-w-xl rounded-md bg-[#f8f8f8] py-1 px-3  text-gray-200 ring-2 ring-transparent transition-all   ">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <div className="flex gap-4">

              <div className="text-[#BEBEBE] w-[24px] h-[24px] border-[3px] rounded-full flex justify-center items-center">
              <div className="text-[#BEBEBE] w-[13px] h-[13px] bg-[#e4e1e1] rounded-[42%] "></div>

              </div>

                <p className="text-[#94a3b1] font-Roboto font-[600]">
                  12 Months Subscription
                </p>
              </div>

              <div className="text-[#3C4852] flex flex-col items-end">
                <p >
                 <span className="text-[12px] font-Roboto font-[400]"> Total</span> <span className="text-[16px] font-Roboto font-[600]">&#8377;</span> 99
                </p >
                <p className=" font-Roboto text-[12px] font-[400px]"><span>&#8377;</span>8 <span className="text-[#BEBEBE]">/mo</span></p>
              </div>

            </div>
          </div>
        </div>
        {/* recomended block starts here */}
        <div className="absolute top-[-2px] left-[54px] font-Roboto text-[12px] text-[white] bg-[#F77171] inline-block font-[500] px-[30px]  rounded-b-lg ">Offer expired</div>
        {/* recomended block ends here */}
       
      </label>
{/* 12 months expired subscription ends here */}




        {/* 12 months subscription starts here */}
      <label className="w-[100%] cursor-pointer border-[3px]  rounded-[4px] relative" onClick={()=>{setRate(179)}}>
        <input type="radio" className=" peer sr-only" name="pricing" />

        <div className=" max-w-xl rounded-md bg-white py-1 px-3  text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:bg-[#f1fff5] peer-checked:text-[#47BA68] peer-checked:ring-[#47BA68] peer-checked:ring-offset-1">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                  />
                </svg>

                <p className="text-[#3C4852] font-Roboto font-[600]">
                  12 Months Subscription
                </p>
              </div>

              <div className="text-[#3C4852] flex flex-col items-end">
                <p >
                 <span className="text-[12px] font-Roboto font-[400]"> Total</span> <span className="text-[16px] font-Roboto font-[600]">&#8377;</span> 179
                </p >
                <p className=" font-Roboto text-[12px] font-[400px]"><span>&#8377;</span>15 <span className="text-[#BEBEBE]">/mo</span></p>
              </div>

            </div>
          </div>
        </div>
        {/* recomended block starts here */}
        <div className="absolute top-[-2px] left-[54px] font-Roboto text-[12px] text-[white] bg-[#768491] inline-block font-[500] px-[30px]  rounded-b-lg peer-checked:bg-[#47BA68]">Recommended</div>
        {/* recomended block ends here */}
       
      </label>
{/* 12 months subscription ends here */}



{/* 6 months subscription starts here */}

      <label className="w-[100%] cursor-pointer border-[3px]  rounded-[4px]" onClick={()=>{setRate(149)}}>
        <input type="radio" className=" peer sr-only" name="pricing" />

        <div className=" max-w-xl rounded-md bg-white py-1 px-3  text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:bg-[#f1fff5] peer-checked:text-[#47BA68] peer-checked:ring-[#47BA68] peer-checked:ring-offset-1">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                  />
                </svg>

                <p className="text-[#3C4852] font-Roboto font-[600]">
                  6 Months Subscription
                </p>
              </div>

              <div className="text-[#3C4852] flex flex-col items-end">
                <p >
                 <span className="text-[12px] font-Roboto font-[400]"> Total</span> <span className="text-[16px] font-Roboto font-[600]">&#8377;</span> 149
                </p >
                <p className=" font-Roboto text-[12px] font-[400px]"><span>&#8377;</span>25 <span className="text-[#BEBEBE]">/mo</span></p>
              </div>

            </div>
          </div>
        </div>
      </label>

{/* 6 months subscription ends here */}

   
{/* 3 months subscription starts here */}

<label className="w-[100%] cursor-pointer border-[3px]  rounded-[4px]" onClick={()=>{setRate(99)}}>
        <input type="radio" className=" peer sr-only" name="pricing" />

        <div className=" max-w-xl rounded-md bg-white py-1 px-3  text-gray-600 ring-2 ring-transparent transition-all hover:shadow peer-checked:bg-[#f1fff5] peer-checked:text-[#47BA68] peer-checked:ring-[#47BA68] peer-checked:ring-offset-1">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                  />
                </svg>
               

                <p className="text-[#3C4852] font-Roboto font-[600]">
                  3 Months Subscription
                </p>
              </div>

              <div className="text-[#3C4852] flex flex-col items-end">
                <p >
                 <span className="text-[12px] font-Roboto font-[400]"> Total</span> <span className="text-[16px] font-Roboto font-[600]">&#8377;</span> 99
                </p >
                <p className=" font-Roboto text-[12px] font-[400px]"><span>&#8377;</span>33 <span className="text-[#BEBEBE]">/mo</span></p>
              </div>
                 
                </div>
          </div>

        </div>
      </label>

{/* 3 months subscription ends here */}

   

  <div className="h-[2px] bg-[#BEBEBE] mt-1"></div>

  <div className="text-[#3C4852] flex px-6">
    <span className="mr-auto" >Subscription Fee</span>
    <span className="font-[500]">&#8377;</span><span className="font-[500]">18,500</span>
  </div>
   
   {/* limited period alert starts here*/}
   <div className="text-[#DE4313] font-Roboto border-[3px] bg-red-50 border-red-200 rounded-[4px] px-[20px] py-[8px]">
<div className="flex justify-between"><span className="font-[600]">Limited time offer</span> <div className="text-[#3C4852]"><span className="font-[500]">- &#8377;</span><span className="font-[500]">{18500 - rate }</span> </div></div>
  
  <div className="flex items-center gap-1 mt-1"> <RiTimerLine className="text-[24px]"/>  <span className="font-[400] ">offer valid till 25th March 2023</span></div>
   </div>
   {/* limited period alert ends here*/}


   {/* sub_total price starts here */}
<div className="text-[black] flex px-[20px]"> <span className="font-[700]">Total</span> <span> {`( Incl. of 18% GST)`}</span>  <span className="ml-auto font-[700] text-[24px]">&#8377;</span><span className="font-[700] text-[24px]">{rate}</span></div>
   {/* sub_total price ends here */}

    </div>
  );
};

export default Subscription;
