import React from 'react';
import SectionTitle from '../../Shared/SectionTitle';

const CardSection = () => {
    return (
        <div>
            <SectionTitle heading={"It’s our nature"} />
            <div className="card flex lg:card-side bg-base-100 shadow-xl prata-regular">
                <figure className='flex-1'>
                    <img
                        src="https://plus.unsplash.com/premium_photo-1663100782154-0f89208bf732?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNoZW1pY2FsfGVufDB8fDB8fHww"
                        alt="Album" />
                </figure>
                <div className="card-body flex-1">
                    <h2 className="card-title lg:text-3xl">We touch and color people’s lives every day, everywhere.</h2>
                    <p className='text-xl'>You can find our products in your clothes, textiles, food packaging, delivery boxes, writing paper, paints, adhesives, and so much more.We provide innovative, sustainable solutions and services to our customers to help them increase the value of their products. Our science and technology expertise, coupled with in depth market, customer and regulatory understanding, provide the platforms for the creation of safer, more sustainable chemicals and practices in the industries we serve.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-success btn-outline">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardSection;