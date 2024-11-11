import React from 'react';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setEmail, setEnquiryModal } from '@/redux/appSlice';

const EmployerHeroSection = () => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        dispatch(setEmail(data.email));
        dispatch(setEnquiryModal(true));
    };

    return (
        <div className="w-full max-w-[1440px] mx-auto px-8 lg:px-32 h-auto flex flex-col lg:flex-row justify-between py-8  relative">
            <div className="w-full lg:w-6/12 h-auto flex justify-start lg:justify-end gap-8 lg:pr-16 py-10 lg:py-20 lg:pt-0">
                <div className="flex flex-col gap-6 max-w-xl">
                    <h1 className="font-semibold text-4xl lg:text-5xl leading-tight">
                        Employer&apos;s <br />
                        Super
                        <span className="bg-text-gradient bg-clip-text text-transparent"> Dashboard</span>
                    </h1>
                    <p className="font-normal text-base lg:text-xl leading-relaxed lg:leading-[28px] text-justify">
                        iMe equips HR teams with real-time, AI-driven insights to identify stress and employee risks early, reducing turnover and absenteeism. With proactive
                        notifications for at-risk employees, HRs can quickly provide necessary support. Additionally, iMe fosters healthy competition through well-being challenges
                        and rewards, promoting a motivated workplace culture that enhances overall productivity.
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[27rem] pl-6 p-2.5 flex border border-[#E1E1E1] justify-between items-center rounded-[1.25rem]">
                        <input {...register('email', { required: true })} type="text" placeholder="Enter Your Email ..." className="outline-none w-full bg-transparent" />
                        <button
                            type="submit"
                            className="font-notoSans font-semibold min-w-[11.25rem] h-12 text-base 
                                flex gap-2 justify-center items-center rounded-xl 
                                text-white bg-theme-gradient hover:opacity-90 
                                transition-opacity whitespace-nowrap"
                        >
                            Enquire Now <GoArrowRight className="w-5 h-5" />
                        </button>
                    </form>
                </div>
            </div>

            <div className="lg:absolute lg:right-0 lg:w-7/12 mt-8 lg:mt-0">
                <Image src="/Images/EmployerCvrImg.svg" alt="Employer dashboard illustration" width={1000} height={800} className="w-full h-auto object-contain" priority />
            </div>
        </div>
    );
};

export default EmployerHeroSection;
