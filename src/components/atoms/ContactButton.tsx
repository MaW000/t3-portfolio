import { useState } from "react";
export const ContactButton = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex flex-col justify-center text-center">
      <h1 className="text-6xl text-casablanca-500">Get In Touch</h1>
      <p className="mx-auto mt-5 max-w-2xl text-xl text-periwinkle-gray-500">
        I am looking for any exciting roles whether it be full time or partime.
        Feel free to email me about any oppurtunites
      </p>
      <div className="relative mt-12 ">
        {toggle && (
          <div className="text-slate animate-fade absolute bottom-12 left-0 right-0  m-auto  mt-8 mb-4 inline-block w-fit rounded-lg bg-stone-700 px-2  after:absolute after:left-0 after:right-0 after:m-auto after:h-0 after:w-0 after:border-t-8 after:border-l-8 after:border-r-8 after:border-l-transparent after:border-r-transparent after:content-['']">
            <h1 className="  ">Email has been copied to your clipboard</h1>
          </div>
        )}
        <button
          onClick={() => {
            setToggle(true);
            void navigator.clipboard.writeText("mwardlow0@gmail.com");
          }}
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          className=" hover:bg-darkOrange mx-auto my-auto mt-0 rounded border-2 border-casablanca-500 bg-transparent  px-4 py-2 font-mono text-xl text-casablanca-500 focus:outline-none 3xl:text-3xl"
        >
          Contact
        </button>
      </div>
    </div>
  );
};
