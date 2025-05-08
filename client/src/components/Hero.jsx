import React from "react";
// not sure i need to import the css
import "../App.css";
const Hero = () => {
  return (
    <section className="w-full px-8">
      <div className="flex flex-col sm:flex-row justify-evenly ">
        <span className="material-symbols-outlined text-[200px]">
          {" "}
          dry_cleaning
        </span>
        <span className="material-symbols-outlined text-[200px]">
          local_laundry_service
        </span>
        <span className="material-symbols-outlined text-[200px]">
          {" "}
          cleaning{" "}
        </span>
        <span className="material-symbols-outlined text-[200px]">
          {" "}
          cleaning_services
        </span>
      </div>
    </section>
  );
};

export default Hero;
