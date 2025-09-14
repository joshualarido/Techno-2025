import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Countdown from "react-countdown";

import techno2025logo from "../assets/techno2025logo.png";
import videobg from "../assets/videohero.mp4";
import technoimg from "../assets/technoimg.png";
import scrollbg from "../assets/scrollbg.png";
import finalbg from "../assets/finalbg.png";
import breadIcon from "../assets/bread_icon.png";
import cookieIcon from "../assets/cookie1.png";
import leafIcon from "../assets/leaf1.png";
import breadbutterfly from "../assets/breadbutterfly.png";
import caterpillar1 from "../assets/caterpillar1.png";
import leaves from "../assets/leaves.png";
import jobstreet from "../assets/jobstreet.png"
import dewaweb from "../assets/dewaweb.png"
import cbn from "../assets/cbn.png"
import alfagift from "../assets/alfagift.png"

import Navbar from "../components/Navbar";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle.jsx";
import Card from "../components/Card.jsx";
import { categories, faqData } from "../data/faqData.js";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("TECHNO");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [openIndex, setOpenIndex] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMoreFaq = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
    navigate("/faq");
  };

  const sponsors = [
    { name: "JobStreet", logo: jobstreet, tier: "S", href: "https://www.jobstreet.co.id" },
    { name: "CBN Internet", logo: cbn, tier: "L", href: "https://www.cbn.id/en" },
    { name: "Alfagift", logo: alfagift, tier: "M", href: "https://alfagift.id/" },
  ];

  const cardData = [
    {
      title: "Starter Pack",
      description:
        "Freshmen will receive PBP (Pengenalan Bahasa Pemrograman) training as a provision before entering the first semester lectures and to teach the basics of programming.",
      icon: breadIcon
    },
    {
      title: "Himti Kit",
      description:
        "After following the TECHNO Main Event, Freshmen will be provided with supplies in the form of a HIMTI KIT, which is a package containing a summary of courses and a collection of software that supports SoCS student lectures",
      icon: cookieIcon
    },
    {
      title: "SoCS Inauguration",
      description:
        "One of the series of TECHNO events is the inauguration of BINUS University's SoCS freshmen which is officially held under the SoCS faculty. Therefore, TECHNO is specifically for Binusian SoCS students.",
      icon: leafIcon
    }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <Navbar />
      <section className="relative w-full h-fit overflow-hidden pt-12">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover scale-150 z-[-2]"
          src={videobg}
          autoPlay
          loop
          muted
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm z-[-1]" />
        <div className="flex flex-col justify-center items-center gap-6 w-full pt-32 pb-20">
          <img src={techno2025logo} alt="herologo" className="w-1/3 max-lg:w-2/3 bob-animation" />
          <div className="flex flex-row max-xl:flex-col max-xl:gap-4 justify-center items-center text-center">
            <Countdown date={new Date("2025-09-28T11:30:00")} renderer={gjktRender} />
          </div>
          <a href="#about">
            <Button text="Learn more →" />
          </a>
        </div>
      </section>

      {/* WHAT IS TECHNO SECTION */}
      <section className="relative flex flex-row max-lg:flex-col justify-center w-full h-full" id="about">
        <img
          src={breadbutterfly} 
          alt="decorative"
          className="
            absolute 
            top-[-60px] max-lg:top-[-30px] right-4 
            w-20 sm:w-24 md:w-28 lg:w-32 xl:w-60
            rotate-left-right
          "
          style={{ zIndex: 5 }}
        />
        <div>
          <img src={technoimg} alt="technoimg" className="w-full h-full max-lg:h-100 object-cover" />
        </div>
        <div
          className="h-full flex flex-col justify-between items-start max-lg:items-center gap-20 max-lg:gap-10 bg-no-repeat bg-center bg-cover border-y-30 border-border p-20 max-lg:p-10 w-full"
          style={{ backgroundImage: `url(${scrollbg})` }}
        >
          <h3 className="text-7xl max-lg:text-5xl text-primary max-lg:text-center">What is Techno?</h3>
          <p className="text-3xl max-lg:text-xl text-text max-lg:text-center">
            TECHNO (Togetherness, Entertainment, and Chasing New Opportunity) is a joint event organized by HIMTI BINUS to welcome and inaugurate freshmen of the BINUS University School of Computer Science (SOCS).
          </p>
          <Link to="https://bit.ly/TECHNO2025RegisGuide" target="_blank">
            <Button text="Guidebook →" />
          </Link>
        </div>
      </section>

      {/* BENEFITS + FAQ + SPONSORS / CONTACT */}
      <div
        className="section relative w-full bg-no-repeat bg-bottom bg-cover flex flex-col items-center justify-start gap-32 max-lg:min-h-[10px]"
        style={{
          backgroundImage: `url(${finalbg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: isMobile ? "150% 6300px" : "cover"
        }}
      >
        {/* BENEFITS */}
        <section className="flex flex-col justify-center items-center gap-12 max-lg:gap-8">
          <SectionTitle text="Benefits" />
          <div className="relative flex flex-row max-lg:flex-col items-stretch justify-center gap-12 w-full max-lg:w-2/3 max-md:w-full">
            <img
              src={caterpillar1}
              alt="cookie2"
              className="
                absolute 
                top-[-100px] max-lg:top-[-50px] left-[-30px] max-lg:left-[-20px]
                w-50 max-lg:w-32
                rotate-left-right
              "
              style={{ zIndex: 5 }}
            />

            <img
              src={leaves}
              alt="leaves"
              className="
                absolute 
                bottom-[-50px] max-lg:bottom-[-30px] right-[-30px] max-lg:right-[-20px]
                w-42 max-lg:w-32
                rotate-left-right
              "
              style={{ zIndex: 5 }}
            />
            {cardData.map((item, index) => (
              <div key={index} className="w-full">
                <Card title={item.title} description={item.description} icon={item.icon} />
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="flex flex-col justify-center items-center gap-12 max-lg:gap-8">
          <SectionTitle text="FAQs" />
          {!isMobile && (
            <div className="flex flex-row max-lg:flex-col items-start gap-12 max-lg:gap-8 w-full px-3">
              {/* Categories */}
              <div
                className="w-1/3 max-lg:w-full flex-shrink-0 bg-no-repeat bg-center bg-cover p-10 flex flex-col items-center border-t-16 border-b-16 border-border rounded-xl shadow-2xl"
                style={{
                  backgroundImage: `url(${scrollbg})`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat"
                }}
              >
                <h2 className="text-5xl text-primary mb-6 mt-2">Categories</h2>
                <ul className="flex flex-col gap-3 w-full items-center justify-center">
                  {categories.slice(0, 3).map((category) => (
                    <li key={category} className="w-full">
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className="text-2xl text-text px-6 py-4 bg-gradient-to-br from-btn-primary to-btn-secondary hover:from-btn-secondary hover:to-btn-primary rounded-xl border-2 border-border hover:shadow-[0_5px_15px_rgba(255,215,0,0.6)] transition duration-300 w-full"
                      >
                        <p className="text-2xl">{category}</p>
                      </button>
                    </li>
                  ))}
                  <div className="w-full flex justify-end px-4 pt-10">
                    <Link to="/faq" onClick={handleMoreFaq}>
                      <Button text="More FAQs →" />
                    </Link>
                  </div>
                </ul>
              </div>

              {/* List */}
              <div
                className="bg-no-repeat bg-cover p-10 flex flex-col gap-8 overflow-y-auto relative h-auto border-t-16 border-b-16 border-border rounded-xl shadow-2xl"
                style={{
                  backgroundImage: `url(${scrollbg})`,
                  backgroundSize: "100% 100%"
                }}
              >
                {faqData[selectedCategory]?.length > 0 ? (
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
                  <p className="text-[--color-text] text-sm">No FAQs available.</p>
                )}
              </div>
            </div>
          )}

          {/* FAQ MOBILE/TABLET */}
          {isMobile && (
            <>
              <div
                className="w-full bg-no-repeat bg-cover p-6 flex flex-col gap-6 border-t-8 border-b-8 border-border rounded-xl shadow-xl"
                style={{
                  backgroundImage: `url(${scrollbg})`,
                  backgroundSize: "100% 100%"
                }}
              >
                {Object.entries(faqData)
                  .flatMap(([category, faqs]) =>
                    faqs.map((faq, index) => ({ ...faq, key: `${category}-${index}` }))
                  )
                  .slice(0, 4)
                  .map((faq) => (
                    <div
                      key={faq.key}
                      className="bg-[rgba(255,255,255,0.15)] rounded-xl p-4 backdrop-blur-md border border-border"
                    >
                      <button
                        onClick={() => setOpenIndex(openIndex === faq.key ? null : faq.key)}
                        className="w-full"
                      >
                        <p className="w-full text-2xl mb-3 text-text font-bold text-center">{faq.question}</p>
                      </button>
                      {openIndex === faq.key && (
                        <p className="text-text text-base mt-3 text-center">{faq.answer}</p>
                      )}
                    </div>
                  ))}
              </div>
              <div className="w-full flex justify-center mt-4">
                <Link to="/faq" onClick={handleMoreFaq}>
                  <Button text="More FAQs →" />
                </Link>
              </div>
            </>
          )}
        </section>

        {/* SPONSORS / CONTACT */}
        <section className="w-full h-full flex flex-col justify-center items-center gap-16 max-lg:pb-12 pt-30">
          <div className="flex flex-col justify-center items-center gap-4">
            <SectionTitle text="Our Sponsors" />
            
            <div className="grid gap-6 sm:gap-8 w-full
                            [grid-template-columns:repeat(auto-fit,minmax(140px,1fr))]">
              {sponsors.map((s) => (
                <SponsorLogo key={s.name} {...s} />
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <SectionTitle text="Powered By" />
            <div>
              <img src={dewaweb} alt="" className="w-64 rounded-full" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <SectionTitle text="Contact Us" />
            <div className="flex flex-col justify-center items-center gap-4">
              <ContactLink href="https://www.instagram.com/techno2025official/" icon={<FaInstagram />} text="@techno2025official" />
            </div>
            <div className="flex flex-col justify-center items-center gap-12">
              <ContactLink href="https://www.tiktok.com/@techno.himti" icon={<FaTiktok />} text="@techno.himti" />
            </div>
            <div className="flex flex-col justify-center items-center gap-12">
              <ContactLink href="mailto:himtitechno24@gmail.com" icon={<FiMail />} text="himtitechno25@gmail.com" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const ContactLink = ({ href, icon, text }) => (
  <a
    className="text-lg md:text-2xl text-text px-4 py-3 md:px-6 md:py-4 bg-gradient-to-br from-btn-primary to-btn-secondary hover:from-btn-secondary hover:to-btn-primary rounded-xl border-2 border-border hover:shadow-[0_5px_15px_rgba(255,215,0,0.6)] transition duration-300 flex flex-row justify-center items-center gap-4 cursor-pointer"
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    <h1 className="text-3xl max-lg:text-2xl text-text">{icon}</h1>
    {text}
  </a>
);

const mlgRender = ({ days, hours, minutes, seconds, completed }) =>
  completed ? (
    <SectionTitle text="Malang is Live Now! 🍭🐇" />
  ) : (
    <div className="flex flex-col justify-center items-center">
      <div
        className="flex flex-col gap-4 justify-center items-center px-8 py-4 m-4 bg-no-repeat bg-center bg-cover w-fit border-l-16 border-r-16 border-border rounded-xl shadow-2xl"
        style={{ backgroundImage: `url(${scrollbg})` }}
      >
        <div className="flex flex-row gap-6 text-primary text-5xl font-alice">
          <TimeBlock value={days} label="Days" />
          <TimeBlock value={hours} label="Hours" />
          <TimeBlock value={minutes} label="Minutes" />
          <TimeBlock value={seconds} label="Seconds" />
        </div>
        <h2 className="text-2xl text-text text-center font-alice">MLG - Sunday, 7 September 2025</h2>
      </div>
    </div>
  );
  
const gjktRender = ({ days, hours, minutes, seconds, completed }) =>
  completed ? (
    <SectionTitle text="Greater Jakarta is Live Now! 🍭🐇" />
  ) : (
    <div className="flex flex-col justify-center items-center">
      <div
        className="flex flex-col gap-4 justify-center items-center px-8 py-4 m-4 bg-no-repeat bg-center bg-cover w-fit border-l-16 border-r-16 border-border rounded-xl shadow-2xl"
        style={{ backgroundImage: `url(${scrollbg})` }}
      >
        <div className="flex flex-row gap-6 text-primary text-5xl font-alice">
          <TimeBlock value={days} label="Days" />
          <TimeBlock value={hours} label="Hours" />
          <TimeBlock value={minutes} label="Minutes" />
          <TimeBlock value={seconds} label="Seconds" />
        </div>
        <h2 className="text-2xl text-text text-center font-alice">GJKT - Sunday, 28 September 2025</h2>
      </div>
    </div>
  );
  
const smgRender = ({ days, hours, minutes, seconds, completed }) =>
  completed ? (
    <SectionTitle text="Semarang is Live Now! 🍭🐇" />
  ) : (
    <div className="flex flex-col justify-center items-center">
      <div
        className="flex flex-col gap-4 justify-center items-center px-8 py-4 m-4 bg-no-repeat bg-center bg-cover w-fit border-l-16 border-r-16 border-border rounded-xl shadow-2xl"
        style={{ backgroundImage: `url(${scrollbg})` }}
      >
        <div className="flex flex-row gap-6 text-primary text-5xl font-alice">
          <TimeBlock value={days} label="Days" />
          <TimeBlock value={hours} label="Hours" />
          <TimeBlock value={minutes} label="Minutes" />
          <TimeBlock value={seconds} label="Seconds" />
        </div>
        <h2 className="text-2xl text-text text-cente font-alice">SMG - Sunday, 14 September 2025</h2>
      </div>
    </div>
  );

const TimeBlock = ({ value, label }) => (
  <div>
    <p className="font-alice max-lg:text-4xl">{String(value).padStart(2, "0")}</p>
    <span className="block text-sm">{label}</span>
  </div>
);

const TIER_HEIGHT = {
  L: "h-20 md:h-24", // ~6 units
  M: "h-16 md:h-20", // ~5 units
  S: "h-12 md:h-16", // ~4 units
};

const SponsorLogo = ({ name, logo, tier = "M", href }) => (
  <a
    href={href || "#"}
    target="_blank"
    rel="noreferrer"
    className="group inline-flex items-center justify-center rounded-xl border border-border/40 bg-white p-6 transition shadow-sm"
    aria-label={name}
  >
    <img
      src={logo}
      alt={name}
      className={`${TIER_HEIGHT[tier] || TIER_HEIGHT.M} w-auto object-contain`}
      loading="lazy"
      draggable={false}
    />
  </a>
);

export default Home;
