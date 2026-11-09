import Dashboard from '../../components/Dashboard';

export const metadata = {
  title: 'Dashboard dự báo mật độ xe | Quy Nhơn Traffic – HTK 0396241674',
};

export default function DuBaoPage() {
  return (
    <>
      <span className="badge">Dữ liệu mô phỏng – cập nhật 09/11/2026</span>
      <h1>📊 Dashboard dự báo mật độ xe Quy Nhơn</h1>
      <p className="muted" style={{ marginBottom: 16 }}>
        Heatmap 10 tuyến đường · Biểu đồ 24h dự báo vs thực tế · Bộ lọc kịch bản · Gợi ý tuyến thay
        thế. Cập nhật: 09/11/2026.
      </p>
      <Dashboard />
    </>
  );
}