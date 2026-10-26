import Image from 'next/image';
import logoImage from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] w-full py-6 mt-auto border-t border-gray-800 text-white">
      <div className='container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4'>
        <div className='flex items-center gap-3'>
          <Image 
            src={logoImage} 
            alt="FitLog Logo" 
            width={32} 
            height={32} 
            className="object-contain" 
          />
          <h1 className="font-bold text-xl tracking-wider">FITLOG</h1>
        </div>
        <p className="text-sm text-gray-400">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
