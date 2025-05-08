import React from "react";
// not sure i need to import the css
import "../App.css";
const Hero = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col sm:flex-row justify-evenly sm:space-x-4 space-y-4 sm:space-y-0">
        <span className="material-symbols-outlined text-8xl sm:text-[200px]">
          {" "}
          dry_cleaning
        </span>
        <span className="material-symbols-outlined text-8xl sm:text-[200px]">
          local_laundry_service
        </span>
        <span className="material-symbols-outlined text-8xl sm:text-[200px]">
          {" "}
          cleaning{" "}
        </span>
        <span className="material-symbols-outlined text-8xl sm:text-[200px]">
          {" "}
          cleaning_services
        </span>
      </div>
    </section>
  );
};

export default Hero;
