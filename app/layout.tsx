import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.logoscloud.kr"),
  title: "Logos Cloud | 멀티 클라우드 AI 운영 전문 기업",
  description: "멀티 클라우드 운영과 구축, AI 기반 인프라 혁신, Kubernetes 전문 역량을 제공하는 Logos Cloud 공식 홈페이지",
  openGraph: {
    title: "Logos Cloud",
    description: "멀티 클라우드 운영과 구축을 이끄는 AI 선도 그룹",
    url: "https://www.logoscloud.kr",
    siteName: "Logos Cloud",
    images: [
      {
        url: "/logoscloud-cloud-ai-hero.svg",
        width: 1600,
        height: 900,
        alt: "Logos Cloud 멀티 클라우드 AI 운영 센터"
      }
    ],
    locale: "ko_KR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Logos Cloud",
    description: "멀티 클라우드 운영과 구축을 이끄는 AI 선도 그룹",
    images: ["/logoscloud-cloud-ai-hero.svg"]
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
