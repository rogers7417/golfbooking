import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useFooterVisibility(role: string) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/") return;

    const appRoot = document.querySelector(".app-root");
    if (!appRoot) return;

    const update = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;

      const sections = document.querySelectorAll<HTMLElement>("section.block");
      const visibleSections = Array.from(sections).filter(
        (s) => getComputedStyle(s).display !== "none"
      );
      const lastSection = visibleSections[visibleSections.length - 1];
      if (!lastSection) return;

      // 푸터 높이만큼 마지막 섹션에 padding-bottom 확보
      const footerH = footer.offsetHeight;
      lastSection.style.paddingBottom = footerH + "px";

      const rect = lastSection.getBoundingClientRect();
      // 마지막 섹션이 뷰포트 절반 이상 보이면 푸터 표시
      if (rect.top < window.innerHeight * 0.5 && rect.bottom > 0) {
        footer.classList.add("is-visible");
      } else {
        footer.classList.remove("is-visible");
      }
    };

    appRoot.addEventListener("scroll", update, { passive: true });
    // 초기 실행 + resize 시 footer 높이 재계산
    update();
    window.addEventListener("resize", update, { passive: true });

    return () => {
      appRoot.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);

      // cleanup: padding-bottom 제거
      const sections = document.querySelectorAll<HTMLElement>("section.block");
      const visibleSections = Array.from(sections).filter(
        (s) => getComputedStyle(s).display !== "none"
      );
      const lastSection = visibleSections[visibleSections.length - 1];
      if (lastSection) lastSection.style.paddingBottom = "";
    };
  }, [pathname, role]);
}
