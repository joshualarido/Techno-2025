// import logoBinus from '../assets/logo-binus.png';
// import logoHimti from '../assets/logo-himti.png';
// import { FaInstagram } from 'react-icons/fa';
// import { SiLine } from 'react-icons/si';
// import logoTechno from '../assets/Logo-Techno.png'

function Footer() {
  return (
    <>
   
    <footer className="bg-purple-800 text-white py-6">

      <div className="flex flex-row gap-4 justify-center mb-4">
        {/* <img src= {logoTechno} alt="Logo Techno" className="h-35 w-35" /> */}
        {/* <img src= {logoBinus} alt="Logo Binus" className="h-28 w-45" />
        <img src={logoHimti} alt="Logo HIMTI" className="h-30 w-30" /> */}
      </div>
      
      <div className="container mx-auto text-center">
        <p className="text-lg">© 2025 Himpunan Mahasiswa Teknik Informatika (HIMTI) BINUS UNIVERSITY.</p>
        <p className="text-lg">© All Rights Reserved.</p>
      </div>

      <div className="flex gap-4 text-3xl justify-center pt-3">
        <a href="https://instagram.com/himti_binus" target="_blank" rel="noopener noreferrer">
          {/* <FaInstagram className="hover:text-pink-400" /> */}
        </a>
        <a href="https://line.me/ti/p/yourlineid" target="_blank" rel="noopener noreferrer">
          {/* <SiLine className="hover:text-green-400" /> */}
        </a>
      </div>

    </footer>

    </>
  )
}

export default Footer;