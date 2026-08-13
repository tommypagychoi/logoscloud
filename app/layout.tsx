import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.logoscloud.com"),
  title: "Logos Cloud | 기업 로고 디자인 스튜디오",
  description: "기업 로고, 브랜드 시스템, 명함과 SNS 적용 이미지까지 제작하는 Logos Cloud 공식 홈페이지",
  openGraph: {
    title: "Logos Cloud",
    description: "기업의 첫인상을 설계하는 로고 디자인 파트너",
    url: "https://www.logoscloud.com",
    siteName: "Logos Cloud",
    images: [
      {
        url: "/logoscloud-brand-studio.jpg",
        width: 640,
        height: 427,
        alt: "Logos Cloud 브랜드 디자인 스튜디오"
      }
    ],
    locale: "ko_KR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Logos Cloud",
    description: "기업의 첫인상을 설계하는 로고 디자인 파트너",
    images: ["/logoscloud-brand-studio.jpg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
