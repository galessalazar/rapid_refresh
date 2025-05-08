import React from "react";
// not sure i need to import the css
import "../App.css";
const Hero = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center space-y-1 sm:flex-row justify-evenly">
        <div className="flex flex-col items-center gap-0.5">
          <p className="text-lg font-semibold">Laundry</p>
          <span className="material-symbols-outlined text-8xl sm:text-[200px]">
            dry_cleaning
          </span>
        </div>

        <span className="material-symbols-outlined text-8xl sm:text-[200px]">
          local_laundry_service
        </span>
        <span className="material-symbols-outlined text-8xl sm:text-[200px]">
          cleaning
        </span>
        <span className="material-symbols-outlined text-8xl sm:text-[200px]">
          cleaning_services
        </span>
      </div>
    </section>
  );
};

export default Hero;
