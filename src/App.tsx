// src/App.tsx
import React, { useEffect, useState } from "react";
import "./App.css";

type Scene = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  imageUrl: string;
};

type ProductArtwork = {
  id: number;
  title: string;
  artist: string;
  category: string;
  size: string;
  thumbUrl: string;
};

const SCENES: Scene[] = [
  {
    id: 1,
    tag: "Gallery Exhibition",
    title: "공간이 작품이 되는 순간.",
    subtitle: "Modern Wall Collection",
    description:
      "미술관의 화이트 큐브를 그대로 옮겨온 듯한 감각적인 전시 연출로 기업 로비와 라운지의 첫인상을 바꿉니다.",
    imageUrl:
      "https://images.pexels.com/photos/2457278/pexels-photo-2457278.jpeg",
  },
  {
    id: 2,
    tag: "Art Display",
    title: "고객이 머무르는 공간을 위한 아트 디렉션.",
    subtitle: "Minimal Gallery Style",
    description:
      "화이트 톤의 갤러리 벽에 어울리는 작품을 선별해 브랜드의 감도 높은 이미지를 구축합니다.",
    imageUrl:
      "https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 3,
    tag: "Corporate Collection",
    title: "전문적인 기업 전시 솔루션.",
    subtitle: "Large Abstract Canvas",
    description:
      "기업 로비, 멤버십 라운지, 프라이빗 회의실 등 공간의 목적에 맞춘 맞춤형 아트 디렉션을 제공합니다.",
    imageUrl:
      "https://images.pexels.com/photos/1324658/pexels-photo-1324658.jpeg?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: 4,
    tag: "Golf & Art Experience",
    title: "유명 골프장을 만나보세요.",
    subtitle: "Premium Golf Course Collection",
    description:
      "예술 공간뿐 아니라 골프장·리조트에서도 작품과 함께하는 프리미엄 경험을 제안합니다.",
    imageUrl:
      "https://images.pexels.com/photos/1325661/pexels-photo-1325661.jpeg",
  }
  
];

const PRODUCT_ARTWORKS: ProductArtwork[] = [
  {
    id: 1,
    title: "Calm Geometry",
    artist: "K. Ara",
    category: "회화",
    size: "162 x 112 cm",
    thumbUrl:
      "https://images.pexels.com/photos/2457278/pexels-photo-2457278.jpeg",
  },
  {
    id: 2,
    title: "Marble Echo",
    artist: "J. Lee",
    category: "조각",
    size: "H 90 cm",
    thumbUrl:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Night Distance",
    artist: "S. Park",
    category: "사진",
    size: "100 x 70 cm",
    thumbUrl:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Soft Horizon",
    artist: "M. Choi",
    category: "회화",
    size: "130 x 97 cm",
    thumbUrl:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80",
  },
];

// 조각 전용 컬렉션에 들어갈 작품 예시
const SCULPTURE_ARTWORKS: ProductArtwork[] = [
  {
    id: 101,
    title: "Stone Flow",
    artist: "J. Han",
    category: "조각",
    size: "H 120 cm",
    thumbUrl:
      "https://images.pexels.com/photos/279321/pexels-photo-279321.jpeg",
  },
  {
    id: 102,
    title: "White Balance",
    artist: "L. Seo",
    category: "조각",
    size: "H 95 cm",
    thumbUrl:
      "https://images.pexels.com/photos/279321/pexels-photo-279321.jpeg",
  },
  {
    id: 103,
    title: "Silent Curve",
    artist: "M. Woo",
    category: "조각",
    size: "H 80 cm",
    thumbUrl:
      "https://images.pexels.com/photos/279321/pexels-photo-279321.jpeg",
  },
  {
    id: 104,
    title: "Granite Line",
    artist: "H. Kim",
    category: "조각",
    size: "H 110 cm",
    thumbUrl:
      "https://images.pexels.com/photos/279321/pexels-photo-279321.jpeg",
  },
];

const App: React.FC = () => {
  return (
    <div className="app-root">
      <Header />
      <main className="main">
        <HeroCarousel />
        <CollectionSection />
        <SculptureCollectionSection />
      </main>
      <Footer />
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">Art & Golf</div>
        <nav className="nav">
          <button className="nav-link nav-link-active">Exhibition</button>
          <button className="nav-link">For Corporate</button>
          <button className="nav-link">Golf & Hospitality</button>
          <button className="nav-cta">컨설팅 문의</button>
        </nav>
      </div>
    </header>
  );
};

const HeroCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const current = SCENES[index];

  useEffect(() => {
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % SCENES.length),
      8000
    );
    return () => clearInterval(id);
  }, []);

  const goTo = (i: number) => setIndex(i);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + SCENES.length) % SCENES.length);
  const handleNext = () => setIndex((prev) => (prev + 1) % SCENES.length);

  return (
    <section className="hero">
      <div className="hero-scene-wrapper">
        {SCENES.map((scene, i) => (
          <HeroScene key={scene.id} scene={scene} active={i === index} />
        ))}
      </div>

      <div className="hero-controls">
        <button className="hero-arrow" onClick={handlePrev} aria-label="이전">
          ←
        </button>
        <div className="hero-dots">
          {SCENES.map((scene, i) => (
            <button
              key={scene.id}
              className={`hero-dot ${i === index ? "hero-dot-active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={scene.title}
            />
          ))}
        </div>
        <button className="hero-arrow" onClick={handleNext} aria-label="다음">
          →
        </button>
      </div>

      <div className="hero-bottom-caption">
        <span>{current.tag}</span>
        <span className="divider">·</span>
        <span>{current.subtitle}</span>
      </div>
    </section>
  );
};

const HeroScene: React.FC<{ scene: Scene; active: boolean }> = ({
  scene,
  active,
}) => (
  <div className={`hero-scene ${active ? "hero-scene-active" : ""}`}>
    <div
      className="hero-image"
      style={{ backgroundImage: `url(${scene.imageUrl})` }}
    />
    <div className="hero-overlay" />
    <div className="hero-content">
      <div>
        <div className="hero-tag">{scene.tag}</div>
        <h1 className="hero-title">{scene.title}</h1>
        <p className="hero-subtitle-text">{scene.subtitle}</p>
        <p className="hero-description">{scene.description}</p>
        <div className="hero-actions">
          <button className="primary-btn">전시 제안서 받아보기</button>
          <button className="ghost-btn">포트폴리오 열람</button>
        </div>
      </div>
    </div>
  </div>
);

/**
 * 컬렉션 1: Signature (믹스 컬렉션)
 */
const CollectionSection: React.FC = () => {
  return (
    <section className="collection-section">
      <div className="collection-inner">
        <div className="collection-visual">
          <div className="collection-visual-image" />
          <div className="collection-visual-overlay" />
          <div className="collection-visual-caption">
            <span className="collection-label">Signature Collection</span>
            <h2>로비와 라운지를 위한 대표 컬렉션.</h2>
            <p>
              하나의 작품이 아니라, 공간 전체를 설계합니다.
              <br />
              회화, 조각, 사진을 조합해 귀사만의 전시 동선을 만들어 드립니다.
            </p>
          </div>
        </div>

        <div className="collection-content">
          <p className="collection-kicker">Art & Golf Corporate Program</p>
          <h3 className="collection-title">
            브랜드의 톤앤매너에 맞춘
            <br />
            맞춤형 아트 디렉션.
          </h3>
          <p className="collection-text">
            단순히 작품을 대여하는 것이 아니라, 공간의 목적과 방문객의
            동선을 함께 고민합니다. 로비, 회의실, VIP 라운지, 클럽하우스 등
            각 공간에서 어떤 감정을 남기고 싶은지부터 대화를 시작합니다.
          </p>
          <ul className="collection-bullets">
            <li>공간/브랜드 진단 후 큐레이터 상담</li>
            <li>회화 · 조각 · 사진 등 매체 믹스 제안</li>
            <li>설치, 조명, 교체 주기까지 포함한 연 단위 플랜</li>
          </ul>

          <div className="collection-artworks-header">
            <span>이 컬렉션에 포함될 수 있는 작품 예시</span>
          </div>
          <div className="artwork-grid">
            {PRODUCT_ARTWORKS.map((art) => (
              <ArtworkCard key={art.id} art={art} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * 컬렉션 2: Sculpture (조각 중심)
 */
const SculptureCollectionSection: React.FC = () => {
  return (
    <section className="collection-section">
      <div className="collection-inner">
        {/* 이번엔 텍스트 먼저, 이미지 나중에 배치해서 리듬감 주기 */}
        <div className="collection-content">
          <p className="collection-kicker">Sculpture Program</p>
          <h3 className="collection-title">
            공간의 중심을 만드는
            <br />
            조각 작품 컬렉션.
          </h3>
          <p className="collection-text">
            로비 중앙, 입구, 계단 홀처럼 시선이 모이는 지점에는 조각 작품이
            가장 강력한 존재감을 가집니다. 동선과 조도를 고려해 안전하면서도
            인상 깊은 조형물을 제안합니다.
          </p>
          <ul className="collection-bullets">
            <li>돌, 금속, 레진 등 재료별 포트폴리오 제안</li>
            <li>기성 작품 렌탈과 작가 커미션 작업 모두 지원</li>
            <li>야외 설치 및 야간 조명 연출까지 포함 가능</li>
          </ul>

          <div className="collection-artworks-header">
            <span>조각 컬렉션 구성 예시</span>
          </div>
          <div className="artwork-grid">
            {SCULPTURE_ARTWORKS.map((art) => (
              <ArtworkCard key={art.id} art={art} />
            ))}
          </div>
        </div>

        <div className="collection-visual">
          <div className="collection-visual-image collection-visual-image-sculpture" />
          <div className="collection-visual-overlay" />
          <div className="collection-visual-caption">
            <span className="collection-label">Sculpture Collection</span>
            <h2>조형물이 만드는 공간의 중심축.</h2>
            <p>
              단 한 점의 조각만으로도 공간의 무게 중심이 바뀝니다.
              <br />
              발걸음을 멈추게 만드는 조형물로, 공간의 이야기를 시작하세요.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ArtworkCard: React.FC<{ art: ProductArtwork }> = ({ art }) => (
  <article className="artwork-card">
    <div
      className="artwork-thumb"
      style={{ backgroundImage: `url(${art.thumbUrl})` }}
    />
    <div className="artwork-body">
      <div className="artwork-meta-top">
        <span className="artwork-category">{art.category}</span>
        <span className="artwork-size">{art.size}</span>
      </div>
      <h4 className="artwork-title">{art.title}</h4>
      <p className="artwork-artist">{art.artist}</p>
    </div>
  </article>
);

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-text">
          Art & Golf · Corporate Art Rental & Exhibition Direction (Sample UI)
        </p>
        <div className="footer-links">
          <button>이용약관</button>
          <button>개인정보처리방침</button>
        </div>
      </div>
    </footer>
  );
};

export default App;