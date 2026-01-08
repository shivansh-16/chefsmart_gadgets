import React from 'react';

const Features = () => {
    return (
        <section className="flex flex-col gap-10 py-10">
            <div className="flex flex-col md:flex-row gap-8 justify-between items-end">
                <h2 className="text-[#111218] text-3xl font-black leading-tight tracking-[-0.033em] max-w-[500px]">
                    Why Choose ChefSmart?
                </h2>
                <p className="text-[#636888] text-base max-w-[400px] text-left md:text-right">
                    We are committed to upgrading your cooking journey with tools that last a lifetime.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-1 gap-4 rounded-xl border border-[#dcdde5] bg-white p-8 flex-col hover:border-primary/50 transition-colors">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[28px]">verified</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-[#111218] text-xl font-bold leading-tight">Premium Quality</h3>
                        <p className="text-[#636888] text-sm leading-relaxed">
                            Crafted with top-tier materials like high-carbon stainless steel and food-grade silicone for lasting durability.
                        </p>
                    </div>
                </div>
                <div className="flex flex-1 gap-4 rounded-xl border border-[#dcdde5] bg-white p-8 flex-col hover:border-primary/50 transition-colors">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[28px]">local_shipping</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-[#111218] text-xl font-bold leading-tight">Fast Shipping</h3>
                        <p className="text-[#636888] text-sm leading-relaxed">
                            Get your gadgets quickly with our expedited shipping options. Free shipping on all orders over $75.
                        </p>
                    </div>
                </div>
                <div className="flex flex-1 gap-4 rounded-xl border border-[#dcdde5] bg-white p-8 flex-col hover:border-primary/50 transition-colors">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[28px]">security</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-[#111218] text-xl font-bold leading-tight">30-Day Guarantee</h3>
                        <p className="text-[#636888] text-sm leading-relaxed">
                            Shop with confidence. If you don't love it, return it within 30 days for a full refund, no questions asked.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
