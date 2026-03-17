import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Smartphone, Palette } from "lucide-react";

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
  className="py-24 px-6 relative overflow-hidden"
>
      {/* Background */}
      <div className="absolute inset-0 z-0">
  <img
    src="/images/services-bg.jpg"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/40"></div>
</div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl mb-6">
          Our Services
        </h2>

        <p className="text-gray-300 mb-16 text-lg">
          We Build{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-semibold">
            Cutting-Edge Apps & Software
          </span>
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Web Development",
              icon: <Code size={40} />,
            },
            {
              title: "Mobile Apps",
              icon: <Smartphone size={40} />,
            },
            {
              title: "UI/UX Design",
              icon: <Palette size={40} />,
            },
          ].map((service, i) => (
            <div
              key={i}
              className="service-card p-8 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:scale-105 transition"
            >
              {/* Icon */}
              <div className="mb-6 text-yellow-400 flex justify-center">
                {service.icon}
              </div>

              <h3 className="text-xl mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm mb-6">
                High-quality, scalable and performance-driven solutions tailored to your needs.
              </p>

              {/* Button */}
              <button className="px-6 py-2 border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-400 hover:text-black transition">
                Visit Site
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}