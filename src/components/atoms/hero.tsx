export const Hero = () => {
  return (
    <section className=" flex min-h-screen flex-col items-center justify-center">
      <div className="mr-[30rem]">
        <h1 className="mb-5 font-mono  text-xl  text-casablanca-500">
          Hi, my name is
        </h1>

        <h2 className="text-5xl font-semibold  text-casablanca-500 ">
          Matthew Wardlow.
        </h2>
        <h3 className="  mt-[10px] text-4xl text-periwinkle-gray-500   ">
          I&apos;m thinking of the next solution
        </h3>

        <p className=" mt-3 max-w-xl font-sans  text-3xl text-periwinkle-gray-500 2xl:max-w-4xl ">
          Fullstack Developer passionately building out my skillset.
          <br /> Currently, I’m focused on finding my first fulltime role.
        </p>

        <a
          href="https://github.com/MaW000"
          target="_blank"
          rel="noreferrer noopener"
          className="mt-12 inline-block rounded border-2 border-casablanca-500 bg-transparent py-5   px-7 font-mono text-casablanca-500 hover:bg-pizazz-500 hover:text-black focus:outline-none md:mt-12 lg:text-lg 2xl:text-xl 3xl:text-3xl"
        >
          Check out my Github!
        </a>
      </div>
    </section>
  );
};
