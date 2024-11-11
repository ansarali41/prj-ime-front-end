import Image from 'next/image';
import React from 'react';

const EmployerFeatureSection = () => {
    return (
        <>
            <div className="w-full  flex flex-col items-center py-16 gap-4 mt-10">
                <h1 className="text-[3.125rem] font-semibold text-center">Key Features</h1>
                <p className="text-xl font-medium text-center w-2/3">
                    Our platform delivers personalized well-being support for employees while giving organizations real-time insights into productivity and <br />
                    well-being. With tailored features for both employers and employees, IMe ensures success for everyone.
                </p>
                <div className="w-2/3 h-[10.25rem] flex gap-10 pt-16">
                    <div className="w-1/3 h-full  flex flex-col justify-center items-center gap-4">
                        <Image src="/Images/integrationIcon.svg" alt="GFG logo imported from public directory" width={100} height={100} className="w-20 h-20" />
                        <h1 className="text-[2rem] font-medium w-4/5 text-center leading-8">Seamless Integration</h1>
                    </div>
                    <div className="w-1/3 h-full  flex flex-col justify-center items-center gap-4">
                        <Image src="/Images/AnalyticsIcon.svg" alt="GFG logo imported from public directory" width={100} height={100} className="w-20 h-20" />
                        <h1 className="text-[2rem] font-medium w-4/5 text-center leading-8">Real-time Analytics / Preemptive Tool</h1>
                    </div>
                    <div className="w-1/3 h-full  flex flex-col justify-center items-center gap-4">
                        <Image src="/Images/ESGicon.svg" alt="GFG logo imported from public directory" width={100} height={100} className="w-20 h-20" />
                        <h1 className="text-[2rem] font-medium w-4/5 text-center leading-8">ESG/CSRD Alignment</h1>
                    </div>
                </div>
            </div>
            ;
        </>
    );
};

export default EmployerFeatureSection;
