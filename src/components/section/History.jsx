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
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">
            History
          </h2>
        </div>
        <div className="relative pt-10">
          <VerticalTimeline className="font-bold relative pt-10">
            <VerticalTimelineElement
              className="vertical-timeline-element--work absolute top-0 left-1/2 transform -translate-x-1/2 h-full"
              date="2023 - Present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<FaBriefcase />}
            >
              <h3 className="vertical-timeline-element-title font-bold">
                Business Intelligence Manager
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Farmers Branch, TX
              </h4>
              <p>Developed and maintained web applications.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2022 - 2023"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<FaBriefcase />}
            >
              <h3 className="vertical-timeline-element-title font-bold">
                Business Intelligence Analyst
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Farmers Branch, TX
              </h4>
              <p>Developed and maintained web applications.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2020 - 2022"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<FaBriefcase />}
            >
              <h3 className="vertical-timeline-element-title font-bold">
                Night Warehouse Supervisor
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Farmers Branch, TX
              </h4>
              <p>Developed and maintained web applications.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2008 - 2010"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={<FaSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                Master of Science
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                University of California, Berkeley
              </h4>
              <p>Specialized in Computer Science.</p>
            </VerticalTimelineElement>
            {/* Add more timeline elements as needed */}
          </VerticalTimeline>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default History;

/*export const History = () => {
  return (
    <section
      id="history"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-center">
            History
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.S. in Management Informations Systems</strong> -
                  University of Louisiana at Lafayette 2003-2006
                </li>
                <li>
                  Relevant Coursework: Data Management, Information Security,
                  Data Visualization
                </li>
              </ul>

              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> AAS in Information Technology</strong> - South
                  Louisiana Community College 2015-2017
                </li>
                <li>
                  Relevant Coursework: Networking, Java Application Development,
                  Security Management
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div className="text-">
                  <h4 className="font-bold">
                    Business Intelligence Manager at Southern Glazers Wine &
                    Spirits - TX 2023-present
                  </h4>
                  <p>
                    Developed Excel and Tableau Dashboards while maintaining
                    data structures, data cleaning, and filtering for live
                    tracking
                  </p>
                </div>

                <div>
                  <h4 className="font-bold">
                    Business Intelligence Analyst at Southern Glazers Wine &
                    Spirits - TX 2022-2023
                  </h4>
                  <p>
                    Developed Excel and Tableau Dashboards while maintaining
                    data structures, data cleaning, and querying for live
                    tracking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};*/
