import React, { useEffect, useState, useCallback } from "react";
import artworksData from "../data/artworks.json";
import img1 from "../assets/items/(1)56.jpg";
import img2 from "../assets/items/(2)353.png";
import img3 from "../assets/items/(3)394-2.jpg";
import img4 from "../assets/items/(4)95.png";
import img5 from "../assets/items/(5)47.jpg";
import img6 from "../assets/items/(6)42.jpg";
import img7 from "../assets/items/(7)335.jpg";
import img8 from "../assets/items/(8)336.jpg";
import img9 from "../assets/items/(9)334.jpg";
import img10 from "../assets/items/(10)122.jpg";
import img11 from "../assets/items/(11)87.jpg";
import img12 from "../assets/items/(12)24.jpg";
import img13 from "../assets/items/(13)494.png";
import img14 from "../assets/items/(14)495.png";
import img15 from "../assets/items/(15)503.png";
import img16 from "../assets/items/(16)16.jpg";
import img17 from "../assets/items/(17)15.jpg";
import img18 from "../assets/items/(18)86.jpg";
import img19 from "../assets/items/(19)342.jpg";
import img20 from "../assets/items/(20)612-350dpi.png";
import img21 from "../assets/items/(8)337.jpg";
import img22 from "../assets/items/(9)340.jpg";
import img23 from "../assets/items/(12)341.jpg";
import img24 from "../assets/items/(14)650-1-350dpi_밝기수정.jpg";
import img25 from "../assets/items/(19)478.png";
import img26 from "../assets/items/(19)516.jpg";
import img27 from "../assets/items/(19)517.jpg";
import img28 from "../assets/items/(20)744-1.png";
import img29 from "../assets/items/(20)746-1.png";
import img30 from "../assets/items/(20)747-1.png";
import img31 from "../assets/items/(20)751-1.png";

// 이미지 동적 import를 위한 매핑
const imageMap: Record<string, string> = {
  "(1)56.jpg": img1,
  "(2)353.png": img2,
  "(3)394-2.jpg": img3,
  "(4)95.png": img4,
  "(5)47.jpg": img5,
  "(6)42.jpg": img6,
  "(7)335.jpg": img7,
  "(8)336.jpg": img8,
  "(9)334.jpg": img9,
  "(10)122.jpg": img10,
  "(11)87.jpg": img11,
  "(12)24.jpg": img12,
  "(13)494.png": img13,
  "(14)495.png": img14,
  "(15)503.png": img15,
  "(16)16.jpg": img16,
  "(17)15.jpg": img17,
  "(18)86.jpg": img18,
  "(19)342.jpg": img19,
  "(20)612-350dpi.png": img20,
  "(8)337.jpg": img21,
  "(9)340.jpg": img22,
  "(12)341.jpg": img23,
  "(14)650-1-350dpi_밝기수정.jpg": img24,
  "(19)478.png": img25,
  "(19)516.jpg": img26,
  "(19)517.jpg": img27,
  "(20)744-1.png": img28,
  "(20)746-1.png": img29,
  "(20)747-1.png": img30,
  "(20)751-1.png": img31,
};

interface Artwork {
  id: number;
  artist: string;
  title: string;
  year?: string;
  material: string;
  size: string;
  dimensions: string;
  image: string;
  description?: string;
  certificate?: string;
  appraisal?: string;
  provenance?: string;
  collection?: string;
  exhibitionHistory?: string[];
  estimatedValue?: string;
}

