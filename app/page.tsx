// Images
import HeroImage from "@/public/hero.jpg";
import Image from "next/image";

// Next
import Link from "next/link";

export default function Home() {
  // Get local hour for user
  const userHour: number = new Date().getHours();

  // Set Welcome Message
  const welcomeMessage: string =
    userHour >= 5 && userHour < 12
      ? "Good Morning"
      : userHour >= 12 && userHour < 18
        ? "Good Afternoon"
        : "Good Evening";

  return (
    // Home
    <main className="flex flex-col py-8 items-center gap-y-8">
      {/* Welcome Message */}
      <section className="flex flex-col gap-y-2 relative p-8 justify-end select-none w-full cursor-pointer h-[400px] rounded-2xl overflow-hidden">
        <Image src={HeroImage} alt="Hero Image" layout="fill" objectFit="cover" className="z-0 blur-sm  hover:brightness-[85%] transition-all duration-150" />

        <section className="pointer-events-none flex flex-col gap-y-2">
          {/* Custom welcome message depending on time */}
          <section className="opacity-75">
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
          <h1 className="text-2xl font-bold">16</h1>
        </section>

        {/* Weekly Progress */}
        <section className="flex flex-col gap-y-1 justify-center p-3 h-24 w-1/3 border border-white/20 rounded-lg bg-body cursor-pointer hover:brightness-125 transition-all duration-300">
          <span className="font-medium text-sm">Weekly Progress</span>
          <h1 className="text-2xl font-bold">50%</h1>
        </section>

        {/* Current Streak */}
        <section className="flex flex-col gap-y-1 justify-center p-3 h-24 w-1/3 border border-white/20 rounded-lg bg-body cursor-pointer hover:brightness-125 transition-all duration-300">
          <span className="font-medium text-sm">Current Streak</span>
          <h1 className="text-2xl font-bold">
            7 days
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
          <section className="flex ">
            <input type="text" className="p-2 w-72 rounded bg-text/5 outline-none text-text/50 placeholder:text-text/25" placeholder="Search..." />
          </section>
        </nav>

        {/* Pack List */}
        <section className="grid grid-cols-4 gap-4 w-full">
          {/* Animals */}
          <section className="flex flex-col gap-y-1 items-center justify-center p-3 h-40 border border-white/20 rounded-lg bg-body cursor-pointer hover:brightness-125 transition-all duration-300">
            <h1 className="text-lg font-bold">
              {/* Pack Icon */}
              <span className="text-2xl">
                🦊
              </span>
              Animals
            </h1>
            <span className="opacity-50 font-bold">8/15</span>
          </section>

          {/* Fruits */}
          <section className="flex flex-col gap-y-1 items-center justify-center p-3 h-40 border border-white/20 rounded-lg bg-body cursor-pointer hover:brightness-125 transition-all duration-300">
            <h1 className="text-lg font-bold">
              🍎 Fruits
            </h1>
            <span className="opacity-50 font-bold">12/20</span>
          </section>

          {/* Colors */}
          <section className="flex flex-col gap-y-1 items-center justify-center p-3 h-40 border border-white/20 rounded-lg bg-body cursor-pointer hover:brightness-125 transition-all duration-300">
            <h1 className="text-lg font-bold">
              🌈 Colors
            </h1>
            <span className="opacity-50 font-bold">5/10</span>
          </section>

          {/* Shapes */}
          <section className="flex flex-col gap-y-1 items-center justify-center p-3 h-40 border border-white/20 rounded-lg bg-body cursor-pointer hover:brightness-125 transition-all duration-300">
            <h1 className="text-lg font-bold">
              🔷 Shapes
            </h1>
            <span className="opacity-50 font-bold">15/18</span>
          </section>

          {/* Numbers */}
          <section className="flex flex-col gap-y-1 items-center justify-center p-3 h-40 border border-white/20 rounded-lg bg-body cursor-pointer hover:brightness-125 transition-all duration-300">
            <h1 className="text-lg font-bold">
              🔢 Numbers
            </h1>
            <span className="opacity-50 font-bold">10/15</span>
          </section>

          {/* Vehicles */}
          <section className="flex flex-col gap-y-1 items-center justify-center p-3 h-40 border border-white/20 rounded-lg bg-body cursor-pointer hover:brightness-125 transition-all duration-300">
            <h1 className="text-lg font-bold">
              🚗 Vehicles
            </h1>
            <span className="opacity-50 font-bold">7/12</span>
          </section>

          {/* Food */}
          <section className="flex flex-col gap-y-1 items-center justify-center p-3 h-40 border border-white/20 rounded-lg bg-body cursor-pointer hover:brightness-125 transition-all duration-300">
            <h1 className="text-lg font-bold">
              🍔 Food
            </h1>
            <span className="opacity-50 font-bold">18/25</span>
          </section>

          {/* Jobs */}
          <section className="flex flex-col gap-y-1 items-center justify-center p-3 h-40 border border-white/20 rounded-lg bg-body cursor-pointer hover:brightness-125 transition-all duration-300">
            <h1 className="text-lg font-bold">
              👨‍🔧 Jobs
            </h1>
            <span className="opacity-50 font-bold">6/10</span>
          </section>

          {/* Weather */}
          <section className="flex flex-col gap-y-1 items-center justify-center p-3 h-40 border border-white/20 rounded-lg bg-body cursor-pointer hover:brightness-125 transition-all duration-300">
            <h1 className="text-lg font-bold">
              ☁️ Weather
            </h1>
            <span className="opacity-50 font-bold">14/20</span>
          </section>

          {/* Clothing */}
          <section className="flex flex-col gap-y-1 items-center justify-center p-3 h-40 border border-white/20 rounded-lg bg-body cursor-pointer hover:brightness-125 transition-all duration-300">
            <h1 className="text-lg font-bold">
              👕 Clothing
            </h1>
            <span className="opacity-50 font-bold">9/15</span>
          </section>

          {/* Family */}
          <section className="flex flex-col gap-y-1 items-center justify-center p-3 h-40 border border-white/20 rounded-lg bg-body cursor-pointer hover:brightness-125 transition-all duration-300">
            <h1 className="text-lg font-bold">
              👨‍👩‍👧‍👦 Family
            </h1>
            <span className="opacity-50 font-bold">12/18</span>
          </section>

          {/* Technology */}
          <section className="flex flex-col gap-y-1 items-center justify-center p-3 h-40 border border-white/20 rounded-lg bg-body cursor-pointer hover:brightness-125 transition-all duration-300">
            <h1 className="text-lg font-bold">
              📱 Technology
            </h1>
            <span className="opacity-50 font-bold">20/25</span>
          </section>

          {/* Sports */}
          <section className="flex flex-col gap-y-1 items-center justify-center p-3 h-40 border border-white/20 rounded-lg bg-body cursor-pointer hover:brightness-125 transition-all duration-300">
            <h1 className="text-lg font-bold">
              ⚽ Sports
            </h1>
            <span className="opacity-50 font-bold">8/12</span>
          </section>

          {/* Transportation */}
          <section className="flex flex-col gap-y-1 items-center justify-center p-3 h-40 border border-white/20 rounded-lg bg-body cursor-pointer hover:brightness-125 transition-all duration-300">
            <h1 className="text-lg font-bold">
              🚂 Transportation
            </h1>
            <span className="opacity-50 font-bold">15/20</span>
          </section>

        </section>
      </section>


    </main>
  );
}
