import React from "react";
import Image from "next/image";

const EmployeProductivitySection = () => {
  return (
    <div className='w-full  h-auto flex justify-center pt-20 '>
      <div className='w-2/3 h-full flex  gap-40'>
        <div className='w-3/6 flex items-center'>
          <Image
            src='/Images/Screen 2.svg'
            alt='GFG logo imported from public directory'
            width={100}
            height={100}
            className='w-[16.875rem] h-[21.5rem] z-10'
          />
          <Image
            src='/Images/Screen 1.svg'
            alt='GFG logo imported from public directory'
            width={100}
            height={100}
            className='w-[18.188rem] h-[39.375rem] relative -left-12'
          />
        </div>
        <div className='flex h-full flex-col gap-10  w-3/6 pt-32'>
          <h1 className='font-semibold text-5xl leading-[50px] '>
            Boosted <br /> Productivity
          </h1>
          <p className='font-medium text-xl leading-[33px] w-5/6'>
            iMe’s AI solution improves employee productivity by reducing stress
            and increasing engagement. Personalized healthy activities aligned
            with job demands increase worker motivation and efficiency,
            resulting in a more fulfilling and profitable workday.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeProductivitySection;
