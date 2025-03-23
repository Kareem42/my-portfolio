import { RevealOnScroll } from "../RevealOnScroll";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaSchool } from "react-icons/fa";

export const History = () => {
  return (
    <section
      id="history"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-mono font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">
            Work & Education
          </h2>
        </div>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="font-mono vertical-timeline-element--work w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
            contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(97,71,185)" }}
            date="2023-present"
            iconStyle={{ background: "rgb(98, 71, 186)" }}
            icon={<FaBriefcase/>}
            position="left"
          >
            <h3 className="vertical-timeline-element-title font-bold font-mono">
              Business Intelligence Manager
            </h3>
            <h4 className="vertical-timeline-element-subtitle font-mono">
              Farmers Branch, TX
            </h4>
            <p className="font-mono">
              Oversaw two Spirits divisions with a primary focus on leveraging
              data analytics to drive sales and generate actionable reports.
              Played a key role in supporting informed decision-making, ensuring
              data integrity, and crafting effective business intelligence
              strategies and solutions.{" "}
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="font-mono vertical-timeline-element--work w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
            contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(97,71,185)" }}
            date="2022-2023"
            iconStyle={{ background: "rgb(97,71,185)" }}
            icon={<FaBriefcase/>}
            position="right"
          >
            <h3 className="vertical-timeline-element-title font-bold font-mono">
              Business Intelligence Analyst
            </h3>
            <h4 className="vertical-timeline-element-subtitle font-mono">
              Farmers Branch, TX
            </h4>
            <p className="font-mono">
              Collect, evaluate, and interpret data to deliver actionable
              insights that drive strategic business decisions. Utilize data
              visualization tools and reporting platforms to design and develop
              dashboards and comprehensive reports for enhanced decision-making
              and clarity.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="font-mono vertical-timeline-element--work w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
            contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(97,71,185)" }}
            date="2020-2022"
            iconStyle={{ background: "rgb(97,71,185)" }}
            icon={<FaBriefcase/>}
            position="left"
          >
            <h3 className="vertical-timeline-element-title font-bold font-mono">
              Night Warehouse Supervisor
            </h3>
            <h4 className="vertical-timeline-element-subtitle font-mono">
              Farmers Branch, TX
            </h4>
            <p>
              Supervise night operations in the warehouse, ensuring the
              efficient and accurate handling, storage, and distribution of
              liquor products. Oversee a team of warehouse staff, coordinate
              workflows, enforce safety protocols, and maintain inventory
              accuracy. Play a key role in optimizing productivity and ensuring
              on-time deliveries while upholding company standards and policies.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="font-mono vertical-timeline-element--work w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
            contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(97,71,185)" }}
            date="2017-2020"
            iconStyle={{ background: "rgb(97,71,185)" }}
            icon={<FaBriefcase/>}
            position="right"
          >
            <h3 className="vertical-timeline-element-title font-bold font-mono">
              Day Warehouse Supervisor
            </h3>
            <h4 className="vertical-timeline-element-subtitle font-mono">
              Lafayette, LA
            </h4>
            <p className="font-mono">
              Manage daily warehouse operations, ensuring the efficient receipt
              of inbound deliveries, storage, and distribution of liquor
              products. Lead and coordinate a team of warehouse staff, oversee
              inventory management, enforce safety protocols, and maintain
              compliance with company standards. Focus on optimizing workflows
              and driving productivity to support timely deliveries and customer
              satisfaction.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="font-mono vertical-timeline-element--educcation w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
            contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(97,71,185)" }}
            date="2015-2016"
            iconStyle={{ background: "rgb(97,71,185)" }}
            icon={<FaSchool/>}
            position="left"
          >
            <h3 className="vertical-timeline-element-title font-bold font-mono">
              South Louisiana Community College
            </h3>
            <h4 className="vertical-timeline-element-subtitle font-mono">
              Lafayette, LA
            </h4>
            <h4 className="vertical-timeline-element-subtitle font-mono">
              <strong>ASS in Informaton Technology</strong>
            </h4>
            <p className="font-mono">
              
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </RevealOnScroll>
    </section>
  );
};

export default History;
