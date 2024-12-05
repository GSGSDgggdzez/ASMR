import React from 'react';
import { Link } from '@inertiajs/react';

export default function HeroMain() {
    return (
        <div className="relative h-[70vh] overflow-hidden">
            {/* Animated Background */}
            <div id="bg-wrap" className="absolute inset-0 -z-10">
            <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5">
                            <animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite"></animate>
                            <stop offset="0%" stop-color="rgba(255, 0, 255, 1)"></stop>
                            <stop offset="100%" stop-color="rgba(255, 0, 255, 0)"></stop>
                        </radialGradient>
                        <radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5">
                            <animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite"></animate>
                            <stop offset="0%" stop-color="rgba(255, 255, 0, 1)"></stop>
                            <stop offset="100%" stop-color="rgba(255, 255, 0, 0)"></stop>
                        </radialGradient>
                        <radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5">
                            <animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite"></animate>
                            <stop offset="0%" stop-color="rgba(0, 255, 255, 1)"></stop>
                            <stop offset="100%" stop-color="rgba(0, 255, 255, 0)"></stop>
                        </radialGradient>
                    </defs>
                    <rect x="13.744%" y="1.18473%" width="100%" height="100%" fill="url(#Gradient1)" transform="rotate(334.41 50 50)">
                        <animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite"></animate>
                        <animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite"></animate>
                        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="7s" repeatCount="indefinite"></animateTransform>
                    </rect>
                    <rect x="-2.17916%" y="35.4267%" width="100%" height="100%" fill="url(#Gradient2)" transform="rotate(255.072 50 50)">
                        <animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite"></animate>
                        <animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite"></animate>
                        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="12s" repeatCount="indefinite"></animateTransform>
                    </rect>
                    <rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#Gradient3)" transform="rotate(139.903 50 50)">
                        <animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"></animate>
                        <animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite"></animate>
                        <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="9s" repeatCount="indefinite"></animateTransform>
                    </rect>
                </svg>
            </div>

            {/* Hero Content */}
            <div className="relative container mx-auto px-6 pt-16 pb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                    Experience the Power of <span className="text-blue-600">ASMR</span>
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-3xl mx-auto">
                    Discover a world of relaxation and focus with our curated collection of ASMR content
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/explore"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                    >
                        Start Exploring
                    </Link>
                    <Link
                        href="/about"
                        className="px-6 py-3 bg-white text-blue-600 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors duration-300 border-2 border-blue-600"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
}




