import Image from "next/image";
import FrameLayout from "./FrameLayout";
import { TopRightArrowIcon } from "@/utils/icons";

const PortfolioCard = () => {
  return (
    <FrameLayout className="sm:flex flex-col gap-8 p-9">
      <div className="relative sm:h-72 h-60 w-full">
        <Image src="/RandomImage.svg" alt="yourPicture" fill />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <h1 className="sm:text-3xl text-xl font-bold">Web Design</h1>
          <div className="relative h-10 w-10">
            <Image src={TopRightArrowIcon} alt="yourPicture" fill />
          </div>
        </div>
        <p className="sm:text-xl text-lg font-medium">
          Web design - User research - webflow development
        </p>
      </div>
    </FrameLayout>
  );
};

export default PortfolioCard;
