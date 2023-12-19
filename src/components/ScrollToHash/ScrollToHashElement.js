import { useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
  const location = useLocation();

  const scrollToHash = () => {
    const hash = location.hash;
    const removeHashCharacter = (str) => str.slice(1);

    if (hash) {
      const element = document.getElementById(removeHashCharacter(hash));
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          inline: "nearest",
        });
      }
    }
  };

  // Use effect to scroll on initial render and hash change
  useEffect(() => {
    scrollToHash();
  }, [location]);

  return null;
};

export default ScrollToHashElement;
