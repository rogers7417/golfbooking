import React from "react";
import { Link } from "react-router-dom";
import galleryImage from "../assets/images/gallery-16037759.jpg";

const ProductsPage: React.FC = () => {
  return (
    <section className="block">
      <div className="container">
        <div className="blockhead">
          <h2 className="reveal" data-delay="0">
            Product Exhibition
          </h2>
          <p className="subnote reveal" data-delay="1">
            Art Collection
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
              <p className="cap-kicker">EXHIBITION</p>
              <p className="cap-title">멤버 전용 큐레이션 라인업</p>
            </div>
          </div>

          <div className="copy">
            <p className="k reveal" data-delay="1">
              Product Showroom
            </p>
            <h3 className="reveal" data-delay="2">
              작품을 전시처럼 경험하세요.
            </h3>
            <p className="reveal" data-delay="3">
              {`구매·렌탈·구독 상품을 전시 레이아웃으로 큐레이션합니다.
작품 정보, 소재, 이력 등을 한눈에 확인할 수 있습니다.`}
            </p>
            <ul className="bullets reveal" data-delay="4">
              <li>큐레이터 추천 컬렉션</li>
              <li>미디어/작가 정보 제공</li>
              <li>프로그램별 맞춤 제안</li>
            </ul>
            <div className="section-actions reveal" data-delay="4">
              <Link className="btn" to="/#art">
                아트 서비스로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
