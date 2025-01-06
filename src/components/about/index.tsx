/* eslint-disable @next/next/no-img-element */
 
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-0 mt-0 w-full">
      <div className="grid grid-cols-12 xs:gap-6  gap-9 md:gap-8 w-full m-auto">
        <ItemLayout className="col-span-full  lg:col-span-8 row-span-2 text-wrap flex-col items-start">
          <h2 className="text-xl font-semibold md:text-2xl text-left w-full capitalize">
            The Coding Gamer: Leveling Up in Web Develodpment
          </h2>
          <p className="  text-sm sm:text-sm md:text-base  font-bold">
            My web development quest is fueled by an arsenal of powerful tools
            and languages, with JavaScript serving as my primary weapon. I
            expertly wield frameworks like React.js and Next.js to build
            immersive digital realms (websites) that connect players (users)
            across the vast cyberspace. The dynamic art of Jamstack empowers me
            to create fast, secure, and captivating experiences, ensuring every
            adventure is not only functional but visually stunning. As I
            continue to conquer new challenges and explore emerging
            technologies, join me in shaping the future of the web - one
            thrilling line of code at a time.
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            7+ <sub className="font-semibold text-base">projects</sub>
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>
       
        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=satriaaryadiva&theme=transparent&hide_border=true&title_color=5BBFFE&text_color=FFFFFF&icon_color=5BBFFE&text_bold=false"
            alt="AliSabet"
            loading="lazy"
          />
        </ItemLayout>
     
        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=satriaaryadiva&theme=transparent&hide_border=true&title_color=5BBFFE&text_color=FFFFFF&icon_color=5BBFFE&text_bold=false"
            alt="AliSabet"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=js,html,css,scss,discord,express,git,github,linkedin,firebase,nextjs,nodejs,npm,react,stackoverflow,tailwind,ts,vite,vscode,yarn"
            alt="skill satria"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=satriaaryadiva&theme=dark&hide_border=true&type=png&background=EB545400&ring=5BBFFE&currStreakLabel=5BBFFE"
            alt="AliSabet"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/pin/?username=satriaaryadiva&repo=car-rental&theme=transparent&hide_border=true&title_color=5BBFFE&text_color=FFFFFF&icon_color=5BBFFE&text_bold=false"
            alt="AliSabet"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
