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
                hiringDate: "Sep 2022 - Apr 2023",
                content: (
                  <div className="text-sm">
                    <ul className="ml-2 list-inside list-disc space-y-1">
                      <li>Setup multi-tenancy</li>

                      <li>
                        Took care of all API stuff using Prisma and Planetscale
                      </li>
                      <li>
                        Handled API Development using Next.js API routes, Prisma
                        ORM, and Planetscale MySQL database.
                      </li>
                      <li>
                        Handled Front-end API Integration using react-query.
                      </li>
                      <li>Integrated GitHub OAuth using next-auth.</li>
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
                hiringDate: "Apr 2022 - Oct 2024",
                content: (
                  <div className="space-y-4 text-sm">
                    <div className="space-y-2">
                      <h3 className="font-medium">- Nawalic project</h3>

                      <ul className="ml-2 list-inside list-disc space-y-1">
                        <li>
                          Built Nawalic&apos;s landing page based on designs
                          from Figma provided by our designer.
                        </li>

                        <li>
                          Connected the newsletter signup form to the backend.
                        </li>

                        <li>
                          Figured out how to add tricky new stuff to the site
                          and made sure it all worked well.
                        </li>

                        <li>
                          Checked out my teammates&apos; code on GitHub to help
                          catch any issues and make sure everything was on
                          track.
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">- Lineup project:</h3>

                      <ul className="ml-2 list-inside list-disc space-y-1">
                        <li>
                          Managed the front-end team for Lineup project,
                          ensuring a visually appealing and user-friendly web
                          application.
                        </li>

                        <li>
                          Configured Stripe payments and Stripe Connect,
                          enabling secure and hassle-free online transactions
                          for customers.
                        </li>

                        <li>
                          Implemented complex features seamlessly into the site
                          like authentication using OTP, User onboarding, and
                          dashboards... ensuring smooth functionality.
                        </li>

                        <li>
                          Reviewed teammates&apos; code on GitHub, identifying
                          and resolving issues to keep the project on course.
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">- Daratma project:</h3>

                      <ul className="ml-2 list-inside list-disc space-y-1">
                        <li>
                          Built Daratma&apos;s new landing page based on designs
                          from Figma provided by our designer.
                        </li>

                        <li>Implemented Hygraph CMS Integration.</li>

                        <li>
                          Connected the newsletter signup form to the backend.
                        </li>
                      </ul>
                    </div>
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
