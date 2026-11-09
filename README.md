# 🚦 binhdinh-traffic-predict — Dự báo mật độ xe Quy Nhơn ⭐

Dự án flagship HTK: dashboard dự báo mật độ xe 10 tuyến đường Quy Nhơn, xây dựng bằng **Next.js App Router (React) fullstack**. Cập nhật: 09/11/2026.

## Vấn đề (Bình Định 2026)

Quy Nhơn ùn tắc nghiêm trọng giờ cao điểm 7–8h và 17–18h trên các trục Trần Hưng Đạo, Nguyễn Thái Học, Lê Hồng Phong. Mùa du lịch 2026 làm lượng xe đổ về ven biển Xuân Diệu – Nguyễn Tất Thành tăng đột biến. Trong **mùa mưa lũ 2026** (bão số 9–10/2026, ngập úng đô thị Quy Nhơn), mật độ và thời gian di chuyển tăng thêm **+30%**. Công cụ này giúp người dân và du khách chọn tuyến thông thoáng, tránh điểm ngập.

## Tính năng

- 🗺️ **Heatmap 10 tuyến đường** Quy Nhơn (SVG map + lưới ô màu, thang màu xanh → đỏ): Nguyễn Tất Thành, Xuân Diệu, Trần Hưng Đạo, Lê Hồng Phong, Nguyễn Thái Học, Tây Sơn, Hùng Vương, Lê Duẩn, Trần Phú, Ngô Mây.
- 📈 **Biểu đồ dự báo 24h**: 2 series dự báo vs thực tế (SVG hand-rolled).
- 🌧️ **Bộ lọc kịch bản**: ngày thường / cuối tuần / lễ / mưa bão — mưa bão tăng mật độ +30%.
- 🔀 **Gợi ý tuyến thay thế** khi tuyến ùn tắc (≥70%).
- ⚙️ **Fullstack**: API route handler `GET /api/traffic?scenario=...` trả JSON, frontend fetch theo bộ lọc.
- 📱 Responsive 375px – 1440px, UI tiếng Việt.

**Dữ liệu mô phỏng – cập nhật 09/11/2026** — không thay thế thông tin chính thức.

## Công nghệ

- Next.js ^15 (App Router) + React 19, JavaScript
- API: `app/api/traffic/route.js` (Route Handler, JSON)
- Mock data tất định: `lib/mockData.js`
- Deploy: Vercel (native Next.js)

## Cách chạy

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build production (đã PASS)
npm run start   # chạy bản build
```

## Trang

- `/` — Trang chủ: vấn đề Bình Định 2026
- `/du-bao` — Dashboard chính (heatmap, chart, filters, gợi ý)
- `/about` — Bối cảnh mùa mưa lũ 2026 + liên hệ HTK
- `/api/traffic?scenario=weekday|weekend|holiday|storm` — API JSON
- 404 tùy chỉnh có hotline HTK

## 🔗 Deploy

- Vercel: https://binhdinh-traffic-predict.vercel.app
- GitHub: https://github.com/shirmtry/binhdinh-traffic-predict

## 📞 Liên hệ HTK – 0396241674 – 09/11/2026

- **Tác giả:** HTK
- **Hotline / Zalo:** [0396241674](tel:0396241674) · https://zalo.me/0396241674
- **Email:** htk.contact@gmail.com
- © 2026 HTK · Mùa mưa lũ Bình Định 2026 · Cập nhật: 09/11/2026