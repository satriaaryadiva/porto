import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="background-image"
        className="-z-50 top-0 left-0 fixed w-full h-full object-cover object-center opacity-40 "
      />
      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-2xl sm:text-4xl capitalize">
            Connect and Hire: Connect & Collaborate
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
          Whether you have a project in mind, want to discuss a potential collaboration, 
            or simply wish to connect — I’d love to hear from you. Fill out the form below and 
            I’ll get back to you as soon as possible. Let’s create something amazing together.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
