import { Metadata } from "next";
import Image from "next/image";

import AvailableForNewOpportunities from "@/components/AvailableForNewOpportunities";

export const metadata: Metadata = {
  title: "About",
};

const ExperienceCard = ({
  experience,
}: {
  experience: {
    logo: string;
    jobTitle: string;
    company: string;
    employmentType: string;
    hiringDate: string;
    content?: React.ReactNode;
  };
}) => {
  const { logo, jobTitle, company, employmentType, hiringDate, content } =
    experience;

  return (
    <div className="flex space-x-3">
      <div>
        <div className="relative h-[3.125rem] w-[3.125rem]">
          <Image
            src={logo}
            width={50}
            height={50}
            alt="Obytes' logo"
            className="rounded-full"
          />
        </div>
      </div>

      <div className="space-y-2">
        <div>
          <h3 className="text-lg font-semibold">{jobTitle}</h3>

          <h4 className="text-sm">
            {company} - {employmentType}
          </h4>

          <p className="text-sm text-gray-400">{hiringDate}</p>
        </div>

        {content}
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <main className="main-container">
      <section className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">About Me</h1>

          <div className="space-y-2">
            <p>
              I&apos;m Imad Atyat-Allah, A Front-end React developer passionate
              about creating beautiful, user-friendly web applications.
            </p>

            <p>
              My fascination with the world of web development began in high
              school, where I discovered a passion for creating fast and
              innovative web applications. Since then, I have dedicated myself
              to continually enhancing my skills and expertise in the field of
              web development.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <h2 className="text-2xl font-bold">Experience</h2>

            <AvailableForNewOpportunities />
          </div>

          <div className="space-y-4">
            <ExperienceCard
              experience={{
                logo: "/static/portfolly_logo.jpeg",
                jobTitle: "Co-Founder",
                company: "Portfolly",
                employmentType: "Full-time",
                hiringDate: "Sep 2022 - Present",
                content: (
                  <div className="text-sm">
                    <ul className="ml-2 list-inside list-disc">
                      <li>Setup multi-tenancy</li>

                      <li>
                        Took care of all API stuff using Prisma and Planetscale
                      </li>
                    </ul>
                  </div>
                ),
              }}
            />

            <ExperienceCard
              experience={{
                logo: "/static/obytes_logo.jpeg",
                jobTitle: "Front-end Developer",
                company: "Obytes",
                employmentType: "Full-time",
                hiringDate: "Apr 2022 - Present",
                content: (
                  <div className="text-sm">
                    <h3 className="font-medium">- Lineup project:</h3>

                    <ul className="ml-2 list-inside list-disc">
                      <li>
                        Led the front-end team, making sure we built a
                        great-looking and smooth-working web app.
                      </li>

                      <li>
                        Handled the setup of Stripe payments and Stripe Connect,
                        so customers could easily and safely pay online.
                      </li>

                      <li>
                        Figured out how to add tricky new stuff to the site and
                        made sure it all worked well.
                      </li>

                      <li>
                        Checked out my teammates&apos; code on GitHub to help
                        catch any issues and make sure everything was on track.
                      </li>
                    </ul>
                  </div>
                ),
              }}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Links</h2>

          <div className="flex flex-col">
            <ul className="list-inside list-disc space-y-2 font-medium">
              <li>
                Twitter:{" "}
                <a
                  href="https://twitter.com/ImadAtyat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  @ImadAtyat
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a
                  href="https://github.com/imadatyatalah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  @imadatyatalah
                </a>
              </li>
              <li>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/imadatyat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  @imadatyat
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
