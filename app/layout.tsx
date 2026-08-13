import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.logoscloud.co.kr"),
  title: "Logos Cloud | AI 영상 스토리룸과 멀티 클라우드 운영",
  description: "프롬프트 입력으로 AI 영상 스토리룸을 설계하는 Logos Cloud 공식 홈페이지",
  openGraph: {
    title: "Logos Cloud",
    description: "Codex 계정 기반 프롬프트로 AI 영상 스토리룸 구축을 지원합니다.",
    url: "https://www.logoscloud.co.kr",
    siteName: "Logos Cloud",
    images: [
      {
        url: "/logoscloud-cloud-ai-hero.svg",
        width: 1600,
        height: 900,
        alt: "Logos Cloud AI 영상 스토리룸과 멀티 클라우드 운영 화면"
      }
    ],
    locale: "ko_KR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Logos Cloud",
    description: "프롬프트로 AI 영상 스토리룸을 설계합니다.",
    images: ["/logoscloud-cloud-ai-hero.svg"]
  },
  alternates: {
    canonical: "https://www.logoscloud.co.kr"
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
