'use client';

// Hooks
import getLibaryList from "@/hooks/kotodama/library/getLibraryList";

// Next
import Image from "next/image";

// Icons
import { Plus } from "@phosphor-icons/react";

// Tauri API
import { FileEntry } from "@tauri-apps/api/fs";

// React
import { useEffect, useState } from "react";

// Components
import Link from "next/link";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import HeroImage from "@/public/hero.jpg";

export default function Home() {
  const [libraries, setLibraries] = useState<FileEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchLibraries = async () => {
      try {
        const libraryList = await getLibaryList();
        setLibraries(libraryList);
        setIsLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        // Handle the error gracefully, e.g., display an error message
        console.error("Error fetching libraries:", error);
      }
    };

    fetchLibraries();
  }, []); // Empty dependency array to run only once on initial render

  const libraryElements = libraries.map((library) => {
    // Render library elements here
    return (
      <Link href={`/library?path=${library.path}`} className="flex flex-col gap-y-1 items-center justify-center p-3 h-40 border border-white/20 rounded-lg bg-body cursor-pointer hover:brightness-125 transition-all duration-300">
        {/* Library Name */}
        <span className="font-bold">
          {library.name}
        </span>
      </Link>
    );
  });

  return (
    // Library Selection
    <main className="flex flex-col !max-w-[1000px] py-8 gap-y-8">
      {/* Heading */}
      <section className="flex flex-col gap-y-2 relative p-8 justify-end select-none w-full cursor-pointer h-[250px] rounded-2xl overflow-hidden">
        <Image src={HeroImage} alt="Hero Image" layout="fill" objectFit="cover" className="z-0 blur-sm  hover:brightness-[85%] transition-all duration-150" />

        <section className="flex flex-col gap-y-2 w-full border-b pb-5 border-white/25 border-dashed">
          <h1 className="text-4xl font-bold z-10">Find a library</h1>
          <p className="text-sm opacity-75 z-10">Study any subject you want</p>
        </section>
      </section>

      {/* Search Bar */}
      <input type="text" name="library" className="mt-3 p-2 rounded bg-text/5 outline-none text-text/50 placeholder:text-text/25" placeholder="Search for a library" />

      {/* Libraries */}
      <section className="flex flex-col gap-y-2">
        <nav className="flex items-center justify-between">
          {/* Nav Title */}
          <h1 className="text-lg font-bold">My libraries</h1>

          {/* Nav Items */}
          <section>
            <Link href={'/createLibrary'} className="px-3 py-2 bg-primary rounded font-medium text-sm">Create New</Link>
          </section>
        </nav>
        {/* Loading */}
        {isLoading &&
          <section className="mt-16 w-full flex flex-col items-center gap-y-2">
            <LoadingSpinner />
          </section>
        }

        {/* No Libraries */}
        {libraries.length === 0 && !isLoading &&
          <section className="mt-10 w-full flex flex-col items-center gap-y-2">
            <span className="opacity-50">No libraries found</span>

            {/* Create Library */}
            <Link href="/createLibrary" className="p-2 bg-text/5 rounded hover:bg-text/15 transition-opacity duration-200">
              <Plus size={25} weight="bold" className="text-text/50" />
            </Link>
          </section>
        }

        {/* Library grid */}
        <section className="grid grid-cols-4 gap-4 w-full">
          {libraryElements}
        </section>

      </section>
    </main>
  );
}