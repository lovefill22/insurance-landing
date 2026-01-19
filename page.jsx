import { siteConfig } from "../lib/siteConfig";

export default function HomePage() {
  return (
    <>
      <h1>시설 배상책임 보험 상담</h1>
      <p style={{ color: "#64748b" }}>
        요양시설 · 주차장 등 시설 운영자를 위한 맞춤 보험 상담 페이지입니다.
      </p>

      <div style={{ marginTop: 24 }}>
        <a
          href={siteConfig.consultFormUrl}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            padding: "12px 16px",
            background: "#0f172a",
            color: "#fff",
            borderRadius: 8,
            fontWeight: "bold",
          }}
        >
          상담 요청하기
        </a>
      </div>

      <hr style={{ margin: "40px 0" }} />

      <h2>현재 제공 상품</h2>

      <ul>
        <li>요양시설 전문인배상보험</li>
        <li>주차장배상보험</li>
      </ul>
    </>
  );
}
