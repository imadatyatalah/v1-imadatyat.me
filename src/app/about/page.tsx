import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Imad Atyat-Allah",
};

const AboutPage = () => {
  return (
    <main className="my-4">
      <section className="space-y-8">
        <div className="space-y-5">
          <h1 className="text-3xl font-bold">About Me</h1>

          <div className="space-y-4">
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

        <div className="space-y-5">
          <h2 className="text-2xl font-bold">Links</h2>

          <div className="flex flex-col">
            <ul className="list-disc list-inside space-y-2 font-medium">
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
                GitHub{" "}
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

        <div className="space-y-5">
          <h2 className="text-2xl font-bold">Experience</h2>

          <div>WIP</div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
