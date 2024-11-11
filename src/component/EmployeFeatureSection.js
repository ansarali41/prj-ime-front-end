import Image from 'next/image';
import React from 'react';

const EmployeFeatureSection = () => {
    return (
        <>
            <div className="w-full  flex flex-col items-center py-8 gap-4">
                <h1 className="text-[3.125rem] font-semibold text-center">Key Features</h1>
                <p className="text-xl font-medium text-center w-2/3">
                    By fostering an engaging workplace, employees can participate in friendly competitions with colleagues, earning incentives and rewards for maintaining healthy
                    habits. With real-time insights at their fingertips, employees can take charge of their well-being, while organizations <br /> benefit from valuable data-driven
                    support that enhances overall team productivity.
                </p>
                <div className="w-2/3 h-[10.25rem] flex gap-10 pt-16">
                    <div className="w-1/3 h-full flex flex-col justify-center items-center gap-4 text-center">
                        <Image src="/Images/AIicon.svg" alt="GFG logo imported from public directory" width={100} height={100} className="w-20 h-20" />
                        <h1 className="text-[2rem] font-medium w-full text-center leading-8">Context-aware AI Coach</h1>
                    </div>
                    <div className="w-1/3 h-full flex flex-col justify-center items-center gap-4 text-center">
                        <Image src="/Images/productivityIcon.svg" alt="GFG logo imported from public directory" width={100} height={100} className="w-20 h-20" />
                        <h1 className="text-[2rem] font-medium w-full text-center leading-8">Boosted Productivity</h1>
                    </div>
                    <div className="w-1/3 h-full flex flex-col justify-center items-center gap-4 text-center">
                        <Image src="/Images/gamificationIcon.svg" alt="GFG logo imported from public directory" width={100} height={100} className="w-20 h-20" />
                        <h1 className="text-[2rem] font-medium w-full text-center leading-8">Gamification & Incentivization</h1>
                    </div>
                </div>
            </div>
            ;
        </>
    );
};

export default EmployeFeatureSection;
