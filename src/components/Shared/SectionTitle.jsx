import React from 'react';
import { Fade } from 'react-awesome-reveal';

const SectionTitle = ({heading}) => {
    return (
        <div>
            <div>
            <div className='mx-auto my-10 text-center md:w-3/12'>
                <Fade direction="down" duration={1000} delay={5}>
                    <h1 className='text-2xl prata-regular uppercase border-y-4 border-slate-600 py-4'>{heading}</h1>
                </Fade>
            </div>
            </div>
        </div>
    );
};

export default SectionTitle;