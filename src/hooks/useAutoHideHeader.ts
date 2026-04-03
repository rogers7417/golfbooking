import { useEffect, useRef, useState } from "react";

const MOBILE_BREAKPOINT = 768;
const SCROLL_THRESHOLD = 8;

export function useAutoHideHeader() {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const appRoot = document.querySelector(".app-root");
    const scrollTarget = appRoot || window;

    const getScrollY = () => {
      if (appRoot) return appRoot.scrollTop;
      return window.scrollY;
    };

    const update = () => {
      ticking.current = false;

      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setHidden(false);
        return;
      }

      const currentY = getScrollY();
      const diff = currentY - lastScrollY.current;

      if (currentY <= 10) {
        setHidden(false);
      } else if (diff > SCROLL_THRESHOLD) {
        setHidden(true);
      } else if (diff < -SCROLL_THRESHOLD) {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    };

    scrollTarget.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setHidden(false);
      }
    };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      scrollTarget.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return hidden;
}
