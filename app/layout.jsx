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
        ...
      </body>
    </html>
  );
}
