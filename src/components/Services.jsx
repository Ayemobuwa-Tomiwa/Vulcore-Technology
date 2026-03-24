import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Code,
  Smartphone,
  Palette,
  BarChart3,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef();

  // ✅ Services Data

  const services = [
    {
      title: "Web Development",
      icon: <Code size={40} />,
      description:
        "Custom-built websites and web applications engineered for performance, scalability, and seamless user experiences across modern browsers.",
      button: "View Web Solutions",
    },
    {
      title: "Mobile Applications",
      icon: <Smartphone size={40} />,
      description:
        "Robust and responsive mobile applications designed to run smoothly across Android and iOS platforms with intuitive functionality.",
      button: "Explore Mobile Apps",
    },
    {
      title: "UI/UX Design",
      icon: <Palette size={40} />,
      description:
        "User-centered interfaces crafted to deliver visually engaging designs that enhance usability, accessibility, and customer engagement.",
      button: "See Design Work",
    },
    {
      title: "Data Analytics",
      icon: <BarChart3 size={40} />,
      description:
        "Insight-driven data solutions that transform raw data into meaningful analytics, empowering businesses to make smarter decisions.",
      button: "View Analytics Tools",
    },
  ];

  // ✅ Animations

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Cards animation

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

      // Background parallax

      gsap.to(".services-bg", {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

    }, sectionRef);

    return () => ctx.revert();

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
          className="services-bg w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}

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

        {/* Cards Grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, i) => (

            <div
              key={i}
              className="service-card p-8 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:scale-105 transition duration-300"
            >

              {/* Icon */}

              <div className="mb-6 text-yellow-400 flex justify-center icon-glow">
                {service.icon}
              </div>

              {/* Title */}

              <h3 className="text-xl mb-4 font-semibold">
                {service.title}
              </h3>

              {/* Description */}

              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Button */}

              <button className="px-6 py-2 border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-400 hover:text-black transition text-sm">
                {service.button}
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}