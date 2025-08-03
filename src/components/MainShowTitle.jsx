// src/components/MainShowTitle.jsx
import React from 'react';
import mainShowBgImage from '../assets/maineventsscroll.png'; // Pastikan path ini benar dan nama file sesuai

const MainShowTitle = ({ text }) => {
    return (
        <div
            className="flex justify-center items-center p-8 m-4 bg-no-repeat bg-center bg-cover"
            style={{
                backgroundImage: `url(${mainShowBgImage})`,
                backgroundSize: 'contain', // Mengandung gambar tanpa terpotong
                width: 'auto',  
                maxWidth: '90%', 
                backgroundSize: 'contain',
            }}
        >
            <h2 className="font-bold text-5xl text-purple-900 text-center leading-none">
                {text}
            </h2>
        </div>
    );
};

export default MainShowTitle;