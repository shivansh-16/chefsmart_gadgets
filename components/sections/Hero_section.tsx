import React from 'react';

const Hero_section = () => {
    return (
        <div className="w-full">
            <div
                className="flex min-h-[550px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-8 relative"
                data-alt="Modern kitchen countertop with fresh vegetables and chef tools"
                style={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCDX53S8YWjSTF8JGhvlRfoLa0RnBzfdPUkvN5HDzbtGnhwq0aPkKtkE9Rln32c-TmctJxFsEBxL07kUSsMOnX0ite5ousZfVQhdnXXhO9JBj79V-nhQPWzOmrFj0P4qcJfyLq19Z3FPCXHFt_T6k6KCoOsHtqaCy8JVzMDZCYwFKId-n3NMt8ejahueSMUMacG4XL_d3A7IddJP4uPPBXQL9EKBQLB23tUqvsEeP8HPOk-xXBlp0JO3BQL5t8StYhThQuL9Y3MpNk")'
                }}
            >
                <div className="relative z-10 flex flex-col gap-4 text-center max-w-[800px]">
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] drop-shadow-sm font-display">
                        Master Your Kitchen with ChefSmart.
                    </h1>
                    <h2 className="text-gray-100 text-base md:text-lg font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
                        Premium tools designed for the modern home chef. Experience precision, durability, and style in every slice, dice, and stir.
                    </h2>
                </div>
                <div className="relative z-10 flex flex-wrap gap-4 justify-center mt-4">
                    <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-blue-700 text-white text-base font-bold transition-all shadow-lg hover:shadow-xl cursor-pointer">
                        Shop Best Sellers
                    </button>
                    <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-white/90 hover:bg-white text-[#111218] text-base font-bold backdrop-blur-sm transition-all shadow-lg cursor-pointer">
                        Explore Catalog
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero_section;

