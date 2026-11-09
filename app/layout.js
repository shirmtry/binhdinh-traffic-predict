import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Dự báo mật độ xe Quy Nhơn – Bình Định 2026 | HTK',
  description:
    'Dự báo mật độ xe 10 tuyến đường Quy Nhơn: heatmap, biểu đồ 24h dự báo vs thực tế, bộ lọc ngày thường/cuối tuần/lễ/mưa bão (+30%), gợi ý tuyến thay thế. Dữ liệu mô phỏng – cập nhật 09/11/2026. HTK – 0396241674.',
  authors: [{ name: 'HTK', url: 'https://zalo.me/0396241674' }],
  other: {
    author: 'HTK',
    'last-updated': '2026-11-09',
    contact: 'Hotline/Zalo: 0396241674 - Email: htk.contact@gmail.com',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}