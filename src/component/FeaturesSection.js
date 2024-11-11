import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { GoArrowRight } from "react-icons/go";

const FeaturesSection = () => {
  const router = useRouter();
  return (
    <div className='w-full max-w-[94rem] h-auto mx-auto mt-40 flex justify-between items-center '>
      <div className='w-full max-w-7xl min-h-[50rem] p-2 mx-auto '>
        <h1 className='text-center font-bold text-5xl'>Our Features</h1>
        <p className='text-center font-medium text-xl mt-4'>
          iMe’s platform helps create a balanced, energized workplace. With
          personalized well-being guidance, proactive employee risk detection,
          and data privacy at the forefront, iMe enables teams to thrive and
          perform their best every day.
        </p>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col justify-start items-start gap-4'>
            <h2 className='text-center font-bold text-5xl'>For Employers</h2>
            <div className='flex justify-start items-center min-w-max gap-4 mt-8'>
              <Image
                className='h-[22px] w-[22px]'
                src='/Images/featuresTick.svg'
                alt='featuresTick'
                width={300}
                height={300}
              />
              <p className='font-medium text-xl text-slate-500'>
                Frictionless Integration
              </p>
            </div>
            <div className='flex justify-start items-center min-w-max gap-4'>
              <Image
                className='h-[22px] w-[22px]'
                src='/Images/featuresTick.svg'
                alt='featuresTick'
                width={300}
                height={300}
              />
              <p className='font-medium text-xl text-slate-500'>
                Real-time Analytics / Preemptive Tool
              </p>
            </div>
            <div className='flex justify-start items-center min-w-max gap-4'>
              <Image
                className='h-[22px] w-[22px]'
                src='/Images/featuresTick.svg'
                alt='featuresTick'
                width={300}
                height={300}
              />
              <p className='font-medium text-xl text-slate-500'>
                ESG & CSRD Alignment
              </p>
            </div>
            <button
              onClick={() => router.push("/solution/employer")}
              className='font-notoSans font-semibold w-40 h-12 mt-8 text-base flex gap-2 justify-center items-center rounded-xl text-white bg-[#BC1F74]'>
              Read More <GoArrowRight className='w-6 h-8' />
            </button>
          </div>
          <div className='relative '>
            <Image
              src='/Images/employerFeature.svg'
              alt='employerFeature'
              width={1500}
              height={1500}
              className=' w-full h-full relative -top-20 -right-40 z-20'
            />
          </div>
        </div>

        <div className='flex justify-between items-center relative bottom-40'>
          <div className='relative '>
            <Image
              src='/Images/employeeFeature.svg'
              alt='employerFeature'
              width={1500}
              height={1500}
              className=' w-full h-full relative -top-20 -left-40 z-20'
            />
          </div>
          <div className='flex flex-col justify-start items-start gap-4 relative bottom-10 right-28'>
            <h2 className='text-center font-bold text-5xl'>For Employees</h2>
            <div className='flex justify-start items-center gap-4 mt-8'>
              <Image
                className='h-[22px] w-[22px]'
                src='/Images/featuresTick.svg'
                alt='featuresTick'
                width={300}
                height={300}
              />
              <p className='font-medium text-xl text-slate-500'>
                Context-aware AI Coach
              </p>
            </div>
            <div className='flex justify-start items-center gap-4'>
              <Image
                className='h-[22px] w-[22px]'
                src='/Images/featuresTick.svg'
                alt='featuresTick'
                width={300}
                height={300}
              />
              <p className='font-medium text-xl text-slate-500'>
                Gamification & Incentivization
              </p>
            </div>
            <div className='flex justify-start items-center gap-4'>
              <Image
                className='h-[22px] w-[22px]'
                src='/Images/featuresTick.svg'
                alt='featuresTick'
                width={300}
                height={300}
              />
              <p className='font-medium text-xl text-slate-500'>
                Boosted Productivity
              </p>
            </div>
            <button
              onClick={() => router.push("/solution/employee")}
              className='font-notoSans font-semibold w-40 h-12 mt-8 text-base flex gap-2 justify-center items-center rounded-xl text-white bg-[#BC1F74]'>
              Read More <GoArrowRight className='w-6 h-8' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
