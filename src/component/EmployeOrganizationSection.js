import React from 'react';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import { setEnquiryModal } from '@/redux/appSlice';

const EmployeOrganizationSection = () => {
    const dispatch = useDispatch();
    return (
        <div className="w-full  h-auto flex justify-center  pt-48">
            <div className="w-3/4 h-[25rem] rounded-[2.5rem] flex  gap-8  bg-theme-gradient ">
                <div className="w-3/2 flex flex-col p-10 gap-8">
                    <h1 className="text-5xl font-semibold text-white leading-[3.5rem]">
                        Bring our platform to <br /> your organization
                    </h1>
                    <p className="text-xl font-medium text-white leading-5">
                        Empower your workforce with AI-driven well-being management and work-life harmony solution. From real-time insights to proactive well-being support,
                        transform your workplace for optimal productivity and employee satisfaction.
                    </p>
                    <button
                        onClick={() => dispatch(setEnquiryModal(true))}
                        className="font-notoSans font-semibold w-60 h-12 text-base py-4 flex gap-2 justify-center items-center rounded-xl text-white bg-transparent border border-white"
                    >
                        Enquire Now <GoArrowRight className="w-6 h-8" />
                    </button>
                </div>
                <Image
                    src="/Images/OrganizationCvrImg.svg"
                    alt="GFG logo imported from public directory"
                    width={100}
                    height={100}
                    className="w-[32.25rem] h-[40.12rem] relative -top-16 -left-3"
                />
            </div>
        </div>
    );
};

export default EmployeOrganizationSection;
