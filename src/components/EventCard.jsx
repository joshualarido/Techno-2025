import React from 'react';

import cardBgImage from '../assets/card_background.png';
import breadIcon from '../assets/bread_icon.png';

const EventCard = ({ title, description, icon = breadIcon }) => {
    return (
        <div
            className="flex flex-col items-center p-6 w-90 h-[450px] relative text-center"
            style={{
                backgroundImage: `url(${cardBgImage})`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                color: '#333',
                filter: 'drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))'
            }}
        >
            <img src={icon} alt={`${title} Icon`} className="w-32 h-32 mb-4 mt-8 object-contain" />
            <h3
                className="text-5xl font-extrabold mb-4"
            >
                {title}
            </h3>
            <p
                className="text-xl leading-relaxed px-2"
            >
                {description}
            </p>
        </div>
    );
};

export default EventCard;