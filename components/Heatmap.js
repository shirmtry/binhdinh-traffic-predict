'use client';

// Thang màu heatmap: xanh → vàng → cam → đỏ
export function densityColor(d) {
  if (d < 45) return '#22c55e';
  if (d < 70) return '#eab308';
  if (d < 85) return '#f97316';
  return '#ef4444';
}

const LEGEND = [
  { color: '#22c55e', label: '<45% Thông thoáng' },
  { color: '#eab308', label: '45–69% Đông xe' },
  { color: '#f97316', label: '70–84% Ùn tắc' },
  { color: '#ef4444', label: '≥85% Nghiêm trọng' },
];

export default function Heatmap({ routes }) {
  return (
    <div>
      <svg
        className="heatmap-svg"
        viewBox="0 0 400 300"
        role="img"
        aria-label="Bản đồ nhiệt mật độ xe 10 tuyến đường Quy Nhơn"
      >
        {/* Nền biển gợi ý phía Đông */}
        <rect x="0" y="0" width="400" height="300" fill="#0e1626" />
        <path d="M 370 0 Q 385 150 365 300 L 400 300 L 400 0 Z" fill="#123047" opacity="0.7" />
        <text x="378" y="150" fill="#3b6d8f" fontSize="9" transform="rotate(90 378 150)">
          Biển Quy Nhơn
        </text>
        {routes.map((r) => {
          const pts = r.coords.map((c) => c.join(',')).join(' ');
          const mid = r.coords[Math.floor(r.coords.length / 2)];
          const color = densityColor(r.density);
          return (
            <g key={r.id}>
              <polyline
                points={pts}
                fill="none"
                stroke={color}
                strokeWidth={4 + (r.density / 100) * 7}
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.9"
              />
              <text
                x={mid[0]}
                y={mid[1] - 8}
                fill="#e8eefc"
                fontSize="8.5"
                textAnchor="middle"
                stroke="#0b1220"
                strokeWidth="2.5"
                paintOrder="stroke"
              >
                {r.name} · {r.density}%
              </text>
            </g>
          );
        })}
      </svg>

      <div className="legend">
        {LEGEND.map((l) => (
          <span key={l.label} className="legend-item">
            <span className="legend-swatch" style={{ background: l.color }} />
            {l.label}
          </span>
        ))}
      </div>

      {/* Lưới heatmap dạng ô màu bổ trợ cho bản đồ SVG */}
      <div className="route-list">
        {routes.map((r) => (
          <div key={r.id} className="route-cell" style={{ background: densityColor(r.density) }}>
            <div className="rname">{r.name}</div>
            <div className="rmeta">
              {r.density}% · {r.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}