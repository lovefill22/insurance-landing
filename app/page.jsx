import { siteConfig } from "../lib/siteConfig";

export default function HomePage() {
  return (
    <>
      <h1>{siteConfig.brandName}</h1>
      <p style={{ color: "#64748b" }}>{siteConfig.brandSub}</p>

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
