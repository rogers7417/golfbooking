import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoImage from "../assets/logo/logo.png";

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link ${isActive ? "nav-link-active" : ""}`;

  const navItems = isLoggedIn
    ? [
        { to: "/art-service", label: "Art Service (구매 / 렌탈 / 구독)" },
        { to: "/authentication-support", label: "Authentication Support" },
        { to: "/member-lounge", label: "Member Lounge" },
        { to: "/culture-experience", label: "Culture & Experience" },
        { to: "/golf-service", label: "Golf · Member Benefit" },
        { to: "/my-collection", label: "My Collection (등록·관리)" },
      ]
    : [
        { to: "/about", label: "About artngolf" },
        { to: "/why-n", label: "Why N" },
        { to: "/platform-philosophy", label: "Platform Philosophy" },
        { to: "/membership-guide", label: "Membership Guide" },
        { to: "/contact", label: "Contact" },
      ];

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-left">
          <button className="hamburger-btn" type="button" aria-label="메뉴">
            <i className="fa-solid fa-bars" aria-hidden="true" />
          </button>
        </div>
        <button
          className="login-btn"
          type="button"
          onClick={() => setIsLoggedIn((prev) => !prev)}
        >
          {isLoggedIn ? "로그아웃" : "로그인"}
        </button>
      </div>
      <nav className="nav nav-stacked">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} className={navLinkClass}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
