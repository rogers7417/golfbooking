import React from "react";

interface LegalModalProps {
  onClose: () => void;
}

export const TermsModal: React.FC<LegalModalProps> = ({ onClose }) => {
  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div className="modal modal-legal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>이용약관</h2>
          <button className="modal-close" type="button" aria-label="닫기" onClick={onClose}>×</button>
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
          <button type="button" onClick={onClose}>닫기</button>
        </div>
      </div>
    </div>
  );
};

export const PrivacyModal: React.FC<LegalModalProps> = ({ onClose }) => {
  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div className="modal modal-legal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2><strong>개인정보처리방침</strong></h2>
          <button className="modal-close" type="button" aria-label="닫기" onClick={onClose}>×</button>
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
          <button type="button" onClick={onClose}>닫기</button>
        </div>
      </div>
    </div>
  );
};
