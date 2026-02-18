import React, { useState } from "react";
import { Link } from "react-router-dom";

type MainCategory = "golf" | "shop" | "members" | "guest";
type GolfSubCategory = "all" | "seoul" | "gyeonggi" | "gangwon" | "premium";
type ShopSubCategory = "all" | "bags" | "clubs" | "wear" | "accessories";
type MembersSubCategory = "all" | "notice" | "review" | "event";

const PrivateNPage: React.FC = () => {
  const [mainCategory, setMainCategory] = useState<MainCategory>("golf");
  const [golfSubCategory, setGolfSubCategory] = useState<GolfSubCategory>("all");
  const [shopSubCategory, setShopSubCategory] = useState<ShopSubCategory>("all");
  const [membersSubCategory, setMembersSubCategory] = useState<MembersSubCategory>("all");

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
          <p className="pn-hero-subtitle">Exclusive Golf & Art Collection</p>
          <p className="pn-hero-desc">
            회원 전용 골프 네트워크 & 프리미엄 쇼핑
          </p>
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

      {/* Sub Category Filter */}
      <section className="pn-filter">
        <div className="pn-container">
          {mainCategory === "golf" && (
            <div className="pn-category-tabs">
              <button
                className={`pn-category-btn ${golfSubCategory === "all" ? "active" : ""}`}
                onClick={() => setGolfSubCategory("all")}
              >
                전체
              </button>
              <button
                className={`pn-category-btn ${golfSubCategory === "seoul" ? "active" : ""}`}
                onClick={() => setGolfSubCategory("seoul")}
              >
                서울
              </button>
              <button
                className={`pn-category-btn ${golfSubCategory === "gyeonggi" ? "active" : ""}`}
                onClick={() => setGolfSubCategory("gyeonggi")}
              >
                경기
              </button>
              <button
                className={`pn-category-btn ${golfSubCategory === "gangwon" ? "active" : ""}`}
                onClick={() => setGolfSubCategory("gangwon")}
              >
                강원
              </button>
              <button
                className={`pn-category-btn ${golfSubCategory === "premium" ? "active" : ""}`}
                onClick={() => setGolfSubCategory("premium")}
              >
                프리미엄
              </button>
            </div>
          )}

          {mainCategory === "shop" && (
            <div className="pn-category-tabs">
              <button
                className={`pn-category-btn ${shopSubCategory === "all" ? "active" : ""}`}
                onClick={() => setShopSubCategory("all")}
              >
                전체
              </button>
              <button
                className={`pn-category-btn ${shopSubCategory === "bags" ? "active" : ""}`}
                onClick={() => setShopSubCategory("bags")}
              >
                가방
              </button>
              <button
                className={`pn-category-btn ${shopSubCategory === "clubs" ? "active" : ""}`}
                onClick={() => setShopSubCategory("clubs")}
              >
                클럽
              </button>
              <button
                className={`pn-category-btn ${shopSubCategory === "wear" ? "active" : ""}`}
                onClick={() => setShopSubCategory("wear")}
              >
                의류
              </button>
              <button
                className={`pn-category-btn ${shopSubCategory === "accessories" ? "active" : ""}`}
                onClick={() => setShopSubCategory("accessories")}
              >
                액세서리
              </button>
            </div>
          )}

          {mainCategory === "members" && (
            <div className="pn-category-tabs">
              <button
                className={`pn-category-btn ${membersSubCategory === "all" ? "active" : ""}`}
                onClick={() => setMembersSubCategory("all")}
              >
                전체
              </button>
              <button
                className={`pn-category-btn ${membersSubCategory === "notice" ? "active" : ""}`}
                onClick={() => setMembersSubCategory("notice")}
              >
                공지사항
              </button>
              <button
                className={`pn-category-btn ${membersSubCategory === "review" ? "active" : ""}`}
                onClick={() => setMembersSubCategory("review")}
              >
                후기
              </button>
              <button
                className={`pn-category-btn ${membersSubCategory === "event" ? "active" : ""}`}
                onClick={() => setMembersSubCategory("event")}
              >
                이벤트
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Content Area */}
      <section className="pn-content">
        <div className="pn-container">
          {/* Golf Course List */}
          {mainCategory === "golf" && (
            <div className="pn-golf-list">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="pn-golf-card">
                  <div className="pn-golf-image">
                    <img src="https://via.placeholder.com/400x250" alt="골프장" />
                    <div className="pn-golf-badge">회원 특가</div>
                  </div>
                  <div className="pn-golf-info">
                    <h3 className="pn-golf-name">레이크사이드 컨트리클럽 {i + 1}</h3>
                    <p className="pn-golf-location">경기도 용인시</p>
                    <div className="pn-golf-details">
                      <span className="pn-golf-holes">27홀</span>
                      <span className="pn-golf-sep">·</span>
                      <span className="pn-golf-distance">Par 72</span>
                    </div>
                    <div className="pn-golf-footer">
                      <div className="pn-golf-price">
                        <span className="pn-golf-price-label">주중</span>
                        <span className="pn-golf-price-value">₩180,000</span>
                      </div>
                      <button className="pn-golf-btn">예약 문의</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Shop Products */}
          {mainCategory === "shop" && (
            <div className="pn-shop-grid">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="pn-shop-card">
                  <div className="pn-shop-image">
                    <img src="https://via.placeholder.com/300x300" alt="상품" />
                    {i < 3 && <div className="pn-shop-badge">NEW</div>}
                  </div>
                  <div className="pn-shop-info">
                    <p className="pn-shop-brand">프리미엄 브랜드</p>
                    <h3 className="pn-shop-name">골프 가방 {i + 1}</h3>
                    <p className="pn-shop-desc">프리미엄 소재의 경량 골프백</p>
                    <div className="pn-shop-footer">
                      <p className="pn-shop-price">₩{(3 + i * 0.5).toFixed(1)}M</p>
                      <button className="pn-shop-btn">구매하기</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Members Area */}
          {mainCategory === "members" && (
            <div className="pn-members-list">
              {membersSubCategory === "notice" || membersSubCategory === "all" ? (
                <>
                  <h2 className="pn-members-section-title">공지사항</h2>
                  {[...Array(5)].map((_, i) => (
                    <div key={`notice-${i}`} className="pn-members-item">
                      <div className="pn-members-badge notice">공지</div>
                      <h3 className="pn-members-title">2024년 정기 회원 모집 안내</h3>
                      <p className="pn-members-meta">2024.02.{10 - i} · 조회 {120 + i * 10}</p>
                    </div>
                  ))}
                </>
              ) : null}

              {membersSubCategory === "review" || membersSubCategory === "all" ? (
                <>
                  <h2 className="pn-members-section-title">회원 후기</h2>
                  {[...Array(6)].map((_, i) => (
                    <div key={`review-${i}`} className="pn-members-item">
                      <div className="pn-members-badge review">후기</div>
                      <h3 className="pn-members-title">레이크사이드CC 최고의 경험이었습니다</h3>
                      <p className="pn-members-author">회원 *** · ⭐⭐⭐⭐⭐</p>
                      <p className="pn-members-meta">2024.02.{5 - (i % 5)}</p>
                    </div>
                  ))}
                </>
              ) : null}

              {membersSubCategory === "event" || membersSubCategory === "all" ? (
                <>
                  <h2 className="pn-members-section-title">진행중인 이벤트</h2>
                  {[...Array(3)].map((_, i) => (
                    <div key={`event-${i}`} className="pn-members-item highlight">
                      <div className="pn-members-badge event">이벤트</div>
                      <h3 className="pn-members-title">신규 회원 골프장 예약 20% 할인</h3>
                      <p className="pn-members-meta">2024.03.01 ~ 2024.03.31</p>
                    </div>
                  ))}
                </>
              ) : null}
            </div>
          )}

          {/* Guest Area */}
          {mainCategory === "guest" && (
            <div className="pn-guest-area">
              <p className="pn-guest-text">일정 보기</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PrivateNPage;
