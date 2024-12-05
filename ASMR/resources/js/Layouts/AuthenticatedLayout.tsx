import ApplicationLogo from '@/Components/ApplicationLogo';
import NavLink from '@/Components/NavLink';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode } from 'react';
import SmallLogo from '@/Components/SmallLogo';


function getRandomColor() {
    const colors = ['bg-blue-500', 'bg-green-500', 'bg-red-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];
    return colors[Math.floor(Math.random() * colors.length)];
}
export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <div className="fixed inset-y-0 left-0 bg-white shadow-lg transition-all duration-300 ease-in-out w-16 sm:w-64 lg:w-64"> {/* Adjust width based on screen size */}

                {/* Sidebar Logo for Large Screens */}
                <div className="hidden lg:flex lg:items-center lg:justify-center h-16 border-b">
                    <Link href="/">
                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                    </Link>
                </div>

                {/* Sidebar Logo for Small Screens */}
                <div className="flex items-center justify-center h-16 border-b sm:hidden">
                    <Link href="/">
                        <SmallLogo className="block h-9 w-auto fill-current text-gray-800" />
                    </Link>
                </div>

                <nav className="mt-5 px-4 lg:px-2 flex-1">
                    <div className="space-y-2">
                        {/* Dashboard Link */}
                        <Link
                            href={route('dashboard')}
                            className="flex items-center  text-gray-900 hover:text-[#38bdf8] rounded-lg transition-colors duration-200"
                        >
                            {/* Large screens (sm and up) - Icon and Text */}
                            <div className="hidden sm:flex items-center px-4 py-3">
                                <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                <span className="hidden sm:inline">Dashboard</span>
                            </div>

                            {/* Small screens - Only Icon */}
                            <div className="sm:hidden flex justify-center mx-auto ">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </div>
                        </Link>
                        <div className="border-t border-gray-200 my-4"></div>

                        <div className="mt-4 space-y-2 flex flex-col justify-end flex-grow">
                            {/* Profile Link */}
                            <Link
                                href={route('profile.edit')}
                                className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                            >
                                {/* Profile Image or First Letter */}
                                    <div
                                        className='h-8 w-8 rounded-full flex items-center justify-center text-white mr-3 bg-[#38bdf8] '
                                    >
                                        {user.name.charAt(0).toUpperCase()}
                                    </div>
                               
                                <span className="hidden sm:inline">{user.name}</span> {/* Hide text on small screens */}
                            </Link>

                            {/* Log Out Link */}
                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                                className="flex items-center w-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                            >
                                <svg className="h-4 w-4 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                                <span className="hidden sm:inline">Log Out</span> {/* Hide text on small screens */}
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 ml-16 sm:ml-64 lg:ml-64 transition-all duration-300">
                {header && (
                    <header className="bg-white shadow">
                        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}

                <main className="p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
