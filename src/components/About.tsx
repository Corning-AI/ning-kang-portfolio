import { aboutText, personalInfo } from "@/lib/data";

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
            {paragraph.includes("Dr. Huang Hen-Wei") ? (
              <>
                {paragraph.split("Dr. Huang Hen-Wei")[0]}
                <a
                  className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  href={personalInfo.labUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Dr. Huang Hen-Wei
                </a>
                {paragraph.split("Dr. Huang Hen-Wei")[1]}
              </>
            ) : paragraph.includes("Shanghai Jiao Tong University") ? (
              <>
                {paragraph.split("Shanghai Jiao Tong University")[0]}
                <a
                  className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  href="https://www.sjtu.edu.cn/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Shanghai Jiao Tong University
                </a>
                {paragraph.split("Shanghai Jiao Tong University")[1]}
              </>
            ) : (
              paragraph
            )}
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
