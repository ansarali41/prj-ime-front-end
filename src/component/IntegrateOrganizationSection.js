import React from 'react';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';
import { setEnquiryModal } from '@/redux/appSlice';
import { useDispatch } from 'react-redux';

const IntegrateOrganizationSection = () => {
    const dispatch = useDispatch();

    return (
        <div className="w-full max-w-[1440px] h-auto mx-auto px-16 lg:px-24 mt-32">
            <div className="w-full rounded-3xl bg-theme-gradient overflow-hidden">
                <div className="flex justify-between items-center relative">
                    <div className="w-full lg:w-1/2 flex flex-col p-8 lg:p-12 gap-6">
                        <h1 className="text-3xl lg:text-5xl font-semibold text-white leading-tight">
                            Integrate iMe into
                            <br /> your organization
                        </h1>
                        <p className="text-base lg:text-lg font-medium text-white/90 leading-relaxed">
                            Equip your team with iMe&apos;s AI powered well-being platform to gain instant and proactive insights that enhance well-being. With the right well-being
                            platform, create a workplace where productivity thrives and your team is empowered to grow both professionally and personally.
                        </p>
                        <button
                            onClick={() => dispatch(setEnquiryModal(true))}
                            className="font-notoSans font-semibold w-48 h-12 text-base 
                                flex gap-2 justify-center items-center rounded-xl 
                                text-white bg-transparent border border-white
                                hover:bg-white/10 transition-colors duration-300"
                        >
                            Enquire Now
                            <GoArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full">
                        <Image
                            src="/Images/integrateOrganization.svg"
                            alt="Integration illustration"
                            width={800}
                            height={800}
                            className="w-full h-auto object-contain scale-125 translate-x-12"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntegrateOrganizationSection;
