import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef();

  const projects = [
    {
      title: "Netflixo",
      image: "/images/project1.jpeg",
      link: "https://netflixo.vercel.app",
    },
    {
      title: "School Community",
      image: "images/project2.jpg",
      link: "https://example.com",
    },
    {
      title: "Animax",
      image: "images/project3.jpg",
      link: "https://example.com",
    },
    {
      title: "Billing System",
      image: "images/project4.jpg",
      link: "https://billingsystemdashboard.netlify.app",
    },
    {
      title: "Project Five",
      image: "/images/project5.jpg",
      link: "https://example.com",
    },
    {
      title: "Project Six",
      image: "/images/project6.jpg",
      link: "https://example.com",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
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
      id="projects"
      ref={sectionRef}
      className="py-24 px-6 bg-black"
    >
        {/* Background */}
  <div className="absolute inset-0 -z-10">
    <img
      src="/images/project-bg.png"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/80"></div>
  </div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl mb-16 text-center">
          Our Projects
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <a
              key={i}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group block overflow-hidden rounded-xl"
            >
              <div className="relative">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

                <h3 className="absolute bottom-4 left-4 text-white text-lg">
                  {proj.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}