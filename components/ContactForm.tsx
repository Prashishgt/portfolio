"use client";
import CustomInput from "./common/CustomInput";
import Button from "./common/Button";
import Image from "next/image";
import { SpeakingEffectIcon } from "@/utils/icons";
import { useState } from "react";

const ContactForm = () => {
  const [nameInput, setNameInput] = useState<null | string>(null);
  const [emailInput, setEmailInput] = useState<null | string>(null);
  const [aboutInput, setAboutInput] = useState<null | string>(null);
  // console.log(object);

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("here is the data", nameInput);
    console.log("here is the data", emailInput);
    console.log("here is the data", aboutInput);
  };

  return (
    <form className=" w-full space-y-14">
      <CustomInput
        labelName="Name"
        labelClassName="bg-secondary-color rotate-2"
        placeholder="Ivey"
        onChange={(e) => setNameInput(e.target.value)}
      />
      <CustomInput
        labelName="Your Email"
        labelClassName="bg-bright-yellow-color -rotate-2"
        placeholder="ivey233@gmail.com"
        onChange={(e) => setEmailInput(e.target.value)}
      />
      <CustomInput
        labelName="About Project"
        labelClassName="bg-button-color rotate-2"
        placeholder="I want to discuss you about...."
        onChange={(e) => setAboutInput(e.target.value)}
      />
      <div className="relative w-72">
        <Button type="submit" className="h-14 -rotate-2" onClick={onSubmit}>
          Send here
        </Button>
        <div className="absolute h-[5.3rem] w-[4.6rem]  top-1/2 -right-20">
          <Image src={SpeakingEffectIcon} alt="clicked" fill />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
