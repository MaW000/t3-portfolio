import Image from "next/image";

export const AboutMe = () => {
  return (
    <section className="relative z-30  my-20 mx-auto pt-2 md:max-w-3xl 2xl:max-w-4xl">
      <div className="absolute inset-0 -z-10 w-[105%] rounded-2xl  border-t-4 border-r-4 border-casablanca-500 " />
      <div className="ml-4 flex flex-col gap-12 md:grid md:grid-cols-10 md:flex-row">
        <div className="2fr col-span-5 text-periwinkle-gray-500">
          <div className="relative mt-2 mb-10 -ml-2 flex items-center text-casablanca-500">
            <h1 className="mr-2.5 lg:text-lg 2xl:text-2xl ">01.</h1>
            <h1 className="3xl:text-2xl min-w-fit leading-5 text-pizazz-500 lg:text-xl 2xl:text-xl">
              About me
            </h1>
            <div className="mt-1 ml-5 block h-[1px] w-full bg-casablanca-500 lg:h-1" />
          </div>
          <div className="3xl:text-2xl text-base lg:text-xl 2xl:text-xl">
            <p className="mb-3.5 ">
              I enjoy creating things that live on the internet. My intrest in
              the web started back when I built my first computer in elementary
              school. Since then I have lived on the internet and software.
            </p>
            <p className="mb-3.5 ">
              Fast-forward to today I have completed a bootcamp and have been
              furthering my skills everyday.
            </p>
          </div>
          <ul className="3xl:text-xl grid grid-cols-2 lg:text-lg 2xl:text-xl">
            <li className='before:text- before:content-["▹"]'>{`Javascript (ES6+)`}</li>
            <li className='before:text- before:content-["▹"]'>{`React`}</li>
            <li className='before:text- before:content-["▹"]'>{`Node.js`}</li>
            <li className='before:text- before:content-["▹"]'>{`TypeScript`}</li>
            <li className='before:text- before:content-["▹"]'>{`MongoDB`}</li>
            <li className='before:text- before:content-["▹"]'>{`Postgres`}</li>
          </ul>
        </div>
        <div className="smm:w-4/5 relative col-start-6 col-end-11 mt-5 flex ">
          <div className="absolute top-5 left-5 z-0 h-full w-full rounded-xl border-2 border-casablanca-500"></div>

          <div className="absolute h-full w-full rounded-xl bg-casablanca-500 "></div>
          <Image
            src="/cover.jpg"
            width={1000}
            height={1000}
            alt="cover"
            className="z-11 w-full rounded-xl mix-blend-multiply grayscale  transition duration-150 ease-in hover:mix-blend-normal hover:grayscale-0"
          />
        </div>
      </div>
    </section>
  );
};
