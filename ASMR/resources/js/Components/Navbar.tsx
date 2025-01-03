import { Link } from '@inertiajs/react';
import { useState } from 'react';
import ApplicationLogo from './ApplicationLogo';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    // color is #38bdf8

    const navLinkStyles = "relative text-gray-900 hover:text-[#38bdf8] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#38bdf8] after:transition-all hover:after:w-full";

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <ApplicationLogo />
                        </div>
                        
                        {/* Desktop Navigation */}
                        <div className="hidden md:ml-6 md:flex md:space-x-8">
                            <Link href="/dashboard" className={navLinkStyles}>
                                Search
                            </Link>
                            <Link href="/explore" className={navLinkStyles}>
                                Explore
                            </Link>
                            <Link href="/about" className={navLinkStyles}>
                                How It Works
                            </Link>
                        </div>
                    </div>

                    {/* Auth Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/login" className={navLinkStyles}>
                            Login
                        </Link>
                        <Link href="/choose" className="bg-[#38bdf8] text-white hover:bg-[#3b82f6] px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                            Register
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/dashboard" className="block text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
                            Search
                        </Link>
                        <Link href="/explore" className="block text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
                            Explore
                        </Link>
                        <Link href="/about" className="block text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
                            How It Works
                        </Link>
                        <Link href="/login" className="block text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
                            Login
                        </Link>
                        <Link href="/register" className="block text-gray-900 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
                            Register
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
