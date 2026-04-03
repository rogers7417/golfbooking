import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ExhibitionPage from "./pages/ExhibitionPage";
import PrivateNPage from "./pages/PrivateNPage";
import NavigationMenu from "./components/NavigationMenu";
import LoginModal from "./components/LoginModal";
import InquiryModal from "./components/InquiryModal";
import { TermsModal, PrivacyModal } from "./components/LegalModals";
import { useScrollToTop } from "./hooks/useScrollToTop";
import { useActiveSection } from "./hooks/useActiveSection";
import { useFooterVisibility } from "./hooks/useFooterVisibility";
import { useRevealAnimation } from "./hooks/useRevealAnimation";

const App: React.FC = () => {
  const [role, setRole] = useState<"guest" | "member">("guest");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loginStatus, setLoginStatus] = useState<"idle" | "success" | "error">("idle");
  const [loginMessage, setLoginMessage] = useState("");
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [signupStatus, setSignupStatus] = useState<"idle" | "success">("idle");
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const location = useLocation();

  useScrollToTop();
  const activeHash = useActiveSection(role);
  useFooterVisibility(role);
  useRevealAnimation();

  useEffect(() => {
    const handleOpenInquiry = () => {
      setIsSignupOpen(true);
      setSignupStatus("idle");
    };
    window.addEventListener("open-inquiry", handleOpenInquiry);
    return () => window.removeEventListener("open-inquiry", handleOpenInquiry);
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-role", role);
  }, [role]);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "").trim();

    // TODO: 실제 인증 API 연동 필요
    if (email && password) {
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

  const handleInquirySubmit = () => {
    setSignupStatus("success");
    window.setTimeout(() => {
      setIsSignupOpen(false);
      setSignupStatus("idle");
    }, 2000);
  };

  return (
    <div className={`app-root ${location.pathname === '/exhibition' || location.pathname === '/private-n' ? 'no-snap' : ''}`}>
      {location.pathname !== '/private-n' && (
        <NavigationMenu
          role={role}
          activeHash={activeHash}
          onLoginClick={() => {
            setIsLoginOpen(true);
            setLoginStatus("idle");
            setLoginMessage("");
          }}
        />
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/exhibition" element={<ExhibitionPage />} />
        <Route path="/private-n" element={<PrivateNPage />} />
      </Routes>

      {isLoginOpen && (
        <LoginModal
          onClose={() => setIsLoginOpen(false)}
          onSubmit={handleLogin}
          loginStatus={loginStatus}
          loginMessage={loginMessage}
        />
      )}

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

      {isSignupOpen && (
        <InquiryModal
          onClose={() => setIsSignupOpen(false)}
          signupStatus={signupStatus}
          onSubmit={handleInquirySubmit}
        />
      )}

      {isTermsOpen && <TermsModal onClose={() => setIsTermsOpen(false)} />}
      {isPrivacyOpen && <PrivacyModal onClose={() => setIsPrivacyOpen(false)} />}

      <footer>
        <div className="footer-wrap">
          <div className="footer-top">
            <div className="footer-links">
              <a href="#" onClick={(e) => { e.preventDefault(); setIsTermsOpen(true); }}>이용약관</a>
              <a href="#" className="footer-link-bold" onClick={(e) => { e.preventDefault(); setIsPrivacyOpen(true); }}>개인정보처리방침</a>
            </div>
          </div>
          <div className="footer-main">
            <div className="footer-main-left">
              <strong className="footer-brand">ART N GOLF</strong>
              <span className="footer-rep">Founder JungHyuk AHN</span>
            </div>
            <div className="footer-main-center">
              <p>서울특별시 종로구 삼청로16 Artz Museum 2층 주식회사 지오디에스 사업자등록번호 807 86 03004 이메일 master@gods.it.kr</p>
              <p className="footer-center-copy">ⓒ 2026 ArtNGolf. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
