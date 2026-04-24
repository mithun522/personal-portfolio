import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import angularLogo from "../assets/angular.svg";
import bootstrapLogo from "../assets/bootstrap.svg";
import css3Logo from "../assets/css3.svg";
import cypressLogo from "../assets/cypress.png";
import githubLogo from "../assets/github.svg";
import htmlLogo from "../assets/html-5.svg";
import javaLogo from "../assets/java.svg";
import javascriptLogo from "../assets/javascript.svg";
import jestLogo from "../assets/jest.svg";
import mysqlLogo from "../assets/mysql.svg";
import nodejsLogo from "../assets/nodejs.svg";
import reactLogo from "../assets/react.svg";
import springLogo from "../assets/spring.svg";
import tailwindLogo from "../assets/tailwindcss.svg";
import typeScriptLogo from "../assets/typescript.svg";
import { technologyGroups } from "../data/portfolio";
import awsLogo from "../assets/aws-logo.png";
import kafkaLogo from "../assets/kafka-logo.svg";

const technologies = {
  React: reactLogo,
  Angular: angularLogo,
  TypeScript: typeScriptLogo,
  JavaScript: javascriptLogo,
  HTML: htmlLogo,
  CSS: css3Logo,
  "Node.js": nodejsLogo,
  MySQL: mysqlLogo,
  Java: javaLogo,
  Spring: springLogo,
  Jest: jestLogo,
  Cypress: cypressLogo,
  "Tailwind CSS": tailwindLogo,
  Bootstrap: bootstrapLogo,
  GitHub: githubLogo,
  "AWS": awsLogo,
  "Kafka": kafkaLogo,
};

const Technologies: React.FC = () => {
  return (
    <section
      id="technologies"
      className="px-6 py-16 text-slate-950 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-[linear-gradient(145deg,#131a2e_0%,#192746_55%,#202d4f_100%)] p-6 text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)] md:p-10">
        <div className="mb-10 flex items-center gap-3">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90">
            <FaLaptopCode className="text-[var(--accent)]" />
            Technologies
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {technologyGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h3 className="text-2xl font-semibold text-white">
                {group.title}
              </h3>
              <div className="mt-5 grid grid-cols-2 gap-4">
                {group.items.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/30 px-4 py-4"
                  >
                    <img
                      src={technologies[tech as keyof typeof technologies]}
                      alt={tech}
                      className="h-10 w-10 object-contain"
                    />
                    <div>
                      <p className="text-sm font-semibold text-white">{tech}</p>
                      <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                        Production use
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
