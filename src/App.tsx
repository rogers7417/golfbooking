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
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const location = useLocation();

  // 페이지 전환 시 스크롤을 맨 위로
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  // 커스텀 이벤트로 알아보기 모달 열기 (다른 페이지에서 호출 가능)
  useEffect(() => {
    const handleOpenInquiry = () => {
      setIsSignupOpen(true);
      setSignupStatus("idle");
    };
    window.addEventListener("open-inquiry", handleOpenInquiry);
    return () => window.removeEventListener("open-inquiry", handleOpenInquiry);
  }, []);

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

      {/* 이용약관 모달 */}
      {isTermsOpen && (
        <div className="modal-backdrop" role="presentation" onClick={() => setIsTermsOpen(false)}>
          <div className="modal modal-legal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>이용약관</h2>
              <button className="modal-close" type="button" aria-label="닫기" onClick={() => setIsTermsOpen(false)}>×</button>
            </div>
            <div className="modal-body legal">
              <h3>제1조 (목적)</h3>
              <p>본 약관은 아트N골프가 제공하는 미술품 렌탈/매매, 명문 골프장 컨시어지 서비스, ANG 토큰 사용 등에 관한 권리와 의무를 규정함을 목적으로 합니다.</p>

              <h3>제2조 (멤버십의 구성 및 혜택)</h3>
              <ol>
                <li>본 서비스는 정회원(200~300명 한정) 체제로 운영되는 하이엔드 자산 플랫폼입니다.</li>
                <li>회원은 미술품 구매 또는 렌탈 계약 시 정회원 자격을 획득하며, 2년 차부터는 회사에서 정한 연회비를 납부해야 자격이 유지됩니다.</li>
                <li>회사가 발행한 '양도 가능한 멤버십 NFT' 보유자는 본 약관에 따른 제반 서비스를 이용할 권리를 가집니다.</li>
              </ol>

              <h3>제3조 (골프장 예약 컨시어지)</h3>
              <ol>
                <li>회사는 회원에게 제휴 명문 골프장의 예약 대행 서비스를 제공합니다.</li>
                <li>골프장 예약은 회사의 자산(법인 회원권 등) 및 제휴 인프라를 통해 제공되며, 골프장의 사정에 따라 특정 날짜의 예약이 제한될 수 있습니다.</li>
              </ol>

              <h3>제4조 (미술품 렌탈 및 매매)</h3>
              <ol>
                <li>렌탈된 미술품의 유지 및 관리 책임은 원칙적으로 회원에게 있으며, 고의적인 훼손 시 회원은 원상복구 또는 배상의 책임을 집니다.</li>
                <li>미술품의 진위 여부는 작가 보증서 및 회사 발행 증명서로 담보합니다.</li>
              </ol>

              <h3>제5조 (ANG 토큰 및 결제)</h3>
              <ol>
                <li>회원은 플랫폼 내 서비스 이용료, 용품 구매, 연회비 납부 시 ANG 토큰을 사용할 수 있습니다.</li>
                <li>ANG 토큰의 가치는 시장 상황에 따라 변동될 수 있으며, 회사는 결제 시점의 가치를 기준으로 서비스를 제공합니다.</li>
                <li>가상자산 결제 특성상 결제 완료 후 단순 변심에 의한 환불은 제한될 수 있습니다.</li>
              </ol>

              <h3>제6조 (양도 및 로열티)</h3>
              <ol>
                <li>멤버십 NFT를 타인에게 양도할 경우, 양수인은 회사의 회원 자격 심사 절차를 거쳐야 합니다.</li>
                <li>멤버십 양도 거래 발생 시, 거래 금액의 일정 비율(로열티)이 플랫폼 운영 및 서비스 유지비로 회사에 귀속될 수 있습니다.</li>
              </ol>

              <h3>제7조 (면책 조항)</h3>
              <p>회사는 천재지변, 골프장의 갑작스러운 폐쇄, 블록체인 네트워크의 오류 등 회사의 통제 범위를 벗어난 사유로 발생한 손해에 대해서는 책임을 지지 않습니다.</p>
            </div>
            <div className="modal-footer-btn">
              <button type="button" onClick={() => setIsTermsOpen(false)}>닫기</button>
            </div>
          </div>
        </div>
      )}

      {/* 개인정보처리방침 모달 */}
      {isPrivacyOpen && (
        <div className="modal-backdrop" role="presentation" onClick={() => setIsPrivacyOpen(false)}>
          <div className="modal modal-legal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2><strong>개인정보처리방침</strong></h2>
              <button className="modal-close" type="button" aria-label="닫기" onClick={() => setIsPrivacyOpen(false)}>×</button>
            </div>
            <div className="modal-body legal">
              <h3>제1조 (목적)</h3>
              <p>'아트N골프'(이하 "회사")는 이용자의 개인정보를 보호하고 관련 법령을 준수하기 위해 본 정책을 수립합니다.</p>

              <h3>제2조 (수집 항목 및 방법)</h3>
              <ol>
                <li><strong>필수항목:</strong> 성명, 휴대전화 번호, 이메일 주소, 법인명(기업회원), 사업자번호(기업회원).</li>
                <li><strong>서비스 특화 항목:</strong> 가상자산 지갑 주소, 미술품 배송지 주소, 골프장 예약을 위한 성별 및 핸디캡.</li>
                <li><strong>자동수집항목:</strong> IP주소, 쿠키, 방문기록, 서비스 이용 기록.</li>
              </ol>

              <h3>제3조 (개인정보의 제3자 제공)</h3>
              <p>회사는 원활한 서비스 이행을 위해 아래와 같이 정보를 제공합니다.</p>
              <ul>
                <li><strong>제공받는 자:</strong> 제휴 골프장, 미술품 전문 운송 업체, 가상자산 보안 수탁사.</li>
                <li><strong>제공 목적:</strong> 골프장 라운드 예약, 미술품 배송 및 설치, 토큰 결제 및 보안 관리.</li>
                <li><strong>보유 및 이용기간:</strong> 서비스 목적 달성 시까지.</li>
              </ul>

              <h3>제4조 (블록체인 기술 특성에 따른 예외)</h3>
              <p>NFT 멤버십 및 ANG 토큰 거래 기록은 블록체인 네트워크에 기록되며, 기술 특성상 삭제나 수정이 불가능할 수 있습니다. 회사는 플랫폼 내 연동 데이터에 대해서만 파기 권한을 가집니다.</p>

              <h3>제5조 (보유 및 이용기간)</h3>
              <ol>
                <li>계약 및 청약철회: 5년</li>
                <li>대금결제 및 재화 공급: 5년</li>
                <li>소비자 불만 또는 분쟁 처리: 3년</li>
              </ol>

              <h3>제6조 (보호책임자)</h3>
              <p>성명: 안정혁 / 연락처: 010-8976-7195 / ahnkahm7@gmail.com</p>
            </div>
            <div className="modal-footer-btn">
              <button type="button" onClick={() => setIsPrivacyOpen(false)}>닫기</button>
            </div>
          </div>
        </div>
      )}

      <footer>
        <div className="footer-row">
          <div className="footer-col footer-col-brand">
            <strong className="footer-brand">ART N GOLF</strong>
            <span className="footer-rep">총괄대표 안정혁</span>
          </div>

          <div className="footer-col footer-col-info">
            <p>
              <span>TEL 02-000-0000</span>
              <span className="footer-info-sep" />
              <span>MAIL ang@artngolf.com</span>
            </p>
            <p>
              <span>주식회사 지오디에스</span>
              <span className="footer-info-sep" />
              <span>서울시 강남구 테헤란로4길 6 304</span>
            </p>
            <p>
              <span>대표 이은경</span>
              <span className="footer-info-sep" />
              <span>사업자등록번호 807 86 03004</span>
            </p>
          </div>

          <div className="footer-col footer-col-right">
            <p className="footer-copy">ⓒ 2026 ArtNGolf. All Rights Reserved.</p>
            <div className="footer-links">
              <a href="#" onClick={(e) => { e.preventDefault(); setIsTermsOpen(true); }}>이용약관</a>
              <a href="#" className="footer-link-bold" onClick={(e) => { e.preventDefault(); setIsPrivacyOpen(true); }}>개인정보처리방침</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
