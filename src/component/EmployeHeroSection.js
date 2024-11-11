import React from "react";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { useDispatch } from "react-redux";
import { setEmail, setEnquiryModal } from "@/redux/appSlice";
import { useForm } from "react-hook-form";

const EmployeHeroSection = () => {
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
    <div className='w-full px-32 h-auto flex justify-between py-2 '>
      <div className='w-6/12 h-auto flex justify-end gap-8 pr-16 py-20'>
        <div className='flex flex-col gap-10'>
          <h1 className='font-semibold text-[5rem] leading-none '>
            Improving Employee
            <span className='bg-text-gradient bg-clip-text text-transparent'>
              {" "}
              Well-being
            </span>
          </h1>
          <p className='font-normal text-base leading-[28px]'>
            iMe’s platform integrates seamlessly into daily work routines,
            delivering real-time well-being insights and personalized activities
            that foster healthy habits, reduce stress, and enhance productivity.
            By cultivating a well-being-focused workplace, iMe supports
            individual well-being while helping organizations meet their
            sustainability goals.
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
      <div className=' '>
        <Image
          src='/Images/employeMobImg.svg'
          alt='GFG logo imported from public directory'
          width={100}
          height={100}
          className='w-[52.688rem] h-[53.5rem] '
        />
      </div>
    </div>
  );
};

export default EmployeHeroSection;
