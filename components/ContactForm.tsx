"use client";
import CustomInput from "./common/CustomInput";
import Button from "./common/Button";
import Image from "next/image";
import { SpeakingEffectIcon } from "@/utils/icons";

const ContactForm = () => {
  return (
    <form className=" w-full space-y-14">
      <CustomInput
        labelName="Name"
        labelClassName="bg-secondary-color rotate-2"
        placeholder="Ivey"
      />
      <CustomInput
        labelName="Your Email"
        labelClassName="bg-bright-yellow-color -rotate-2"
        placeholder="ivey233@gmail.com"
      />
      <CustomInput
        labelName="About Project"
        labelClassName="bg-button-color rotate-2"
        placeholder="I want to discuss you about...."
      />
      <div className="relative w-72">
        <Button
          btnLabel="Send here"
          className="h-14 -rotate-2"
          onClick={() => alert("Love you")}
        />
        <div className="absolute h-[5.3rem] w-[4.6rem]  top-1/2 -right-20">
          <Image src={SpeakingEffectIcon} alt="clicked" fill />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
