import Image from "next/image";
import FrameLayout from "./FrameLayout";
import { TopRightArrowIcon } from "@/utils/icons";

const PortfolioCard = () => {
  return (
    <FrameLayout className="flex flex-col gap-8 p-9">
      <div className="relative h-72 w-full">
        <Image src="/RandomImage.svg" alt="yourPicture" fill />
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Web Design</h1>
          <div className="relative h-10 w-10">
            <Image src={TopRightArrowIcon} alt="yourPicture" fill />
          </div>
        </div>
        <p className="text-xl font-medium">
          Web design - User research - webflow development
        </p>
      </div>
    </FrameLayout>
  );
};

export default PortfolioCard;
