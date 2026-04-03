import React from "react";

interface InquiryModalProps {
  onClose: () => void;
  signupStatus: "idle" | "success";
  onSubmit: () => void;
}

const InquiryModal: React.FC<InquiryModalProps> = ({
  onClose,
  signupStatus,
  onSubmit,
}) => {
  return (
    <div className="modal-backdrop" role="presentation">
      <div className="modal" role="dialog" aria-modal="true">
        <div className="modal-header">
          <h2>알아보기</h2>
          <button
            className="modal-close"
            type="button"
            aria-label="닫기"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        {signupStatus === "idle" ? (
          <form
            className="modal-body"
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
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
              <button className="btn" type="button" onClick={onClose}>
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
  );
};

export default InquiryModal;
