'use client'

import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false);


    return (
        <header className="fixed top-0 z-50 w-full border-b border-neutral-200 bg-white/90 backdrop-blur">
            <div className="items-center flex justify-between mx-auto h-20 max-w-[1400px] px-6">

                {/* Left: logo */}
                <Link href="/" className="flex items-center justify-between h-full gap-4">
                    <div className="">
                        <Image
                            src="/logo1.png"
                            alt="LevelUp English logo"
                            width={101}
                            height={100}
                            className="h-full w-16"
                        />
                    </div>
                    <span className="text-xl font-bold text-slate-900">
                        LevelUp English
                    </span>
                </Link>

                {/* Center: nav links */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                    <Link href="/#how-it-works" className="hover:text-slate-900">
                        Hogyan működik
                    </Link>
                    <Link href="/#packages" className="hover:text-slate-900">
                        Csomagok
                    </Link>
                    <Link href="/#testimonials" className="hover:text-slate-900">
                        Vélemények
                    </Link>
                    <Link href="/#faq" className="hover:text-slate-900">
                        GYIK
                    </Link>
                </nav>

                {/* Right: CTA */}
                <div className="hidden lg:block">
                    <Link href="/booking" className="btn-green">
                        Ingyenes 15 perces konzultáció
                    </Link>
                </div>




                {/* Mobile hamburger */}
                <button onClick={() => setOpen(!open)} className="md:hidden text-3xl text-white cursor:pointer">
                    {open ? <HiX className='cursor-pointer text-slate-900' /> : <HiMenu className='cursor-pointer text-slate-900' />}
                </button>

                {
                    open && (
                        <div className="absolute left-0 md:hidden top-20
                                        w-full
                                        bg-white border-b border-neutral-200 border-t">
                            <nav className="flex flex-col items-center gap-4 py-6 font-medium text-md text-slate-600">
                                <Link onClick={() => setOpen(!open)} href="/#how-it-works" className="hover:text-slate-900">
                                    Hogyan működik
                                </Link>
                                <Link onClick={() => setOpen(!open)} href="/#packages" className="hover:text-slate-900">
                                    Csomagok
                                </Link>
                                <Link onClick={() => setOpen(!open)} href="/#testimonials" className="hover:text-slate-900">
                                    Vélemények
                                </Link>
                                <Link onClick={() => setOpen(!open)} href="/#faq" className="hover:text-slate-900">
                                    GYIK
                                </Link>
                            </nav>
                        </div>
                    )
                }



            </div>
        </header>
    );
};

export default Navbar;
