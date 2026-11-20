import { RevealOnScroll } from "../RevealOnScroll";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase } from "react-icons/fa";
import type { PhotoId } from "@/content/photos";
import { PhotoFrame } from "../ui/PhotoFrame";

interface Role {
  date: string;
  title: string;
  city: string;
  body: string;
  position: "left" | "right";
  photoId?: PhotoId;
}

const ROLES: readonly Role[] = [
  {
    date: "2023-2025",
    title: "Business Intelligence Manager",
    city: "Farmers Branch, TX",
    position: "left",
    body: "Oversaw two Spirits divisions with a primary focus on leveraging data analytics to drive sales and generate actionable reports. Played a key role in supporting informed decision-making, ensuring data integrity, and crafting effective business intelligence strategies and solutions.",
  },
  {
    date: "2022-2023",
    title: "Business Intelligence Analyst",
    city: "Farmers Branch, TX",
    position: "right",
    body: "Collect, evaluate, and interpret data to deliver actionable insights that drive strategic business decisions. Utilize data visualization tools and reporting platforms to design and develop dashboards and comprehensive reports for enhanced decision-making and clarity.",
  },
  {
    date: "2020-2022",
    title: "Night Warehouse Supervisor",
    city: "Farmers Branch, TX",
    position: "left",
    photoId: "place-dallas",
    body: "Supervise night operations in the warehouse, ensuring the efficient and accurate handling, storage, and distribution of liquor products. Oversee a team of warehouse staff, coordinate workflows, enforce safety protocols, and maintain inventory accuracy. Play a key role in optimizing productivity and ensuring on-time deliveries while upholding company standards and policies.",
  },
  {
    date: "2017-2020",
    title: "Day Warehouse Supervisor",
    city: "Lafayette, LA",
    position: "right",
    photoId: "place-lafayette",
    body: "Manage daily warehouse operations, ensuring the efficient receipt of inbound deliveries, storage, and distribution of liquor products. Lead and coordinate a team of warehouse staff, oversee inventory management, enforce safety protocols, and maintain compliance with company standards. Focus on optimizing workflows and driving productivity to support timely deliveries and customer satisfaction.",
  },
];

export const History = () => {
  return (
    <section
      id="history"
      className="relative z-10 flex min-h-screen items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-center font-mono text-3xl font-bold text-transparent">
            Work History
          </h2>
        </div>

        <VerticalTimeline>
          {ROLES.map((role) => (
            <VerticalTimelineElement
              key={role.title}
              className="vertical-timeline-element--work relative z-0 h-auto w-full rounded-lg font-mono transition-all duration-300 hover:scale-[1.02]"
              contentStyle={{
                background: "var(--card)",
                color: "var(--card-foreground)",
              }}
              contentArrowStyle={{ borderRight: "7px solid rgb(97,71,185)" }}
              date={role.date}
              iconStyle={{ background: "rgb(98, 71, 186)" }}
              icon={<FaBriefcase />}
              position={role.position}
            >
              {role.photoId && (
                <div className="mb-4">
                  <PhotoFrame id={role.photoId} />
                </div>
              )}
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-indigo-400">
                {role.city} · {role.date}
              </p>
              <h3 className="vertical-timeline-element-title font-mono font-bold">
                {role.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle font-mono">
                {role.city}
              </h4>
              <p className="font-mono">{role.body}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </RevealOnScroll>
    </section>
  );
};

export default History;
