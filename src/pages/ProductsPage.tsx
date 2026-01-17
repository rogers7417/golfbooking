import React from "react";
import { Link } from "react-router-dom";
import productHero from "../assets/products/unnamed-removebg-preview.png";

const ProductsPage: React.FC = () => {
  const categories = [
    {
      title: "MASTERWORKS",
      label: "Signature",
      description: "작가성과 이력이 확실한 대표작 중심의 컬렉션.",
      meta: "회화 · 설치 · 스튜디오 프리미엄",
      count: "12 Works",
    },
    {
      title: "CONTEMPORARY",
      label: "Now",
      description: "지금의 감각과 공간 경험을 반영하는 최신 작품.",
      meta: "미디어 · 믹스드 · 글로벌 신진",
      count: "18 Works",
    },
    {
      title: "PHOTOGRAPHY",
      label: "Lens",
      description: "공간을 세련되게 정리하는 사진 기반 에디션.",
      meta: "아날로그 · 디지털 · 리미티드 프린트",
      count: "9 Works",
    },
    {
      title: "SCULPTURE",
      label: "Form",
      description: "호텔 라운지처럼 존재감을 만드는 오브제.",
      meta: "브론즈 · 레진 · 오프화이트톤",
      count: "7 Works",
    },
    {
      title: "GOLF & ART",
      label: "Benefit",
      description: "골프 멤버십을 위한 테마 전시 라인업.",
      meta: "클럽하우스 · 라운지 · 프라이빗룸",
      count: "10 Works",
    },
    {
      title: "LIMITED EDITION",
      label: "Rare",
      description: "프로그램별 1회 한정으로 구성되는 큐레이션.",
      meta: "구독 전용 · 시즌별 교체 · 소량 수급",
      count: "5 Sets",
    },
  ];

  return (
    <>
      <section className="block products-hero">
        <div className="container">
          <div className="products-hero__grid">
            <div className="products-hero__copy">
              <p className="k reveal" data-delay="0">
                Curated Exhibitions
              </p>
              <h2 className="reveal" data-delay="1">
                전시 기준이 있는
                <br />
                아트 컬렉션 공간.
              </h2>
              <p className="reveal" data-delay="2">
                {`공간의 무드와 목적에 맞춰 전시 카테고리를 구성합니다.
작품은 구매·렌탈·구독에 맞춰 큐레이션됩니다.`}
              </p>
              <div className="section-actions reveal" data-delay="3">
                <Link className="btn primary" to="/#contact">
                  큐레이션 문의하기
                </Link>
              </div>
            </div>

            <div className="products-hero__art reveal" data-delay="2">
              <div className="products-hero__glow" />
              <img
                className="products-hero__image"
                src={productHero}
                alt="Curated artwork preview"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="block products-categories">
        <div className="container">
          <div className="blockhead">
            <h2 className="reveal" data-delay="0">
              Exhibition Categories
            </h2>
            <p className="subnote reveal" data-delay="1">
              Curation Index
            </p>
          </div>

          <div className="category-intro">
            <p className="k reveal" data-delay="1">
              Category Overview
            </p>
            <h3 className="reveal" data-delay="2">
              전시 기준을 카테고리로 정리합니다.
            </h3>
            <p className="reveal" data-delay="3">
              {`공간의 분위기, 예산, 프로그램 목적에 맞춰 큐레이터가 카테고리를 구성합니다.
각 카테고리는 구매·렌탈·구독으로 연결되는 추천 리스트를 포함합니다.`}
            </p>
          </div>

          <div className="category-grid">
            {categories.map((category, index) => (
              <article
                key={category.title}
                className="category-card reveal"
                data-delay={String(index % 5)}
              >
                <div className="category-head">
                  <span className="category-tag">{category.label}</span>
                  <span className="category-count">{category.count}</span>
                </div>
                <h4 className="category-title">{category.title}</h4>
                <p className="category-desc">{category.description}</p>
                <p className="category-meta">{category.meta}</p>
              </article>
            ))}
          </div>

          <div className="section-actions reveal" data-delay="4">
            <Link className="btn primary" to="/#contact">
              큐레이션 문의하기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
