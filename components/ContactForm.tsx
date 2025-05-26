"use client";

import CustomInput from "./common/CustomInput";
import Button from "./common/Button";
import Image from "next/image";
import { SpeakingEffectIcon } from "@/utils/icons";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toast, ToastType } from "./toast";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    about: "",
  });

  const [isLoading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type?: ToastType;
  } | null>(null);

  const showToast = (message: string, type?: ToastType) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
        formRef.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      );

      showToast("Message sent successfully!", "success");

      setFormData({
        name: "",
        email: "",
        about: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      showToast("Failed to send. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <form ref={formRef} className="w-full space-y-14">
        <fieldset className="space-y-14" disabled={isLoading}>
          <CustomInput
            labelName="Name"
            labelClassName="bg-secondary-color rotate-2"
            placeholder="your name"
            name="name"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            disabled={isLoading}
          />
          <CustomInput
            labelName="Your Email"
            labelClassName="bg-bright-yellow-color -rotate-2"
            placeholder="youremail@email.com"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            disabled={isLoading}
          />
          <CustomInput
            labelName="About Project"
            labelClassName="bg-button-color rotate-2"
            placeholder="I want to discuss you about...."
            name="message"
            value={formData.about}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, about: e.target.value }))
            }
            disabled={isLoading}
          />
          <div className="relative w-72">
            <Button
              type="submit"
              className="h-14 -rotate-2"
              onClick={onSubmit}
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send here"}
            </Button>
            <div className="absolute h-[5.3rem] w-[4.6rem] top-1/2 -right-20">
              <Image src={SpeakingEffectIcon} alt="clicked" fill />
            </div>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default ContactForm;
