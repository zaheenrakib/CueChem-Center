import React from 'react';
import Flicking from '@egjs/react-flicking';
import '@egjs/react-flicking/dist/flicking.css'
import SectionTitle from '../Shared/SectionTitle';
import { AutoPlay } from "@egjs/flicking-plugins";
import logo1 from '/logo1.jpg';
import logo2 from '/logo2.jpg';
import logo3 from '/logo3.jpg';
import logo4 from '/logo4.png';
import logo5 from '/logo5.png';
import logo6 from '/logo6.png';
import logo7 from '/logo7.png';
import logo8 from '/logo8.png';

const PartnerShip = () => {
    const plugins = [new AutoPlay({ duration: 3000, delayAfterHover: 2500, direction: "NEXT", stopOnHover: true })];
    return (
        <div>
            <SectionTitle heading={'Affiliations & memberships'} />
            <div className="partner-logo-slider">
                <Flicking
                    circular={true}
                    moveType="snap" // Using snap instead of freeScroll for smoother transitions
                    plugins={plugins}
                >
                    <img src={logo1} alt="Partner 1" className="partner-logo" />
                    <img src={logo2} alt="Partner 2" className="partner-logo" />
                    <img src={logo3} alt="Partner 3" className="partner-logo" />
                    <img src={logo4} alt="Partner 4" className="partner-logo" />
                    <img src={logo5} alt="Partner 5" className="partner-logo" />
                    <img src={logo8} alt="Partner 8" className="partner-logo" />
                    <img src={logo6} alt="Partner 6" className="partner-logo" />
                    <img src={logo7} alt="Partner 7" className="partner-logo" />
                    <img src={logo1} alt="Partner 1" className="partner-logo" />
                    <img src={logo2} alt="Partner 2" className="partner-logo" />
                    <img src={logo3} alt="Partner 3" className="partner-logo" />
                    <img src={logo4} alt="Partner 4" className="partner-logo" />
                    <img src={logo5} alt="Partner 5" className="partner-logo" />
                    <img src={logo6} alt="Partner 6" className="partner-logo" />
                    <img src={logo4} alt="Partner 7" className="partner-logo" />
                    <img src={logo8} alt="Partner 8" className="partner-logo" />
                    {/* Add more logos as needed */}
                </Flicking>
            </div>
        </div>
    );
};

export default PartnerShip;