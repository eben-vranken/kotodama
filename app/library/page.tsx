'use client';

// React
import { FormEvent, FunctionComponent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

// Images
import HeroImage from "@/public/hero.jpg";
import Image from "next/image";

// Next
import Link from "next/link";
import getLibrary from "@/hooks/kotodama/library/getLibrary";
import { Plus } from "@phosphor-icons/react";
import Modal from "@/components/UI/modals/Modal";

interface Library {
    title: string,
    description: string,
    statistics: {
        cardsPracticedToday: number,
        weeklyGoal: number,
        currentStreak: number
    },
    cardpacks: {
        icon: string,
        title: string,
        description: string,
        cardCount: number,
        cardsLearned: number
    }[]
}

const Library: FunctionComponent = () => {
    const libraryFolder = useSearchParams().get("path");
    const [library, setLibrary] = useState<Library>();

    // Set library on load
    useEffect(() => {
        getLibrary().then((res: Library) => setLibrary(res))
    }, [])

    // Get local hour for user
    const userHour: number = new Date().getHours();

    // Set Welcome Message
    const welcomeMessage: string =
        userHour >= 5 && userHour < 12
            ? "Good Morning"
            : userHour >= 12 && userHour < 18
                ? "Good Afternoon"
                : "Good Evening";


    // Generate card pack render
    const cardPacksRender = library?.cardpacks.map(cardpack => (
        <section className="flex flex-col gap-y-1 items-center justify-center p-3 h-40 border border-white/20 rounded-lg bg-body cursor-pointer hover:brightness-125 transition-all duration-300 overflow-hidden">
            <h1 className="text-lg font-bold">
                <span className="text-xl">{cardpack.icon}</span>
                {cardpack.title}
            </h1>
            <p className="px-3 opacity-50 text-sm text-ellipsis overflow-hidden ...">{cardpack.description}</p>
            <span className="opacity-50 font-bold">{cardpack.cardsLearned}/{cardpack.cardCount}</span>
        </section>
    ))

    // Create Card Pack
    const [createCardpackModal, setCreateCardpackModal] = useState(false);

    const handleCreateCardPack = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // `currentTarget` refers to the element the event happened on
        const form = event.currentTarget as HTMLFormElement;

        // Use namedItem with type assertions for clarity
        const packName = (form.elements.namedItem('pack-name') as HTMLInputElement).value;
        const packDescription = (form.elements.namedItem('pack-description') as HTMLInputElement).value;

        createCardPack(packName, packDescription)

        setCreateCardpackModal(false);
    };

    return (
        // Wrapper
        <section>
            {
                createCardpackModal &&
                <Modal title="Create Card Pack" setModal={setCreateCardpackModal}>
                    <form className="flex flex-col gap-y-4 my-3" onSubmit={handleCreateCardPack}>
                        <section className="flex flex-col gap-y-1">
                            <label htmlFor="pack-name" className="font-semibold text-sm opacity-75">Pack Name:</label>
                            <input type="text" name="pack-name" className="rounded bg-text/5 outline-none text-text/50 placeholder:text-text/25 w-full p-2" />
                        </section>

                        <section className="flex flex-col gap-y-1">
                            <label htmlFor="pack-description" className="font-semibold text-sm opacity-75">Pack Description:</label>
                            <input type="text" name="pack-description" className="rounded bg-text/5 outline-none text-text/50 placeholder:text-text/25 w-full p-2" />
                        </section>

                        <button type="submit" className="bg-primary rounded font-bold w-fit px-3 py-1 hover:brightness-75 transition-all duration-500">Create</button>
                    </form>
                </Modal>
            }

            <section className="flex flex-col py-8 items-center gap-y-8">
                {/* Welcome Message */}
                <section className="flex flex-col gap-y-2 relative p-8 justify-end select-none w-full cursor-pointer h-[400px] rounded-2xl overflow-hidden">
                    <Image src={HeroImage} alt="Hero Image" layout="fill" objectFit="cover" className="z-0 blur-sm  hover:brightness-[85%] transition-all duration-150" />

                    <section className="pointer-events-none flex flex-col gap-y-2">
                        {/* Custom welcome message depending on time */}
                        <section className="z-10">
                            <h1 className="font-bold text-4xl">{welcomeMessage}, Eben</h1>
                        </section>

                        {/* Call-To-Action */}
                        <section className="font-medium flex flex-col gap-y-1">
                            <span className="opacity-75">Let's continue learning</span>
                            <Link href="/flashcards" className="px-3 py-2 bg-primary w-fit rounded z-10 hover:brightness-[85%] transition-all duration-150 pointer-events-auto ">Start practicing</Link>
                        </section>
                    </section>
                </section>

                {/* Horizontal Divider */}
                <hr className="border-b w-full border-white/10" />

                {/* Statistics */}
                <section className="w-full flex items-center justify-between gap-x-3">
                    {/* Practiced today */}
                    <section className="flex flex-col gap-y-1 justify-center p-3 h-24 w-1/3 border border-white/20 rounded-lg bg-body cursor-pointer hover:brightness-125 transition-all duration-300">
                        <span className="font-medium text-sm">Cards practiced today</span>
                        <h1 className="text-2xl font-bold">{library?.statistics.cardsPracticedToday}</h1>
                    </section>

                    {/* Weekly Progress */}
                    <section className="flex flex-col gap-y-1 justify-center p-3 h-24 w-1/3 border border-white/20 rounded-lg bg-body cursor-pointer hover:brightness-125 transition-all duration-300">
                        <span className="font-medium text-sm">Weekly Progress</span>
                        <h1 className="text-2xl font-bold">{library?.statistics.weeklyGoal}</h1>
                    </section>

                    {/* Current Streak */}
                    <section className="flex flex-col gap-y-1 justify-center p-3 h-24 w-1/3 border border-white/20 rounded-lg bg-body cursor-pointer hover:brightness-125 transition-all duration-300">
                        <span className="font-medium text-sm">Current Streak</span>
                        <h1 className="text-2xl font-bold">
                            {library?.statistics.currentStreak}
                        </h1>
                    </section>
                </section>

                {/* Horizontal Divider */}
                <hr className="border-b w-full border-white/10" />

                {/* Card packs */}
                <section className="w-full">
                    {/* Pack Navbar */}
                    <nav className="flex items-center pb-4 justify-between h-10 border-b border-white/10 border-dashed mb-4">
                        {/* Nav Title */}
                        <h1 className="text-xl font-bold mb-2">Card packs</h1>

                        {/* Nav Items */}
                        <section className="flex gap-x-1 items-center">
                            {/* Card Pack Search */}
                            <input type="text" className="p-2 w-72 rounded bg-text/5 outline-none text-text/50 placeholder:text-text/25" placeholder="Search..." />

                            {/* Create Card Pack */}
                            <section className="aspect-square w-10 bg-primary/50 rounded flex items-center justify-center cursor-pointer opacity-50 hover:opacity-75 transition-opacity" onClick={() => setCreateCardpackModal(true)}>
                                <Plus size={25} weight="bold" />
                            </section>
                        </section>
                    </nav>

                    {/* Pack List */}
                    <section className="grid grid-cols-4 gap-4 w-full">
                        {cardPacksRender}
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Library