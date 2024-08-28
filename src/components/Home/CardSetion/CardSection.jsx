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
                    <h2 className="card-title lg:text-3xl">Excellence, Innovation, Collaboration</h2>
                    <p className='text-2xl'>As a leading manufacturer of speciality chemicals, we aim to maintain the highest standards of product quality, service, technical support, and personal relationships with customers and to create assets that benefit all our stakeholders including customers, employees of our company, and the countries in which we operate.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-success btn-outline">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardSection;