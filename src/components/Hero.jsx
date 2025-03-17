import React from "react";
import heroImg from "../assets/hero.webp";
import { IoArrowForwardCircleSharp } from "react-icons/io5";

const Hero = () => {
  return (
    <section
      id="Home"
      className="bg-heroBg text-white flex items-center pt-28 md:h-screen "
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-8 overflow-y-hiden gap-12 h-full">
        {/* left side */}

        <div className="md:w-1/2">
          <h1 className="text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug">
            Start Your Journey to Mental Wellness
          </h1>
          <p className="text-lg mb-12 md:pr-8">
          Prioritizing mental well-being enhances focus, strengthens connections,  
  and fosters self-compassion. Through our guided wellness resources, we  
  empower students to manage stress, build resilience, and cultivate mindfulness.  
  Let us walk you through the fundamentals of mental wellness and self-care,  
  ensuring a healthier and more balanced student life.
          </p>
          <button className="bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/90">
            <a href="#contact" className="flex gap-1 items-center">
              <span>Get Started</span>
            <IoArrowForwardCircleSharp />
            </a>
            
            </button>
        </div>
        {/* right side*/}

        <div className="md:w-1/2 h-full flex items-center justify-center">
          <img
            src={heroImg}
            alt="hero image"
            className="w-full max-h-[534px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
