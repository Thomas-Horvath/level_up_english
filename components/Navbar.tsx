'use client'

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-neutral-200 bg-white/90 backdrop-blur">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                {/* Left: logo */}
                <Link href="/" className="flex items-center gap-1">
                    <Image
                        src="/logo.png"
                        alt="LevelUp English logo"
                        width={100}
                        height={100}
                    />
                    <span className="text-lg font-semibold text-slate-900">
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
                <div className="hidden md:block">
                    <Link href="/booking" className="btn-green ">
                        Ingyenes 15 perces konzultáció
                    </Link>
                </div>

            </div>
        </header>
    );
};

export default Navbar;
