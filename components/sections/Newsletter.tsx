'use client';

import React, { useState, FormEvent } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'success'>('idle');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!email) return;
        // Mock submission
        setTimeout(() => {
            setStatus('success');
            setEmail('');
        }, 500);
    };

    return (
        <section className="relative rounded-2xl bg-primary/5 border border-primary/10 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 p-10 lg:p-16">
                <div className="flex flex-col gap-3 max-w-lg">
                    <h2 className="text-[#111218] text-3xl font-black tracking-tight">Join the ChefSmart Club</h2>
                    <p className="text-[#636888] text-lg">
                        Subscribe for exclusive recipes, cooking tips, and get <span className="font-bold text-primary">10% off</span> your first order.
                    </p>
                </div>
                <div className="w-full max-w-md">
                    {status === 'success' ? (
                        <div className="h-full flex items-center justify-center p-6 bg-green-50 rounded-lg border border-green-200 text-green-700 font-bold animate-in fade-in zoom-in">
                            <span className="material-symbols-outlined mr-2">check_circle</span>
                            Thanks for subscribing!
                        </div>
                    ) : (
                        <>
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                                <input
                                    className="flex-1 h-12 rounded-lg border border-gray-300 bg-white px-4 text-[#111218] focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    placeholder="Enter your email address"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button
                                    className="h-12 px-6 rounded-lg bg-primary hover:bg-blue-700 text-white font-bold transition-colors cursor-pointer"
                                    type="submit"
                                >
                                    Subscribe
                                </button>
                            </form>
                            <p className="text-xs text-gray-500 mt-3 text-center sm:text-left">
                                By subscribing, you agree to our Terms of Service and Privacy Policy.
                            </p>
                        </>
                    )}
                </div>
            </div>
            {/* Decorative Circles */}
            <div className="absolute -top-12 -right-12 size-40 rounded-full bg-primary/5 pointer-events-none"></div>
            <div className="absolute -bottom-12 -left-12 size-32 rounded-full bg-primary/5 pointer-events-none"></div>
        </section>
    );
};

export default Newsletter;
