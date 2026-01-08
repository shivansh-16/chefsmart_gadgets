'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ProductPage() {
    const params = useParams();
    const id = params.id as string;
    const { addToCart } = useCart();

    const product = products.find((p) => p.id === id);

    if (!product) {
        return notFound();
    }

    return (
        <div className="flex flex-col w-full min-h-screen pt-10 pb-20">
            <div className="px-4 md:px-10 lg:px-40 flex justify-center">
                <div className="w-full max-w-[1200px] flex flex-col md:flex-row gap-10 lg:gap-20">

                    {/* Image Section */}
                    <div className="flex-1">
                        <div className="relative w-full aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
                            <div
                                className="w-full h-full bg-center bg-no-repeat bg-cover"
                                style={{ backgroundImage: `url("${product.image}")` }}
                                role="img"
                                aria-label={product.alt}
                            />
                            {product.badge && (
                                <span className={`absolute top-4 left-4 ${product.badge.color} text-white text-sm font-bold px-3 py-1.5 rounded`}>
                                    {product.badge.text}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="flex-1 flex flex-col gap-6 pt-4">
                        <div className="flex flex-col gap-2">
                            <Link href="/" className="text-gray-500 hover:text-primary transition-colors text-sm font-medium flex items-center gap-1 mb-2">
                                <span className="material-symbols-outlined text-sm">arrow_back</span> Back to Home
                            </Link>
                            <h1 className="text-[#111218] text-3xl md:text-4xl font-black leading-tight">
                                {product.name}
                            </h1>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center text-yellow-400 text-sm">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className={`material-symbols-outlined fill-current ${i < Math.floor(product.rating) ? '' : 'text-gray-300'}`}>
                                            star
                                        </span>
                                    ))}
                                </div>
                                <span className="text-gray-500 text-sm">({product.reviews} reviews)</span>
                            </div>
                        </div>

                        <div className="flex items-baseline gap-3">
                            <span className="text-[#111218] text-3xl font-bold">
                                ${product.price.toFixed(2)}
                            </span>
                            {product.originalPrice && (
                                <span className="text-gray-400 line-through text-lg">
                                    ${product.originalPrice.toFixed(2)}
                                </span>
                            )}
                        </div>

                        <div className="h-px bg-gray-200 w-full" />

                        <p className="text-[#636888] text-base leading-relaxed">
                            {product.description || "Experience professional quality with this premium kitchen tool. Designed for durability and precision, it's the perfect addition to any modern kitchen."}
                        </p>

                        <div className="flex flex-col gap-4 mt-4">
                            <div className="flex gap-4">
                                <button
                                    onClick={() => addToCart(product)}
                                    className="flex-1 h-12 bg-primary hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                                >
                                    <span className="material-symbols-outlined">add_shopping_cart</span> Add to Cart
                                </button>
                                <button className="size-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-500">
                                    <span className="material-symbols-outlined">favorite</span>
                                </button>
                            </div>
                            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                                <span className="material-symbols-outlined text-base">local_shipping</span>
                                Free shipping on orders over $75
                            </div>
                        </div>

                        {/* Additional Info Accordions (Mock) */}
                        <div className="flex flex-col border-t border-gray-200 mt-6">
                            <div className="py-4 border-b border-gray-200 flex justify-between items-center cursor-pointer group">
                                <span className="font-bold text-[#111218] group-hover:text-primary transition-colors">Product Specifications</span>
                                <span className="material-symbols-outlined text-gray-400">add</span>
                            </div>
                            <div className="py-4 border-b border-gray-200 flex justify-between items-center cursor-pointer group">
                                <span className="font-bold text-[#111218] group-hover:text-primary transition-colors">Shipping & Returns</span>
                                <span className="material-symbols-outlined text-gray-400">add</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
