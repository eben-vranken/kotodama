'use client';

// React
import { FunctionComponent } from "react";

// Icons
import { BowlFood, CaretUpDown, CornersOut } from "@phosphor-icons/react";
import Link from "next/link";

// Hooks
import { usePathname } from 'next/navigation';
import { useState, useEffect } from "react";

// Window API
let appWindow: { setFullscreen: (arg0: boolean) => any; };
if (typeof window !== 'undefined') {
    appWindow = require('@tauri-apps/api/window').appWindow;
}

const Navbar: FunctionComponent = () => {
    const pathname: string = usePathname();
    const [fullscreen, setFullscreen] = useState(false);


    // Fullscreen Logic
    const handleToggleFullscreen = async () => {
        await appWindow.setFullscreen(!fullscreen);
        setFullscreen(!fullscreen);
    }

    // Fullscreen Hotkey
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && fullscreen) {
                handleToggleFullscreen();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [fullscreen]);

    return (
        <nav className="h-16 p-4 sticky top-0 z-20 bg-body flex items-center justify-between border-b border-white/25">
            {/* Nav Brand */}
            <Link href={'/'} className="flex items-center gap-x-1 cursor-pointer hover:opacity-75">
                <BowlFood size={30} className="text-primary" />
                <h1 className="font-bold">Kotodama</h1>
            </Link>

            {/* Active Group */}
            <section className="flex items-center gap-x-1 text-sm opacity-25 hover:opacity-50 transition-opacity cursor-pointer duration-200">
                <CaretUpDown size={15} weight="bold" />
                <span className="font-semibold">Japanese</span>
            </section>

            {/* Navbar Items */}
            <section className="[&>a]:font-medium [&>a]:text-sm flex gap-x-5 items-center">

                {/* Links */}
                <Link href="/" className={`${pathname === '/' ? 'text-primary font-semibold' : ''} hover:opacity-50`}>Home</Link>
                <Link href="/flashcards" className={`${pathname === '/flashcards' ? 'text-primary font-semibold' : ''} hover:opacity-50`}> Flashcards</Link>

                {/* Vertical Divider */}
                <section className="w-0.5 h-8 bg-transparent border-r-[1.5px] border-white/15 -mx-2">

                </section>

                {/* Icons */}
                {/* FullScreen Toggle */}
                <section className={`p-[5px] rounded cursor-pointer  ${fullscreen ? 'bg-primary/20' : 'bg-text/5 hover:bg-text/10'}`} onClick={handleToggleFullscreen}>
                    <CornersOut size={25} className="opacity-75" />
                </section>
            </section>
        </nav>
    )
}

export default Navbar