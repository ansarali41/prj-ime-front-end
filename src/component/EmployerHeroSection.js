import React from "react";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { setEmail, setEnquiryModal } from "@/redux/appSlice";

const EmployerHeroSection = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(setEmail(data.email));
    dispatch(setEnquiryModal(true));
  };

  return (
    <div className='w-full px-32 h-auto flex justify-between py-8'>
      <div className='w-6/12 h-auto flex justify-end gap-8 pr-16 py-20'>
        <div className='flex flex-col gap-6'>
          <h1 className='font-semibold text-[5rem] leading-none '>
            Employer’s <br />
            Super
            <span className='bg-text-gradient bg-clip-text text-transparent'>
              {" "}
              Dashboard
            </span>
          </h1>
          <p className='font-normal text-xl leading-[28px] text-justify'>
            iMe equips HR teams with real-time, AI-driven insights to identify
            stress and employee risks early, reducing turnover and absenteeism.
            With proactive notifications for at-risk employees, HRs can quickly
            provide necessary support. Additionally, iMe fosters healthy
            competition through well-being challenges and rewards, promoting a
            motivated workplace culture that enhances overall productivity.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='w-[27rem] pl-6 p-2.5 flex border border-[#E1E1E1] justify-between items-center rounded-[1.25rem]'>
            <input
              {...register("email", { required: true })}
              type='text'
              placeholder='Enter Your Email ...'
              className='outline-none'
            />
            <button className='font-notoSans font-semibold w-[11.25rem] h-12 text-base flex gap-2 justify-center items-center rounded-xl text-white bg-theme-gradient'>
              Enquire Now <GoArrowRight className='w-6 h-8' />
            </button>
          </form>
        </div>
      </div>
      <div className='absolute right-0 '>
        <Image
          src='/Images/EmployerCvrImg.svg'
          alt='GFG logo imported from public directory'
          width={100}
          height={100}
          className='w-full h-full '
        />
      </div>
    </div>
  );
};

export default EmployerHeroSection;
