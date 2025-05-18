/* eslint-disable @next/next/no-img-element */
 
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-0  p-2 w-full">
      <div className="grid grid-cols-12 xs:gap-6  gap-5 - md:gap-8 w-full m-auto">
        <ItemLayout className="col-span-full  lg:col-span-8 row-span-2 text-wrap flex-col items-start">
          <h2 className="text-xl font-semibold md:text-2xl text-left w-full capitalize">
        Leveling Up in Web Development
          </h2>
          <p className="  text-sm sm:text-sm md:text-base  font-bold">
          Perjalanan saya di dunia pengembangan web berawal dari rasa ingin tahu dan berkembang menjadi semangat untuk menciptakan solusi digital yang berdampak. Dengan JavaScript sebagai fondasi utama, saya membangun antarmuka yang interaktif dan modern menggunakan framework seperti React.js dan Next.js.

Saya menerapkan pendekatan Jamstack untuk menciptakan website yang cepat, aman, dan ramah pengguna — menggabungkan keindahan desain dengan performa tinggi. Setiap proyek yang saya kerjakan adalah cerminan dari komitmen saya terhadap detail, efisiensi, dan pengalaman pengguna yang optimal.

Saya terus mengikuti perkembangan teknologi terbaru, siap menghadapi tantangan baru, dan terbuka untuk berkolaborasi dalam membangun masa depan web yang lebih baik.
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-accent">
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            7+ <sub className="font-semibold text-base">projects</sub>
          </p>
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
