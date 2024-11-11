import React from 'react';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import { setEmail, setEnquiryModal } from '@/redux/appSlice';
import { useForm } from 'react-hook-form';

const EmployeHeroSection = () => {
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
        <div className="w-full max-w-[1440px] mx-auto px-8 lg:px-32 h-auto flex flex-col lg:flex-row justify-between py-2">
            <div className="w-full lg:w-6/12 h-auto flex justify-start lg:justify-end gap-8 lg:pr-16 py-10 lg:py-20">
                <div className="flex flex-col gap-8 lg:gap-10 max-w-xl">
                    <h1 className="font-semibold text-4xl lg:text-[5rem] leading-tight lg:leading-none">
                        Improving Employee
                        <span className="bg-text-gradient bg-clip-text text-transparent"> Well-being</span>
                    </h1>
                    <p className="font-normal text-base leading-[28px]">
                        iMe&apos;s platform integrates seamlessly into daily work routines, delivering real-time well-being insights and personalized activities that foster healthy
                        habits, reduce stress, and enhance productivity. By cultivating a well-being-focused workplace, iMe supports individual well-being while helping
                        organizations meet their sustainability goals.
                    </p>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-[27rem] pl-6 p-2.5 flex border border-[#E1E1E1] justify-between items-center rounded-[1.25rem]">
                        <input {...register('email', { required: true })} type="text" placeholder="Enter Your Email ..." className="outline-none" />
                        <button className="font-notoSans font-semibold w-[11.25rem] h-12 text-base flex gap-2 justify-center items-center rounded-xl text-white bg-theme-gradient">
                            Enquire Now <GoArrowRight className="w-6 h-8" />
                        </button>
                    </form>
                </div>
            </div>

            <div className="w-full lg:w-auto mt-8 lg:mt-0">
                <Image
                    src="/Images/employeMobImg.svg"
                    alt="Employee Well-being Illustration"
                    width={843}
                    height={856}
                    className="w-full lg:w-[52.688rem] h-auto lg:h-[53.5rem] object-contain"
                    priority
                />
            </div>
        </div>
    );
};

export default EmployeHeroSection;
