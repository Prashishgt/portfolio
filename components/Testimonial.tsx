import React from "react";
import MaxWidthWrapper from "./common/MaxWidthWrapper";
import TestimonialCard from "./common/TestimonialCard";
import Image from "next/image";
import { NewIcon } from "@/utils/icons";
import { testimonials } from "@/data/constant";

const Testimonial = () => {
  return (
    <MaxWidthWrapper className="overflow-visible flex flex-col md:gap-0 gap-14 items-center justify-center py-10">
      <div className="md:w-1/2 w-full text-2xl font-bold relative">
        Here&apos;s what people have to say about my work
        <div className="h-8 w-8 absolute right-0">
          <Image src={NewIcon} alt="newIcon" fill />
        </div>
      </div>
      <div className="lg:w-3/4 sm:mt-o mt-4 w-full grid xl:grid-cols-2 grid-cols-1 sm:gap-x-0 md:gap-y-0 gap-y-2 justify-center items-center">
        {testimonials.map((testimonialItem, index) => (
          <TestimonialCard
            key={testimonialItem.id}
            rotateCLassName={
              index % 2 == 0 ? "rotate-3" : "-rotate-3 xl:mt-32 lg:mt-4 mt-0"
            }
            personName={testimonialItem.name}
            image={testimonialItem.image}
            desc={testimonialItem.testimonial}
            company={testimonialItem.company}
          />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Testimonial;
