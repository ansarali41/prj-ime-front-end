import React from "react";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

const EmployeContextSection = () => {
  return (
    <div className='w-full  h-auto flex justify-center items-center '>
      <div className='w-2/3 h-full flex  gap-8 py-16'>
        <div className='flex h-full flex-col gap-10  w-1/2 pt-32'>
          <h1 className='font-semibold text-5xl leading-[50px] '>
            Context-aware <br /> AI Coach
          </h1>
          <p className='font-medium text-xl leading-[33px] w-5/6'>
            iMe&apos;s AI coach is a context-aware, providing personalized
            well-being solution that reflects real-time data such as workload,
            schedule, and personal preferences. Our personalized approach
            guarantees that well-being support is timely, pertinent, and
            tailored to each employee&apos;s specific circumstances, promoting a
            work-life balance.
          </p>
        </div>
        <div className='w-1/2 '>
          <Image
            src='/Images/contextCvrImg.svg'
            alt='GFG logo imported from public directory'
            width={100}
            height={100}
            className='w-[32.625rem] h-full'
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeContextSection;
