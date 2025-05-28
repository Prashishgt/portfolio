import React, { useState, useRef } from "react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const panelId = title.toLowerCase().replace(/\s+/g, "-") + "-panel";

  return (
    <div className="border-b border-white">
      <button
        className="w-full text-left py-4 text-2xl text-white font-semibold flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        id={`${panelId}-header`}
      >
        <span>{title}</span>
        <span className="ml-2">{isOpen ? "−" : "+"}</span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={`${panelId}-header`}
        className={`transition-max-height duration-300 overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
        ref={contentRef}
      >
        <div className="py-6">{children}</div>
      </div>
    </div>
  );
};
