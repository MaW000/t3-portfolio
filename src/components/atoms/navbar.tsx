import Image from "next/image";

export const Navbar = () => {
  function scrollToTop(x: number): void {
    const fixed = 1250;
    scrollTo(document.body, x, fixed);
  }

  function scrollTo(element: HTMLElement, to: number, duration: number): void {
    const start: number = element.scrollTop,
      change: number = to - start,
      increment = 20;
    let currentTime = 0;

    const animateScroll = function (): void {
      currentTime += increment;
      const val: number = easeInOutQuad(currentTime, start, change, duration);
      window.scrollBy({ top: val });
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  }

  type EaseInOutQuadFunction = (
    t: number,
    b: number,
    c: number,
    d: number
  ) => number;

  const easeInOutQuad: EaseInOutQuadFunction = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  return (
    <header className="align-center absolute z-10 -ml-4 mt-10 flex w-screen  flex-col pl-4 md:flex-row  ">
      <a
        className="relative mx-auto h-[3.83rem] w-[10rem]  font-medium "
        href={"/"}
      >
        <Image
          src="/logo.png"
          className="rounded-md"
          // width={4000}
          // height={4000}
          fill={true}
          alt="logo"
        />
      </a>
      <nav className="mx-auto flex flex-wrap items-center justify-center text-base lg:text-xl  3xl:text-2xl">
        <button
          onClick={() => scrollToTop(31)}
          className="text-[#CCD6F1]  before:mr-1  before:text-casablanca-500 before:content-['|'] after:ml-1 after:text-casablanca-500 hover:text-casablanca-500 md:before:mr-5 md:after:ml-5  "
        >
          {" "}
          About
        </button>
        <button
          onClick={() => scrollToTop(54)}
          className="text-[#CCD6F1]  before:mr-1  before:text-casablanca-500 before:content-['|'] after:ml-1 after:text-casablanca-500 hover:text-casablanca-500  md:before:mr-5 md:after:ml-5  "
        >
          {" "}
          Work
        </button>
        <button
          onClick={() => scrollToTop(110)}
          className="text-[#CCD6F1]  before:mr-1  before:text-casablanca-500 before:content-['|'] after:ml-1 after:text-casablanca-500 after:content-['|'] hover:text-casablanca-500 md:before:mr-5 md:after:ml-5"
        >
          {" "}
          Contact
        </button>
      </nav>
      <button className=" mx-auto my-auto rounded border-2 border-casablanca-500 bg-transparent px-4  py-2 font-mono text-xl font-bold text-casablanca-500 hover:bg-pizazz-500 hover:text-black focus:outline-none 3xl:text-3xl">
        Resume
      </button>
    </header>
  );
};
