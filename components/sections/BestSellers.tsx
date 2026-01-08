'use client';

import React from 'react';
import { products, Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

const ProductCard = ({ product }: { product: Product }) => {
    const { addToCart } = useCart();

    return (
        <div className="group flex flex-col gap-4">
            <Link href={`/products/${product.id}`} className="relative w-full aspect-4/5 bg-gray-100 rounded-xl overflow-hidden group-hover:shadow-md transition-all block">
                <div
                    className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url("${product.image}")` }}
                    role="img"
                    aria-label={product.alt}
                />
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                    }}
                    className="absolute bottom-4 right-4 size-10 rounded-full bg-white text-[#111218] shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer"
                >
                    <span className="material-symbols-outlined">add_shopping_cart</span>
                </button>
                {product.badge && (
                    <span className={`absolute top-3 left-3 ${product.badge.color} text-white text-xs font-bold px-2 py-1 rounded`}>
                        {product.badge.text}
                    </span>
                )}
            </Link>
            <div>
                <div className="flex justify-between items-start">
                    <Link href={`/products/${product.id}`} className="text-[#111218] text-lg font-bold leading-tight group-hover:text-primary transition-colors">
                        {product.name}
                    </Link>
                    <p className="text-[#111218] text-lg font-bold">
                        {product.originalPrice && <span className="text-gray-400 line-through text-sm mr-1">${product.originalPrice.toFixed(2)}</span>}
                        ${product.price.toFixed(2)}
                    </p>
                </div>
                <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className={`material-symbols-outlined text-sm ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}>
                            star
                        </span>
                    ))}
                    <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                </div>
            </div>
        </div>
    );
};

const BestSellers = () => {
    return (
        <section className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
                <h2 className="text-[#111218] text-3xl font-bold leading-tight tracking-tight">Best Sellers</h2>
                <a className="text-primary font-medium hover:underline flex items-center gap-1" href="#">
                    View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default BestSellers;
