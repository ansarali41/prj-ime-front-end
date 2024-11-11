import Image from 'next/image';
import React from 'react';

const ApproachSection = () => {
    return (
        <div className="w-full max-w-[1440px] h-auto mx-auto mt-32 px-16 lg:px-24 flex justify-between items-center gap-8">
            <div className="w-1/2">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold">
                    Well-being in motion: <span className="inline-block bg-theme-gradient text-transparent bg-clip-text">A circular</span>{' '}
                    <span className="inline-block bg-theme-gradient text-transparent bg-clip-text">approach</span>
                </h1>
                <p className="text-base lg:text-lg leading-relaxed mt-6">
                    Empower your workforce with iMe&apos;s AI-driven well-being platform. Designed as a dynamic circular solution, our platform not only supports employee
                    well-being but also allows employers to monitor real-time updates and make informed decisions. By focusing on tailored well-being journeys, we aim to reduce
                    stress and boost productivity, improving well-being both inside and outside the workplace.
                </p>
            </div>
            <div className="w-1/2">
                <Image src="/Images/ApprochSection.png" alt="Approach Section" width={800} height={660} className="w-full h-auto object-contain" priority />
            </div>
        </div>
    );
};

export default ApproachSection;
