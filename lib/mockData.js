// Dữ liệu mô phỏng – cập nhật 09/11/2026
// Tác giả: HTK – Hotline/Zalo: 0396241674 – Email: htk.contact@gmail.com
// Bối cảnh: mùa mưa lũ 2026, bão số 9–10/2026, ngập úng đô thị Quy Nhơn.

export const DATA_LABEL = 'Dữ liệu mô phỏng – cập nhật 09/11/2026';

export const SCENARIOS = {
  weekday: { id: 'weekday', label: 'Ngày thường', multiplier: 1.0 },
  weekend: { id: 'weekend', label: 'Cuối tuần', multiplier: 0.85 },
  holiday: { id: 'holiday', label: 'Ngày lễ', multiplier: 1.15 },
  storm: { id: 'storm', label: 'Mưa bão (+30%)', multiplier: 1.3 },
};

// 10 tuyến đường thực tế tại Quy Nhơn
// base: mật độ cơ sở giờ cao điểm (0–100), coords: vị trí sơ đồ SVG (viewBox 0 0 400 300)
export const ROUTES = [
  { id: 'nguyen-tat-thanh', name: 'Nguyễn Tất Thành', base: 82, note: 'Trục ven biển phía Nam, xe du lịch nhiều', coords: [[40, 260], [140, 250], [240, 255], [340, 270]], alternatives: ['tran-phu', 'le-hong-phong'] },
  { id: 'xuan-dieu', name: 'Xuân Diệu', base: 78, note: 'Phố ẩm thực – khách sạn, tắc buổi tối', coords: [[340, 270], [355, 200], [350, 130]], alternatives: ['ngo-may', 'tran-hung-dao'] },
  { id: 'tran-hung-dao', name: 'Trần Hưng Đạo', base: 88, note: 'Trục chính trung tâm, dễ ngập khi mưa lớn', coords: [[60, 60], [120, 120], [200, 180], [300, 220]], alternatives: ['le-duan', 'nguyen-thai-hoc'] },
  { id: 'le-hong-phong', name: 'Lê Hồng Phong', base: 85, note: 'Ngập úng nặng sau mưa 2h (2026)', coords: [[120, 40], [150, 120], [180, 210], [200, 280]], alternatives: ['tay-son', 'hung-vuong'] },
  { id: 'nguyen-thai-hoc', name: 'Nguyễn Thái Học', base: 90, note: 'Chợ lớn, điểm ngập nội đô thường trực', coords: [[80, 100], [160, 140], [260, 170], [330, 190]], alternatives: ['tran-hung-dao', 'le-duan'] },
  { id: 'tay-son', name: 'Tây Sơn', base: 72, note: 'Hướng đi An Nhơn, xe tải nhiều', coords: [[30, 140], [100, 160], [170, 185]], alternatives: ['hung-vuong', 'le-hong-phong'] },
  { id: 'hung-vuong', name: 'Hùng Vương', base: 65, note: 'Vành đai phía Tây, thoáng hơn', coords: [[40, 40], [60, 120], [70, 210], [90, 280]], alternatives: ['tay-son', 'le-duan'] },
  { id: 'le-duan', name: 'Lê Duẩn', base: 75, note: 'Kết nối ga Diêu Trì – trung tâm', coords: [[160, 30], [220, 100], [280, 160]], alternatives: ['tran-hung-dao', 'nguyen-thai-hoc'] },
  { id: 'tran-phu', name: 'Trần Phú', base: 60, note: 'Ven biển phía Bắc, ít tắc', coords: [[350, 130], [330, 80], [290, 40]], alternatives: ['xuan-dieu', 'ngo-may'] },
  { id: 'ngo-may', name: 'Ngô Mây', base: 68, note: 'Khu dân cư – trường học, tắc giờ tan tầm', coords: [[200, 60], [250, 110], [310, 150]], alternatives: ['tran-phu', 'le-duan'] },
];

// Đường cong mật độ theo giờ trong ngày (0–23), cao điểm 7–8h và 17–18h
const HOUR_PROFILE = [
  0.12, 0.08, 0.06, 0.06, 0.1, 0.25, 0.55, 0.92, 0.95, 0.7, 0.6, 0.62,
  0.68, 0.6, 0.58, 0.62, 0.78, 0.98, 1.0, 0.8, 0.62, 0.5, 0.35, 0.2,
];

// Nhiễu tất định (không dùng Math.random để dữ liệu ổn định giữa các lần gọi)
function jitter(seed) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x); // 0..1
}

function clamp(v, min, max) {
  return Math.min(max, Math.max(min, v));
}

export function getTrafficData(scenarioId = 'weekday') {
  const scenario = SCENARIOS[scenarioId] || SCENARIOS.weekday;
  const mult = scenario.multiplier;
  const scenarioSeed = { weekday: 1, weekend: 2, holiday: 3, storm: 4 }[scenario.id] || 1;

  const routes = ROUTES.map((r, i) => {
    const density = clamp(Math.round(r.base * mult * (0.9 + jitter(i + scenarioSeed * 17) * 0.2)), 5, 100);
    return {
      id: r.id,
      name: r.name,
      note: r.note,
      density,
      status: density >= 85 ? 'Ùn tắc nghiêm trọng' : density >= 70 ? 'Ùn tắc' : density >= 45 ? 'Đông xe' : 'Thông thoáng',
      coords: r.coords,
      alternatives: r.alternatives,
    };
  });

  // Biểu đồ 24h: dự báo vs thực tế (trung bình toàn mạng lưới)
  const avgBase = routes.reduce((s, r) => s + r.density, 0) / routes.length;
  const forecast = HOUR_PROFILE.map((p, h) => {
    const predicted = clamp(Math.round(avgBase * p * 10) / 10, 0, 100);
    const actual = clamp(Math.round((predicted * (0.85 + jitter(h * 7 + scenarioSeed * 31) * 0.35)) * 10) / 10, 0, 100);
    return { hour: h, predicted, actual };
  });

  // Gợi ý tuyến thay thế cho các tuyến ùn tắc (density >= 70)
  const byId = Object.fromEntries(routes.map((r) => [r.id, r]));
  const suggestions = routes
    .filter((r) => r.density >= 70)
    .map((r) => {
      const alts = r.alternatives
        .map((id) => byId[id])
        .filter(Boolean)
        .sort((a, b) => a.density - b.density)
        .slice(0, 2)
        .map((a) => ({ id: a.id, name: a.name, density: a.density, status: a.status }));
      return { route: { id: r.id, name: r.name, density: r.density, status: r.status }, alternatives: alts };
    });

  return {
    label: DATA_LABEL,
    updatedAt: '2026-11-09',
    author: 'HTK',
    hotline: '0396241674',
    scenario: { id: scenario.id, label: scenario.label, multiplier: mult },
    stormWarning:
      scenario.id === 'storm'
        ? 'Mưa bão + ngập úng Quy Nhơn (bão số 9–10/2026): mật độ dự báo tăng +30%, tốc độ di chuyển giảm mạnh.'
        : null,
    routes,
    forecast,
    suggestions,
  };
}