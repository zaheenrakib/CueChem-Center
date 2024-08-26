import React from 'react';
import { Carousel } from 'rsuite';

const Banner = () => {
    return (
        <div>
            <Carousel className='rounded-b-xl carousel-style' autoplay autoplayInterval={5000} >
                <div className='hero min-h-screen' style={{ backgroundImage: "url(https://plus.unsplash.com/premium_photo-1663047132722-024ff0ef9517?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", }}>
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="space-y-4">
                            <h1 className='lg:text-4xl prata-regular text-2xl font-mono font-extrabold '>Learn with</h1>
                            <h1 className="lg:text-7xl prata-regular text-2xl font-extrabold">Quality Instructors</h1>
                            <button className='btn  btn-accent'>Explore</button>
                        </div>

                    </div>
                </div>
                <div className='hero min-h-screen' style={{ backgroundImage: "url(https://plus.unsplash.com/premium_photo-1661962799648-b475965ae5e3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", }}>
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="space-y-4">
                            <h1 className='lg:text-4xl prata-regular text-2xl font-mono font-extrabold '>Learn</h1>
                            <h1 className="lg:text-7xl prata-regular text-2xl font-extrabold">Artificial Intelligence</h1>
                            <button className='btn  btn-accent'>Explore</button>
                        </div>
                    </div>
                </div>
                <div className='hero min-h-screen' style={{ backgroundImage: "url(https://images.unsplash.com/photo-1575467678971-7cd5c2937dc6?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", }}>
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="space-y-4">
                            <h1 className='lg:text-4xl prata-regular text-2xl font-mono font-extrabold '>Learn</h1>
                            <h1 className="lg:text-7xl prata-regular text-2xl font-extrabold">Project Management</h1>
                            <button className='btn  btn-accent'>Explore</button>
                        </div>
                    </div>
                </div>
                <div className='hero min-h-screen' style={{ backgroundImage: "url(https://plus.unsplash.com/premium_photo-1676325102711-812b886e08f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", }}>
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="space-y-4">
                            <h1 className='lg:text-4xl prata-regular text-2xl font-mono font-extrabold '>Learn</h1>
                            <h1 className="lg:text-7xl prata-regular text-2xl font-extrabold">Machine Learning</h1>
                            <button className='btn  btn-accent'>Explore</button>
                        </div>
                    </div>
                </div>
                <div className='hero min-h-screen' style={{ backgroundImage: "url(https://images.unsplash.com/photo-1618828754881-87c1d2e6d746?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)", }}>
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="space-y-4">
                            <h1 className='lg:text-4xl prata-regular text-xl font-mono font-extrabold '>Learn</h1>
                            <h1 className="lg:text-7xl prata-regular text-2xl font-extrabold">Data Science</h1>
                            <button className='btn  btn-accent'>Explore</button>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;