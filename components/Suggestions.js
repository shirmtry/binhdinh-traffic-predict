'use client';

export default function Suggestions({ suggestions }) {
  if (!suggestions || suggestions.length === 0) {
    return (
      <p className="muted">
        ✅ Không có tuyến nào ùn tắc nghiêm trọng ở kịch bản này — các tuyến đều dưới ngưỡng 70%.
      </p>
    );
  }
  return (
    <div>
      {suggestions.map((s) => (
        <div key={s.route.id} className="suggestion">
          <p>
            🚧 <strong>{s.route.name}</strong> đang {s.route.status.toLowerCase()} ({s.route.density}
            %) → nên chuyển sang:{' '}
            {s.alternatives.map((a, i) => (
              <span key={a.id}>
                {i > 0 && ' hoặc '}
                <span className="alt">
                  {a.name} ({a.density}% – {a.status.toLowerCase()})
                </span>
              </span>
            ))}
          </p>
        </div>
      ))}
      <p className="muted">
        Gợi ý dựa trên mật độ mô phỏng thời điểm 09/11/2026. Khi mưa bão, ưu tiên tuyến cao ráo, tránh
        điểm ngập Nguyễn Thái Học – Lê Hồng Phong – Tây Sơn.
      </p>
    </div>
  );
}