import "./globals.css";
import { siteConfig } from "../lib/siteConfig";

export const metadata = {
  title: siteConfig.brandName,
  description: siteConfig.brandSub,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <header style={{ borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: 980, margin: "0 auto", padding: 20 }}>
            <strong>{siteConfig.brandName}</strong>
            <div style={{ fontSize: 13, color: "#64748b", marginTop: 4 }}>
              {siteConfig.brandSub}
            </div>
          </div>
        </header>

        <main style={{ maxWidth: 980, margin: "0 auto", padding: 20 }}>
          {children}
        </main>

        <footer style={{ borderTop: "1px solid #e5e7eb", marginTop: 40 }}>
          <div style={{ maxWidth: 980, margin: "0 auto", padding: 20, fontSize: 12, color: "#64748b" }}>
            운영시간: {siteConfig.businessHours}
            <br />
            {siteConfig.notice}
          </div>
        </footer>
      </body>
    </html>
  );
}
