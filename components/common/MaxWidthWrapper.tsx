import { cn } from "@/utils/cn";

interface IMaxWidthWrapper {
  children: React.ReactNode;
  className?: string;
}

const MaxWidthWrapper = ({ children, className }: IMaxWidthWrapper) => {
  return (
    <div
      className={cn(
        "overflow-hidden mx-auto px-6 sm:px-9 md:px-4 lg:px-40 bg-primary-color container",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
