'use client';

import { useEffect, useState } from 'react';
import Heatmap from './Heatmap';
import ForecastChart from './ForecastChart';
import Suggestions from './Suggestions';

const FILTERS = [
  { id: 'weekday', label: 'Ngày thường' },
  { id: 'weekend', label: 'Cuối tuần' },
  { id: 'holiday', label: 'Ngày lễ' },
  { id: 'storm', label: '🌧️ Mưa bão (+30%)' },
];

export default function Dashboard() {
  const [scenario, setScenario] = useState('weekday');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetch(`/api/traffic?scenario=${scenario}`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((d) => {
        if (!cancelled) {
          setData(d);
          setLoading(false);
        }
      })
      .catch((e) => {
        if (!cancelled) {
          setError(e.message);
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [scenario]);

  const congested = data ? data.routes.filter((r) => r.density >= 70).length : 0;
  const avg = data ? Math.round(data.routes.reduce((s, r) => s + r.density, 0) / data.routes.length) : 0;
  const peak = data ? Math.max(...data.forecast.map((f) => f.predicted)) : 0;
  const worst = data ? [...data.routes].sort((a, b) => b.density - a.density)[0] : null;

  return (
    <div>
      <div className="filters" role="group" aria-label="Bộ lọc kịch bản">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            className={`filter-btn${scenario === f.id ? ' active' : ''}`}
            onClick={() => setScenario(f.id)}
            aria-pressed={scenario === f.id}
          >
            {f.label}
          </button>
        ))}
      </div>

      {error && <div className="alert">Lỗi tải dữ liệu: {error}. Vui lòng thử lại.</div>}
      {loading && <p className="muted">Đang tải dữ liệu dự báo...</p>}

      {data && !loading && (
        <>
          {data.stormWarning && <div className="alert">⚠️ {data.stormWarning}</div>}

          <div className="stats">
            <div className="stat">
              <div className="val">{data.routes.length}</div>
              <div className="lbl">Tuyến theo dõi</div>
            </div>
            <div className="stat">
              <div className="val">{avg}%</div>
              <div className="lbl">Mật độ trung bình</div>
            </div>
            <div className="stat">
              <div className="val">{congested}</div>
              <div className="lbl">Tuyến ùn tắc (≥70%)</div>
            </div>
            <div className="stat">
              <div className="val">{peak}%</div>
              <div className="lbl">Đỉnh dự báo 24h</div>
            </div>
          </div>

          <div className="card">
            <h2>🗺️ Heatmap mật độ 10 tuyến đường – {data.scenario.label}</h2>
            <Heatmap routes={data.routes} />
            {worst && (
              <p className="muted" style={{ marginTop: 10 }}>
                Tuyến nóng nhất: <strong style={{ color: '#f87171' }}>{worst.name}</strong> —{' '}
                {worst.density}% ({worst.status}). {worst.note}.
              </p>
            )}
          </div>

          <div className="card">
            <h2>📈 Biểu đồ dự báo 24h: Dự báo vs Thực tế</h2>
            <ForecastChart forecast={data.forecast} />
          </div>

          <div className="card">
            <h2>🔀 Gợi ý tuyến thay thế</h2>
            <Suggestions suggestions={data.suggestions} />
          </div>

          <p className="muted">
            {data.label} · Kịch bản: {data.scenario.label} · Nguồn API: <code>/api/traffic</code> ·
            Hỗ trợ: <a href="tel:0396241674">HTK 0396241674</a>
          </p>
        </>
      )}
    </div>
  );
}