'use client'

// Custom Hooks
import createLibrary from "@/hooks/kotodama/library/createLibrary";

// React
import { FormEvent, FunctionComponent, useState } from "react";


const CreateLibrary: FunctionComponent = () => {
    const [libraryName, setLibraryName] = useState(""); // Initialize library name state

    const handleCreateLibrary = (event: FormEvent) => {
        event.preventDefault();

        if (libraryName.trim() === "") {
            console.error("Library name cannot be empty.");
            return;
        }

        createLibrary(libraryName);

        // Go back to library selection
        location.href = "/";
    };


    return (
        <section className="flex h-screen flex-col items-center mt-64 !max-w-[1000px] py-8 gap-y-8">
            {/* Heading */}
            <section className="flex flex-col gap-y-2 items-center">
                <h1 className="text-4xl font-bold">Create a library</h1>
                <p className="text-sm opacity-75">Build and organize your personalized collection</p>
            </section>

            <form onSubmit={handleCreateLibrary} className="flex flex-col items-center gap-y-5 w-full border-b-white/25 pb-5 border-dashed">
                <section className="flex flex-col gap-y-1">
                    <label htmlFor="libraryName" className="font-semibold opacity-50">Library name</label>
                    <input onChange={(e) => setLibraryName(e.target.value)} type="text" name="libraryName" className="p-2 w-96 rounded bg-text/5 outline-none text-text/50 placeholder:text-text/25" placeholder="Enter name..." required />
                </section>

                <button type="submit" className="bg-primary px-3 py-1 font-semibold rounded">Create</button>
            </form >
        </section >
    )
}

export default CreateLibrary