import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-copy">
          <p className="footer-title">
            ART N GOLF
            The Nexus of Art, Golf, and Now.
          </p>
          <p className="footer-description">
            artngolf는 미술과 골프를 연결하고, 사람과 사람을 연결하며, 지금의
            기준으로 품격을 정의합니다.
          </p>
          <p className="footer-address">
            서울특별시 종로구 삼청로16 Artz Museum 2층
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
