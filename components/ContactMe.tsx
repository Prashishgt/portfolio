import React from "react";
import MaxWidthWrapper from "./common/MaxWidthWrapper";
import ContactForm from "./ContactForm";
import { ArrowIcon } from "@/utils/icons";
import Image from "next/image";

const ContactMe = () => {
  return (
    <MaxWidthWrapper className="flex flex-col lg:flex-row  md:py-36 py-10 gap-9 lg:gap-0">
      <div className="lg:w-1/2 w-full flex flex-col lg:gap-0 gap-20 relative">
        <h2 className="bg-secondary-color w-44 h-12 flex items-center justify-center text-xl font-bold rotate-3 ">
          Contact Here
        </h2>
        <div className="w-48 h-[2.8rem] absolute sm:right-1/2 right-8 top-1/4 rotate-45 sm:rotate-0">
          <Image src={ArrowIcon} alt="clicked" fill />
        </div>
        <p className="flex-grow flex  sm:text-xl text-lg">
          Have a project idea? Just say me <strong>&nbsp;Hi.</strong>
        </p>
      </div>
      <div className="flex-grow">
        <ContactForm />
      </div>
    </MaxWidthWrapper>
  );
};

export default ContactMe;
