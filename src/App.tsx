import React, { useEffect, useMemo, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import logoText from "./assets/logo/logo_text.png";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

const App: React.FC = () => {
  const [role, setRole] = useState<"guest" | "member">("guest");
  const [activeHash, setActiveHash] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loginStatus, setLoginStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [loginMessage, setLoginMessage] = useState("");
  const location = useLocation();

  const guestMenu = useMemo(
    () => [
      { href: "/#about", label: "About artngolf" },
      { href: "/#why-n", label: "Why N" },
      { href: "/#platform-philosophy", label: "Platform Philosophy" },
      { href: "/#membership-guide", label: "Membership Guide" },
      { href: "/#contact", label: "Contact" },
    ],
    []
  );

  const memberMenu = useMemo(
    () => [
      { href: "/#art", label: "Art Service (구매 / 렌탈 / 구독)" },
      { href: "/#auth", label: "Authentication Support" },
      { href: "/#lounge", label: "Member Lounge" },
      { href: "/#culture", label: "Culture & Experience" },
      { href: "/#golf", label: "Golf · Member Benefit" },
      { href: "/#collection", label: "My Collection (등록·관리)" },
    ],
    []
  );


  useEffect(() => {
    document.body.setAttribute("data-role", role);
  }, [role]);

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash || "");
    };

    updateHash();
    window.addEventListener("hashchange", updateHash);

    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal")
    );

    targets.forEach((el, idx) => {
      if (!el.dataset.delay) {
        el.dataset.delay = String(idx % 5);
      }
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
    );

    targets.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [location.key]);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "").trim();

    if (email === "1234" && password === "1234") {
      setRole("member");
      setLoginStatus("success");
      setLoginMessage("로그인에 성공했습니다.");
      window.setTimeout(() => {
        setIsLoginOpen(false);
        setLoginStatus("idle");
        setLoginMessage("");
      }, 600);
      return;
    }

    setLoginStatus("error");
    setLoginMessage("아이디 또는 비밀번호가 올바르지 않습니다.");
  };

  return (
    <div className="app-root">
      <div className="topbar">
        <div className="container">
          <div className="nav">
            <div className="brand">
              <img src={logoText} alt="ART N GOLF" className="brand-logo" />
            </div>

            <nav className="menu" aria-label="Primary">
              {guestMenu.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  data-role="guest"
                  className={
                    activeHash && item.href.endsWith(activeHash) ? "active" : undefined
                  }
                >
                  {item.label}
                </a>
              ))}
              {memberMenu.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  data-role="member"
                  className={
                    activeHash && item.href.endsWith(activeHash) ? "active" : undefined
                  }
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="cta">
              {role === "guest" ? (
                <>
                  <button
                    className="btn"
                    type="button"
                    onClick={() => {
                      setIsLoginOpen(true);
                      setLoginStatus("idle");
                      setLoginMessage("");
                    }}
                  >
                    로그인
                  </button>
                  <button className="btn primary" type="button">
                    멤버십 문의
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>

      {isLoginOpen ? (
        <div className="modal-backdrop" role="presentation">
          <div className="modal" role="dialog" aria-modal="true">
            <div className="modal-header">
              <h2>로그인</h2>
              <button
                className="modal-close"
                type="button"
                aria-label="닫기"
                onClick={() => setIsLoginOpen(false)}
              >
                ×
              </button>
            </div>
            <form className="modal-body" onSubmit={handleLogin}>
              <label>
                아이디
                <input type="text" name="email" required />
              </label>
              <label>
                비밀번호
                <input type="password" name="password" required />
              </label>
              {loginStatus !== "idle" ? (
                <p className={`modal-message ${loginStatus}`}>
                  {loginMessage}
                </p>
              ) : null}
              <div className="modal-actions">
                <button
                  className="btn"
                  type="button"
                  onClick={() => setIsLoginOpen(false)}
                >
                  취소
                </button>
                <button className="btn primary" type="submit">
                  로그인
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      <footer>
        <div className="container">
          <div className="footline">
            <p className="footer-slogan reveal" data-delay="0">
              ART N GOLF — The Nexus of Art, Golf, and Now.
            </p>
            <p className="footer-desc reveal" data-delay="1">
              {`artngolf는
미술과 골프를 연결하고,
사람과 사람을 연결하며,
지금의 기준으로 품격을 정의합니다.`}
            </p>
            <div className="small reveal" data-delay="2">
              © ART N GOLF. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
