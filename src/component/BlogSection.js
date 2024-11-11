import Image from 'next/image';
import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

const BlogCard = ({ image, title, description }) => (
    <div className="w-full max-w-[370px] bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
        <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
            <Image src={image} alt={title} width={400} height={300} className="w-full h-full object-cover" />
        </div>
        <h2 className="text-xl lg:text-2xl font-medium mt-4 line-clamp-2">{title}</h2>
        <p className="text-sm text-gray-600 line-clamp-2 mt-3">{description}</p>
        <button className="mt-4 h-9 w-9 rounded-full bg-[#B0208C] hover:bg-[#960673] transition-colors flex justify-center items-center text-white">
            <FaLongArrowAltRight size={16} />
        </button>
    </div>
);

const BlogSection = () => {
    const blogs = [
        {
            image: '/Images/blogPost1.png',
            title: 'How AI is revolutionizing employee well-being.',
            description:
                'AI is revolutionizing employee well-being by enhancing both physical and mental health support through data-driven insights and personalized interventions.',
        },
        {
            image: '/Images/blogPost2.png',
            title: 'What is CSRD and why it matters for your business.',
            description:
                'The corporate sustainability reporting directive (CSRD) is a new European union regulation that requires companies to provide detailed reports on their environmental, social, and governance (ESG) impacts.',
        },
        {
            image: '/Images/blogPost3.png',
            title: 'Work-life balance tips for the modern worker.',
            description: "Work-life balance is crucial for maintaining both personal well-being and professional productivity in today's fast-paced world.",
        },
    ];

    return (
        <div className="w-full max-w-[1440px] mx-auto mt-32 px-16 lg:px-24">
            <div className="w-full mx-auto">
                <div className="flex flex-col items-center">
                    <span className="uppercase text-center rounded-lg text-sm bg-white mb-4 px-4 py-2 shadow-sm">Latest Blogs</span>
                    <h1 className="text-center font-bold text-3xl lg:text-5xl mb-4">Learn & Grow</h1>
                    <p className="text-center font-medium text-base lg:text-lg max-w-2xl">
                        From compliance tips to well-being strategies, our blog is your go-to resource for workplace wellness insights.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {blogs.map((blog, index) => (
                        <BlogCard key={index} image={blog.image} title={blog.title} description={blog.description} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
