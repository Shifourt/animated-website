// About.tsx
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "top top",
        end: "+=1000",
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // Grow from small -> fullscreen (locked to small viewport height)
    tl.fromTo(
      ".mask-clip-path",
      {
        width: "18rem",          // ~ w-72
        height: "60svh",         // stable on mobile (no URL bar jump)
        borderRadius: "1.5rem",  // ~ rounded-3xl
      },
      {
        width: "100vw",
        height: "100svh",
        borderRadius: 0,
        ease: "none",
        immediateRender: false,
      }
    );
  });

  return (
    <div id="about" className="w-screen min-h-screen">
      {/* Text */}
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Zentry
        </p>

        <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>The Game of Games begins—your life, now an epic MMORPG</p>
          <p className="text-gray-500">
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
          </p>
        </div>
      </div>

      {/* Pinned / animated section */}
      <div id="clip" className="relative w-screen h-[100svh] overflow-hidden">
        <div
          className="mask-clip-path absolute left-1/2 top-0 z-20 -translate-x-1/2
                     w-[18rem] h-[60svh] overflow-hidden rounded-3xl"
          style={{ willChange: "width, height, border-radius" }}
        >
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
