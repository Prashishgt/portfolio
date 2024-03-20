import React from "react";
import MaxWidthWrapper from "./common/MaxWidthWrapper";
import ContactForm from "./ContactForm";
import { ArrowIcon } from "@/utils/icons";
import Image from "next/image";

const ContactMe = () => {
  return (
    <MaxWidthWrapper className="flex py-36">
      <div className="w-1/2 flex flex-col relative">
        <h2 className="bg-secondary-color w-44 h-12 flex items-center justify-center text-xl font-bold rotate-3 ">
          Contact Here
        </h2>
        <div className="w-48 h-[2.8rem] absolute right-1/2 top-1/4">
          <Image src={ArrowIcon} alt="clicked" fill />
        </div>
        <p className="flex-grow flex items-center text-xl">
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
