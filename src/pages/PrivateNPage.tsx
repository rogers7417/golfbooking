import React, { useState } from "react";

type MainCategory = "golf" | "shop" | "members" | "guest";

const PrivateNPage: React.FC = () => {
  const [mainCategory, setMainCategory] = useState<MainCategory>("golf");
  const [showLoginAlert, setShowLoginAlert] = useState(false);
  const [showGuestPopup, setShowGuestPopup] = useState(false);

  const handleTabClick = (cat: MainCategory) => {
    setMainCategory(cat);
    if (cat === "guest") {
      setShowGuestPopup(true);
      setShowLoginAlert(false);
    } else {
      setShowLoginAlert(true);
      setShowGuestPopup(false);
    }
  };

  return (
    <div className="private-n-page">
      {/* PRIVATE N Header */}
      <header className="pn-header">
        <div className="pn-header-container">
          <button
            className="pn-back-btn"
            onClick={() => window.location.href = "/"}
          >
            ← ART N GOLF
          </button>
          <h1 className="pn-header-logo">PRIVATE N</h1>
          <div className="pn-header-actions">
            <button className="pn-header-btn">로그인</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pn-hero">
        <div className="pn-hero-content">
          <p className="pn-hero-subtitle">Members Only Access</p>
        </div>
      </section>

      {/* Main Category Tabs */}
      <section className="pn-main-tabs">
        <div className="pn-container">
          <div className="pn-main-category">
            <button
              className={`pn-main-tab ${mainCategory === "golf" ? "active" : ""}`}
              onClick={() => handleTabClick("golf")}
            >
              C.C / G.C
            </button>
            <button
              className={`pn-main-tab ${mainCategory === "shop" ? "active" : ""}`}
              onClick={() => handleTabClick("shop")}
            >
              ANG SHOP
            </button>
            <button
              className={`pn-main-tab ${mainCategory === "members" ? "active" : ""}`}
              onClick={() => handleTabClick("members")}
            >
              MEMBERS
            </button>
            <button
              className={`pn-main-tab ${mainCategory === "guest" ? "active" : ""}`}
              onClick={() => handleTabClick("guest")}
            >
              GUEST
            </button>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="pn-content">
        <div className="pn-container">
        </div>
      </section>

      {/* 로그인 안내 모달 */}
      {showLoginAlert && (
        <div className="pn-login-alert-backdrop" onClick={() => setShowLoginAlert(false)}>
          <div className="pn-login-alert" onClick={(e) => e.stopPropagation()}>
            <p className="pn-login-alert-text">로그인하세요</p>
            <button
              className="pn-login-alert-btn"
              onClick={() => setShowLoginAlert(false)}
            >
              확인
            </button>
          </div>
        </div>
      )}

      {/* GUEST 프로그램 신청 팝업 */}
      {showGuestPopup && (
        <div className="pn-login-alert-backdrop" onClick={() => setShowGuestPopup(false)}>
          <div className="pn-guest-popup" onClick={(e) => e.stopPropagation()}>
            <button className="pn-guest-popup-close" onClick={() => setShowGuestPopup(false)}>✕</button>
            <h3 className="pn-guest-popup-title">프로그램 신청하기</h3>
            <p className="pn-guest-popup-fee">* 연회비 200만원 *</p>
            <ol className="pn-guest-popup-list">
              <li>네트워크 골프월례회 참석</li>
              <li>골프 레슨,투어 참석</li>
              <li>프라이빗 골프대회 참석</li>
              <li>미술전시회 참석</li>
              <li>ANG 옥션디너 참석</li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivateNPage;
