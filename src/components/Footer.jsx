import logoBinus from '../assets/logo-binus.png';
import logoHimti from '../assets/logo-himti.png';
import { FaInstagram } from 'react-icons/fa';
import { SiLine } from 'react-icons/si';
import logoTechno from '../assets/logo-techno.png'

function Footer() {
  return (
    <>
   
    <footer className="bg-linear-to-b from-primary to-secondary section flex flex-col gap-12 py-12">

      <div className="flex flex-row gap-12 justify-center">
        <img src= {logoTechno} alt="Logo Techno" className="h-[128px]" />
        <img src= {logoBinus} alt="Logo Binus" className="h-[128px]" />
        <img src={logoHimti} alt="Logo HIMTI" className="h-[128px]" />
      </div>
      
      <div className="container mx-auto text-center text-white font-alice">
        <p className="text-xl">© 2025 Himpunan Mahasiswa Teknik Informatika (HIMTI) BINUS UNIVERSITY.</p>
        <p className="text-xl">© All Rights Reserved.</p>
      </div>

    </footer>

    </>
  )
}

export default Footer;