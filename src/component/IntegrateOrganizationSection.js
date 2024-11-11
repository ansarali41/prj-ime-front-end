import React from "react";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { setEnquiryModal } from "@/redux/appSlice";
import { useDispatch } from "react-redux";

const IntegrateOrganizationSection = () => {
  const dispatch = useDispatch();

  return (
    <div className='w-full  h-auto flex justify-center -mt-40'>
      <div className='w-3/4 h-[26rem] rounded-[2.5rem] flex  gap-8  bg-theme-gradient '>
        <div className='w-1/2 flex flex-col p-10 gap-4'>
          <h1 className='text-6xl font-semibold text-white leading-[4rem]'>
            Integrate iMe into
            <br /> your organization
          </h1>
          <p className='text-xl font-medium text-white leading-6'>
            Equip your team with iMe’s AI powered well-being platform to gain
            instant and proactive insights that enhance well-being. With the
            right well-being platform, create a workplace where productivity
            thrives and your team is empowered to grow both professionally and
            personally.
          </p>
          <button
            onClick={() => dispatch(setEnquiryModal(true))}
            className='font-notoSans font-semibold w-60 h-12 mt-2 text-base py-4 flex gap-2 justify-center items-center rounded-xl text-white bg-transparent border border-white'>
            Enquire Now <GoArrowRight className='w-6 h-8' />
          </button>
        </div>

        <Image
          src='/Images/integrateOrganization.svg'
          alt='GFG logo imported from public directory'
          width={1000}
          height={1000}
          className='w-[48rem] h-[48rem] relative bottom-14 -right-20'
        />
      </div>
    </div>
  );
};

export default IntegrateOrganizationSection;
