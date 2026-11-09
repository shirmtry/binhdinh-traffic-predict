export default function AboutPage() {
  return (
    <>
      <span className="badge">Cập nhật: 09/11/2026</span>
      <h1>ℹ️ Giới thiệu dự án</h1>
      <div className="card">
        <h2>Bối cảnh mùa mưa lũ 2026 tại Bình Định</h2>
        <p>
          Tháng 11/2026, Bình Định chịu lũ sông Kôn dâng cao (Tuy Phước, An Nhơn), bão số 9–10/2026 đổ
          bộ Quy Nhơn – Phù Cát – Hoài Nhơn, sạt lở An Lão – Vĩnh Thạnh – Tây Sơn và ngập úng đô thị
          Quy Nhơn. Mưa lớn 2 giờ đã đủ gây ngập các trục Nguyễn Thái Học, Tây Sơn, Lê Hồng Phong,
          làm giao thông tê liệt cục bộ. Dự án này mô phỏng dự báo mật độ xe trên 10 tuyến đường Quy
          Nhơn để người dân chủ động chọn lộ trình trong mùa mưa lũ 2026.
        </p>
      </div>
      <div className="card">
        <h2>📞 Liên hệ HTK – 0396241674</h2>
        <p>
          <strong>Tác giả:</strong>{' '}
          <a href="https://zalo.me/0396241674" target="_blank" rel="noopener noreferrer">
            HTK
          </a>
        </p>
        <p>
          <strong>Hotline:</strong> <a href="tel:0396241674">0396241674</a>
        </p>
        <p>
          <strong>Zalo:</strong>{' '}
          <a href="https://zalo.me/0396241674" target="_blank" rel="noopener noreferrer">
            https://zalo.me/0396241674
          </a>
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:htk.contact@gmail.com">htk.contact@gmail.com</a>
        </p>
        <p className="muted">Cập nhật: 09/11/2026</p>
      </div>
      <div className="card">
        <h2>Lưu ý dữ liệu</h2>
        <p className="muted">
          Toàn bộ số liệu là Dữ liệu mô phỏng – cập nhật 09/11/2026, phục vụ mục đích minh họa và
          nghiên cứu, không thay thế thông tin chính thức từ cơ quan chức năng.
        </p>
      </div>
    </>
  );
}