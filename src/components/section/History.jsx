import { RevealOnScroll } from "../RevealOnScroll";

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
};
