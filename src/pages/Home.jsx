import { useState } from "react";
import { Link } from "react-router-dom";
import Countdown from "react-countdown";

import techno2025logo from "../assets/techno2025logo.png";
import herobg from "../assets/herobg.png"
import videobg from "../assets/videohero.mp4"
import technoimg from "../assets/technoimg.png"
import scrollbg from "../assets/scrollbg.png"
import finalbg from "../assets/finalbg.png"
// import Judul from "../assets/Judul.png"
// import butterfly from "../assets/Kupu-Kupu.png"
// import cardBg from "../assets/Cards.png"
// import roti from "../assets/bread_icon.png"
// import bunny from "../assets/Bunny.png"
// import cardFaq from "../assets/CardFaq.png"

import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Footer from "../components/Footer"
import SectionTitle from "../components/SectionTitle.jsx";
import Card from "../components/Card.jsx";
import { categories, faqData } from "../components/faqData.js";

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState("TECHNO");

    const cardData = [
      {
        title: "Starter Pack",
        description: `Freshmen will receive PBP (Pengenalan Bahasa Pemrograman) training as a provision before entering the first semester lectures and to teach the basics of programming.`,
      },
      {
        title: "Himti Kit",
        description: `After following the TECHNO Main Event, Freshmen will be provided with supplies in the form of a HIMTI KIT, which is a package containing a summary of courses and a collection of software that supports SoCS student lectures`,
      },
      {
        title: "SoCS Inauguration",
        description: `One of the series of TECHNO events is the inauguration of BINUS University's SoCS freshmen which is officially held under the SoCS faculty. Therefore, TECHNO is specifically for Binusian SoCS students.`,
      },
    ];

    return (
      <>
        {/* HERO SECTION */}
        {/* Navbar and Content on top of video */}
        <Navbar />

        <section className="relative w-full h-fit overflow-hidden">
          {/* Background Video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover scale-150 z-[-2]"
            src={videobg}
            autoPlay
            loop
            muted
          />

          {/* Black Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm z-[-1]" />

          <div className="flex flex-col justify-center items-center gap-6 w-full pt-32 pb-20">
            <img
              src={techno2025logo}
              alt="herologo"
              className="w-1/3 max-lg:w-2/3"
            />
            <Countdown
              date={new Date("2025-09-07T00:00:00")}
              renderer={renderer}
            />
            <Button text="Learn more →" />
          </div>
        </section>

        {/* WHAT IS TECHNO SECTION */}

        <section
          className="flex flex-row max-lg:flex-col justify-center w-full h-full"
          id="about"
        >
          <div>
            <img
              src={technoimg}
              alt="technoimg"
              className="w-full h-full max-lg:h-48 object-cover"
            />
          </div>
          <div
            className="h-full flex flex-col justify-between items-start max-lg:items-center gap-20 max-lg:gap-10 bg-no-repeat bg-center bg-cover
                            border-y-30 border-border p-20 max-lg:p-10 w-full"
            style={{ backgroundImage: `url(${scrollbg})` }}
          >
            <h3 className="text-7xl max-lg:text-5xl text-primary max-lg:text-center">
              What is Techno?
            </h3>
            <p className="text-3xl max-lg:text-xl text-text max-lg:text-center">
              TECHNO (Togetherness, Entertainment, and Chasing New Opportunity)
              is a joint event organized by HIMTI BINUS to welcome and
              inaugurate freshmen of the BINUS University School of Computer
              Science (SOCS).
            </p>
            <Link to="/">
              <Button text="Guidebook →"></Button>
            </Link>
          </div>
        </section>

        {/* BENEFIT SECTION */}

        <div
          className="section relative w-full bg-no-repeat bg-top bg-cover flex flex-col items-center justify-start gap-20"
          style={{ backgroundImage: `url(${finalbg})` }}
        >
          <section className="flex flex-col justify-center items-center gap-12 max-lg:gap-8">
            {/* BENEFIT */}

            <SectionTitle text="Benefits"></SectionTitle>

            <div className="flex flex-row max-lg:flex-col items-stretch justify-center gap-12 w-full max-lg:w-2/3 max-md:w-full">
              {cardData.map((item, index) => (
                <div className="w-full">
                  <Card
                    key={index}
                    title={item.title}
                    description={item.description}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Section FAQ */}

          <section className="flex flex-col justify-center items-center gap-12 max-lg:gap-8">
            <SectionTitle text="FAQs"></SectionTitle>

            <div className="flex flex-row max-lg:flex-col items-start gap-12 max-lg:gap-8 w-full px-3">
              {/* Kategori FAQ */}

              <div
                className="w-1/3 max-lg:w-full flex-shrink-0 bg-no-repeat bg-center bg-cover p-10 flex flex-col items-center
                           border-t-16 border-b-16 border-border rounded-xl shadow-2xl"
                style={{
                  backgroundImage: `url(${scrollbg})`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h2 className="text-5xl text-primary mb-6 mt-2">Categories</h2>
                <ul className="flex flex-col gap-3 w-full items-center justify-center">
                  {categories.map((category) => (
                    <li key={category} className="w-full">
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={`text-2xl text-text px-6 py-4 
                       bg-gradient-to-br from-btn-primary to-btn-secondary 
                     hover:from-btn-secondary hover:to-btn-primary 
                       rounded-xl border-2 border-border 
                       hover:shadow-[0_5px_15px_rgba(255,215,0,0.6)]
                       transition duration-300 w-full`}
                      >
                        <p className="text-2xl">{category}</p>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* List FAQ */}

              <div
                className="bg-no-repeat bg-cover p-10 flex flex-col gap-8 overflow-y-auto relative h-auto
                           border-t-16 border-b-16 border-border rounded-xl shadow-2xl"
                style={{
                  backgroundImage: `url(${scrollbg})`,
                  backgroundSize: "100% 100%",
                }}
              >
                {faqData[selectedCategory] &&
                faqData[selectedCategory].length > 0 ? (
                  faqData[selectedCategory].map((faq, index) => (
                    <div key={index} className="text-left">
                      <p className="text-3xl mb-3 text-text">
                        <b>
                          {index + 1}. {faq.question}
                        </b>
                      </p>
                      <p className="text-text text-2xl">{faq.answer}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-[--color-text] text-sm">
                    No FAQs available.
                  </p>
                )}
              </div>
            </div>
          </section>
        </div>

        {/* SPONSORS / CONTACT SECTION */}

        <section className="bg-no-repeat bg-center bg-cover py-16 px-6 md:px-12 w-full h-full" style={{backgroundImage: `url(${scrollbg})`}}>
            <div className="max-w-7xl mx-auto text-center justify-center items-center">
                <h2 className="text-4xl md:text-6xl font-bold text-black-800 mb-10">
                    Our Sponsors:
                </h2>

                <div className="flex justify-center items-center max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                     style={{padding:"1.5rem"}}>
                        <img src={companysponsor} alt="sponsor a" className="w-180 h-auto"/>
                        <img src={companysponsor} alt="sponsor b" className="w-180 h-auto"/>
                        <img src={companysponsor} alt="sponsor c" className="w-180 h-auto"/>
                </div>
            </div>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-black-800 mb-10 mt-35">
                    Contacts:
                </h2>
                <p className="text-2xl mb-5"><strong>WA:</strong> your number</p>
                <p className="text-2xl mb-5"><strong>IG:</strong> your account</p>
                <p className="text-2xl mb-5"><strong>EMAIL:</strong> your.username@gmail.com</p>
            </div>
        </section>
      </>
    );
}

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <p className="text-4xl text-white">🚀 It's Time!</p>;
  } else {
    // Render custom countdown UI
    return (
      <>
      <div className="flex flex-col justify-center items-center">
        <div
            className="flex justify-center items-center px-8 py-4 m-4 bg-no-repeat bg-center bg-cover w-fit border-l-16 border-r-16 border-border rounded-xl shadow-2xl"
            style={{ 
                backgroundImage: `url(${scrollbg})`,
            }}
        >
          <div className="flex flex-row gap-6 text-primary text-5xl font-alice">
            <div>
              {String(days).padStart(2, '0')}
              <span className="block text-sm">Days</span>
            </div>
            <div>
              {String(hours).padStart(2, '0')}
              <span className="block text-sm">Hours</span>
            </div>
            <div>
              {String(minutes).padStart(2, '0')}
              <span className="block text-sm">Minutes</span>
            </div>
            <div>
              {String(seconds).padStart(2, '0')}
              <span className="block text-sm">Seconds</span>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
};
 
export default Home;
