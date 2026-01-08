import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-background-dark text-white pt-16 pb-8">
            <div className="px-4 md:px-10 lg:px-40 flex justify-center">
                <div className="w-full max-w-[1440px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
                        {/* Brand Column */}
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-2">
                                <div className="size-6 text-white">
                                    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                        <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fillRule="evenodd"></path>
                                    </svg>
                                </div>
                                <span className="text-xl font-bold">ChefSmart</span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                                Elevating home cooking with precision-engineered tools. Design meets function in every piece we create.
                            </p>
                            <div className="flex gap-4 mt-2">
                                {/* Social Icons */}
                                <a className="text-gray-400 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined text-[20px]">public</span></a>
                                <a className="text-gray-400 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined text-[20px]">photo_camera</span></a>
                                <a className="text-gray-400 hover:text-white transition-colors" href="#"><span className="material-symbols-outlined text-[20px]">alternate_email</span></a>
                            </div>
                        </div>
                        {/* Shop Column */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-lg font-bold">Shop</h4>
                            <ul className="flex flex-col gap-2 text-gray-400 text-sm">
                                <li><Link className="hover:text-white transition-colors" href="#">Best Sellers</Link></li>
                                <li><Link className="hover:text-white transition-colors" href="#">New Arrivals</Link></li>
                                <li><Link className="hover:text-white transition-colors" href="#">Knives & Cutlery</Link></li>
                                <li><Link className="hover:text-white transition-colors" href="#">Cookware</Link></li>
                                <li><Link className="hover:text-white transition-colors" href="#">Accessories</Link></li>
                            </ul>
                        </div>
                        {/* Help Column */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-lg font-bold">Help & Support</h4>
                            <ul className="flex flex-col gap-2 text-gray-400 text-sm">
                                <li><Link className="hover:text-white transition-colors" href="#">Track Order</Link></li>
                                <li><Link className="hover:text-white transition-colors" href="#">Shipping & Returns</Link></li>
                                <li><Link className="hover:text-white transition-colors" href="#">Warranty Info</Link></li>
                                <li><Link className="hover:text-white transition-colors" href="#">FAQ</Link></li>
                                <li><Link className="hover:text-white transition-colors" href="#">Contact Us</Link></li>
                            </ul>
                        </div>
                        {/* Company Column */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-lg font-bold">Company</h4>
                            <ul className="flex flex-col gap-2 text-gray-400 text-sm">
                                <li><Link className="hover:text-white transition-colors" href="#">About Us</Link></li>
                                <li><Link className="hover:text-white transition-colors" href="#">Our Blog</Link></li>
                                <li><Link className="hover:text-white transition-colors" href="#">Careers</Link></li>
                                <li><Link className="hover:text-white transition-colors" href="#">Sustainability</Link></li>
                                <li><Link className="hover:text-white transition-colors" href="#">Press</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">© 2023 ChefSmart Kitchen Gadgets. All rights reserved.</p>
                        <div className="flex gap-6 text-gray-500 text-sm">
                            <Link className="hover:text-white transition-colors" href="#">Privacy Policy</Link>
                            <Link className="hover:text-white transition-colors" href="#">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
