import React from 'react';
import SectionTitle from '../Shared/SectionTitle';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import CountUp from 'react-countup';

const OverView = () => {
    return (
        <>
            <div>
                <SectionTitle heading={'Over View'} />
                <ParallaxBanner
                    layers={[
                        {
                            image: 'https://images.unsplash.com/photo-1474314243412-cd4a79f02c6a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                            speed: -20,
                        },
                    ]}
                    className="flex justify-center items-center"
                    style={{ aspectRatio: '2 / 1' }}
                >
                    <Parallax>
                        <div className="py-12 bg-gray-200 bg-opacity-75 w-full rounded-2xl">
                            <div className="flex flex-wrap justify-around items-center">
                                <div className="text-center prata-regular p-4">
                                    <div className="text-6xl font-bold text-blue-600">
                                        <CountUp start={0} end={12} duration={8} />+
                                    </div>
                                    <p className="text-lg font-medium text-gray-700 mt-2">Years of Experience</p>
                                </div>
                                <div className="text-center prata-regular p-4">
                                    <div className="text-6xl font-bold text-green-600">
                                        <CountUp start={20} end={498} duration={6} />+
                                    </div>
                                    <p className="text-lg font-medium text-gray-700 mt-2">Client Companies</p>
                                </div>
                                <div className="text-center prata-regular  p-4">
                                    <div className="text-6xl font-bold text-red-600">
                                        <CountUp start={50} end={265} duration={7} />%
                                    </div>
                                    <p className="text-lg font-medium text-gray-700 mt-2">Business Efficiency</p>
                                </div>
                                <div className="text-center prata-regular  p-4">
                                    <div className="text-6xl font-bold text-teal-600">
                                        <CountUp start={10} end={95} duration={7} />%
                                    </div>
                                    <p className="text-lg font-medium text-gray-700 mt-2">Safe Resource</p>
                                </div>
                                <div className="text-center prata-regular  p-4">
                                    <div className="text-6xl font-bold text-pink-700">
                                        <CountUp start={50} end={298} duration={7} />%
                                    </div>
                                    <p className="text-lg font-medium text-gray-700 mt-2">Business Profit</p>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                </ParallaxBanner>
            </div>
        </>
    );
};

export default OverView;