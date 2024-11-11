import Image from "next/image";
import React from "react";

const ApproachSection = () => {
  return (
    <div className='w-full max-w-[90rem] h-auto mx-auto mt-60 flex justify-between items-center '>
      <div className='w-[40rem]'>
        <h1 className='text-7xl inline font-bold'>
          Well-being in motion:{" "}
          <span className='inline-block bg-theme-gradient text-transparent bg-clip-text'>
            A circular
          </span>
          <span className='inline-block bg-theme-gradient text-transparent bg-clip-text'>
            approach
          </span>
        </h1>
        <p className='text-xl leading-10 mt-8'>
          Empower your workforce with iMe&apos;s AI-driven well-being platform.
          Designed as a dynamic circular solution, our platform not only
          supports employee well-being but also allows employers to monitor
          real-time updates and make informed decisions.  By focusing on
          tailored well-being journeys, we aim to reduce stress and boost
          productivity, improving well-being both inside and outside the
          workplace.
        </p>
      </div>
      <div className=''>
        <Image
          src='/Images/ApprochSection.png'
          alt='Approach Section'
          width={741}
          height={610}
          className=''
        />
      </div>
    </div>
  );
};

export default ApproachSection;
