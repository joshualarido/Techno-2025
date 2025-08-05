import logoBinus from '../assets/logo-binus.png';
import logoHimti from '../assets/logo-himti.png';
import { FaInstagram } from 'react-icons/fa';
import { SiLine } from 'react-icons/si';
import logoTechno from '../assets/logo-techno.png'

function Footer() {
  return (
    <>
   
    <footer className="bg-gradient-to-b from-sky-400/90 via-blue-800/80 to-blue-800/80 flex flex-col gap-12 py-12">

      <div className="flex flex-row max-lg:flex-row gap-12 max-lg:gap-2 justify-center items-center">
        <img src= {logoTechno} alt="Logo Techno" className="h-[128px] max-lg:h-auto max-lg:w-1/5" />
        <img src= {logoBinus} alt="Logo Binus" className="h-[128px] max-lg:h-auto max-lg:w-1/5" />
        <img src={logoHimti} alt="Logo HIMTI" className="h-[128px] max-lg:h-auto max-lg:w-1/5" />
      </div>
      
      <div className="container mx-auto text-center text-white font-alice">
        <p className="text-xl">© 2025 Himpunan Mahasiswa Teknik Informatika (HIMTI) BINUS UNIVERSITY.</p>
        <p className="text-xl">© All Rights Reserved.</p>
      </div>

    </footer>

        <div className="container mx-auto text-center text-white font-alice">
          <p className="text-xl">
            © 2025 Himpunan Mahasiswa Teknik Informatika (HIMTI) BINUS
            UNIVERSITY.
          </p>
          <p className="text-xl">© All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;