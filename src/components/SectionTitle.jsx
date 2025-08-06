import React from 'react';
import scrollbg from '../assets/scrollbg.png'; 

// Asumsikan Anda memiliki beberapa utility class untuk ukuran dan font di Tailwind
// Jika tidak, Anda bisa langsung pakai nilai px atau rem

const SectionTitle = ({ text }) => {
    return (
        <div
            className="flex justify-center items-center px-8 max-lg:px-6 py-6 max-lg:py-4 m-4 bg-no-repeat bg-center bg-cover w-fit border-l-16 border-r-16 border-border rounded-xl"
            style={{ 
                backgroundImage: `url(${scrollbg})`,
            }}
        >
            <h1 className="text-6xl max-lg:text-5xl text-primary">
                {text}
            </h1>
        </div>
    );
};

export default SectionTitle;