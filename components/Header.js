import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="brand">
          <span className="brand-icon">🚦</span>
          <span>
            Quy Nhơn Traffic
            <small>Dự báo mật độ xe · Bình Định 2026</small>
          </span>
        </Link>
        <nav className="nav">
          <Link href="/">Trang chủ</Link>
          <Link href="/du-bao">Dự báo</Link>
          <Link href="/about">Giới thiệu</Link>
          <a className="btn-contact" href="tel:0396241674">
            📞 Liên hệ HTK
          </a>
        </nav>
      </div>
    </header>
  );
}