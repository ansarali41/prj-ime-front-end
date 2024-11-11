import Image from "next/image";
import React from "react";

const AboutMeSection = () => {
  return (
    <div className='w-full max-w-[94rem] h-auto mx-auto mt-32 flex justify-between items-center '>
      <Image
        src='/Images/AboutiMeSection.png'
        alt='Approach Section'
        width={740}
        height={856}
        className=''
      />
      <div className='w-2/3 min-h-96'>
        <h1 className='text-7xl inline font-bold'>About iMe</h1>
        <p className='text-xl leading-7 mt-8'>
          iMe is an AI-powered platform designed to support organizational
          well-being through an innovative and privacy-focused solution. Our
          mission is to enhance work-life balance by addressing holistic
          well-being challenges and promoting employee well-being. With a deep
          understanding of the interplay between workplace demands and personal
          well-being, iMe provides tailored insights that help organizations
          foster healthier, more productive work environments.
        </p>
        <div className='flex flex-col justify-start items-start bg-white mt-4 shadow-customBoxShadow p-4 rounded-[10px]'>
          <p className='text-[#C81E5A] font-semibold'>
            A commitment towards Society:
          </p>
          <p className='leading-7'>
            With the introduction of the Corporate Sustainability Reporting
            Directive (CSRD) and a growing emphasis on Environmental, Social,
            and Governance (ESG) standards, companies are increasingly
            accountable for their impact on both people and the planet. iMe
            helps organizations meet ESG goals through these SDGs:
          </p>

          <div className=' grid grid-rows-1 grid-cols-3 gap-4'>
            <div className='w-[230px] h-48 border border-gray-300 rounded-[10px] p-4'>
              <div className='flex justify-between items-center'>
                <h2 className='font-bold'>SDG 3</h2>
                <Image
                  src='/Images/aboutIcon1.svg'
                  alt='SDG 3'
                  width={38}
                  height={38}
                />
              </div>
              <p className='mt-4'>
                <span className='font-bold'>Good Health and Well-being </span>–
                Promoting mental and physical wellness in the workplace.
              </p>
            </div>

            <div className='w-[230px] h-48 border border-gray-300 rounded-[10px] p-4'>
              <div className='flex justify-between items-center'>
                <h2 className='font-bold'>SDG 3</h2>
                <Image
                  src='/Images/aboutIcon2.svg'
                  alt='SDG 3'
                  width={28}
                  height={28}
                />
              </div>
              <p className='mt-4'>
                <span className='font-bold'>
                  Decent Work and Economic Growth{" "}
                </span>
                – Supporting a safe, inclusive, and productive work environment.
              </p>
            </div>

            <div className='w-[230px] h-48 border border-gray-300 rounded-[10px] p-4'>
              <div className='flex justify-between items-center'>
                <h2 className='font-bold'>SDG 3</h2>
                <Image
                  src='/Images/aboutIcon3.svg'
                  alt='SDG 3'
                  width={28}
                  height={28}
                />
              </div>
              <p className='mt-4'>
                <span className='font-bold'>
                  Industry, Innovation, and Infrastructure{" "}
                </span>
                – Leveraging advanced technology to build resilient workplace
                wellness solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
