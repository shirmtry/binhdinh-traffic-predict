'use client';

// Biểu đồ SVG hand-rolled: 2 series (dự báo vs thực tế), 24 giờ
const W = 720;
const H = 300;
const PAD = { top: 20, right: 16, bottom: 34, left: 42 };

export default function ForecastChart({ forecast }) {
  const iw = W - PAD.left - PAD.right;
  const ih = H - PAD.top - PAD.bottom;
  const x = (h) => PAD.left + (h / 23) * iw;
  const y = (v) => PAD.top + ih - (v / 100) * ih;

  const line = (key) => forecast.map((f, i) => `${i === 0 ? 'M' : 'L'} ${x(f.hour)} ${y(f[key])}`).join(' ');
  const area = `${line('predicted')} L ${x(23)} ${y(0)} L ${x(0)} ${y(0)} Z`;

  return (
    <div>
      <svg
        className="chart-svg"
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label="Biểu đồ dự báo 24 giờ: mật độ dự báo và thực tế"
      >
        {/* Lưới ngang + nhãn trục Y */}
        {[0, 25, 50, 75, 100].map((v) => (
          <g key={v}>
            <line x1={PAD.left} y1={y(v)} x2={W - PAD.right} y2={y(v)} stroke="#243352" strokeWidth="1" />
            <text x={PAD.left - 8} y={y(v) + 4} fill="#9fb0d0" fontSize="11" textAnchor="end">
              {v}%
            </text>
          </g>
        ))}
        {/* Nhãn trục X mỗi 3 giờ */}
        {forecast
          .filter((f) => f.hour % 3 === 0)
          .map((f) => (
            <text key={f.hour} x={x(f.hour)} y={H - 12} fill="#9fb0d0" fontSize="11" textAnchor="middle">
              {f.hour}h
            </text>
          ))}

        <path d={area} fill="#38bdf8" opacity="0.12" />
        <path d={line('predicted')} fill="none" stroke="#38bdf8" strokeWidth="2.5" />
        <path d={line('actual')} fill="none" stroke="#f97316" strokeWidth="2.5" strokeDasharray="6 4" />

        {forecast.map((f) => (
          <g key={f.hour}>
            <circle cx={x(f.hour)} cy={y(f.predicted)} r="3" fill="#38bdf8">
              <title>{`${f.hour}h — Dự báo: ${f.predicted}%`}</title>
            </circle>
            <circle cx={x(f.hour)} cy={y(f.actual)} r="3" fill="#f97316">
              <title>{`${f.hour}h — Thực tế: ${f.actual}%`}</title>
            </circle>
          </g>
        ))}
      </svg>
      <div className="legend">
        <span className="legend-item">
          <span className="legend-swatch" style={{ background: '#38bdf8' }} /> Dự báo
        </span>
        <span className="legend-item">
          <span className="legend-swatch" style={{ background: '#f97316' }} /> Thực tế (đo đếm mô phỏng)
        </span>
        <span className="legend-item">Cao điểm: 7–8h &amp; 17–18h</span>
      </div>
    </div>
  );
}