import React from 'react';

import scrollbg from '../assets/scrollbg.png';
import breadIcon from '../assets/bread_icon.png';

const Card = ({ title, description, icon = breadIcon }) => {
    return (
        <div
            className="flex flex-col items-center px-8 py-12 relative text-center shadow-2xl
                       border-t-16 border-b-16 border-border rounded-xl w-full h-full
                       cursor-pointer hover:shadow-[0_5px_15px_rgba(255,215,0,0.6)] duration-300 hover:-translate-y-1"
            style={{
                backgroundImage: `url(${scrollbg})`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <img src={icon} alt={`${title} Icon`} className="mb-8 w-40 max-lg:w-32" />
            <h3
                className="text-5xl font-chancery mb-4 text-primary"
            >
                {title}
            </h3>
            <p
                className="text-xl text-text"
            >
                {description}
            </p>
        </div>
    );
};

export default Card;