import { useState, useEffect } from "react";

import scrollbg from "../assets/scrollbg.png";
import finalbg from "../assets/finalbg.png";


import Navbar from "../components/Navbar";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import { categories, faqData } from "../data/faqData";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Footer from "../components/Footer";

const Faq = () => {
  const [selectedCategory, setSelectedCategory] = useState("TECHNO");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024); // max-lg breakpoint
  const [openIndex, setOpenIndex] = useState(null); // for mobile toggle

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="section relative w-full bg-no-repeat bg-bottom bg-cover flex flex-col items-center justify-start gap-32"
        style={{
          backgroundImage: `url(${finalbg})`,
        }}
      >
        <section className="flex flex-col justify-center items-center gap-12 px-4 py-30 w-full max-w-6xl">
          <SectionTitle text="FAQs" />

          {/* DESKTOP VERSION */}
          {!isMobile && (
            <div className="flex flex-row items-start gap-12 w-full">
              {/* Kategori FAQ */}
              <div
                className="w-1/3 flex-shrink-0 bg-no-repeat bg-center bg-cover p-10 flex flex-col items-center
              border-t-16 border-b-16 border-border rounded-xl shadow-2xl"
                style={{
                  backgroundImage: `url(${scrollbg})`,
                  backgroundSize: "100% 100%",
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
                className="w-2/3 bg-no-repeat bg-cover p-10 flex flex-col gap-8
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
                      <p className="text-3xl mb-3 text-text font-bold">
                        {index + 1}. {faq.question}
                      </p>
                      <p className="text-text text-2xl">{faq.answer}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-text text-sm">No FAQs available.</p>
                )}
              </div>
            </div>
          )}

          {/* MOBILE/TABLET VERSION */}

          {isMobile && (
            <div
              className="w-full bg-no-repeat bg-cover p-6 flex flex-col gap-6
    border-t-8 border-b-8 border-border rounded-xl shadow-xl"
              style={{
                backgroundImage: `url(${scrollbg})`,
                backgroundSize: "100% 100%",
              }}
            >
              {Object.entries(faqData).flatMap(([category, faqs]) =>
                faqs.map((faq, index) => (
                  <div
                    key={`${category}-${index}`}
                    className="bg-[rgba(255,255,255,0.15)] rounded-xl p-4 backdrop-blur-md border border-border"
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(
                          openIndex === `${category}-${index}`
                            ? null
                            : `${category}-${index}`
                        )
                      }
                      className="w-full"
                    >
                      <p className="w-full text-2xl mb-3 text-text font-bold text-center">
                        {faq.question}
                      </p>
                    </button>
                    {openIndex === `${category}-${index}` && (
                      <p className="text-text text-base mt-3 text-center">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))
              )}
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default Faq;
