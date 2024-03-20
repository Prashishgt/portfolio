import React from "react";
import MaxWidthWrapper from "./common/MaxWidthWrapper";
import ServiceCard from "./common/ServiceCard";

const ServiceTable = () => {
  return (
    <div className="border-y-[3px] border-black w-full flex justify-center">
      <div className="w-1/3">
        <div className="flex flex-col gap-2 py-10 px-5 border-b-[3px] border-black">
          <h2 className="text-2xl font-semibold">10</h2>
          <p className="text-xl font-medium">Projects</p>
        </div>
        <div className="flex flex-col gap-2 py-10 px-5">
          <h2 className="text-2xl font-semibold">10</h2>
          <p className="text-xl font-medium">Projects</p>
        </div>
      </div>
      <div className="w-1/3  border-x-[3px] border-black">
        <ServiceCard />
        <ServiceCard />
      </div>
      <div className="flex-grow border-r-[3px] border-black">
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default ServiceTable;
