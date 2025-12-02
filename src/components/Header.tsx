"use client";

import { useState, useEffect } from "react";
import { personalInfo, navLinks } from "@/lib/data";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.url.replace("#", ""));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        {/* Name and Title */}
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">{personalInfo.name}</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          {personalInfo.title} @ {personalInfo.institution}
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-400">
          Wireless Power Transfer · Embedded AI · FPGA · Control Systems
        </p>

        {/* Navigation */}
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  className={`group flex items-center py-3 ${
                    activeSection === link.url.replace("#", "")
                      ? "text-slate-200"
                      : "text-slate-500"
                  }`}
                  href={link.url}
                >
                  <span
                    className={`mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${
                      activeSection === link.url.replace("#", "")
                        ? "w-16 bg-slate-200"
                        : "w-8 bg-slate-600"
                    }`}
                  ></span>
                  <span className="text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    {link.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Social Links */}
      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        <li className="mr-5 shrink-0 text-xs">
          <a
            className="block text-slate-400 hover:text-teal-300"
            href={personalInfo.links.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
            title="GitHub"
          >
            <span className="sr-only">GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </li>
        <li className="mr-5 shrink-0 text-xs">
          <a
            className="block text-slate-400 hover:text-teal-300"
            href={personalInfo.links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn (opens in a new tab)"
            title="LinkedIn"
          >
            <span className="sr-only">LinkedIn</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
            </svg>
          </a>
        </li>
        <li className="mr-5 shrink-0 text-xs">
          <a
            className="block text-slate-400 hover:text-teal-300"
            href={personalInfo.links.googleScholar}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Google Scholar (opens in a new tab)"
            title="Google Scholar"
          >
            <span className="sr-only">Google Scholar</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
              <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM.21 9.02 12 0l11.79 9.02a.5.5 0 0 1-.3.9H20v4h-3v-4H7v4H4v-4H.51a.5.5 0 0 1-.3-.9Z" />
            </svg>
          </a>
        </li>
        <li className="mr-5 shrink-0 text-xs">
          <a
            className="block text-slate-400 hover:text-teal-300"
            href={personalInfo.links.orcid}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="ORCID (opens in a new tab)"
            title="ORCID"
          >
            <span className="sr-only">ORCID</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
              <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.684 3.465h1.369v10.1H6.685V7.843zm3.944 0h3.7c3.459 0 5.025 2.456 5.025 5.059 0 2.534-1.519 5.041-5.025 5.041h-3.7V7.843zm1.369 1.209v7.681h2.256c2.916 0 3.7-2.125 3.7-3.831 0-1.775-.859-3.85-3.7-3.85h-2.256z" />
            </svg>
          </a>
        </li>
        <li className="mr-5 shrink-0 text-xs">
          <a
            className="block text-slate-400 hover:text-teal-300"
            href="/CV-Ning-Kang.pdf"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Download CV (opens in a new tab)"
            title="CV / Resume"
          >
            <span className="sr-only">CV</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
              <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z" clipRule="evenodd" />
              <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
            </svg>
          </a>
        </li>
      </ul>
    </header>
  );
}
