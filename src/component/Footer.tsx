import Image from 'next/image';
import logoImage from "@/assets/logo.png";

const Footer = () => {
    return (
        <div className='container mx-auto flex justify-between mb-7 text-white'>
            <Image src={logoImage}  alt="footer Banner" />


            <h1>FITLOG</h1>
            <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>
    );
};

export default Footer;