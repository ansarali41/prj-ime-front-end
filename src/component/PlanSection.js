import { setEnquiryModal } from "@/redux/appSlice";
import Image from "next/image";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { useDispatch } from "react-redux";

const PlanSection = () => {
  const dispatch = useDispatch();

  return (
    <div className='w-full max-w-[94rem] h-auto mx-auto mt-40 flex justify-between items-center '>
      <div className='w-full max-w-7xl min-h-[50rem] p-2 mx-auto '>
        <h1 className='text-center font-bold text-5xl'>
          Unlock the Full Potential of iMe
        </h1>
        <p className='text-center font-medium text-xl mt-4'>
          Take the next step in corporate well-being by unlocking all of
          iMe&apos;s powerful features! Explore the realm of tailored support,
          insights, and result driven resources crafted to enhance your
          team&apos;s well-being. Experience how AI driven well-being journeys
          can boost productivity and ignite engagement.
        </p>
        <div className='flex justify-center items-center gap-20 mt-24'>
          <div className='relative bg-white w-[300px] h-[390px] border border-[#1E1E1E]/20 rounded-[20px] p-4 px-6 flex flex-col justify-start items-center'>
            <h2 className='absolute -top-6 bg-[#B0208C] text-white fonr-bold text-3xl rounded-[10px] p-2 px-8 '>
              Standard Plan
            </h2>
            <div className='w-full flex flex-col justify-start items-start'>
              <Image
                src='/Images/standarPlanLogo.svg'
                alt='standardPlan'
                width={62}
                height={44}
                className='mt-12'
              />
              <div className='flex justify-start items-center gap-4 mt-4'>
                <Image
                  src='/Images/standarPlanTick.svg'
                  alt='standardPlanTick'
                  width={24}
                  height={22}
                />
                <p className='text-[#717171] text-lg'>200-10,000 Employees</p>
              </div>
              <div className='flex justify-start items-center gap-4 mt-4'>
                <Image
                  src='/Images/standarPlanTick.svg'
                  alt='standardPlanTick'
                  width={24}
                  height={22}
                />
                <p className='text-[#717171] text-lg'>
                  £10,000 Integration Free
                </p>
              </div>
              <div className='flex justify-start items-center gap-4 mt-4'>
                <Image
                  src='/Images/standarPlanTick.svg'
                  alt='standardPlanTick'
                  width={24}
                  height={22}
                />
                <p className='text-[#717171]'>
                  <span className='text-[#B0208C] font-semibold'>£4.99</span>{" "}
                  /employee/month
                </p>
              </div>
              <button
                onClick={() => dispatch(setEnquiryModal(true))}
                className='font-notoSans font-semibold w-full h-12 mt-4 text-base py-4 flex gap-2 justify-center items-center rounded-xl text-[#B0208C] bg-transparent border border-[#BC1F74]'>
                Enquire Now <GoArrowRight className='w-6 h-8' />
              </button>
              <p className='bg-[#F1F1F1] text-[15px] border border-[#1E1E1E]/20 rounded-[20px] w-[315px] p-1  text-center absolute bottom-6 -left-2'>
                Additional customizations available.
              </p>
            </div>
          </div>

          <div className='relative bg-theme-gradient w-[324px] h-[495px]  rounded-[20px] p-4 px-6 flex flex-col justify-start items-center'>
            <div className='absolute -top-6 border border-[#1E1E1E]/20 bg-white rounded-[10px] p-2 px-4'>
              <h2 className='font-bold text-center bg-theme-gradient bg-clip-text text-transparent text-3xl  '>
                Limited Time Offer
              </h2>
            </div>
            <div className='w-full flex flex-col justify-start items-start gap-4'>
              <Image
                src='/Images/limitedPlanLogo.svg'
                alt='standardPlan'
                width={62}
                height={44}
                className='mt-12'
              />
              <div className='flex flex-col bg-white/20 p-4 rounded-[10px]'>
                <div className='flex justify-start items-center gap-4 mt-4'>
                  <Image
                    src='/Images/limitedPlanTick.svg'
                    alt='standardPlanTick'
                    width={24}
                    height={22}
                  />
                  <p className='text-white text-lg'>50% off on subscription</p>
                </div>
                <div className='flex justify-start items-center gap-4 mt-4'>
                  <Image
                    src='/Images/limitedPlanTick.svg'
                    alt='standardPlanTick'
                    width={24}
                    height={22}
                  />
                  <p className='text-white'>
                    <span className='text-white font-semibold text-lg'>
                      £2.49
                    </span>{" "}
                    /employee/month
                  </p>
                </div>
                <div className='flex justify-start items-center gap-4 mt-4'>
                  <Image
                    src='/Images/limitedPlanTick.svg'
                    alt='standardPlanTick'
                    width={24}
                    height={22}
                  />
                  <p className='text-white text-lg'>Free Integration Fee</p>
                </div>
                <div className='flex justify-start items-center gap-4 mt-4'>
                  <Image
                    src='/Images/limitedPlanTick.svg'
                    alt='standardPlanTick'
                    width={24}
                    height={22}
                  />
                  <p className='text-white text-lg'>
                    <span className=' font-semibold'>25% off</span> on
                    additional Customization
                  </p>
                </div>
              </div>
              <button
                onClick={() => dispatch(setEnquiryModal(true))}
                className='font-notoSans font-semibold w-full h-12 mt-4 text-base py-4 flex gap-2 justify-center items-center rounded-xl bg-white text-[#B0208C] bg-transparent border border-[#BC1F74]'>
                Enquire Now <GoArrowRight className='w-6 h-8' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanSection;
