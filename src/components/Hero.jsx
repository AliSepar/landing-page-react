import { RiArrowUpCircleFill, RiArrowUpDoubleFill } from "@remixicon/react";
import { HERO_CONTENT } from "../constants";
import { useState, useEffect } from "react";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Get the height of the hero section
      const heroHeight = document.querySelector("section").offsetHeight;

      // Toggle visibility of the button based on scroll position
      if (window.scrollY > heroHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run the effect once on component mount

  return (
    <>
      <section className="max-w-7xl mx-auto border-b-2">
        <div className="flex flex-col items-center my-20">
          <h1 className="text-6xl lg:text-[10rem] p-2 uppercase font-bold">
            {HERO_CONTENT.title}
          </h1>
          <p className="lg:mt-6 text-md mb-4 font-medium tracking-tighter">
            {HERO_CONTENT.subtitle}
          </p>
          <img
            src={HERO_CONTENT.image}
            alt="Hero image"
            className="w-full h-[65vh] object-cover rounded-2xl p-2"
          />
        </div>
      </section>

      {isVisible && (
        <button
          className="fixed z-20 right-6 bottom-6 bg-neutral-400 text-white px-2 py-2 rounded-2xl shadow-lg "
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <RiArrowUpDoubleFill size={24} />
        </button>
      )}
    </>
  );
}

export default Hero;
