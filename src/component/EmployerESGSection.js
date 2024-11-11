import React from 'react';
import Image from 'next/image';

const EmployerESGSection = () => {
    return (
        <div className="w-full h-auto flex justify-center items-center">
            <div className="w-2/3 h-full flex">
                <div className="flex h-full flex-col gap-8 w-1/2 pt-32">
                    <h1 className="font-semibold text-5xl leading-[50px]">
                        ESG/CSRD <br /> Alignment
                    </h1>
                    <p className="font-medium text-xl leading-[33px] w-5/6">
                        iMe actively promotes staff well-being and burnout reduction, in line with business sustainability efforts and meeting ESG standards and CSRD. By promoting
                        a healthy, balanced workplace, the platform assists firms in demonstrating a commitment to social responsibility and long-term employee care.
                    </p>
                </div>
                <div className="w-1/2 flex items-center justify-center relative top-10">
                    <Image src="/Images/ESGCvrImg.svg" alt="ESG and CSRD alignment illustration" width={1000} height={1000} className="relative -top-10" priority />
                </div>
            </div>
        </div>
    );
};

export default EmployerESGSection;
