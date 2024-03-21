import { cn } from "@/utils/cn";

interface IMaxWidthWrapper {
  children: React.ReactNode;
  className?: string;
}

const MaxWidthWrapper = ({ children, className }: IMaxWidthWrapper) => {
  return (
    <div
      className={cn(
        "overflow-hidden mx-auto px-28 bg-primary-color max-w-screen-[1700px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
