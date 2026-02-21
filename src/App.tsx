import React, { useEffect, useMemo, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import logoText from "./assets/logo/logo_text_1.png";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ExhibitionPage from "./pages/ExhibitionPage";
import PrivateNPage from "./pages/PrivateNPage";

const App: React.FC = () => {
  const [role, setRole] = useState<"guest" | "member">("guest");
  const [activeHash, setActiveHash] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loginStatus, setLoginStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [loginMessage, setLoginMessage] = useState("");
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [signupStatus, setSignupStatus] = useState<"idle" | "success">("idle");
  const location = useLocation();

  // 페이지 전환 시 스크롤을 맨 위로
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  const guestMenu = useMemo(
    () => [
      { href: "/#about", label: "ABOUT" },
      { href: "/#art-asset", label: "ART ASSET" },
      { href: "/#golf-privilege", label: "GOLF PRIVILEGE" },
      { href: "/#advisory", label: "ADVISORY" },
      { href: "/#private-n-teaser", label: "PRIVATE N" },
      { href: "/#contact", label: "CONTACT" },
    ],
    []
  );

  const memberMenu = useMemo(
    () => [
      { href: "/#about", label: "ABOUT" },
      { href: "/#art-asset-detail", label: "ART ASSET" },
      { href: "/#golf-privilege-detail", label: "GOLF PRIVILEGE" },
      { href: "/#advisory-detail", label: "ADVISORY" },
      { href: "/#private-n-teaser", label: "PRIVATE N" },
    ],
    []
  );


  useEffect(() => {
    document.body.setAttribute("data-role", role);
  }, [role]);

  // 스냅 섹션 관찰: 현재 뷰포트에 진입하는 섹션의 id를 활성 해시로 동기화
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

  // 메인페이지: 마지막 섹션에 도달하면 푸터 표시
  useEffect(() => {
    if (location.pathname !== "/") return;

    const appRoot = document.querySelector(".app-root");
    if (!appRoot) return;

    const showFooter = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;
      const sections = document.querySelectorAll<HTMLElement>("section.block");
      const visibleSections = Array.from(sections).filter(
        (s) => getComputedStyle(s).display !== "none"
      );
      const lastSection = visibleSections[visibleSections.length - 1];
      if (!lastSection) return;

      const rect = lastSection.getBoundingClientRect();
      // 마지막 섹션이 뷰포트에 대부분 보이면 푸터 표시
      if (rect.top < window.innerHeight * 0.5 && rect.bottom > 0) {
        footer.classList.add("is-visible");
      } else {
        footer.classList.remove("is-visible");
      }
    };

    appRoot.addEventListener("scroll", showFooter, { passive: true });
    showFooter();
    return () => appRoot.removeEventListener("scroll", showFooter);
  }, [location.pathname, role]);

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
    <div className={`app-root ${location.pathname === '/exhibition' || location.pathname === '/private-n' ? 'no-snap' : ''}`}>
      {/* Main Site Topbar - Hide on PRIVATE N page */}
      {location.pathname !== '/private-n' && (
        <div className="topbar">
          <div className="container">
            <div className="nav">
              <div className="brand" onClick={() => window.location.href = "/"} style={{ cursor: "pointer" }}>
                <img src={logoText} alt="ART N GOLF" className="brand-logo" />
              </div>

              <nav className="menu" aria-label="Primary">
                {guestMenu.map((item) => {
                  const id = item.href.replace("/#", "");
                  const isRoute = item.href.startsWith("/");
                  return (
                    <button
                      key={item.href}
                      type="button"
                      data-role="guest"
                      className={isRoute && location.pathname === item.href ? "active" : !isRoute && activeHash === "#" + id ? "active" : undefined}
                      onClick={() => {
                        if (isRoute) {
                          window.location.href = item.href;
                        } else {
                          document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }}
                    >
                      {item.label}
                    </button>
                  );
                })}
                {memberMenu.map((item) => {
                  const id = item.href.replace("/#", "");
                  const isRoute = item.href.startsWith("/");
                  return (
                    <button
                      key={item.href}
                      type="button"
                      data-role="member"
                      className={isRoute && location.pathname === item.href ? "active" : !isRoute && activeHash === "#" + id ? "active" : undefined}
                      onClick={() => {
                        if (isRoute) {
                          window.location.href = item.href;
                        } else {
                          document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </nav>

              <div className="cta">
                {role === "guest" ? (
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
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/exhibition" element={<ExhibitionPage />} />
        <Route path="/private-n" element={<PrivateNPage />} />
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

      {/* Quick Inquiry Button */}
      <button
        className="quick-inquiry-btn"
        type="button"
        aria-label="알아보기"
        onClick={() => {
          setIsSignupOpen(true);
          setSignupStatus("idle");
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <span className="quick-inquiry-label">NOW</span>
      </button>

      {/* Signup Modal */}
      {isSignupOpen ? (
        <div className="modal-backdrop" role="presentation">
          <div className="modal" role="dialog" aria-modal="true">
            <div className="modal-header">
              <h2>알아보기</h2>
              <button
                className="modal-close"
                type="button"
                aria-label="닫기"
                onClick={() => setIsSignupOpen(false)}
              >
                ×
              </button>
            </div>
            {signupStatus === "idle" ? (
              <form
                className="modal-body"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSignupStatus("success");
                  window.setTimeout(() => {
                    setIsSignupOpen(false);
                    setSignupStatus("idle");
                  }, 2000);
                }}
              >
                <label>
                  NAME
                  <input type="text" name="name" required placeholder="홍길동" />
                </label>
                <label>
                  PHONE
                  <input type="tel" name="phone" required placeholder="010-0000-0000" />
                </label>
                <label>
                  E-Mail
                  <input type="email" name="email" required placeholder="example@email.com" />
                </label>
                <label>
                  Message
                  <textarea name="message" rows={3} placeholder="문의 내용을 입력해주세요" />
                </label>
                <div className="modal-actions">
                  <button
                    className="btn"
                    type="button"
                    onClick={() => setIsSignupOpen(false)}
                  >
                    취소
                  </button>
                  <button className="btn primary" type="submit">
                    신청하기
                  </button>
                </div>
              </form>
            ) : (
              <div className="modal-body">
                <p className="modal-message success">
                  신청이 완료되었습니다. 감사합니다.
                </p>
              </div>
            )}
          </div>
        </div>
      ) : null}

      <footer>
        <div className="container">
          <div className="footline">
            <div className="footer-cols">
              <div className="footer-left reveal" data-delay="0">
                <p className="footer-slogan">
                  ART N GOLF — The Nexus of Art, Golf, and Now.
                </p>
                <p className="footer-desc">
                  {`artngolf는
미술과 골프를 연결하고,
사람과 사람을 연결하며,
지금의 기준으로 품격을 정의합니다.`}
                </p>
              </div>

              <div className="footer-right reveal" data-delay="1">
                <div className="footer-biz-row">
                  <span>상호명: 아트앤골프</span>
                  <span className="footer-biz-sep" />
                  <span>대표: 홍길동</span>
                </div>
                <div className="footer-biz-row">
                  <span>사업자등록번호: 000-00-00000</span>
                </div>
                <div className="footer-biz-row">
                  <span>서울특별시 강남구 테헤란로 00길 00, 0층</span>
                </div>
                <div className="footer-biz-row">
                  <span>TEL: 02-0000-0000</span>
                </div>
                <div className="footer-biz-row">
                  <span>E-MAIL: info@artngolf.com</span>
                </div>
              </div>
            </div>

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
