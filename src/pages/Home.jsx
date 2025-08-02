import { Link } from "react-router-dom";

import techno2025logo from "../assets/techno2025logo.png";
import herobg from "../assets/herobg.png"
import technoimg from "../assets/technoimg.png"
import scrollbg from "../assets/scrollbg.png"

import Navbar from "../components/Navbar";
import Button from "../components/Button";

const Home = () => {
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

        </>
    );
}
 
export default Home;