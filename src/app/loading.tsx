import React from 'react';

const loading = () => {
    return (


        <div className="flex flex-col items-center justify-center min-h-[60vh] bg-[#0a0a0a] text-white">

            <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-4 border-gray-800 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-[#C2F10E] rounded-full border-t-transparent animate-spin"></div>
            </div>


            <p className="mt-6 text-[#C2F10E] font-semibold tracking-widest uppercase animate-pulse">
                Loading...
            </p>
        </div>
    );
};




export default loading;