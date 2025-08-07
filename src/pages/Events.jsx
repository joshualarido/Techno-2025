import { Link } from "react-router-dom";

import posterImage from "../assets/posterevents.png";
import scrollbg from "../assets/scrollbg.png";
import guestBorderImage from "../assets/guestborder.png";
import finalbg from "../assets/finalbg.png"
import artist from "../assets/artist.png"

import Navbar from "../components/Navbar";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle.jsx";
import Card from "../components/Card.jsx";
import expo from "../assets/exp.png";
import sebelahalsut from "../assets/bgsebelahalsut.png"
import alsut from "../assets/bgalsut.png"

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Events = () => {
    const eventCards = [
        {
            title: "Talkshow",
            description: `A talkshow titled "Journey to 'Atlantis': Ethics and Resilience in AI" for SoCS students to understand further about AI, which is now popular in many fields.`,
        },
        {
            title: "Games",
            description: "Throughout the event, there will be several games you can win to further know about HIMTI and strengthen your relations with friends. And psst, there are prizes too you know.",
        },
        {
            title: "Side Quest",
            description: "Love making contents? Then you can participate in TECHNO's side quest to make a content about TECHNO. You can learn more about Side Quest here",
        },
    ];

    return (
        <>
            <div
                /*background utama halaman*/
                className="flex flex-col bg-no-repeat bg-center bg-cover w-screen pt-20"
                style={{
                    backgroundImage: `
                        linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 30%),
                        url(${finalbg})`,
                    backgroundSize: 'cover',
                }}
            >
                <Navbar />

                {/* Wrapper untuk semua konten utama di tengah halaman (kecuali Navbar) */}
                <section className="section flex flex-col items-center gap-12">

                    {/* Komponen Judul Halaman Events */}
                    <SectionTitle text="Events"></SectionTitle>

                    {/* BAGIAN DUA KOLOM: POSTER DAN KERTAS (PBP) */}
                    <div
                        className="flex flex-row max-lg:flex-col w-full bg-opacity-10 shadow-lg overflow-hidden rounded-xl"
                    >
                        {/* Bagian Kiri: Poster */}
                        <div className="w-1/3 max-lg:w-full max-lg:h-48">
                            <img
                                src={posterImage}
                                alt="Event Poster"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Bagian Kanan: Kertas dengan Background Gambar (PBP) */}
                        <div
                            className="p-10 w-2/3 max-lg:w-full flex flex-col justify-start items-center text-center text-text gap-12
                                       border-t-16 border-b-16 border-border shadow-2xl"
                            style={{
                                backgroundImage: `url(${scrollbg})`,
                                backgroundSize: '100% 100%',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            {/* ISI KONTEN UNTUK DI DALAM KERTAS*/}
                            <h2 className="text-5xl">Pembelajaran Bahasa Pemrograman</h2>
                            <p className="text-xl leading-relaxed">
                                PBP, or Pengenalan Bahasa Programming, is one of the benefits received by participants of TECHNO 2025 Event.
                                <br></br><br></br>
                                In this learning session, the material taught is basic programming languages C and Python (for Senayan Region) which will be useful for you freshmen of the School of Computer Science who have never tried coding.
                                <br></br><br></br>
                                In addition, PBP also will hold a competitive programming competition for beginners, namely <strong>Algorena</strong>! Of course, there are attractive prizes for the winners. Come on, join PBP!
                            </p>

                            <div className="flex flex-row justify-center items-center hidden">
                                <div className="flex flex-col justify-center items-center gap-4">
                                    <h3 className="text-4xl font-chancery">Alam Sutera</h3>

                                    <div className="flex flex-row justify-center items-center gap-12">
                                        <h1 className="text-5xl cursor-pointer"><IoIosArrowBack /></h1>
                                        <ul className="text-xl text-left p-6
                                                    border-border border-2 rounded-xl">
                                            <li>📅 Senin, 19 Agustus 2024</li>
                                            <li>📍 Binus @Alam Sutera</li>
                                            <li>🕒 09.00 - 11.00</li>
                                            <li>🍎 Shift A</li>
                                        </ul>
                                        <h1 className="text-5xl cursor-pointer"><IoIosArrowForward /></h1>
                                    </div>

                                </div>
                            </div>

                            <a href="https://registration.himtibinus.or.id" target="_blank" className="hidden">
                                <Button text="Register Now"></Button>
                            </a>

                            <h1 className="text-text text-5xl">Schedules Coming Soon!</h1>
                        </div>
                    </div>
                </section>

                <section className="section flex flex-col items-center gap-12">
                    {/* Komponen Judul Halaman Main Events */}
                    <SectionTitle text="Main Show"></SectionTitle>

                    {/* Bagian Main Show - An Enchanted Guest Awaits */}
                    <div
                        className="w-2/3 max-lg:w-full p-12 flex flex-col items-center text-center relative text-text
                                   border-t-16 border-b-16 border-border shadow-2xl rounded-xl"
                        style={{
                            backgroundImage: `url(${scrollbg})`,
                            backgroundSize: '100% 100%',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <h2
                            className="text-5xl font-chancery"
                            style={{
                                fontSize: '3rem',
                            }}
                        >
                            An Enchanted Guest Awaits...
                        </h2>
                        
                        {/* Bagian Gambar Border */}
                        <div className="flex items-center justify-center w-1/2 max-lg:w-full">
                            <img
                                src={artist}
                                alt="Guest Border"
                                className="w-full h-full object-contain"
                            />                                
                        </div>

                        {/* Bagian Teks */}
                        <div className="flex-1 text-left px-4">
                            <p
                                className="text-2xl text-center"
                            >
                                We will invite Nadine Abigail to our main event, bringing her talents and voice to the event. Don't miss out on her performances!
                            </p>
                        </div>
                    </div>
        
                    <div className="flex flex-row max-lg:flex-col justify-center gap-12 w-full">
                        {eventCards.map((item, index) => (
                            <div key={index} className="flex">
                            <Card
                                title={item.title}
                                description={item.description}
                            />
                            </div>
                        ))}
                    </div>

                </section>

                {/* EXPO SECTION */}

                <section className="p-20 flex flex-col items-center gap-12 max-lg:pb-12 max-lg:px-5">
                    <SectionTitle text="Expo"></SectionTitle>
                    <div className="flex flex-row justify-center items-center w-full gap-12 max-lg:gap-8 hidden">
                        <h1 className="text-lg md:text-2xl 
                                        text-text 
                                        p-4 max-lg:p-3
                                        bg-gradient-to-br from-btn-primary to-btn-secondary 
                                        hover:from-btn-secondary hover:to-btn-primary 
                                        rounded-full border-2 border-border 
                                        hover:shadow-[0_5px_15px_rgba(255,215,0,0.6)] 
                                        transition duration-300 cursor-pointer"
                        >  
                            <IoIosArrowBack />
                        </h1>

                        <div className="flex flex-col justify-center items-center w-fit h-full shadow-2xl rounded-2xl overflow-hidden">
                            {/* Image container */}
                            <div className="w-full">
                                <img src={alsut} alt="alsut" 
                                    className="w-full object-cover h-48" />
                            </div>

                            {/* Text container */}
                            <div
                                className="h-full w-full flex flex-col justify-center items-center 
                                        bg-no-repeat bg-center bg-cover border-x-20 border-border gap-8 p-12"
                                style={{ backgroundImage: `url(${scrollbg})` }}
                            >
                                <h2 className="text-5xl font-chancery" style={{ color: '#95168A' }}>
                                    Alam Sutera
                                </h2>
                                <p className="text-2xl" style={{ color: '#694B21' }}>
                                    📅 29 - 31 Agustus 2024 <br />
                                    🕒 09.00 - 11.00<br />
                                    📍 Binus @Alam Sutera
                                </p>
                            </div>
                        </div>
                        
                        <h1 className="text-lg md:text-2xl 
                                        text-text 
                                        p-4 max-lg:p-3
                                        bg-gradient-to-br from-btn-primary to-btn-secondary 
                                        hover:from-btn-secondary hover:to-btn-primary 
                                        rounded-full border-2 border-border 
                                        hover:shadow-[0_5px_15px_rgba(255,215,0,0.6)] 
                                        transition duration-300 cursor-pointer"
                        >  
                            <IoIosArrowForward />
                        </h1>
                    </div>
                    <SectionTitle text="Coming Soon!"></SectionTitle>
                </section>    
            </div>
        </>
    );
}

export default Events;