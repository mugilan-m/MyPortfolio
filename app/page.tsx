import HomePage from "./components/HomePage";
import ProfileCard from "./components/ProfileCard";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row">
      <aside className="w-full lg:w-1/4 lg:sticky lg:top-0">
        <ProfileCard />
      </aside>
      <section className="w-full lg:w-3/4">
        <HomePage />
      </section>
    </div>
  );
}



/*
    <div className="grid grid-rows-[20px_1fr_20px] bg-gradient-to-r from-white to-blue-500 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">


    </div>*/