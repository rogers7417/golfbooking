import React, { useEffect } from "react";
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
}

const ExhibitionPage: React.FC = () => {
  const artworks = artworksData as Artwork[];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  console.log("ExhibitionPage rendered", artworks.length, "artworks");

  return (
    <div className="exhibition-page">
      <div className="exhibition-header">
        <h1 className="exhibition-page-title">미술 작품 전시 공간</h1>
        <p className="exhibition-page-subtitle">Art N Golf Collection</p>
      </div>

      <div className="exhibition-grid">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="exhibition-card">
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
    </div>
  );
};

export default ExhibitionPage;
