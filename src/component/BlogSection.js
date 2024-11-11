import Image from "next/image";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
const BlogSection = () => {
  return (
    <div className='relative'>
      {/* <div className='h-96 w-[40rem] bg-[#C42F97] absolute rounded-full blur-[16rem] bottom-0 left-0'></div>
      <div className='h-96 w-[40rem] bg-[#C42F97] absolute rounded-full blur-[16rem] top-0 right-0'></div> */}
      <div className='w-full max-w-[94rem] h-auto mx-auto mt-20 flex justify-between items-center relative z-20'>
        <div className='w-full max-w-7xl py-20 mx-auto '>
          <div className='flex flex-col justify-center items-center'>
            <p className='uppercase text-center rounded-[10px] text-sm bg-white mb-4 w-[8.5rem] p-2'>
              Latest Blogs
            </p>
            <h1 className='text-center font-bold text-5xl'>Learn & Grow</h1>
            <p className='text-center font-medium text-xl mt-4'>
              From compliance tips to well-being strategies, our blog is your
              go-to resource for workplace wellness insights.
            </p>
          </div>
          <div className='flex justify-between items-start mt-16'>
            <div className='w-[370px] h-[470px] bg-white p-4 rounded-[10px]'>
              <Image
                src='/Images/blogPost1.png'
                alt='blog1'
                width={400}
                height={300}
              />
              <h2 className='text-2xl font-medium mt-2'>
                How AI is revolutionizing employee well-being.
              </h2>
              <p className='text-sm line-clamp-2 mt-2'>
                AI is revolutionizing employee well-being by enhancing both
                physical and mental health support through data-driven insights
                and personalized interventions.
              </p>
              <div className='cursor-pointer h-9 w-9 mt-2 rounded-full bg-[#B0208C] flex justify-center items-center text-white'>
                <FaLongArrowAltRight />
              </div>
            </div>

            <div className='w-[370px] h-[470px] bg-white p-4 rounded-[10px]'>
              <Image
                src='/Images/blogPost2.png'
                alt='blog1'
                width={400}
                height={300}
              />
              <h2 className='text-2xl font-medium mt-2'>
                What is CSRD and why it matters for your business.
              </h2>
              <p className='text-sm line-clamp-2 mt-2'>
                The corporate sustainability reporting directive (CSRD) is a new
                European union regulation that requires companies to provide
                detailed reports on their environmental, social, and governance
                (ESG) impacts.
              </p>
              <div className='cursor-pointer h-9 w-9 mt-2 rounded-full bg-[#B0208C] flex justify-center items-center text-white'>
                <FaLongArrowAltRight />
              </div>
            </div>

            <div className='w-[370px] h-[470px] bg-white p-4 rounded-[10px]'>
              <Image
                src='/Images/blogPost3.png'
                alt='blog1'
                width={400}
                height={300}
              />
              <h2 className='text-2xl font-medium mt-2'>
                Work-life balance tips for the modern worker.
              </h2>
              <p className='text-sm line-clamp-2 mt-2'>
                Work-life balance is crucial for maintaining both personal
                well-being and professional productivity in today&apos;s
                fast-paced world.
              </p>
              <div className='cursor-pointer h-9 w-9 mt-2 rounded-full bg-[#B0208C] flex justify-center items-center text-white'>
                <FaLongArrowAltRight />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default BlogSection;
