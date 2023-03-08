import { ContactButton } from "@/atoms/ContactButton";

export const Contact = () => {
  return (
    <section className="mx-auto py-10 pb-40">
      <div className="-ml-7 mt-2 mb-10 flex items-center justify-center text-center text-casablanca-500 ">
        <h1 className="mr-2.5 lg:text-2xl">03.</h1>
        <h1 className="text-lg leading-5 text-pizazz-500 lg:text-3xl ">
          What&apos;s Next
        </h1>
      </div>

      <ContactButton />
    </section>
  );
};
