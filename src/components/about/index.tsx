/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-0  p-2 w-full">
      <div className="grid grid-cols-12 xs:gap-6  gap-5 - md:gap-8 w-full m-auto">
        <ItemLayout className="col-span-full  lg:col-span-8 row-span-2 text-wrap flex-col items-start">
          <h2 className="text-xl font-semibold md:text-2xl text-left w-full capitalize">
            Self Taught Web Developer
          </h2>
          My journey in web development began with curiosity and grew into a passion for creating impactful digital solutions. With JavaScript as my main foundation, I build interactive and modern interfaces using frameworks like React.js and Next.js.

          I adopt the Jamstack approach to create fast, secure, and user-friendly websites — combining design beauty with high performance. Every project I work on reflects my commitment to detail, efficiency, and optimal user experience.

          I continuously keep up with the latest technologies, am ready to face new challenges, and am open to collaboration in building a better future for the web.
        </ItemLayout>


        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <Link href="/projects" target="_blank">
            <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
              7+ <sub className="font-semibold text-base">projects</sub>
            </p>
          </Link>
        </ItemLayout>

        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=satriaaryadiva&theme=transparent&hide_border=true&title_color=5BBFFE&text_color=FFFFFF&icon_color=5BBFFE&text_bold=false"
            alt="Satria arya diva"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=satriaaryadiva&theme=transparent&hide_border=true&title_color=5BBFFE&text_color=FFFFFF&icon_color=5BBFFE&text_bold=false"
            alt="Satria arya diva"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=js,html,css,scss,discord,express,git,github,linkedin,firebase,nextjs,nodejs,npm,react,stackoverflow,tailwind,ts,vite,vscode,yarn"
            alt="skill Satria"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=satriaaryadiva&theme=dark&hide_border=true&type=png&background=EB545400&ring=5BBFFE&currStreakLabel=5BBFFE"
            alt="Satria"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/pin/?username=satriaaryadiva&repo=car-rental&theme=transparent&hide_border=true&title_color=5BBFFE&text_color=FFFFFF&icon_color=5BBFFE&text_bold=false"
            alt="Satria arya diva"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
