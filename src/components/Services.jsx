import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      ".service-card",
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 px-6 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl mb-6">
          Our Services
        </h2>
        <p className="text-gray-400 mb-16">
          We build modern, scalable solutions for global clients.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Web Development",
            "Mobile Apps",
            "UI/UX Design",
          ].map((service, i) => (
            <div
              key={i}
              className="service-card p-8 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:scale-105 transition"
            >
              <h3 className="text-xl mb-4">{service}</h3>
              <p className="text-gray-400 text-sm">
                High-quality, scalable and performance-driven solutions tailored to your needs.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}