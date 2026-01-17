import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import aboutImage from "../assets/images/hero-12705470.jpg";
import galleryImage from "../assets/images/gallery-16037759.jpg";
import authImage from "../assets/images/auth-7534181.jpg";
import auctionImage from "../assets/images/auction-13312438.jpg";
import golfImage from "../assets/images/golf-8454586.jpg";
import cultureImage from "../assets/images/culture-33144646.jpg";
import heroVideo from "../assets/media/KakaoTalk_Video_2026-01-17-14-09-42.mp4";

const HomePage: React.FC = () => {
  useEffect(() => {
    document.body.setAttribute("data-page", "home");
    return () => {
      document.body.removeAttribute("data-page");
    };
  }, []);

  return (
    <>
      <section className="intro-video" aria-label="Full screen intro video">
        <video
          className="intro-video__media"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          controls
        />
        <div className="intro-video__overlay" />
        <div className="intro-video__label">
          <p className="intro-video__kicker">ART N GOLF</p>
          <p className="intro-video__title">홈페이지 준비중</p>
        </div>
      </section>

      <section id="about" className="block content-hidden">
        <div className="container">
          <span id="why-n" className="anchor" />
          <span id="platform-philosophy" className="anchor" />
          <div className="blockhead">
            <h2 className="reveal" data-delay="0">
              Why N?
            </h2>
            <p className="subnote reveal" data-delay="1">
              About artngolf
            </p>
          </div>

          <div className="feature">
            <div className="visual reveal" data-delay="0">
              <div
                className="bg"
                style={{
                  backgroundImage: `url(${aboutImage})`,
                }}
              />
              <div className="overlay" />
              <div className="caption">
                <p className="cap-kicker">GALLERY</p>
                <p className="cap-title">전시처럼, 기준을 세웁니다.</p>
              </div>
            </div>

            <div className="copy">
              <p className="k reveal" data-delay="1">
                Platform Philosophy
              </p>
              <h3 className="reveal" data-delay="2">
                N은 연결이 아니라, 기준입니다.
              </h3>
              <p className="reveal" data-delay="3">
                {`artngolf는 미술과 골프를 단순히 결합한 플랫폼이 아닙니다.
N은 다섯 가지 의미를 담고 있으며, 동시에 작동하는 구조입니다.`}
              </p>

              <div className="n-strip">
                <div className="n-chip reveal" data-delay="1">
                  <p className="t">AND</p>
                  <p className="d">동시성</p>
                </div>
                <div className="n-chip reveal" data-delay="2">
                  <p className="t">NEXUS</p>
                  <p className="d">연결점</p>
                </div>
                <div className="n-chip reveal" data-delay="3">
                  <p className="t">NETWORK</p>
                  <p className="d">신뢰 네트워크</p>
                </div>
                <div className="n-chip reveal" data-delay="4">
                  <p className="t">NOBLESSE</p>
                  <p className="d">품격</p>
                </div>
                <div className="n-chip reveal" data-delay="5">
                  <p className="t">NOW</p>
                  <p className="d">시대성</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="membership" className="block content-hidden">
        <div className="container">
          <span id="membership-guide" className="anchor" />
          <div className="blockhead">
            <h2 className="reveal" data-delay="0">
              Membership is Trust
            </h2>
            <p className="subnote reveal" data-delay="1">
              Membership
            </p>
          </div>

          <div className="feature reverse">
            <div className="visual reveal" data-delay="0">
              <div
                className="bg"
                style={{
                  backgroundImage: `url(${galleryImage})`,
                }}
              />
              <div className="overlay" />
              <div className="caption">
                <p className="cap-kicker">NETWORK</p>
                <p className="cap-title">승인 기반 · 실명 기반 · 기록 기반</p>
              </div>
            </div>

            <div className="copy">
              <p className="k reveal" data-delay="1">
                Closed Membership
              </p>
              <h3 className="reveal" data-delay="2">
                신뢰는 구조에서 만들어집니다.
              </h3>
              <p className="reveal" data-delay="3">
                {`가입 후 승인, 실명 기반 활동, 이력 중심 운영.
회원 간 정보 공유는 폐쇄형 구조에서만 진행됩니다.
이는 신뢰 가능한 네트워크를 만들기 위한 최소 조건입니다.`}
              </p>
              <ul className="bullets reveal" data-delay="4">
                <li>가입 → 승인</li>
                <li>실명 기반 활동</li>
                <li>구매·렌탈·구독 이력 중심 운영</li>
                <li>폐쇄형 정보 공유</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="member-only content-hidden">
        <section id="art" className="block">
          <div className="container">
            <div className="blockhead">
              <h2 className="reveal" data-delay="0">
                Art · Purchase / Rental / Subscription
              </h2>
              <p className="subnote reveal" data-delay="1">
                Art Service
              </p>
            </div>

            <div className="feature">
              <div className="visual reveal" data-delay="0">
                <div
                  className="bg"
                  style={{
                    backgroundImage: `url(${galleryImage})`,
                  }}
                />
                <div className="overlay" />
                <div className="caption">
                  <p className="cap-kicker">NOW</p>
                  <p className="cap-title">소유 · 활용 · 관리까지</p>
                </div>
              </div>

              <div className="copy">
                <p className="k reveal" data-delay="1">
                  Art Service
                </p>
                <h3 className="reveal" data-delay="2">
                  미술을 ‘현재의 방식’으로.
                </h3>
                <p className="reveal" data-delay="3">
                  {`미술품 구매, 렌탈, 구독까지.
공간·기간·목적에 맞춘 합리적 제안과 교체·관리 개념을 포함합니다.`}
                </p>
                <ul className="bullets reveal" data-delay="4">
                  <li>Purchase: 작가·작품·이력 중심 정보</li>
                  <li>Rental/Subscription: 공간 활용 중심</li>
                  <li>교체 및 관리 포함</li>
                </ul>
                <div className="section-actions reveal" data-delay="4">
                  <Link className="btn primary" to="/products">
                    상품 보기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="auth" className="block">
          <div className="container">
            <div className="blockhead">
              <h2 className="reveal" data-delay="0">
                Authentication Support
              </h2>
              <p className="subnote reveal" data-delay="1">
                Verification
              </p>
            </div>

            <div className="feature reverse">
              <div className="visual reveal" data-delay="0">
                <div
                  className="bg"
                  style={{
                    backgroundImage: `url(${authImage})`,
                  }}
                />
                <div className="overlay" />
                <div className="caption">
                  <p className="cap-kicker">NEXUS</p>
                  <p className="cap-title">연결된 전문성으로 검증을 지원</p>
                </div>
              </div>

              <div className="copy">
                <p className="k reveal" data-delay="1">
                  Authentication
                </p>
                <h3 className="reveal" data-delay="2">
                  검증은 ‘연결’로 이루어져야 합니다.
                </h3>
                <p className="reveal" data-delay="3">
                  {`공신력 있는 감정기관·전문가 연계, 소장 작품 자료 정리,
감정 결과 기록 및 이력 관리를 지원합니다.`}
                </p>
                <ul className="bullets reveal" data-delay="4">
                  <li>외부 감정기관/전문가 연계</li>
                  <li>자료 정리 및 기록</li>
                  <li>이력 관리</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="auction" className="block">
          <div className="container">
            <div className="blockhead">
              <h2 className="reveal" data-delay="0">
                Private Auction
              </h2>
              <p className="subnote reveal" data-delay="1">
                Auction &amp; Trade
              </p>
            </div>

            <div className="feature">
              <div className="visual reveal" data-delay="0">
                <div
                  className="bg"
                  style={{
                    backgroundImage: `url(${auctionImage})`,
                  }}
                />
                <div className="overlay" />
                <div className="caption">
                  <p className="cap-kicker">PRIVATE</p>
                  <p className="cap-title">공개 시장이 아닌, 승인된 시장</p>
                </div>
              </div>

              <div className="copy">
                <p className="k reveal" data-delay="1">
                  Private Auction
                </p>
                <h3 className="reveal" data-delay="2">
                  네트워크가 자산이 되는 구조.
                </h3>
                <p className="reveal" data-delay="3">
                  {`승인된 회원만 참여, 제한된 참여자 구조, 거래 이력 관리.
신뢰 기반 중개 환경을 전제로 합니다.`}
                </p>
                <ul className="bullets reveal" data-delay="4">
                  <li>Approved members only</li>
                  <li>Limited participation</li>
                  <li>Trade history &amp; records</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="corporate" className="block">
          <div className="container">
            <div className="blockhead">
              <h2 className="reveal" data-delay="0">
                For Corporate Leaders
              </h2>
              <p className="subnote reveal" data-delay="1">
                Corporate Art Solution
              </p>
            </div>

            <div className="feature reverse">
              <div className="visual reveal" data-delay="0">
                <div
                  className="bg"
                  style={{
                    backgroundImage: `url(${authImage})`,
                  }}
                />
                <div className="overlay" />
                <div className="caption">
                  <p className="cap-kicker">CORPORATE</p>
                  <p className="cap-title">계약 · 증빙 · 기록 중심 운영</p>
                </div>
              </div>

              <div className="copy">
                <p className="k reveal" data-delay="1">
                  For Corporate
                </p>
                <h3 className="reveal" data-delay="2">
                  취향은 판단이 됩니다.
                </h3>
                <p className="reveal" data-delay="3">
                  {`법인 명의 미술품 구매·렌탈·구독,
계약·증빙·기록 중심 운영을 지원합니다.`}
                </p>
                <ul className="bullets reveal" data-delay="4">
                  <li>법인 명의 구매·렌탈·구독</li>
                  <li>Documentation &amp; records</li>
                  <li>전문가 자문 기반 운영</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="golf" className="block">
          <div className="container">
            <div className="blockhead">
              <h2 className="reveal" data-delay="0">
                Golf · Member Benefit
              </h2>
              <p className="subnote reveal" data-delay="1">
                Golf Service
              </p>
            </div>

            <div className="feature">
              <div className="visual reveal" data-delay="0">
                <div
                  className="bg"
                  style={{
                    backgroundImage: `url(${golfImage})`,
                  }}
                />
                <div className="overlay" />
                <div className="caption">
                  <p className="cap-kicker">GOLF</p>
                  <p className="cap-title">유명 골프장을 만나보세요</p>
                </div>
              </div>

              <div className="copy">
                <p className="k reveal" data-delay="1">
                  Member Benefit
                </p>
                <h3 className="reveal" data-delay="2">
                  골프는 목적이 아니라, 연결입니다.
                </h3>
                <p className="reveal" data-delay="3">
                  {`미술 서비스 이용 회원을 위한 교류 서비스 중 하나입니다.
명문 골프장 예약 지원, 회원 대회, 해외 투어를 제공합니다.`}
                </p>
                <ul className="bullets reveal" data-delay="4">
                  <li>명문 골프장 예약 지원</li>
                  <li>월·분기별 회원 대회</li>
                  <li>해외 골프 투어</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="culture" className="block">
          <div className="container">
            <div className="blockhead">
              <h2 className="reveal" data-delay="0">
                Culture &amp; Experience
              </h2>
              <p className="subnote reveal" data-delay="1">
                Beyond Ownership
              </p>
            </div>

            <div className="feature reverse">
              <div className="visual reveal" data-delay="0">
                <div
                  className="bg"
                  style={{
                    backgroundImage: `url(${cultureImage})`,
                  }}
                />
                <div className="overlay" />
                <div className="caption">
                  <p className="cap-kicker">DINING</p>
                  <p className="cap-title">소유 이후의 경험</p>
                </div>
              </div>

              <div className="copy">
                <p className="k reveal" data-delay="1">
                  Culture
                </p>
                <h3 className="reveal" data-delay="2">
                  품격은 ‘실천’으로 완성됩니다.
                </h3>
                <p className="reveal" data-delay="3">
                  {`소규모 프라이빗 전시, 와인 & 다이닝 모임,
해외 미술관·박물관 투어, 오블리주 프로그램을 운영합니다.`}
                </p>
                <ul className="bullets reveal" data-delay="4">
                  <li>프라이빗 전시</li>
                  <li>와인 &amp; 다이닝</li>
                  <li>해외 투어</li>
                  <li>오블리주 프로그램</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="lounge" className="block">
          <div className="container">
            <div className="blockhead">
              <h2 className="reveal" data-delay="0">
                Member Lounge
              </h2>
              <p className="subnote reveal" data-delay="1">
                Members Only
              </p>
            </div>

            <div className="feature">
              <div className="visual reveal" data-delay="0">
                <div
                  className="bg"
                  style={{
                    backgroundImage: `url(${aboutImage})`,
                  }}
                />
                <div className="overlay" />
                <div className="caption">
                  <p className="cap-kicker">TRUST</p>
                  <p className="cap-title">정보는, 신뢰 위에서만 흐릅니다</p>
                </div>
              </div>

              <div className="copy">
                <p className="k reveal" data-delay="1">
                  Members
                </p>
                <h3 className="reveal" data-delay="2">
                  폐쇄형 구조에서만 공유됩니다.
                </h3>
                <p className="reveal" data-delay="3">
                  {`멤버 간 정보 공유 영역(네트워크/컬렉션/거래 이력)으로 확장됩니다.`}
                </p>
                <ul className="bullets reveal" data-delay="4">
                  <li>My Collection</li>
                  <li>Member Network</li>
                  <li>Trade History</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="collection" className="block">
          <div className="container">
            <div className="blockhead">
              <h2 className="reveal" data-delay="0">
                My Collection (등록·관리)
              </h2>
              <p className="subnote reveal" data-delay="1">
                Collection
              </p>
            </div>

            <div className="feature reverse">
              <div className="visual reveal" data-delay="0">
                <div
                  className="bg"
                  style={{
                    backgroundImage: `url(${galleryImage})`,
                  }}
                />
                <div className="overlay" />
                <div className="caption">
                  <p className="cap-kicker">ARCHIVE</p>
                  <p className="cap-title">작품 이력과 소장 기록을 관리</p>
                </div>
              </div>

              <div className="copy">
                <p className="k reveal" data-delay="1">
                  My Collection
                </p>
                <h3 className="reveal" data-delay="2">
                  소장 이력을 체계적으로 정리합니다.
                </h3>
                <p className="reveal" data-delay="3">
                  {`보유 작품 등록, 관리, 감정 이력 기록까지 한 곳에서 제공합니다.
개인과 법인의 아카이브를 안전하게 유지합니다.`}
                </p>
                <ul className="bullets reveal" data-delay="4">
                  <li>작품 등록 및 수정</li>
                  <li>감정/거래 이력 관리</li>
                  <li>렌탈·구독 상태 확인</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="contact" className="block">
        <div className="container">
          <div className="blockhead">
            <h2 className="reveal" data-delay="0">
              Contact
            </h2>
            <p className="subnote reveal" data-delay="1">
              Inquiry
            </p>
          </div>

          <div className="feature">
            <div className="visual reveal" data-delay="0">
              <div
                className="bg"
                style={{
                  backgroundImage: `url(${authImage})`,
                }}
              />
              <div className="overlay" />
              <div className="caption">
                <p className="cap-kicker">INQUIRY</p>
                <p className="cap-title">멤버십 가입 및 서비스 문의</p>
              </div>
            </div>

            <div className="copy">
              <p className="k reveal" data-delay="1">
                Contact
              </p>
              <h3 className="reveal" data-delay="2">
                문의 후, 승인을 통해 시작됩니다.
              </h3>
              <p className="reveal" data-delay="3">
                {`멤버십 가입 및 서비스 이용을 위해서는 회원 가입 및 승인이 필요합니다.
문의 남겨주시면 안내드리겠습니다.`}
              </p>
              <ul className="bullets reveal" data-delay="4">
                <li>이메일: contact@artngolf.example</li>
                <li>상담: 상단 ‘멤버십 문의’ 버튼</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
