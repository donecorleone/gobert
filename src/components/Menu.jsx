import { useEffect, useRef, useState } from "react";

import "./menu.css";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/galerie-damen", label: "Damen" },
  { path: "/galerie-herren", label: "Herren" },
  { path: "#kundenservice", label: "Kundenservice" },
  { path: "#contact", label: "Kontakt" },
];

const Menu = () => {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-container" ref={container}>
      {/* menu-bar */}
      <div className="menu-bar">
        <div className="menu-logo">
          <a href="/">
            <img
              src="/images/gobert-logo-white.svg"
              alt="logo-scheffold"
              decoding="async"
              width={237}
              height={86}
            />
          </a>
        </div>
        <div className="menu-open fixed right-[8%]" onClick={toggleMenu}>
          <button
            id="menu-toggle"
            className="flex flex-col gap-1 w-[46px] h-[46px] items-center justify-center"
          >
            <span className="block w-[22px] h-[2px] bg-white transition-transform"></span>
            <span className="block w-[22px] h-[2px] bg-white transition-transform"></span>
            <span className="block w-[22px] h-[2px] bg-white transition-transform"></span>
          </button>
        </div>
      </div>

      {/* menu-overlay */}
      <div className="menu-overlay">
        {/* menu-overlay-bar */}
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <a href="/">
              <img
                src="/images/gobert_orange.svg"
                alt="gobert logo orange"
                decoding="async"
                width={237}
                height={86}
              />
            </a>
          </div>
          <div className="menu-close absolute right-[8%]" onClick={toggleMenu}>
            <button
              id="menu-toggle"
              className="flex flex-col gap-1 w-[46px] h-[46px] items-center justify-center"
            >
              <span className="block text-[20px] text-white cursor-pointer">
                &#x2715;
              </span>
            </button>
          </div>
        </div>

        {/* menu overlay items */}

        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div key={index} className="menu-link-item">
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <a className="menu-link" href={link.path}>
                    {link.label}
                  </a>
                </div>
              </div>
            ))}
            <div className="social flex flex-row gap-5 mt-[50px]">
              <img
                src="/images/ig-orange.png"
                alt="gobert ig orange"
                width="35"
                height="35"
              />
              <img
                src="/images/fb-orange.png"
                alt="gobert ig orange"
                width="35"
                height="35"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
