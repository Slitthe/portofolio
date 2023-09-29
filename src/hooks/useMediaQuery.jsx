import { useEffect, useState } from "react";

export const useMediaQuery = (minWidth) => {
  const [matches, setMatches] = useState(window.innerWidth >= minWidth);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `screen and (min-width: ${minWidth}px)`,
    );
    const listener = (ev) => {
      setMatches(ev.matches);
    };
    mediaQuery.addEventListener("change", listener);

    return () => {
      mediaQuery.removeEventListener("change", listener);
    };
  }, []);

  return matches;
};
