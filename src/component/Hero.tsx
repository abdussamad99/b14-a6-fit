import Image from "next/image";
import bannerImage from "@/assets/banner.png";

const Hero = () => {
    return (
        <section className="container mx-auto py-12 px-4 md:px-0">
            <div className="grid grid-cols-1 gap-25 md:grid-cols-2 items-center p-8 rounded-lg shadow-lg">
                <div>
                    <p className="text-[#c2f800] my-4">WORKOUT LIBRARY</p>
                    <h1 className="text-4xl font-bold mb-4 text-[#ffffff]">
                        TRAIN WITH INTENT. LOG EVERY SET.
                    </h1>
                    <p className="text-[#9ca3af] ">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>
                    <button className="bg-[#c2f800] text-[#000000] py-2 px-4 mt-4 rounded-lg hover:bg-[#1da800]">
                        BROWSE WORKOUTS
                    </button>
                </div>
                <div>
                    <Image src={bannerImage} alt="Hero Banner" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
