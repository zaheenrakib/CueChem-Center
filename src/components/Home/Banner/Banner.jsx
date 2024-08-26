import React from 'react';
import { Carousel } from 'rsuite';

const Banner = () => {
    return (
        <div>
            <Carousel className='rounded-b-xl carousel-style' autoplay >
                <div className='hero min-h-screen' style={{ backgroundImage: "url(https://plus.unsplash.com/premium_photo-1661714193960-ae07c29f9c64?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", }}>
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="space-y-4">
                            <h1 className='lg:text-4xl prata-regular text-2xl font-mono font-extrabold '>Learn with</h1>
                            <h1 className="lg:text-7xl prata-regular text-2xl font-extrabold">Quality Instructors</h1>
                        </div>
                    </div>
                </div>
                <div className='hero min-h-screen' style={{ backgroundImage: "url(https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?q=80&w=1621&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", }}>
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="space-y-4">
                            <h1 className='lg:text-4xl prata-regular text-2xl font-mono font-extrabold '>Learn</h1>
                            <h1 className="lg:text-7xl prata-regular text-2xl font-extrabold">Artificial Intelligence</h1>
                        </div>
                    </div>
                </div>
                <div className='hero min-h-screen' style={{ backgroundImage: "url(https://images.unsplash.com/photo-1622050756792-5b1180bbb873?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", }}>
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="space-y-4">
                            <h1 className='lg:text-4xl prata-regular text-2xl font-mono font-extrabold '>Learn</h1>
                            <h1 className="lg:text-7xl prata-regular text-2xl font-extrabold">Project Management</h1>
                        </div>
                    </div>
                </div>
                <div className='hero min-h-screen' style={{ backgroundImage: "url(https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", }}>
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="space-y-4">
                            <h1 className='lg:text-4xl prata-regular text-2xl font-mono font-extrabold '>Learn</h1>
                            <h1 className="lg:text-7xl prata-regular text-2xl font-extrabold">Machine Learning</h1>
                        </div>
                    </div>
                </div>
                <div className='hero min-h-screen' style={{ backgroundImage: "url(https://images.unsplash.com/photo-1653179241439-c4c10083879a?q=80&w=1630&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", }}>
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="space-y-4">
                            <h1 className='lg:text-4xl prata-regular text-xl font-mono font-extrabold '>Learn</h1>
                            <h1 className="lg:text-7xl prata-regular text-2xl font-extrabold">Data Science</h1>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;