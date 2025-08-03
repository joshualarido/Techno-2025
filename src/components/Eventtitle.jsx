import React from 'react';
import scrollbgImage from '../assets/titlescrollevents.png'; 

// Asumsikan Anda memiliki beberapa utility class untuk ukuran dan font di Tailwind
// Jika tidak, Anda bisa langsung pakai nilai px atau rem

const ScrollBackground = ({ text }) => {
    return (
        <div
            className="flex justify-center items-center p-8 m-4 bg-no-repeat bg-center bg-cover"
            style={{ 
                backgroundImage: `url(${scrollbgImage})`,
                width: 'auto',  
                maxWidth: '90%', 
                backgroundSize: 'contain',
            }}
        >
            <h1 className="font-bold text-5xl text-purple-900"> {/* Sesuaikan warna dan ukuran teks */}
                {text}
            </h1>
        </div>
    );
};

export default ScrollBackground;