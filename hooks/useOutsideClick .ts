import { useEffect, useRef, useCallback } from "react";

const useOutsideClick = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  callback: () => void
): void => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    },
    [ref, callback]
  );

  const handleEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        callback(); // Close modal on ESC key press
      }
    },
    [callback]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [handleClickOutside, handleEsc]);
};

export default useOutsideClick;
