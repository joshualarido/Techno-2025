import { Link } from "react-router-dom";

import techno2025logo from "../assets/techno2025logo.png";

import Button from "./Button";

const Navbar = () => {
    return (
        <>
        <nav className="section py-8 flex flex-row justify-between items-center">
            <img src={techno2025logo} alt="technologo" className="w-30"/>
            <div className="flex flex-row justify-center items-center gap-10 text-white">
                <Link to="/"><p className="text-2xl hover:text-shadow-[0_5px_15px_rgba(255,215,0,0.6)]">《 Home 》</p></Link>
                <Link to="/events"><p className="text-2xl hover:text-shadow-[0_5px_15px_rgba(255,215,0,1)]">《 Events 》</p></Link>
            </div>
            <a href="https://registration.himtibinus.or.id" target="_blank">
                <Button text="Register"></Button>
            </a>
        </nav>
        </>
    );
}
 
export default Navbar;