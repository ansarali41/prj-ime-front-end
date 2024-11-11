import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { GoArrowRight } from 'react-icons/go';

const FeaturesSection = () => {
    const router = useRouter();

    const FeatureItem = ({ text }) => (
        <div className="flex items-center gap-3">
            <Image className="h-5 w-5" src="/Images/featuresTick.svg" alt="featuresTick" width={20} height={20} />
            <p className="font-medium text-base lg:text-lg text-slate-500">{text}</p>
        </div>
    );

    return (
        <div className="w-full max-w-[1440px] h-auto mx-auto mt-32 px-16 lg:px-24">
            <div className="w-full mx-auto">
                <h1 className="text-center font-bold text-4xl lg:text-5xl mb-4">Our Features</h1>
                <p className="text-center font-medium text-base lg:text-lg max-w-3xl mx-auto mb-16">
                    iMe&apos;s platform helps create a balanced, energized workplace. With personalized well-being guidance, proactive employee risk detection, and data privacy at
                    the forefront, iMe enables teams to thrive and perform their best every day.
                </p>

                {/* Employers Section */}
                <div className="flex flex-wrap justify-between items-center mb-24">
                    <div className="w-full lg:w-1/2 flex flex-col gap-6 pr-8">
                        <h2 className="font-bold text-3xl lg:text-4xl">For Employers</h2>
                        <div className="flex flex-col gap-4 mt-4">
                            <FeatureItem text="Frictionless Integration" />
                            <FeatureItem text="Real-time Analytics / Preemptive Tool" />
                            <FeatureItem text="ESG & CSRD Alignment" />
                        </div>
                        <button
                            onClick={() => router.push('/solution/employer')}
                            className="font-notoSans font-semibold w-36 h-11 mt-4 text-sm flex gap-2 justify-center items-center rounded-lg text-white bg-[#BC1F74] hover:bg-[#a41861] transition-colors"
                        >
                            Read More <GoArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <Image src="/Images/employerFeature.svg" alt="employerFeature" width={700} height={700} className="w-full h-auto object-contain" priority />
                    </div>
                </div>

                {/* Employees Section */}
                <div className="flex flex-wrap justify-between items-center flex-row-reverse">
                    <div className="w-full lg:w-1/2 flex flex-col gap-6 pl-8">
                        <h2 className="font-bold text-3xl lg:text-4xl">For Employees</h2>
                        <div className="flex flex-col gap-4 mt-4">
                            <FeatureItem text="Context-aware AI Coach" />
                            <FeatureItem text="Gamification & Incentivization" />
                            <FeatureItem text="Boosted Productivity" />
                        </div>
                        <button
                            onClick={() => router.push('/solution/employee')}
                            className="font-notoSans font-semibold w-36 h-11 mt-4 text-sm flex gap-2 justify-center items-center rounded-lg text-white bg-[#BC1F74] hover:bg-[#a41861] transition-colors"
                        >
                            Read More <GoArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <Image src="/Images/employeeFeature.svg" alt="employeeFeature" width={700} height={700} className="w-full h-auto object-contain" priority />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;
