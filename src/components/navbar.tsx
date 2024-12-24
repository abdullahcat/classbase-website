"use client"; // This is a client component 👈🏽
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
/* eslint-disable @next/next/no-img-element */

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the state of the menu
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <header className={`fixed py-1 text-black w-full z-50 transition-all bg-warmneutral   duration-200 ${!isScrolled ? '' : 'shadow-lg'}`}>
            <div className="container  flex justify-between  mx-auto">
                <div className="flex">
                    <Link href="/">
                        <img src="/classbase-2.png" alt="" className='h-16 px-4' />

                    </Link>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            <Link rel="noopener noreferrer" href="/about" className="flex items-center px-2 -mb-1 hover:text-purple-500   ">Hakkımızda</Link>
                        </li>
                        <li className="flex">
                            <Link rel="noopener noreferrer" href="/ambassador" className="flex items-center px-2 -mb-1 hover:text-purple-500">Ambassador</Link>
                        </li>
                        <li className="flex">
                            <Link rel="noopener noreferrer" href="/available" className="flex items-center px-2 -mb-1  hover:text-purple-500  ">Aktif Sınıflar
                            </Link>
                        </li>

                    </ul>
                </div>
                <div className="items-center flex-shrink-0 hidden lg:flex gap-2  ">
                    <Link
                        href={'http://sales.theclassbase.com'}
                        className='relative inline-block px-4 py-1 border-2 bg-purple-500 border-purple-500 text-white  hover:border-purple-600 rounded-full space-x-2 flex flex-row transition duration-300 ease-in-out hover:bg-purple-600'>
                        Satın Al
                    </Link>
                    <Link
                        href={'http://console.theclassbase.com'}
                        className='relative inline-block px-4 py-1 border-2 border-black text-black rounded-full space-x-2 flex flex-row transition duration-300 ease-in-out hover:bg-purple-500 hover:text-white hover:border-transparent  '
                    >Konsol
                    </Link>
                </div>
                <div className='items-center flex lg:flex lg:hidden gap-2 p-2 flex-row'>
                    <Link
                        href={'http://sales.theclassbase.com'}
                        className='relative inline-block px-4 py-1 border-2 bg-purple-500 border-purple-500 hover:border-purple-600 text-white rounded-full space-x-2 flex flex-row transition duration-300 ease-in-out hover:bg-purple-600'>
                        Satın Al
                    </Link>
                    <Link
                        href={'http://console.theclassbase.com'}
                        className=' relative inline-block px-4 py-1 border-2 border-black text-black rounded-full space-x-2 flex flex-row transition duration-300 ease-in-out hover:bg-purple-500 hover:text-white hover:border-transparent  '
                    >Konsol
                    </Link>
                    <button onClick={toggleMenu} className="relative inline-block px-4 py-1 border-2 border-black text-black rounded-full space-x-2 flex flex-row transition duration-300 ease-in-out hover:bg-purple-500 hover:text-white hover:border-transparent">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6   ">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-warmneutral shadow-lg lg:hidden">
                        {/* Duplicate your menu here for mobile */}
                        <ul>
                            <li className="text-black px-4 py-2 hover:bg-gray-100"   >
                                <Link onClick={() => setIsMenuOpen(false)} href="/about">Hakkımızda</Link >
                            </li>
                            <li className="text-black px-4 py-2 hover:bg-gray-100">
                                <Link onClick={() => setIsMenuOpen(false)} href="/ambassador">Ambassador</Link>
                            </li>
                            <li className="text-black px-4 py-2 hover:bg-gray-100">
                                <Link onClick={() => setIsMenuOpen(false)} href="/available">Aktif Sınıflar</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Navbar;
