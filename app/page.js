import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <span className="badge">Dữ liệu mô phỏng – cập nhật 09/11/2026</span>
      <h1>🚦 Dự báo mật độ xe Quy Nhơn – Bình Định 2026</h1>
      <div className="card">
        <h2>Vấn đề giao thông Quy Nhơn 2026</h2>
        <p>
          Quy Nhơn đang đối mặt với ùn tắc nghiêm trọng vào giờ cao điểm 7–8h và 17–18h trên các trục
          chính như Trần Hưng Đạo, Nguyễn Thái Học, Lê Hồng Phong. Mùa du lịch 2026 bùng nổ kéo lượng
          xe khách, taxi đổ về phố ven biển Xuân Diệu – Nguyễn Tất Thành tăng đột biến. Đặc biệt, mùa
          mưa lũ 2026 với bão số 9–10 đổ bộ gây ngập úng nội đô, khiến mật độ và thời gian di chuyển
          tăng thêm khoảng +30%. Người dân và du khách cần một công cụ dự báo để chọn tuyến đường
          thông thoáng, tránh điểm ngập và giờ cao điểm. Cập nhật: 09/11/2026.
        </p>
        <Link href="/du-bao" className="btn-primary">
          Xem dashboard dự báo →
        </Link>
      </div>

      <div className="grid-2">
        <div className="card">
          <h3>🗺️ Heatmap 10 tuyến đường</h3>
          <p className="muted">
            Bản đồ nhiệt mật độ xe 10 tuyến: Nguyễn Tất Thành, Xuân Diệu, Trần Hưng Đạo, Lê Hồng
            Phong, Nguyễn Thái Học, Tây Sơn, Hùng Vương, Lê Duẩn, Trần Phú, Ngô Mây — thang màu từ
            xanh (thông thoáng) đến đỏ đậm (ùn tắc nghiêm trọng).
          </p>
        </div>
        <div className="card">
          <h3>📈 Biểu đồ dự báo 24h</h3>
          <p className="muted">
            So sánh 2 chuỗi dữ liệu: mật độ dự báo và thực tế đo đếm (mô phỏng) theo từng giờ trong
            ngày, giúp nhận diện hai đỉnh cao điểm sáng – chiều.
          </p>
        </div>
        <div className="card">
          <h3>🌧️ Bộ lọc kịch bản</h3>
          <p className="muted">
            Ngày thường / Cuối tuần / Ngày lễ / Mưa bão — riêng kịch bản mưa bão mô phỏng ngập úng đô
            thị Quy Nhơn 2026 làm mật độ tăng +30%.
          </p>
        </div>
        <div className="card">
          <h3>🔀 Gợi ý tuyến thay thế</h3>
          <p className="muted">
            Khi một tuyến ùn tắc, hệ thống tự động đề xuất 1–2 tuyến thay thế có mật độ thấp hơn, kèm
            mức độ thông thoáng để bạn quyết định nhanh.
          </p>
        </div>
      </div>

      <div className="card">
        <h3>⚙️ Công nghệ fullstack</h3>
        <p className="muted">
          Next.js App Router (React) — API route handlers tại <code>/api/traffic</code> trả JSON mock
          data, frontend fetch theo bộ lọc. Liên hệ HTK:{' '}
          <a href="tel:0396241674">0396241674</a> ·{' '}
          <a href="mailto:htk.contact@gmail.com">htk.contact@gmail.com</a>
        </p>
      </div>
    </>
  );
}