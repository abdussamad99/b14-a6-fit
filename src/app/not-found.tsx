import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a] text-white px-4 text-center">

      
      <h1 className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#C2F10E] to-green-600 tracking-widest mb-4">
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-wide">
        Page Not Found
      </h2>

      <p className="text-gray-400 max-w-md mb-8">
        Oops! The page you are looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back to your workout.
      </p>

      <Link
        href="/"
        className="bg-[#C2F10E] text-black font-bold py-3 px-8 rounded-full hover:bg-[#a8d10c] transition-all transform hover:scale-105"
      >
        Back to Home
      </Link>

    </div>
  );
};

export default NotFound;