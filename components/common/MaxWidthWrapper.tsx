import { cn } from "@/utils/cn";

interface IMaxWidthWrapper {
  children: React.ReactNode;
  className?: string;
}

const MaxWidthWrapper = ({ children, className }: IMaxWidthWrapper) => {
  return (
    <div
      className={cn(
        "overflow-hidden mx-auto px-6 sm:px-9 lg:px-28 bg-primary-color container",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
