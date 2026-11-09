import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="card" style={{ textAlign: 'center' }}>
      <h1>404 – Không tìm thấy trang</h1>
      <p className="muted">
        Trang bạn tìm không tồn tại. Có thể tuyến đường này... đang ùn tắc 🚧
      </p>
      <p style={{ marginTop: 12 }}>
        Cần hỗ trợ? Gọi hotline HTK: <a href="tel:0396241674">0396241674</a> ·{' '}
        <a href="mailto:htk.contact@gmail.com">htk.contact@gmail.com</a>
      </p>
      <Link href="/" className="btn-primary">
        ← Về trang chủ
      </Link>
    </div>
  );
}