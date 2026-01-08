'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartPage() {
    const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 px-4 text-center">
                <span className="material-symbols-outlined text-6xl text-gray-300">shopping_basket</span>
                <h1 className="text-2xl font-bold text-[#111218]">Your cart is empty</h1>
                <p className="text-gray-500">Looks like you haven't added anything to your cart yet.</p>
                <Link
                    href="/"
                    className="mt-4 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col w-full min-h-screen pt-10 pb-20 px-4 md:px-10 lg:px-40">
            <h1 className="text-3xl font-black text-[#111218] mb-8">Shopping Cart</h1>

            <div className="flex flex-col lg:flex-row gap-10">
                {/* Cart Items */}
                <div className="flex-1 flex flex-col gap-6">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex gap-4 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                            <div
                                className="w-24 h-24 rounded-lg bg-center bg-cover shrink-0 bg-gray-100"
                                style={{ backgroundImage: `url("${item.image}")` }}
                            />
                            <div className="flex-1 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-[#111218] text-lg">{item.name}</h3>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-gray-400 hover:text-red-500 transition-colors"
                                    >
                                        <span className="material-symbols-outlined">delete</span>
                                    </button>
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="size-8 flex items-center justify-center hover:bg-white rounded transition-colors"
                                        >
                                            -
                                        </button>
                                        <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="size-8 flex items-center justify-center hover:bg-white rounded transition-colors"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <span className="font-bold text-[#111218] text-lg">${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="w-full lg:w-96 h-fit bg-white p-6 rounded-2xl border border-gray-100 shadow-sm sticky top-24">
                    <h2 className="text-xl font-bold text-[#111218] mb-6">Order Summary</h2>

                    <div className="flex justify-between items-center mb-4 text-gray-600">
                        <span>Subtotal</span>
                        <span className="font-bold text-[#111218]">${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4 text-gray-600">
                        <span>Shipping</span>
                        <span className="text-green-600 font-medium">Free</span>
                    </div>

                    <div className="h-px bg-gray-100 w-full my-4" />

                    <div className="flex justify-between items-center mb-6">
                        <span className="text-lg font-bold text-[#111218]">Total</span>
                        <span className="text-2xl font-black text-[#111218]">${cartTotal.toFixed(2)}</span>
                    </div>

                    <button className="w-full h-14 bg-primary hover:bg-blue-700 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}
