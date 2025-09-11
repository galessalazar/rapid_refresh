import React from "react";
import { SidebarProvider, Sidebar } from "../../../src/components/ui/sidebar";
import { AppSidebar } from "../../../src/components/app-sidebar";
import { NavMain } from "../../../src/components/nav-main";
import Page from "../../../src/app/dashboard/page";

function AboutUs() {
  return (
    // <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar />
        {/* <NavMain /> */}
        <Page />

        <main className="flex-1 p-6">
          <section className="about-us">
            <h1 className="bruno-heading">About Us</h1>
            <p >Welcome to Rapid Refresh-Your Trusted Cleaning Partner!</p>
            <p  >
              At Rapid Refresh, we understand that a clean space is a happy
              space. That's why I am commited to providing top-notch cleaning
              services that leave your home or business sparkling clean and
              stress-free. Whether it's your home, office, or commercial space,
              I am here to handle the dirty work so you can focus on what
              matters most.
            </p>
            <br></br>
            <h2 id="our-mission">
              <strong>Our Mission</strong>
            </h2>
            <br></br>
            <p>
              At Rapid Refresh, we are driven by a simple mission:{" "}
              <strong>
                to provide thorough, high-quality cleaning services that make
                your life easier.
              </strong>{" "}
              We believe in delivering honest, eco-friendlly cleaning solutions
              that are safe for your family, pets, and the planet.
            </p>
            <br></br>
            <h2 id="why-us">
              <strong>Why Choose Us?</strong>
            </h2>
            <br></br>
            <ul>
              <li>
                <strong>Experienced Professionals:</strong> Our team is fully
                trained and passionate about delivering exceptional cleaning
                results.
              </li>
              <li>
                <strong>Eco-friendly:</strong> We use environmentally friendly
                cleaning products that are safe for your family, pets, and the
                planet.
              </li>
              <li>
                <strong>Customizable Services:</strong> From deep cleaning to
                regular maintenance, we tailor our services to fit your needs
                and budget.
              </li>
              <li>
                <strong>Satisfaction Guaranteed:</strong> We're not happy unless
                you're happy. If you're not satisfied with our work, we'll make
                it right.
              </li>
            </ul>
            <br></br>
            <h2>
              <strong>Our Services</strong>
            </h2>
            <br></br>
            <ul>
              <li>
                <strong>Residential Cleaning:</strong> Homes, apartments, and
                condos.
              </li>
              <li>
                <strong>Commercial Cleaning:</strong>
                Offices, reatil spaces, and business locations.
              </li>
              <li>
                <strong>Move-in/Move-out Cleaning:</strong> Make your transition
                easy with a thorough clean.
              </li>
              <li>
                <strong>Deep Cleaning:</strong> A detailed, one-time service to
                get every nook and cranny.
              </li>
              <li>
                <strong>Special Requests:</strong> Need something unique? We can
                customize our services to fit your needs.
              </li>
            </ul>
            <br></br>
            <h2>
              <strong>Get In Touch</strong>
            </h2>
            <p>
              Have questions or want to schedule a cleaning? Feel free to{" "}
              <a href="/contact">
                <strong>Contact Us</strong>
              </a>
              ! We'd love to help you create a cleaner, healthier space.
            </p>
          </section>
        </main>
      </div>
    // </SidebarProvider>
  );
}

export default AboutUs;
