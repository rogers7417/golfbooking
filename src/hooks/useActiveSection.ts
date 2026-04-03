import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useActiveSection(role: string) {
  const [activeHash, setActiveHash] = useState("");
  const location = useLocation();

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section.block");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash("#" + entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [role, location.key]);

  return activeHash;
}
