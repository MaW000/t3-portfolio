import { Project } from "@/atoms/project";

export const Projects = () => {
  return (
    <section className="mx-auto  py-60">
      <div className="relative mt-2 mb-10 flex items-center justify-start text-left text-casablanca-500 ">
        <div className="absolute left-[3%] bottom-2 flex md:left-[25%]">
          <h1 className="mr-2.5 lg:text-lg 3xl:text-2xl">02.</h1>
          <h1 className="text-lg leading-5 text-pizazz-500 lg:text-2xl 2xl:text-3xl   ">
            Some Things I`ve Built
          </h1>
        </div>
        <div className="bottom-0 right-[25%] h-[2px] w-full bg-casablanca-500 md:visible md:absolute  md:w-3/6" />
      </div>
      <ul className="mx-5">
        <Project />
      </ul>
    </section>
  );
};
