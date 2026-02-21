import React, { useState } from "react";

type MainCategory = "golf" | "shop" | "members" | "guest";

const PrivateNPage: React.FC = () => {
  const [mainCategory, setMainCategory] = useState<MainCategory>("golf");

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
          <h1 className="pn-hero-title">PRIVATE N</h1>
          <p className="pn-hero-subtitle">Members Only Access</p>
        </div>
      </section>

      {/* Main Category Tabs */}
      <section className="pn-main-tabs">
        <div className="pn-container">
          <div className="pn-main-category">
            <button
              className={`pn-main-tab ${mainCategory === "golf" ? "active" : ""}`}
              onClick={() => setMainCategory("golf")}
            >
              C.C / G.C
            </button>
            <button
              className={`pn-main-tab ${mainCategory === "shop" ? "active" : ""}`}
              onClick={() => setMainCategory("shop")}
            >
              ANG SHOP
            </button>
            <button
              className={`pn-main-tab ${mainCategory === "members" ? "active" : ""}`}
              onClick={() => setMainCategory("members")}
            >
              MEMBERS
            </button>
            <button
              className={`pn-main-tab ${mainCategory === "guest" ? "active" : ""}`}
              onClick={() => setMainCategory("guest")}
            >
              GUEST
            </button>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="pn-content">
        <div className="pn-container">
          <div className="pn-preparing">
            <p className="pn-preparing-text">준비 중입니다</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivateNPage;
