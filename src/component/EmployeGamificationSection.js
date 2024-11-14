import React from 'react';
import Image from 'next/image';

const EmployeGamificationSection = () => {
    return (
        <div className="w-full max-w-[1440px] mx-auto px-8 lg:px-24">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-20 pt-20">
                <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:gap-10">
                    <h1 className="text-[48px] font-semibold leading-[50px]">
                        Gamification & <br /> Incentivization
                    </h1>
                    <p className="font-medium text-lg lg:text-xl leading-relaxed lg:leading-[33px] w-full lg:w-5/6 font-satoshi opacity-50">
                        Gamification can make well-being goals more exciting, fun and inspiring for employees. iMe&apos;s well-being strategy fosters employee engagement through
                        leaderboards, challenges, streaks, and rewards.
                    </p>
                </div>

                <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start">
                    <div className="relative flex items-center">
                        <Image src="/Images/Img1.svg" alt="Gamification Interface 1" width={270} height={344} className="w-[16.875rem] h-[21.5rem] relative z-10" priority />
                        <Image src="/Images/Img2.svg" alt="Gamification Interface 2" width={291} height={630} className="w-[18.188rem] h-[39.375rem] relative -left-11" priority />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeGamificationSection;
