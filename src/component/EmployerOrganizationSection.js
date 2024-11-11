import React from "react";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { useDispatch } from "react-redux";
import { setEnquiryModal } from "@/redux/appSlice";

const EmployerOrganizationSection = () => {
  const dispatch = useDispatch();

  return (
    <div className='w-full  h-auto flex justify-center py-20'>
      <div className='w-3/4 h-[25rem] rounded-[2.5rem] flex  bg-theme-gradient '>
        <div className='w-1/2 flex flex-col p-10 gap-8'>
          <h1 className='text-6xl font-semibold text-white leading-[4.5rem]'>
            Need more info?
          </h1>
          <p className='text-xl font-medium text-white leading-5'>
            Not sure which plan is right for you? Contact our sales team to
            discuss your organization’s specific needs and we’ll help you choose
            the perfect solution.
          </p>
          <button
            onClick={() => dispatch(setEnquiryModal(true))}
            className='font-notoSans font-semibold w-60 h-12 text-base py-4 flex gap-2 justify-center items-center rounded-xl text-white bg-transparent border border-white'>
            Enquire Now <GoArrowRight className='w-6 h-8' />
          </button>
        </div>
        <div className='w-1/2 flex justify-center items-center relative'>
          <Image
            src='/Images/ManagementDashboard.svg'
            alt='GFG logo imported from public directory'
            width={100}
            height={100}
            className='w-[40.125rem] h-[28.563rem]'
          />
          <Image
            src='/Images/AddemployeeForm.svg'
            alt='GFG logo imported from public directory'
            width={100}
            height={100}
            className='w-[15.125rem] h-[17.438rem] absolute -bottom-24 left-0 z-10'
          />
          <Image
            src='/Images/Statistics.svg'
            alt='GFG logo imported from public directory'
            width={100}
            height={100}
            className='w-[20.813rem] h-[8.188rem] absolute -top-16 right-4 z-10'
          />
        </div>
      </div>
    </div>
  );
};

export default EmployerOrganizationSection;
