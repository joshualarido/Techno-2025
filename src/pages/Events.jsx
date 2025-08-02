import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"; 
import bgevents from "../assets/bgevents.png";

import ScrollBackground from "../components/Eventtitle.jsx";


const Events = () => {
    return (
        <>  
        <div
            className="flex flex-col bg-no-repeat bg-center bg-cover min-h-screen w-screen"
            style={{ backgroundImage: `url(${bgevents})` }}
        >
            <Navbar />

            {/* Konten Halaman Events */}
            <div className="flex flex-col items-center justify-center w-full py-10">
                <ScrollBackground text="Events" /> 
                
                {/* Jika Anda memiliki konten lain di halaman Events, letakkan di sini */}
            </div>
            
        </div>
            
            
            
        </>
    );
}
 
export default Events;