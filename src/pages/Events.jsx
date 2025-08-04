import { Link } from "react-router-dom";

import bgevents from "../assets/bgevents.png";
import posterImage from "../assets/posterevents.png";
import paperBgImage from "../assets/scrollposter.png";
import paperBgMainShow from "../assets/guestbg.png";
import guestBorderImage from "../assets/guestborder.png";

import Navbar from "../components/Navbar";
import Button from "../components/Button";
import ScrollBackground from "../components/Eventtitle.jsx";
import MainShowTitle from "../components/MainShowTitle.jsx";
import EventCard from "../components/EventCard.jsx";


const Events = () => {
    return (
        <>
            <div
                /*background utama halaman*/
                className="flex flex-col bg-no-repeat bg-center bg-cover min-h-screen w-screen"
                style={{
                    backgroundImage: `
                        linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 30%),
                        url(${bgevents})`,
                    backgroundSize: 'cover',
                }}
            >
                <Navbar />

                {/* Wrapper untuk semua konten utama di tengah halaman (kecuali Navbar) */}
                <div className="flex flex-col items-center mx-auto w-full max-w-7xl px-4 py-10 gap-8">

                    {/* Komponen Judul Halaman Events */}
                    <ScrollBackground text="Events" />

                    {/* BAGIAN DUA KOLOM: POSTER DAN KERTAS (PBP) */}
                    <section
                        className="flex flex-col md:flex-row w-full bg-white bg-opacity-10 shadow-lg rounded-lg overflow-hidden mt-0"
                    >
                        {/* Bagian Kiri: Poster */}
                        <div className="flex-shrink-0 w-full md:w-1/2 bg-gray-100">
                            <img
                                src={posterImage}
                                alt="Event Poster"
                                className="w-full h-auto object-contain"
                                style={{ maxHeight: '100%' }}
                            />
                        </div>

                        {/* Bagian Kanan: Kertas dengan Background Gambar (PBP) */}
                        <div
                            className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-start items-center text-center"
                            style={{
                                backgroundImage: `url(${paperBgImage})`,
                                backgroundSize: '100% 100%',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                minHeight: '400px',
                                backgroundColor: '#fdf0d5',
                                color: '#333',
                            }}
                        >
                            {/* ISI KONTEN UNTUK DI DALAM KERTAS*/}
                            <h2 className="text-5xl font-bold mb-15 mt-15">Pembelajaran Bahasa Pemrograman</h2>
                            <p className="text-xl leading-relaxed">
                                PBP, or Pengenalan Bahasa Programming, is one of the benefits received by participants of TECHNO 2024 Event.
                            </p>
                            <p className="text-xl leading-relaxed mt-8">
                                In this learning session, the material taught is basic programming languages C and Python (for Senayan Region) which will be useful for you freshmen of the School of Computer Science who have never tried coding.
                            </p>
                            <p className="text-xl leading-relaxed mt-8">
                                In addition, PBP also will hold a competitive programming competition for beginners, namely Algorena! Of course, there are attractive prizes for the winners. Come on, join PBP!
                            </p>

                            <h3 className="text-4xl font-semibold mt-15 mb-2">Alam Sutera</h3>

                            <ul className="text-xl leading-relaxed list-none m-0 p-0 mb-15">
                                <li>Senin, 19 Agustus 2024</li>
                                <li>Binus @Alam Sutera</li>
                                <li>Time : 09.00 - 11.00</li>
                                <li>Shift : A</li>
                            </ul>
                            <Link to="/"><Button text="Register Now"></Button></Link>
                        </div>
                    </section>
                </div>

                <div className="flex flex-col items-center mx-auto w-full max-w-7xl px-4 py-10 gap-8">
                    {/* Komponen Judul Halaman Main Events */}
                    <MainShowTitle text="Main Show" />

                    {/* Bagian Main Show - An Enchanted Guest Awaits */}
                    <section
                        className="w-full p-6 md:p-10 flex flex-col items-center text-center relative mb-8"
                        style={{
                            backgroundImage: `url(${paperBgMainShow})`,
                            backgroundSize: '100% 100%',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            minHeight: '400px',
                            backgroundColor: '#fdf0d5',
                            color: '#333',
                            paddingTop: '60px',
                            paddingBottom: '40px',
                        }}
                    >
                        <h2
                            className="text-5xl font-extrabold mb-3"
                            style={{
                                fontSize: '3rem',
                            }}
                        >
                            An Enchanted Guest Awaits...
                        </h2>

                        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl gap-8">
                            {/* Bagian Teks */}
                            <div className="flex-1 text-left px-4">
                                <p
                                    className="text-2xl leading-relaxed"
                                >
                                    We will invite Amanda Caesa to our main event, bringing her talents and voice to the event. Don't miss out on her performances!
                                </p>
                            </div>

                            {/* Bagian Gambar Border */}
                            <div className="flex-shrink-0 relative w-64 h-64 md:w-75 md:h-80 flex items-center justify-center">
                                <img
                                    src={guestBorderImage}
                                    alt="Guest Border"
                                    className="w-full h-full object-contain"
                                />                                
                            </div>
                        </div>
                    </section>
        

                    {/*BAGIAN TIGA KARTU EVENTS (Games, Talk Show, Side Quests) */}
                    <section className="w-full flex flex-col items-center">
                        

                        <div className="flex flex-wrap justify-center gap-20 w-full">

                            <EventCard
                                title="Games"
                                description="Freshmen will receive PBP (Pengenalan Bahasa Pemrograman) training"
                            />
                            <EventCard
                                title="Talk Show"
                                description="Freshmen will receive PBP (Pengenalan Bahasa Pemrograman) training"
                            />
                            <EventCard
                                title="Side Quests"
                                description="Freshmen will receive PBP (Pengenalan Bahasa Pemrograman) training"
                            />
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Events;