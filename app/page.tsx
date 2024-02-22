'use client';

import getLibraries from "@/hooks/flashcards/getLibraries";

// Icons
import { Plus } from "@phosphor-icons/react";

// Tauri API
import { FileEntry } from "@tauri-apps/api/fs";

// React
import { useEffect, useState } from "react";

// Components
import Link from "next/link";
import LoadingSpinner from "@/components/common/LoadingSpinner";

export default function Home() {
  const [libraries, setLibraries] = useState<FileEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchLibraries = async () => {
      try {
        const libraryList = await getLibraries();
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
      <section>
        {/* ... library content */}
      </section>
    );
  });

  return (
    // Library Selection
    <main className="flex flex-col !max-w-[1000px] py-8 gap-y-8">
      {/* Heading */}
      <section className="flex flex-col gap-y-2 w-full border-b pb-5 border-white/25 border-dashed">
        <h1 className="text-4xl font-bold">Find a library</h1>
        <p className="text-sm opacity-75">Study any subject you want</p>

        {/* Search Bar */}
        <input type="text" name="library" className="mt-3 p-2 rounded bg-text/5 outline-none text-text/50 placeholder:text-text/25" placeholder="Search for a library" />
      </section>

      {/* Available Libraries */}
      <section>
        <h1 className="text-lg font-bold">My libraries</h1>
        {/* Loading */}
        {isLoading &&
          <section className="mt-16 w-full flex flex-col items-center gap-y-2">
            <LoadingSpinner />
          </section>
        }

        {/* Libraries */}
        {libraries.length === 0 && !isLoading &&
          <section className="mt-10 w-full flex flex-col items-center gap-y-2">
            <span className="opacity-50">No libraries found</span>

            {/* Create Library */}
            <Link href="/createLibrary" className="p-2 bg-text/5 rounded hover:bg-text/15 transition-opacity duration-200">
              <Plus size={25} weight="bold" className="text-text/50" />
            </Link>
          </section>
        }

        {libraryElements}

      </section>
    </main>
  );
}