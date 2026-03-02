import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import aboutImg from "../assets/products/about-bg.jpg";
import golfImg from "../assets/images/golf-8454586.jpg";
import advisoryImg from "../assets/images/gallery-16037759.jpg";
import contactImg from "../assets/images/culture-33144646.jpg";
import privateNImg from "../assets/images/hero-12705470.jpg";

import slide01 from "../assets/products/slide-01.jpg";
import slide02 from "../assets/products/slide-02.jpg";
import slide03 from "../assets/products/slide-03.jpg";
import slide04 from "../assets/products/slide-04.jpg";
import slide05 from "../assets/products/slide-05.jpg";
import slide06 from "../assets/products/slide-06.jpg";
import slide07 from "../assets/products/slide-07.jpg";
import slide08 from "../assets/products/slide-08.jpg";
import slide09 from "../assets/products/slide-09.jpg";
import slide10 from "../assets/products/slide-10.jpg";
import slide11 from "../assets/products/slide-11.png";
import slide12 from "../assets/products/slide-12.png";
import slide13 from "../assets/products/slide-13.png";
import slide14 from "../assets/products/slide-14.png";

const slides = [
  slide01, slide02, slide03, slide04, slide05, slide06, slide07,
  slide08, slide09, slide10, slide11, slide12, slide13, slide14,
];

/* ─── 배경 이미지 FadeOut/In ─── */
const ArtSlider: React.FC = () => {
  const [cur, setCur] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCur((c) => (c + 1) % slides.length);
    }, 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  return (
    <div className="aa-bg">
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="aa-bg-img"
          style={{ opacity: i === cur ? 1 : 0 }}
        />
      ))}
    </div>
  );
};

