import { cn } from "@/utils/cn";
import { StarFishIcon } from "@/utils/icons";
import Image from "next/image";

const StarFishIconWrapper = ({ className }: { className?: string }) => {
  return (
    <div className={cn("h-32 w-32 absolute", className)}>
      <Image src={StarFishIcon} alt="startFish" fill />
    </div>
  );
};

export default StarFishIconWrapper;
