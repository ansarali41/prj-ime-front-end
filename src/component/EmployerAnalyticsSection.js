import React from 'react';
import Image from 'next/image';

const EmployerAnalyticsSection = () => {
    return (
        <div className="w-full  h-auto flex justify-center items-center">
            <div className="w-2/3 h-full flex  gap-40">
                <div className="w-3/6 flex items-center">
                    <Image src="/Images/AnalyticsCvrImg.svg" alt="GFG logo imported from public directory" width={1000} height={1000} className="relative -top-10" />
                </div>
                <div className="flex h-full flex-col gap-10  w-3/6 pt-20">
                    <h1 className="font-semibold text-5xl leading-[50px] ">Real-time Analytics / Preemptive Tool</h1>
                    <p className="font-medium text-xl leading-[33px] w-5/6">
                        Real-time analytics cater to practical insights into possible causes of stress, allowing for early interventions that reduce burnout and promote a healthy
                        work environment. This method decreases turnover while simultaneously driving sustained productivity and stronger team involvement.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EmployerAnalyticsSection;
