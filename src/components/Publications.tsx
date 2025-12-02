import { publications } from "@/lib/data";

export default function Publications() {
  return (
    <section
      id="publications"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected publications"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Publications
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {publications.map((pub, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  <div>{pub.year}</div>
                  {pub.citations > 0 && (
                    <div className="mt-1 flex items-center text-teal-300/80">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-3 w-3">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06l3.22 3.22H2.75a.75.75 0 000 1.5h5.69l-3.22 3.22a.75.75 0 101.06 1.06l4.5-4.5a.75.75 0 000-1.06l-4.5-4.5z" />
                        <path d="M17.28 5.22a.75.75 0 00-1.06 1.06l3.22 3.22h-5.69a.75.75 0 000 1.5h5.69l-3.22 3.22a.75.75 0 101.06 1.06l4.5-4.5a.75.75 0 000-1.06l-4.5-4.5z" clipRule="evenodd" />
                      </svg>
                      {pub.citations} cited
                    </div>
                  )}
                </header>

                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                        href={pub.pdf || (pub.doi ? `https://doi.org/${pub.doi}` : "#")}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${pub.title} (opens PDF in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {pub.title}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </h3>

                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    {pub.authors}
                  </p>

                  <p className="mt-1 text-sm leading-normal text-slate-500">
                    <span className="font-medium text-slate-400">{pub.journal}</span>
                    {pub.volume && `, ${pub.volume}`}
                    {pub.pages && `, pp. ${pub.pages}`}
                  </p>

                  {(pub.highlight || pub.awards) && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {pub.highlight && (
                        <span className="inline-flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300">
                          Featured Publication
                        </span>
                      )}
                      {pub.awards && pub.awards.map((award: string, i: number) => (
                        <span key={i} className="inline-flex items-center rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
                          {award}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <a
            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
            href="https://scholar.google.com/citations?user=w9hXeZwAAAAJ"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View All Publications on Google Scholar (opens in a new tab)"
          >
            <span>
              View All on{" "}
              <span className="inline-block">
                Google Scholar
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
