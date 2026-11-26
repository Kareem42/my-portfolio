import { RevealOnScroll } from "../RevealOnScroll";
import type { PhotoId } from "@/content/photos";
import { PhotoFrame } from "../ui/PhotoFrame";

interface Role {
  date: string;
  title: string;
  city: string;
  body: readonly string[];
  photoId?: PhotoId;
}

const ROLES: readonly Role[] = [
  {
    date: "2023 — 2025",
    title: "Business Intelligence Manager",
    city: "Farmers Branch, TX",
    body: [
      " Architected an automated ETL pipeline using Business Objects scheduling and Power Automate to extract, transform, and load daily sales data into SharePoint; leveraged SQL and optimized relational models to enable real-time dashboard refreshes for 125+ stakeholders across Premier and Genesis divisions.",
      " Built a budget-tracking system from scratch to manage third-party vendor requisitions across advertising, POS, and marketing events; served as sole subject-matter expert and authored user documentation and training materials for both divisions.",
      " Designed and maintained pricing strategy dashboards that surfaced revenue metrics across Texas demographic regions, informing pricing and merchandising decisions that sustained a 10% product sales increase.",
    ],
  },
  {
    date: "2022 — 2023",
    title: "Business Intelligence Analyst",
    city: "Farmers Branch, TX",
    body: [
      " Reduced report delivery time by 30% by identifying pipeline bottlenecks and automating daily refresh cycles, eliminating manual extraction for a 15+ person cross-functional team.",
      " Partnered with Finance to analyze margin drivers and surface portfolio inefficiencies, delivering data-backed recommendations that improved margins by 2%.",
      " Collaborated with cross-functional teams to define project requirements, document acceptance criteria, and deliver tailored, data-driven software solutions for business stakeholders.",
    ],
  },
  {
    date: "2020 — 2022",
    title: "Night Warehouse Supervisor",
    city: "Farmers Branch, TX",
    // photoId: "place-dallas",
    body: [
      "Led night warehouse operations and staff, coordinating workflows, safety, inventory accuracy, and on-time deliveries while improving productivity.",
    ],
  },
  {
    date: "2017 — 2020",
    title: "Day Warehouse Supervisor",
    city: "Lafayette, LA",
    // photoId: "place-lafayette",
    body: [
      "Managed daily warehouse operations, inbound deliveries, inventory, and team workflows, with a focus on safety, productivity, and customer satisfaction.",
    ],
  },
];

export const History = () => {
  return (
    <section id="history" className="relative z-10 py-24 md:py-32">
      <RevealOnScroll>
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="mb-12 border-b border-border pb-7">
            <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-indigo-300">
              <span className="h-px w-8 bg-indigo-400" /> 04 / Experience
            </p>
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <h2 className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
                Work history.
              </h2>
              <p className="max-w-sm text-sm leading-6 text-foreground/60">
                From warehouse operations to business intelligence, and now
                building software with the same focus on real-world outcomes.
              </p>
            </div>
          </div>

          <ol className="relative ml-2 border-l border-indigo-400/40">
            {ROLES.map((role, index) => (
              <li
                key={role.title}
                className="relative pb-10 pl-7 last:pb-0 md:pl-10"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 bg-indigo-400 ring-4 ring-background"
                />
                <article className="grid gap-5 md:grid-cols-[10rem_1fr] md:gap-8">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-indigo-300">
                    <p>{role.date}</p>
                    <p className="mt-2 text-foreground/45">
                      0{index + 1} / Career
                    </p>
                  </div>
                  <div className="border-t border-border pt-4 md:pt-0 md:border-0">
                    <div className="flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
                      <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                        {role.title}
                      </h3>
                      <p className="font-mono text-xs text-foreground/45">
                        {role.city}
                      </p>
                    </div>
                    <ul className="mt-3 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-6 text-foreground/65 marker:text-indigo-300">
                      {role.body.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    {role.photoId && (
                      <PhotoFrame
                        id={role.photoId}
                        className="mt-5 max-w-md rounded-none border-border shadow-none"
                      />
                    )}
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default History;
