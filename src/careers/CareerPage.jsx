import { HiArrowLongRight } from "react-icons/hi2";

import { jobs } from "./careers";

const JobCard = ({ category, title, type, location }) => (
  <div className="border border-white/20 p-8 flex flex-col justify-between min-h-[350px] hover:border-white hover:bg-white/5 transition-colors cursor-pointer group">
    <div>
      <p className="text-[12px] uppercase tracking-[3px] text-white mb-12">
        {category}
      </p>
      <h3 className="text-xl text-white font-light leading-snug lowercase group-hover:underline decoration-1 underline-offset-4">
        {title}
      </h3>
    </div>
    <div className="flex items-center text-[12px] uppercase tracking-[2px] text-white font-medium">
      <span>{type}</span>
      <span className="mx-4 font-thin text-white">|</span>
      <span>{location}</span>
    </div>
  </div>
);

const CareerPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black px-40">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-12 pb-8 py-16">
        <div className="flex items-center gap-6">
          <div className="w-8 h-8 border-2 border-white rotate-45 flex items-center justify-center">
            <span className="rotate-[-45deg] font-bold text-xs">C</span>
          </div>
          <span className="uppercase tracking-[4px] text-xl font-semibold">
            CRED{" "}
            <span className="text-white !text-md font-semibold">CAREERS</span>
          </span>
        </div>
        <div className="hidden md:flex gap-5 text-[12px] uppercase tracking-[3px] font-medium text-white">
          <a
            href="#"
            className="hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
          >
            Openings
          </a>
          <span className="text-white">|</span>
          <a href="#" className="hover:text-white transition-colors">
            Perks
          </a>
          <span className="text-white">|</span>
          <a href="#" className="hover:text-white transition-colors">
            Values
          </a>
          <span className="text-white">|</span>
          <div className="flex items-center gap-1 cursor-pointer">
            <span>Culture</span>
            <span className="text-[8px] transform rotate-90">›</span>
          </div>
        </div>
      </nav>

      {/* Search and Discovery Section */}
      <header className="px-12 mt-12 mb-8 flex flex-col md:flex-row gap-8">
        <div className="w-1/2">
          <input
            type="text"
            placeholder="seek and you shall find"
            className="w-full bg-transparent border border-white/30 p-4 text-gray-400 focus:outline-none focus:border-white transition-colors font-light tracking-wider"
          />
        </div>
        <button className="bg-white text-black px-20 py-4 flex items-center justify-between gap-8 hover:bg-gray-200 transition-colors group">
          <span className="uppercase tracking-[3px] text-xs font-bold">
            Discover Roles
          </span>
          <HiArrowLongRight className="text-2xl group-hover:translate-x-2 transition-transform" />
        </button>
      </header>

      {/* Grid Listing */}
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-12 pb-20">
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </main>
    </div>
  );
};

export default CareerPage;