/* ─── NEXUS 버튼 ─── */
const ExhibitionEntry: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="aa-exhibition">
      <Link to="/exhibition" className="aa-exhibition-btn">
        NEXUS
      </Link>
      {open && (
        <div className="aa-exhibition-modal">
          <div className="aa-exhibition-content">
            <button className="aa-exhibition-close" onClick={() => setOpen(false)}>✕</button>

            <h3 className="aa-exhibition-title">회원 전용 서비스 안내</h3>

            <div className="aa-exhibition-sections">
              <div className="aa-exhibition-item">
                <h4>법적·제도적 운영 원칙</h4>
                <p>미술품 렌탈 시 법인 비용처리가 가능합니다. 감가상각, 손금산입 등 회계·세무 처리 방법을 자문 전문가와 함께 검토합니다.</p>
              </div>

              <div className="aa-exhibition-item">
                <h4>법인 렌탈 조건 시뮬레이션</h4>
                <p>작품 가액, 렌탈 기간, 법인 형태에 따른 맞춤형 조건을 시뮬레이션할 수 있습니다. 상세 조건은 회원 가입 후 확인 가능합니다.</p>
              </div>

              <div className="aa-exhibition-item">
                <h4>개인 소장품 등록 시스템</h4>
                <p>보유 중인 미술품을 자산으로 등록하고 관리할 수 있습니다. 감정, 평가, 보험 일괄 서비스가 제공되며, 등록 절차는 회원 가입 후 안내됩니다.</p>
              </div>
            </div>

            <div className="aa-exhibition-auth">
              <p className="aa-exhibition-auth-text">상세 내용을 확인하시려면 회원 가입이 필요합니다.</p>
              <div className="aa-exhibition-auth-buttons">
                <Link to="/exhibition" className="aa-exhibition-auth-btn primary">NEXUS</Link>
                <Link to="/exhibition" className="aa-exhibition-auth-btn secondary">NEXUS</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* ─── Network 토글 (Golf Privilege) ─── */
const NetworkToggle: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="gp-network">
        <button type="button" className="gp-network-btn" onClick={() => setOpen(true)}>
          <span className="gp-network-label">NETWORK</span>
          <span className="gp-network-arrow">›</span>
        </button>
      </div>

      {open && (
        <div className="network-modal-backdrop" onClick={() => setOpen(false)}>
          <div className="network-modal" onClick={(e) => e.stopPropagation()}>
            <button className="network-modal-close" onClick={() => setOpen(false)}>×</button>
            <h3 className="network-modal-title">회원 서비스 안내</h3>

            <div className="network-modal-section">
              <h4 className="network-modal-subtitle">골프장 예약 서비스</h4>
              <p className="network-modal-desc">미술품 구매 또는 렌탈 가입 정규회원 대상</p>
              <ul className="network-modal-list">
                <li>작품가 4천~1억이하 월1회</li>
                <li>작품가 1억~2억이하 월2회</li>
                <li>작품가 2억이상~3억이하 월3회(주말1회포함)</li>
                <li>작품가 3억이상 월4회 (주말1회포함)</li>
              </ul>
            </div>

            <div className="network-modal-section">
              <h4 className="network-modal-subtitle">골프장 단체예약 서비스</h4>
              <p className="network-modal-desc">작품가 1억이상 구매/렌탈 정회원의 월례회, 골프단체행사 예약대행 (비용별도)</p>
            </div>

            <div className="network-modal-section">
              <h4 className="network-modal-subtitle">월별 예약 가능 골프장 리스트</h4>
              <p className="network-modal-desc">
                국내 수도권 명문 골프장
                <button
                  className="cg-view-btn"
                  onClick={() => window.location.href = "/private-n"}
                >
                  C.G 보기
                </button>
              </p>
            </div>

            <div className="network-modal-section">
              <h4 className="network-modal-subtitle">프라이빗 대회 일정</h4>
              <p className="network-modal-desc">
                아트N골프 네트워크&amp;이벤트대회 안내-정회원과 회원 추천만 참가가능
                <button
                  className="cg-view-btn"
                  onClick={() => window.location.href = "/private-n"}
                >
                  MEMBERS
                </button>
              </p>
            </div>

            <div className="network-modal-section">
              <h4 className="network-modal-subtitle">해외 골프 프로그램 상세 일정</h4>
              <p className="network-modal-desc">일본, 중국, 동남아, 미국 해외 골프 투어 및 프로 동반 아카데미</p>
            </div>

            <div className="network-modal-footer">
              <Link to="/exhibition" className="network-modal-nexus-btn">
                NEXUS
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

/* ─── NOBLESSE 팝업 (Advisory) ─── */
import noblesseImg from "../assets/logo/KakaoTalk_Photo_2026-03-02-15-07-56.jpeg";

const NoblessePopup: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="ad-noblesse">
      <button type="button" className="ad-noblesse-btn" onClick={() => setOpen(true)}>
        <span className="ad-noblesse-label">&lt;NOBLESSE&gt;</span>
        <span className="ad-noblesse-arrow">›</span>
      </button>
      {open && (
        <div className="noblesse-modal-backdrop" onClick={() => setOpen(false)}>
          <div className="noblesse-modal" onClick={(e) => e.stopPropagation()}>
            <button className="noblesse-modal-close" onClick={() => setOpen(false)}>✕</button>
            <img src={noblesseImg} alt="Noblesse Partner" className="noblesse-modal-img" />
          </div>
        </div>
      )}
    </div>
  );
};

/* ─── AND 토글 (Contact) ─── */
const AndToggle: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="ct-and">
      <button type="button" className="ct-and-btn" onClick={() => setOpen((v) => !v)}>
        <span className="ct-and-label">&lt;NOW&gt;</span>
        <span className={`ct-and-arrow${open ? " open" : ""}`}>›</span>
      </button>
      {open && (
        <div className="ct-and-body">
          <p className="ct-and-title">알아보기</p>
          <form className="ct-form">
            <input type="text" placeholder="NAME" className="ct-input" />
            <input type="tel" placeholder="PHONE" className="ct-input" />
            <input type="email" placeholder="E-Mail" className="ct-input" />
            <textarea placeholder="Message" className="ct-textarea" rows={4} />
            <button type="submit" className="ct-submit">제출하기</button>
          </form>
        </div>
      )}
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <>
      {/* ===== ABOUT — Guest & Member 공통 ===== */}
      <section id="about" className="block about-full" style={{ backgroundImage: `url(${aboutImg})` }}>
        <div className="about-overlay" />
        <div className="about-content">
          <div className="about-label">
            <span className="about-label-main">ABOUT</span>
            <span className="about-label-sub">Heritage &amp; Vision</span>
          </div>
          <h2 className="about-title">
            예술과 골프를,<br />자산의 구조로 바라본다.
          </h2>
          <p className="about-body">
            {`Art N Golf는 예술과 골프를 취향의 영역이 아닌\n'자산의 구조'로 바라보는 질문에서 출발했습니다.\n미술품은 감상의 대상이기 이전에 시간을 견디는 가치이며,\n골프는 여가가 아니라 관계와 신뢰가 완성되는 공간입니다.`}
          </p>
          <p className="about-body">
            {`이 두 세계를 법과 제도, 회계와 금융의 틀 안에서\n정제된 방식으로 연결하고 싶었습니다.\n그 결과가 아트 자산 관리와 프라이빗 골프 네트워크를\n하나의 통합 자산 아키텍처로 설계한 Art N Golf입니다.`}
          </p>
          <div className="founder-note">
            <p className="founder-label">Founder, Art N Golf</p>
            <p className="founder-text">
              {`ART N GOLF는 예술을 감상하는 영역에서 운용하는 영역으로,\n골프를 운동하는 영역에서 비즈니스 자산으로 진화시킵니다.\n우리는 실물 자산의 안정성과 디지털 자산의 확장성을 동시에 보유한\n대한민국 유일의 하이엔드 자산 플랫폼이 될 것입니다.`}
            </p>
          </div>
        </div>
      </section>

      {/* ===== Guest 섹션 (비회원) ===== */}
        <section id="art-asset" className="block guest-only art-asset-section">
          {/* 배경: 작품 이미지 FadeOut/In */}
          <ArtSlider />
          {/* 오버레이: 오른쪽 그림 → 왼쪽으로 흰색 페이드 (ABOUT의 역방향) */}
          <div className="aa-overlay" />
          {/* 왼쪽 텍스트 영역 */}
          <div className="aa-content">
            <div className="aa-label-row">
              <span className="aa-label-main">ART ASSET</span>
              <span className="aa-label-sub">Art Asset Management</span>
            </div>
            <h2 className="aa-title">
              미술품의 구매, 관리, 렌탈, 가치평가까지<br />
              하나의 흐름으로 설계된 아트 자산 관리.
            </h2>

            <p className="aa-desc">
              작품 구매 &amp; 컬렉션 구축 · 법인 대상 아트 렌탈,<br />
              개인 소장품의 관리 및 자산화 · 전환시장가치 기반 평가 시스템까지
            </p>
            <ExhibitionEntry />
          </div>
        </section>

        <section id="golf-privilege" className="block guest-only gp-section">
          {/* 배경: 골프장 사진 */}
          <div className="gp-bg" style={{ backgroundImage: `url(${golfImg})` }} />
          {/* 오버레이: 양쪽 흰색 */}
          <div className="gp-overlay" />

          {/* 왼쪽 텍스트 영역 */}
          <div className="gp-content">
            <div className="gp-label-row">
              <span className="gp-label-main">GOLF PRIVILEGE</span>
              <span className="gp-label-sub">Premium Golf Network</span>
            </div>
            <h2 className="gp-title">
              회원을 위해 제공되는<br />
              선택적 혜택이 아닌,<br />
              구조화된 프리미엄 경험.
            </h2>
            <p className="gp-body">
              골프는 옵션이 아니라, 관계를 완성하는 연결고리입니다.
            </p>
            <div className="gp-list">
              <p>국내 명문 골프장 정기예약 서비스</p>
              <p>프라이빗 골프대회 초청</p>
              <p>해외투어 프로그램</p>
            </div>
            <NetworkToggle />
          </div>
        </section>

        <section id="advisory" className="block guest-only ad-section">
          {/* 배경: 갤러리 사진 */}
          <div className="ad-bg" style={{ backgroundImage: `url(${advisoryImg})` }} />
          {/* 오버레이: 왼쪽 투명 → 오른쪽 흰색 (ABOUT/GOLF와 동일 방향) */}
          <div className="ad-overlay" />
          {/* 오른쪽 텍스트 영역 */}
          <div className="ad-content">
            <div className="ad-label-row">
              <span className="ad-label-main">ADVISORY</span>
              <span className="ad-label-sub">ART ASSET ADVISORY</span>
            </div>
            <h2 className="ad-title">
              감각이 아닌,<br />근거로 자산을 판단합니다.
            </h2>
            <p className="ad-body">
              아트N골프는 법무·회계·세무·감정 전문가와 함께<br />
              미술 자산의 구조를 설계합니다.
            </p>
            <div className="ad-list">
              <p>법인 재무 구조에 맞춘 아트 렌탈 가능성 검토</p>
              <p>소장 작품 진품 감정 및 연대 분석</p>
              <p>보험가·시장가·보관 상태 종합 평가까지</p>
            </div>
            <p className="ad-footer">모든 판단은 전문가의 근거 위에서 이루어집니다.</p>
            <NoblessePopup />
          </div>
        </section>

        <section id="private-n-teaser" className="block guest-only pnt-section">
          <div className="pnt-bg" style={{ backgroundImage: `url(${privateNImg})` }} />
          <div className="pnt-overlay" />
          <div className="pnt-content">
            <div className="pnt-label-row">
              <span className="pnt-label-main">PRIVATE N</span>
              <span className="pnt-label-sub">EXCLUSIVE LOUNGE</span>
            </div>
            <h2 className="pnt-title">
              소수의 멤버를 위한<br />아트N골프의 프리미엄 라운지
            </h2>
            <p className="pnt-body">
              예술과 골프를 함께 향유하는 고객만을 위해<br />
              특별히 설계된 멤버십 전용 서비스입니다.
            </p>
            <button
              className="pnt-btn"
              type="button"
              onClick={() => window.location.href = "/private-n"}
            >
              N 입장하기
            </button>
          </div>
        </section>

        <section id="contact" className="block guest-only ct-section">
          {/* 배경: 문화/와인 사진 */}
          <div className="ct-bg" style={{ backgroundImage: `url(${contactImg})` }} />
          {/* 오버레이: 왼쪽 투명 → 오른쪽 흰색 (ABOUT/GOLF/ADVISORY와 동일 방향) */}
          <div className="ct-overlay" />
          {/* 오른쪽 텍스트 영역 */}
          <div className="ct-content">
            <div className="ct-label-row">
              <span className="ct-label-main">CONTACT</span>
              <span className="ct-label-sub">PRIVATE ACCESS</span>
            </div>
            <h2 className="ct-title">
              모든 이에게<br />열려 있지 않습니다.
            </h2>
            <p className="ct-body">
              Art N Golf는 모두를 위한 서비스가 아닙니다.<br />
              가치를 이해하는 소수와 함께,<br />
              품격 있는 자산의 미래를 설계합니다.
            </p>
            <p className="ct-body">
              입장은 상담이 아니라 선별 과정입니다.<br />
              구조 자체가 이미 하나의 가치입니다.
            </p>
            <AndToggle />
          </div>
          {/* 오른쪽 컨택트 패널 */}
          <div className="ct-panel">
            <div className="ct-panel-inner">
              <p className="ct-panel-title">Private Access</p>
              <p className="ct-panel-desc">선별 과정을 통한 입장</p>
              <div className="ct-panel-info">
                <p>이메일: contact@artngolf.com</p>
                <p>문의: 02-1234-5678</p>
              </div>
            </div>
          </div>
        </section>

      {/* ===== Member 섹션 (회원 전용) ===== */}
        <section id="golf-privilege-detail" className="block member-only">
          <div className="container">
            <div className="blockhead">
              <h2 className="reveal" data-delay="0">
                GOLF PRIVILEGE
              </h2>
              <p className="subnote reveal" data-delay="1">
                골프 혜택 — 상세
              </p>
            </div>

            <div className="feature">
              <div className="visual visual-empty reveal" data-delay="0">
                <div className="caption">
                  <p className="cap-kicker">GOLF PRIVILEGE</p>
                  <p className="cap-title">등급별 혜택 · 골프장 리스트 · 대회 일정</p>
                </div>
              </div>

              <div className="copy">
                <p className="k reveal" data-delay="1">
                  Golf Privilege — Detail
                </p>
                <h3 className="reveal" data-delay="2">
                  등급과 혜택의 구조를 확인합니다.
                </h3>
                <p className="reveal" data-delay="3">
                  {`회원 등급별 예약 혜택, 골프장 리스트,\n대회 일정까지 상세 정보를 제공합니다.`}
                </p>
                <ul className="bullets reveal" data-delay="4">
                  <li>회원 등급별 예약 혜택</li>
                  <li>골프장 리스트</li>
                  <li>대회 일정 및 참가 안내</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="advisory-detail" className="block member-only">
          <div className="container">
            <div className="blockhead">
              <h2 className="reveal" data-delay="0">
                ART ASSET ADVISORY
              </h2>
              <p className="subnote reveal" data-delay="1">
                전문가 자문 — 상세
              </p>
            </div>

            <div className="feature reverse">
              <div className="advisory-text reveal" data-delay="0">
                <p className="advisory-tag">ADVISORY</p>
                <p className="advisory-caption">GOLF PRIVILEGE 옆 카테고리</p>
              </div>

              <div className="copy">
                <p className="k reveal" data-delay="1">
                  ART ASSET ADVISORY
                </p>
                <h3 className="reveal" data-delay="2">
                  감각이 아닌, 근거로 자산을 판단합니다.
                </h3>
                <p className="reveal" data-delay="3">
                  {`아트N골프는 법무·회계·세무·감정 전문가와 함께\n미술 자산의 구조를 설계합니다.`}
                </p>
                <ul className="bullets reveal" data-delay="4">
                  <li>법인 재무 구조에 맞춘 아트 렌탈 가능성 검토</li>
                  <li>소장 작품 진품 감정 및 연대 분석</li>
                  <li>보험가·시장가·보관 상태 종합 평가</li>
                </ul>
                <p className="reveal" data-delay="4">
                  모든 판단은 전문가의 근거 위에서 이루어집니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="private-n" className="block member-only">
          <div className="container">
            <div className="blockhead">
              <h2 className="reveal" data-delay="0">
                PRIVATE N
              </h2>
              <p className="subnote reveal" data-delay="1">
                회원 전용 영역
              </p>
            </div>

            <div className="private-n-grid reveal" data-delay="0">
              <div className="private-n-card">
                <p className="private-n-tag">GOLF</p>
                <h4 className="private-n-title">골프장 정보</h4>
                <p className="private-n-desc">
                  회원 전용 골프장 정보와 예약 서비스에 접근합니다.
                </p>
              </div>
              <div className="private-n-card">
                <p className="private-n-tag">SHOP</p>
                <h4 className="private-n-title">ANG SHOP</h4>
                <p className="private-n-desc">
                  회원 전용 상품과 서비스를 탐색합니다.
                </p>
              </div>
              <div className="private-n-card">
                <p className="private-n-tag">NETWORK</p>
                <h4 className="private-n-title">NEXUS</h4>
                <p className="private-n-desc">
                  회원 간 네트워킹과 커뮤니티 공간입니다.
                </p>
              </div>
            </div>

            <div className="guest-note reveal" data-delay="2">
              <p className="guest-note-label">GUEST 준회원</p>
              <p className="guest-note-text">
                유료 커뮤니티 참가를 통한 준회원 혜택 안내가 제공됩니다.
              </p>
            </div>
          </div>
        </section>

    </>
  );
};

export default HomePage;
