import React from "react";

interface LoginModalProps {
  onClose: () => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  loginStatus: "idle" | "success" | "error";
  loginMessage: string;
}

const LoginModal: React.FC<LoginModalProps> = ({
  onClose,
  onSubmit,
  loginStatus,
  loginMessage,
}) => {
  return (
    <div className="modal-backdrop" role="presentation">
      <div className="modal" role="dialog" aria-modal="true">
        <div className="modal-header">
          <h2>로그인</h2>
          <button
            className="modal-close"
            type="button"
            aria-label="닫기"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <form className="modal-body" onSubmit={onSubmit}>
          <label>
            아이디
            <input type="text" name="email" required />
          </label>
          <label>
            비밀번호
            <input type="password" name="password" required />
          </label>
          {loginStatus !== "idle" ? (
            <p className={`modal-message ${loginStatus}`}>
              {loginMessage}
            </p>
          ) : null}
          <div className="modal-actions">
            <button className="btn" type="button" onClick={onClose}>
              취소
            </button>
            <button className="btn primary" type="submit">
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
