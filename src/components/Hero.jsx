import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef();
  const titleRef = useRef();
  const subRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.to(heroRef.current.querySelector("img"), {
  scale: 1,
  duration: 6,
  ease: "power1.out",
});

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    )
      .fromTo(
        subRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(
        ".scroll-indicator",
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        "-=0.5"
      );

      ScrollTrigger.create({
    trigger: heroRef.current,
    start: "top top",
    end: "+=100%",
    pin: true,
    scrub: true,
  });
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="h-screen w-full relative flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="images/hero-bg.png"
          alt="background"
          className="w-full h-full object-cover scale-100"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-widest"
        >
          WE BUILD DIGITAL EXPERIENCES
        </h1>

        <p
          ref={subRef}
          className="mt-6 text-gray-300 max-w-xl mx-auto text-sm md:text-base"
        >
          Scalable, modern software solutions for clients worldwide.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 text-sm">
        ↓ Scroll
      </div>
    </section>
  );
}