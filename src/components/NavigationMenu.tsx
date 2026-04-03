import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logoText from "../assets/logo/logo_text_1.png";
import { useAutoHideHeader } from "../hooks/useAutoHideHeader";

interface NavigationMenuProps {
  role: "guest" | "member";
  activeHash: string;
  onLoginClick: () => void;
}

const menuItems = [
  { href: "/#about", label: "ABOUT", role: "guest" as const },
  { href: "/#art-asset", label: "ART ASSET", role: "guest" as const },
  { href: "/#golf-privilege", label: "GOLF PRIVILEGE", role: "guest" as const },
  { href: "/#advisory", label: "ADVISORY", role: "guest" as const },
  { href: "/#private-n-teaser", label: "PRIVATE N", role: "guest" as const },
  { href: "/#contact", label: "CONTACT", role: "guest" as const },
  { href: "/#about", label: "ABOUT", role: "member" as const },
  { href: "/#art-asset-detail", label: "ART ASSET", role: "member" as const },
  { href: "/#golf-privilege-detail", label: "GOLF PRIVILEGE", role: "member" as const },
  { href: "/#advisory-detail", label: "ADVISORY", role: "member" as const },
  { href: "/#private-n-teaser", label: "PRIVATE N", role: "member" as const },
];

const NavigationMenu: React.FC<NavigationMenuProps> = ({ role, activeHash, onLoginClick }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerHidden = useAutoHideHeader();

  const handleMenuClick = (href: string) => {
    console.log("MENU CLICKED:", href, "current path:", location.pathname);
    const id = href.replace("/#", "");
    const isRoute = href.startsWith("/") && !href.startsWith("/#");

    if (isRoute || location.pathname !== "/") {
      console.log("NAVIGATING TO:", href);
      window.location.href = href;
      return;
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  return (
    <div className={`topbar ${headerHidden && !mobileOpen ? "topbar-hidden" : ""}`}>
      <div className="container">
        <div className="nav">
          <a className="brand" href="/" style={{ cursor: "pointer" }} onClick={() => console.log("LOGO CLICKED")}>
            <img src={logoText} alt="ART N GOLF" className="brand-logo" />
          </a>

          <button
            className="hamburger"
            type="button"
            aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className={`hamburger-line ${mobileOpen ? "open" : ""}`} />
          </button>

          <nav className={`menu ${mobileOpen ? "menu-open" : ""}`} aria-label="Primary">
            {menuItems.map((item) => {
              const id = item.href.replace("/#", "");
              const isRoute = item.href.startsWith("/") && !item.href.startsWith("/#");
              return (
                <button
                  key={`${item.role}-${item.href}`}
                  type="button"
                  data-role={item.role}
                  className={isRoute && location.pathname === item.href ? "active" : !isRoute && activeHash === "#" + id ? "active" : undefined}
                  onClick={() => handleMenuClick(item.href)}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="cta">
            {role === "guest" ? (
              <button className="btn" type="button" onClick={onLoginClick}>
                로그인
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
