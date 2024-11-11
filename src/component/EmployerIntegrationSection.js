import React from 'react';
import Image from 'next/image';

const EmployerIntegrationSection = () => {
    return (
        <div className="w-full h-auto flex justify-center items-center ">
            <div className="w-2/3 h-full flex ">
                <div className="flex h-full flex-col gap-8 w-1/2 pt-32">
                    <h1 className="font-semibold text-5xl leading-[50px] ">
                        Seamless <br /> Integration
                    </h1>
                    <p className="font-medium text-xl leading-[33px] w-5/6">
                        The seamless integration with work schedules, well-being goals, and activity data creates a streamlined, non-intrusive experience that improves well-being
                        while maintaining productivity. This smart alignment makes sure well-being efforts seamlessly integrate into daily routines, benefiting employees&apos;
                        well-being and focus while allowing them to perform at their peak.
                    </p>
                </div>
                <div className="w-1/2 flex items-center justify-center ">
                    <Image src="/Images/Dashboard.svg" alt="GFG logo imported from public directory" width={1000} height={1000} className="w-full h-auto object-contain" />
                </div>
            </div>
        </div>
    );
};

export default EmployerIntegrationSection;
