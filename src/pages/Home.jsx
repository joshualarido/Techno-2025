import { useState } from "react";
import { Link } from "react-router-dom";

import techno2025logo from "../assets/techno2025logo.png";
import herobg from "../assets/herobg.png"
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

        <section className="flex flex-col bg-no-repeat bg-center bg-cover"
                 style={{ backgroundImage: `url(${herobg})` }}
        >
            <Navbar></Navbar>
            <div className="flex flex-col justify-center items-center gap-20 w-full py-20">
                <img src={techno2025logo} alt="herologo" className="w-1/3"/>
                <a href="#about"><Button text="Learn more →"></Button></a>
            </div>
        </section>

        {/* WHAT IS TECHNO SECTION */}

        <section className="flex flex-row justify-center w-full h-full" id="about">
            <div>
                <img src={technoimg} alt="technoimg" className="h-full w-full object-cover"/>
            </div>
            <div className="section h-full flex flex-col justify-between items-start gap-20 bg-no-repeat bg-center bg-cover
                            border-y-30 border-border inset-shadow-sm inset-shadow-black/50"
                 style={{ backgroundImage: `url(${scrollbg})` }}
            >
                <h3 className="text-7xl text-primary">What is Techno?</h3>
                <p className="text-3xl text-text">TECHNO (Togetherness, Entertainment, and Chasing New Opportunity) is a joint event organized by HIMTI BINUS to welcome and inaugurate freshmen of the BINUS University School of Computer Science (SOCS).</p>
                <Link to="/"><Button text="Guidebook →"></Button></Link>
            </div>
        </section>

      {/* BENEFIT SECTION */}

      <div 
        className="section relative w-full bg-no-repeat bg-top bg-cover flex flex-col items-center justify-start gap-20"
        style={{ backgroundImage: `url(${finalbg})` }}
      >

        <section className="flex flex-col justify-center items-center gap-12">
          {/* BENEFIT */}

          <SectionTitle text="Benefits"></SectionTitle>

          
          <div className="flex flex-row items-stretch justify-center gap-12 w-full">
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

        <section className="flex flex-col justify-center items-center gap-12">
            <SectionTitle text="FAQs"></SectionTitle>

            <div className="flex flex-col md:flex-row items-start gap-12 w-full px-3">

              {/* Kategori FAQ */}

              <div
                className="w-1/3 flex-shrink-0 bg-no-repeat bg-center bg-cover p-10 flex flex-col items-center
                           border-t-16 border-b-16 border-border rounded-xl shadow-2xl"
                style={{
                    backgroundImage: `url(${scrollbg})`,
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
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
      </>
    );
}
 
export default Home;
