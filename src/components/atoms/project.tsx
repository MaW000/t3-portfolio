"use client";
import Image from "next/image";

import { TbBrandGithub } from "react-icons/tb";
import { VscLinkExternal } from "react-icons/vsc";
export const Project = () => {
  const proj = [
    {
      github: "https://github.com/MaW000/next-clip",
      id: "63f8751a639c6460dc1dc1df",
      img: "/twitchClip.png",
      info: "Saves hundreds of thousands of comments to mongodb database, you can then type in keywords and number of occurrences to filter for specific moments. \nThis is a unique idea that will be useful to people that post clips from twitch streams onto tiktok or youtube. \nThey could save hours everyday by filtering the sometimes 20 hour videos into a organized handful of the most engaging clips. ",
      live: "https://next-clip.herokuapp.com/",
      tech: ["React", "Tailwind", "MongoDB", "Next.js"],
      title: "Next-Clip",
    },
    {
      id: "63f876d56ad2a22676be9f22",
      title: "Apple top 100 dashboard",
      info: "Saves hundreds of thousands of comments to mongodb database, you can then type in keywords and number of occurrences to filter for specific moments. \nThis is a unique idea that will be useful to people that post clips from twitch streams onto tiktok or youtube. \nThey could save hours everyday by filtering the sometimes 20 hour videos into a organized handful of the most engaging clips. ",
      tech: ["React", "Tailwind", "CSS"],
      img: "/apple100.png",
      github: "https://github.com/MaW000/Music-App",
      live: "https://music-app-maw000.vercel.app/",
    },
    {
      id: "63f87b6b97148946141360dd",
      title: "Next-Portfolio",
      info: "Saves hundreds of thousands of comments to mongodb database, you can then type in keywords and number of occurrences to filter for specific moments. \nThis is a unique idea that will be useful to people that post clips from twitch streams onto tiktok or youtube. \nThey could save hours everyday by filtering the sometimes 20 hour videos into a organized handful of the most engaging clips. ",
      tech: ["React", "Next.js", "Tailwind", "Framer-motion"],
      img: "/portfolio.png",
      github: "https://github.com/MaW000/portfolio-next",
      live: "",
    },
  ];

  return (
    <>
      <div className="3xl:mx-100 mt-10  flex grow-0 flex-col  gap-20 lg:mx-10 ">
        {proj &&
          proj.map((project) => {
            return (
              <div
                key={project.title}
                className={
                  "group relative mx-auto grid   max-w-4xl grid-cols-12 3xl:max-w-6xl  "
                }
              >
                <div className="absolute hidden h-full w-2 bg-pizazz-500     lg:block lg:group-odd:right-0 lg:group-even:left-0" />

                <div className="full lg:half relative h-[30rem] w-full transition duration-1000 ease-in-out   hover:scale-105 lg:opacity-20  lg:hover:z-20 lg:hover:opacity-100 ">
                  <a
                    href={project.live || project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Image
                      className="group/img peer h-full w-full mix-blend-multiply grayscale  transition lg:hover:mix-blend-normal  lg:hover:grayscale-0   "
                      fill={true}
                      src={project.img}
                      alt="app photo"
                    />
                    <div className="peer absolute inset-0 -z-10 h-full w-full bg-casablanca-500 peer-hover:hidden " />
                  </a>
                </div>
                <div className="text-slate bg-ymaroon relative z-10 col-span-12 col-start-1  row-span-full  flex flex-col py-6 px-2 pt-8 text-periwinkle-gray-500 opacity-[.9] lg:bg-transparent lg:text-xl lg:group-odd:col-start-5 lg:group-odd:text-right lg:group-even:col-start-1 lg:group-even:col-end-9 3xl:text-2xl ">
                  <div className="px-2">
                    <h1 className="font-mono text-casablanca-500">
                      Featured Project
                    </h1>

                    <h1 className="mb-5 font-bold  leading-7 text-periwinkle-gray-500">
                      {project.title}
                    </h1>

                    <p className="text-base 3xl:text-xl">{project.info}</p>
                    <div className="text-slate relative mt-2   flex justify-end gap-3 align-bottom text-2xl   md:text-3xl  lg:group-even:justify-start ">
                      <a
                        className=""
                        href={project.github}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <TbBrandGithub className="" />
                      </a>
                      <a
                        className=""
                        href={project.live}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <VscLinkExternal className="" />
                      </a>
                    </div>
                  </div>

                  <div className="bottom-14 mt-10 flex   flex-col lg:group-odd:right-2 lg:group-even:left-2">
                    <div className="flex flex-wrap justify-center gap-2 pt-5 font-bold lg:justify-end  lg:group-even:justify-start">
                      {project.tech.map((tech) => {
                        return (
                          <div
                            key={tech}
                            className=" relative float-right  box-content bg-pizazz-500 text-right text-base lg:group-odd:rounded-bl-lg lg:group-odd:pr-1  lg:group-even:rounded-br-lg lg:group-even:pl-1 lg:group-even:text-left "
                          >
                            <h1 className="ml-2 w-full justify-end px-2 text-end   text-black  opacity-100 lg:group-even:ml-0 lg:group-even:px-0 lg:group-even:pr-6 lg:group-even:text-start ">
                              {tech}
                            </h1>
                            <div className="absolute bottom-0 right-0 h-1 w-[80%] bg-black lg:group-odd:rounded-tl-xl   lg:group-even:left-0 lg:group-even:rounded-tr-xl" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
