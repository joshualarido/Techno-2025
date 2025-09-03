import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import posterImage from "../assets/posterevents.png";
import scrollbg from "../assets/scrollbg.png";
import guestBorderImage from "../assets/guestborder.png";
import finalbg from "../assets/finalbg.png";
import artist from "../assets/artist.png";
import artistsecret from "../assets/artistsecret.png";

import Navbar from "../components/Navbar";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle.jsx";
import Card from "../components/Card.jsx";
import expo from "../assets/exp.png";
import sebelahalsut from "../assets/bgsebelahalsut.png";
import breadIcon from "../assets/bread_icon.png";
import cookieIcon from "../assets/cookie1.png";
import alsut from "../assets/bgalsut.png";
import caterpillar1 from "../assets/caterpillar1.png";
import leaves from "../assets/leaves.png";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import pbpData from "../data/pbpData"; 
import expoData from "../data/expoData";

const Events = () => {
    const eventCards = [
        {
        title: "Talkshow",
        description: `A talkshow titled "Down the AI Rabbit Hole: Exploring the Academic Shift in the Age of AI" for SoCS students to understand further about AI, which is now popular in many fields.`,
        icon: breadIcon,
        },
        {
        title: "Games",
        description:
            "Throughout the event, there will be several games you can win to further know about HIMTI and strengthen your relations with friends. And psst... there are prizes too you know!",
        icon: cookieIcon,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const total = pbpData.length;

    const handlePrev = () => {
        setCurrentIndex((i) => (i === 0 ? total - 1 : i - 1));
    };

    const handleNext = () => {
        setCurrentIndex((i) => (i === total - 1 ? 0 : i + 1));
    };

    const current = pbpData[currentIndex] ?? {};
  
    const [expoIndex, setExpoIndex] = useState(0);
    const expoTotal = expoData.length;
    const expoPrev = () => setExpoIndex(i => (i === 0 ? expoTotal - 1 : i - 1));
    const expoNext = () => setExpoIndex(i => (i === expoTotal - 1 ? 0 : i + 1));
    const currentExpo = expoData[expoIndex] ?? {};
    
    const [isPosterOpen, setIsPosterOpen] = useState(false);

    useEffect(() => {
      document.body.style.overflow = isPosterOpen ? "hidden" : "";
      return () => { document.body.style.overflow = ""; };
    }, [isPosterOpen]);

  return (
    <>
      <div
        className="flex flex-col bg-no-repeat bg-center bg-cover w-screen pt-20"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 30%),
            url(${finalbg})`,
          backgroundSize: "cover",
        }}
      >
        <Navbar />

        <section className="section flex flex-col items-center gap-12">
          <SectionTitle text="Events" />

          {/* Poster + PBP card */}
          <div className="relative flex flex-row max-lg:flex-col w-full bg-opacity-10 shadow-lg rounded-xl">
            <img
              src={caterpillar1}
              alt="caterpillar1"
              className="absolute top-[-80px] max-lg:top-[-40px] right-[-30px] max-lg:right-[-20px] w-50 max-lg:w-32 rotate-left-right scale-x-[-1]"
              style={{ zIndex: 5 }}
            />
            
            {isPosterOpen && (
              <div
                className="fixed inset-0 z-[100] flex items-center justify-center"
                aria-modal="true"
                role="dialog"
                aria-labelledby="poster-title"
                onClick={() => setIsPosterOpen(false)}
              >
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

                <div
                  className="relative z-[101] max-w-[95vw] max-h-[90vh] p-3 md:p-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute -top-3 -right-3 md:-top-4 md:-right-4 rounded-full border border-white/30 bg-white/10 text-white
                              w-9 h-9 md:w-10 md:h-10 flex items-center justify-center
                              hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60 transition"
                    onClick={() => setIsPosterOpen(false)}
                    aria-label="Tutup"
                  >
                    ✖
                  </button>

                  <div className="bg-black/30 rounded-lg overflow-hidden shadow-2xl">
                    <img
                      id="poster-title"
                      src={posterImage}
                      alt="Poster TECHNO 2025"
                      className="block max-h-[85vh] max-w-[92vw] md:max-w-[85vw] object-contain"
                      draggable={false}
                    />
                  </div>

                  <div className="mt-3 flex justify-center md:hidden">
                    <button
                      className="px-4 py-2 rounded-lg border border-white/30 text-white bg-white/10
                                hover:bg-white/20 transition"
                      onClick={() => setIsPosterOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Left: Poster */}
            <div className="w-1/3 max-lg:w-full max-lg:h-48">
              <img
                src={posterImage}
                alt="Event Poster"
                className="w-full h-full object-cover cursor-zoom-in"
                onClick={() => setIsPosterOpen(true)}
                role="button"
                aria-label="Perbesar poster"
                tabIndex={0}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setIsPosterOpen(true)}
              />
            </div>

            {/* Right: Info Card */}
            <div
              className="p-10 w-2/3 max-lg:w-full flex flex-col justify-start items-center text-center text-text gap-12
                         border-t-16 border-b-16 border-border shadow-2xl max-lg:px-6"
              style={{
                backgroundImage: `url(${scrollbg})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h2 className="text-5xl">Pembelajaran Bahasa Pemrograman</h2>
              <p className="text-xl leading-relaxed">
                PBP, or Pengenalan Bahasa Programming, is one of the benefits received by participants of TECHNO 2025 Event.
                <br />
                <br />
                In this learning session, the material taught is basic programming languages C and Python (for Senayan Region) which will be useful for you freshmen of the School of Computer Science who have never tried coding.
                <br />
                <br />
                In addition, PBP also will hold a competitive programming competition for beginners, namely <strong>Algorena 2.0!</strong> Of course, there are attractive prizes for the winners. Come on, join PBP!
              </p>

              {/* Location + arrows */}
              <div className="flex flex-row justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-4">
                  <h3 className="text-4xl font-chancery">
                    {current.location || "—"}
                  </h3>

                  <div className="flex flex-row justify-center items-center gap-12 max-lg:gap-0 w-full">
                    <button
                      className="text-5xl cursor-pointer select-none"
                      onClick={handlePrev}
                      aria-label="Previous schedule"
                    >
                      <IoIosArrowBack />
                    </button>

                    <ul className="text-xl text-left p-6 border-border border-2 rounded-xl w-full">
                      <li>📅 {current.date || "—"}</li>
                      <li>📍 {current.location || "—"}</li>
                      <li>🕒 {current.time || "—"}</li>
                      <li>📝 {current.material || "—"}</li>
                    </ul>

                    <button
                      className="text-5xl cursor-pointer select-none"
                      onClick={handleNext}
                      aria-label="Next schedule"
                    >
                      <IoIosArrowForward />
                    </button>
                  </div>

                  {/* Small dots indicator (optional, nice UX) */}
                  {total > 1 && (
                    <div className="flex gap-2 pt-2">
                      {pbpData.map((_, i) => (
                        <span
                          key={i}
                          className={`w-2.5 h-2.5 rounded-full ${i === currentIndex ? "bg-[--color-primary]" : "bg-[--color-border]"}`}
                          aria-label={`Go to slide ${i + 1}`}
                          onClick={() => setCurrentIndex(i)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") setCurrentIndex(i);
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <a href="https://registration.himtibinus.or.id" target="_blank" rel="noreferrer">
                <Button text="Register Now" />
              </a>
            </div>
          </div>
        </section>

        <section className="section flex flex-col items-center gap-12">
          <SectionTitle text="Main Show" />

          <div
            className="w-2/3 max-lg:w-full p-12 flex flex-col items-center text-center relative text-text
                       border-t-16 border-b-16 border-border shadow-2xl rounded-xl"
            style={{
              backgroundImage: `url(${scrollbg})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              src={leaves}
              alt="decoration"
              className="absolute top-[-50px] max-lg:top-[-30px] left-[-30px] max-lg:left-[-15px] w-40 max-lg:w-30 rotate-left-right"
              style={{ zIndex: 5 }}
            />

            <h2 className="text-5xl font-chancery" style={{ fontSize: "3rem" }}>
              An Enchanted Guest Awaits...
            </h2>

            <div className="flex items-center justify-center w-1/2 max-lg:w-full">
              <img src={artistsecret} alt="Guest Border" className="w-full h-full object-contain" />
            </div>

            <div className="flex-1 text-left px-4">
              <p className="text-2xl text-center">
                Who might we invite to this year's TECHNO event? Stay tuned to find out!
              </p>
            </div>
          </div>

          <div className="flex flex-row max-lg:flex-col justify-center gap-12 w-full">
            {eventCards.map((item, index) => (
              <div key={index} className="flex">
                <Card title={item.title} description={item.description} icon={item.icon} />
              </div>
            ))}
          </div>
        </section>

        {/* EXPO SECTION */}
        <section className="p-20 flex flex-col items-center gap-12 max-lg:pb-12 max-lg:px-5">
            <SectionTitle text="Expo" />

            <div className="flex flex-row justify-center items-center w-full gap-12 max-lg:gap-8">
                <button
                className="text-lg md:text-2xl text-text p-4 max-lg:p-3
                            bg-gradient-to-br from-btn-primary to-btn-secondary
                            hover:from-btn-secondary hover:to-btn-primary
                            rounded-full border-2 border-border
                            hover:shadow-[0_5px_15px_rgba(255,215,0,0.6)]
                            transition duration-300 cursor-pointer select-none"
                onClick={expoPrev}
                aria-label="Previous expo"
                >
                <IoIosArrowBack />
                </button>

                <div className="flex flex-col justify-center items-center w-128 max-lg:w-96 max-lg:h-128 h-full shadow-2xl rounded-2xl overflow-hidden">
                  {/* Image */}
                  <div className="w-full">
                      <img
                      src={currentExpo.image || alsut}
                      alt={currentExpo.location || "Expo"}
                      className="w-full object-cover h-48"
                      />
                  </div>

                  {/* Text */}
                  <div
                      className="h-full w-full flex flex-col justify-center items-center
                              bg-no-repeat bg-center bg-cover border-x-20 border-border gap-8 p-12"
                      style={{ backgroundImage: `url(${scrollbg})` }}
                  >
                      <h2 className="text-5xl font-chancery text-center" style={{ color: "#95168A" }}>
                      {currentExpo.location || "—"}
                      </h2>
                      <p className="text-2xl" style={{ color: "#694B21" }}>
                      📅 {currentExpo.date || "—"} <br />
                      🕒 {currentExpo.time || "—"} <br />
                      📍 {currentExpo.venue || "—"}
                      </p>
                  </div>
                </div>

                <button
                className="text-lg md:text-2xl text-text p-4 max-lg:p-3
                            bg-gradient-to-br from-btn-primary to-btn-secondary
                            hover:from-btn-secondary hover:to-btn-primary
                            rounded-full border-2 border-border
                            hover:shadow-[0_5px_15px_rgba(255,215,0,0.6)]
                            transition duration-300 cursor-pointer select-none"
                onClick={expoNext}
                aria-label="Next expo"
                >
                <IoIosArrowForward />
                </button>
            </div>
            </section>
      </div>
    </>
  );
};

export default Events;