const ExhibitionPage: React.FC = () => {
  const artworks = artworksData as Artwork[];
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  useEffect(() => {
    const appRoot = document.querySelector('.app-root');
    if (appRoot) {
      appRoot.scrollTop = 0;
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const closeModal = useCallback(() => setSelectedArtwork(null), []);

  useEffect(() => {
    if (!selectedArtwork) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedArtwork, closeModal]);

  console.log("ExhibitionPage rendered", artworks.length, "artworks");

  return (
    <>
      {/* 섹션 1: 안내문구 */}
      <section className="exhibition-intro-section">
        <div className="exhibition-header">
          <h1 className="exhibition-page-title">미술 작품 전시 공간</h1>
          <p className="exhibition-page-subtitle">Art N Golf Collection</p>

          <div className="exhibition-notice">
            <p className="exhibition-notice-intro">
              아트N골프의 기본구조는 기업/개인의 미술품 구매 또는 렌탈, 소장품 자산전환 신청하신 분들에 한해 정회원으로 등록됩니다
            </p>

            <div className="exhibition-notice-items">
              <div className="exhibition-notice-item">
                <h4>1. 미술품구매</h4>
                <p>작가·작품·이력 중심 정보 제공, 장기 소장 관점의 선택 구조</p>
              </div>

              <div className="exhibition-notice-item">
                <h4>2. 렌탈</h4>
                <p>법인 및 개인 공간 활용, 기간·목적에 맞는 합리적 제안, 교체 및 관리 개념 포함</p>
                <p className="exhibition-notice-sub">
                  미술품 렌탈료는 법인세법 19조 및 동법 시행령 49조에 의하여 법인의 비용처리가 가능합니다. 다만, 해당 미술품의 매입목적이 업무와 관련되어야 하며, 거래가격의 통상성이 입증될 수 있어야 합니다
                </p>
                <p className="exhibition-notice-sub">
                  아트N골프는 기업의 렌탈신청시 자문기관인 회계법인의 상담을 먼저 진행합니다
                </p>
              </div>

              <div className="exhibition-notice-item">
                <h4>3. 소장품 등록</h4>
                <p>공신력 있는 감정기관·전문가 연계 진품감정, 미술품 활용 렌탈·옥션·인증·거래 구조</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 섹션 2: 작품 전시 갤러리 */}
      <section className="exhibition-gallery-section">
        <div className="exhibition-grid">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className="exhibition-card"
              onClick={() => setSelectedArtwork(artwork)}
              style={{ cursor: "pointer" }}
            >
              <div className="exhibition-card-image">
                <img
                  src={imageMap[artwork.image]}
                  alt={`${artwork.artist} - ${artwork.title}`}
                />
              </div>
              <div className="exhibition-card-info">
                <p className="exhibition-card-artist">{artwork.artist}</p>
                <h3 className="exhibition-card-title">
                  {artwork.title}
                  {artwork.year && ` (${artwork.year})`}
                </h3>
                <p className="exhibition-card-material">{artwork.material}</p>
                <p className="exhibition-card-size">
                  {artwork.size} / {artwork.dimensions}cm
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedArtwork && (
        <div className="ex-detail-backdrop" onClick={closeModal}>
          <div className="ex-detail-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="ex-detail-close"
              type="button"
              aria-label="닫기"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="ex-detail-image">
              <img
                src={imageMap[selectedArtwork.image]}
                alt={`${selectedArtwork.artist} - ${selectedArtwork.title}`}
              />
            </div>
            <div className="ex-detail-info">
              <p className="ex-detail-artist">{selectedArtwork.artist}</p>
              <h2 className="ex-detail-title">
                {selectedArtwork.title}
                {selectedArtwork.year && <span className="ex-detail-year"> ({selectedArtwork.year})</span>}
              </h2>
              <div className="ex-detail-meta">
                <span>{selectedArtwork.material}</span>
                <span className="ex-detail-divider" />
                <span>{selectedArtwork.size} / {selectedArtwork.dimensions}cm</span>
              </div>

              {/* 상세 설명 */}
              {selectedArtwork.description && (
                <div className="ex-detail-section">
                  <h3>작품 설명</h3>
                  <p>{selectedArtwork.description}</p>
                </div>
              )}

              {/* 품질 보증서 */}
              {selectedArtwork.certificate && (
                <div className="ex-detail-section">
                  <h3>품질 보증서</h3>
                  <p>{selectedArtwork.certificate}</p>
                </div>
              )}

              {/* 감정 평가 */}
              {selectedArtwork.appraisal && (
                <div className="ex-detail-section">
                  <h3>감정 평가</h3>
                  <p>{selectedArtwork.appraisal}</p>
                </div>
              )}

              {/* 작품 이력(프로비넌스) */}
              {selectedArtwork.provenance && (
                <div className="ex-detail-section">
                  <h3>작품 이력</h3>
                  <p>{selectedArtwork.provenance}</p>
                </div>
              )}

              {/* 소장처 */}
              {selectedArtwork.collection && (
                <div className="ex-detail-section">
                  <h3>소장처</h3>
                  <p>{selectedArtwork.collection}</p>
                </div>
              )}

              {/* 전시 이력 */}
              {selectedArtwork.exhibitionHistory && selectedArtwork.exhibitionHistory.length > 0 && (
                <div className="ex-detail-section">
                  <h3>전시 이력</h3>
                  <ul className="ex-detail-history">
                    {selectedArtwork.exhibitionHistory.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 참고 시세 */}
              {selectedArtwork.estimatedValue && (
                <div className="ex-detail-section ex-detail-value">
                  <h3>참고 시세</h3>
                  <p>{selectedArtwork.estimatedValue}</p>
                </div>
              )}

              {/* 문의하기 버튼 → 알아보기 모달 열기 */}
              <div className="ex-detail-actions">
                <button
                  className="ex-detail-inquiry"
                  type="button"
                  onClick={() => {
                    setSelectedArtwork(null);
                    window.dispatchEvent(new Event("open-inquiry"));
                  }}
                >
                  작품 문의하기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExhibitionPage;
