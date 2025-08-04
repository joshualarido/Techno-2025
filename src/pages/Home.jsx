import { useState } from "react";
import { Link } from "react-router-dom";

import techno2025logo from "../assets/techno2025logo.png";
import herobg from "../assets/herobg.png"
import technoimg from "../assets/technoimg.png"
import scrollbg from "../assets/scrollbg.png"

import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { categories, faqData } from "../components/faqData.js";

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState("TECHNO");
    return (
        <>
        {/* HERO SECTION */}

        <section className="flex flex-col bg-no-repeat bg-center bg-cover"
                 style={{ backgroundImage: `url(${herobg})` }}
        >
            <Navbar></Navbar>
            <div className="flex flex-col justify-center items-center gap-20 w-full py-20">
                <img src={techno2025logo} alt="herologo" className="w-1/3"/>
                <Link to="/"><Button text="Learn more →"></Button></Link>
            </div>
        </section>

        {/* WHAT IS TECHNO SECTION */}

        <section className="flex flex-row justify-center w-full h-full">
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
               {/* BENEFIT AND FAQ SECTION */}
      <section
        className="relative w-full bg-no-repeat bg-top bg-contain min-h-[2600px] flex flex-col items-center justify-start gap-16 p-20"
        style={{ backgroundImage: `url(${benefitAndFaq})` }}
      >
        {/* BENEFIT */}
        <div
          className="w-[300px] h-[300px] bg-center bg-no-repeat bg-contain flex items-center justify-center"
          style={{ backgroundImage: `url(${Judul})` }}
        >
          <h2 className="text-7xl text-primary">Benefits</h2>
        </div>
        <div className="flex justify-center flex-wrap gap-10 max-w-[2000px]">
          <div className="relative">
            {/* Card 1 */}
            {/* Kupu-kupu pojok kiri atas card */}
            <img
              src={butterfly}
              alt="butterfly"
              className="absolute -top-19 -left-26 w-60 h-auto z-20"
            />
            <div
              className="w-[390px] h-[700px] bg-no-repeat bg-center bg-contain p-5 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
              style={{ backgroundImage: `url(${cardBg})` }}
            >
              <img src={roti} alt="icon-1" className="w-30 h-30 mb-6 mt-20" />
              <h2 className="text-4xl text-primary mb-4">Starter Pack</h2>
              <p className="text-2xl text-text">
                <b>
                  Freshmen will receive PBP (Pengenalan Bahasa Pemrograman)
                  training
                </b>
                <br></br> <br></br> as a provision before entering the first
                semester lectures and to teach the basics of programming.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div
            className="w-[390px] h-[700px] bg-no-repeat bg-center bg-contain p-5 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            style={{ backgroundImage: `url(${cardBg})` }}
          >
            <img src={roti} alt="icon-2" className="w-30 h-30 mb-6  mt-20" />
            <h2 className="text-4xl text-primary mb-4">Himti Kit</h2>
            <p className="text-2xl text-text">
              <b>
                After following the TECHNO Main Event, Freshmen will be provided
                with supplies in the form of a HIMTI KIT,
              </b>
              <br></br>
              <br></br> which is a package containing a summary of courses and a
              collection of software that supports SoCS student lectures
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative">
            {/* Kelinci pojok kanan bawah */}
            <img
              src={bunny}
              alt="bunny"
              className="absolute -bottom-9 -right-11 w-60 h-auto z-20"
            />
            <div
              className="w-[390px] h-[700px] bg-no-repeat bg-center bg-contain p-5 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
              style={{ backgroundImage: `url(${cardBg})` }}
            >
              <img src={roti} alt="icon-3" className="w-30 h-30 mb-6  mt-20" />
              <h2 className="text-4xl text-primary mb-4">SoCS Inauguration</h2>
              <p className="text-2xl text-text">
                <b>
                  One of the series of TECHNO events is the inauguration of
                  BINUS University's SoCS freshmen which is officially held
                  under the SoCS faculty.
                </b>
                <br></br>
                <br></br>
                Therefore, TECHNO is specifically for Binusian SoCS students.
              </p>
            </div>
          </div>
        </div>
        {/* Section FAQ */}
        <div className="w-full max-w-[1600px] mt-6 mx-auto flex flex-col items-center gap-10 px-4">
          <div
            className="w-[300px] h-[300px] bg-center bg-no-repeat bg-contain flex items-center justify-center"
            style={{ backgroundImage: `url(${Judul})` }}
          >
            <h2 className="text-7xl text-primary">FAQs</h2>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-10 w-full px-3">
            {/* Kategori FAQ */}
            <div
              className="w-[400px] min-h-[580px] flex-shrink-0 bg-no-repeat bg-center bg-contain p-10 flex flex-col items-center"
              style={{ backgroundImage: `url(${cardBg})` }}
            >
              <h2 className="text-5xl text-primary mb-6 mt-2">Categories</h2>
              <ul className="flex flex-col gap-3 w-full items-center">
                {categories.map((category) => (
                  <li key={category} className="w-full">
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-text px-10 py-3 
                bg-linear-to-bl from-btn-primary to-btn-secondary
                button-clip
              `}
                    >
                      <p className="text-2xl">{category}</p>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* List FAQ */}
            <div
              className="flex-1 min-h-[580px] bg-no-repeat bg-center bg-contain px-10 py-15 flex flex-col gap-4 overflow-y-auto relative h-auto"
              style={{
                backgroundImage: `url(${cardFaq})`,
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
        </div>

        {/* Tambah jarak bawah */}
        <div className="h-10" />
      </section>

      <Footer></Footer>

        </>
    );
}
 
export default Home;
