import { aboutText, personalInfo } from "@/lib/data";
import React from "react";

// Link configuration for text replacements
const linkConfig: { text: string; url: string }[] = [
  { text: "Dr. Huang Hen-Wei", url: personalInfo.labUrl },
  { text: "NTU", url: "https://www.ntu.edu.sg/" },
  { text: "Shanghai Jiao Tong University", url: "https://en.sjtu.edu.cn/" },
];

// Function to render paragraph with multiple links
function renderParagraphWithLinks(paragraph: string): React.ReactNode {
  const linkClass = "font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300";

  // Find all matches and their positions
  const matches: { text: string; url: string; index: number }[] = [];

  for (const link of linkConfig) {
    let searchIndex = 0;
    let foundIndex = paragraph.indexOf(link.text, searchIndex);
    while (foundIndex !== -1) {
      matches.push({ text: link.text, url: link.url, index: foundIndex });
      searchIndex = foundIndex + link.text.length;
      foundIndex = paragraph.indexOf(link.text, searchIndex);
    }
  }

  if (matches.length === 0) {
    return paragraph;
  }

  // Sort matches by position
  matches.sort((a, b) => a.index - b.index);

  // Build result with links
  const result: React.ReactNode[] = [];
  let lastIndex = 0;

  matches.forEach((match, i) => {
    // Add text before this match
    if (match.index > lastIndex) {
      result.push(paragraph.slice(lastIndex, match.index));
    }
    // Add the link
    result.push(
      <a
        key={i}
        className={linkClass}
        href={match.url}
        target="_blank"
        rel="noreferrer noopener"
      >
        {match.text}
      </a>
    );
    lastIndex = match.index + match.text.length;
  });

  // Add remaining text
  if (lastIndex < paragraph.length) {
    result.push(paragraph.slice(lastIndex));
  }

  return result;
}

export default function About() {
  const paragraphs = aboutText.split("\n\n");

  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-4">
            {renderParagraphWithLinks(paragraph)}
          </p>
        ))}

        {/* Citation Stats */}
        <div className="mt-8 flex flex-wrap gap-8">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-teal-300">{personalInfo.stats.citations}+</span>
            <span className="text-sm text-slate-400">Citations</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-teal-300">{personalInfo.stats.hIndex}</span>
            <span className="text-sm text-slate-400">h-index</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-teal-300">{personalInfo.stats.i10Index}</span>
            <span className="text-sm text-slate-400">i10-index</span>
          </div>
        </div>
      </div>
    </section>
  );
}
