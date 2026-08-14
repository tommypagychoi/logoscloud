import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.logoscloud.co.kr"),
  title: "Logos Cloud | Enterprise ITO, AI Ops & K8S Cloud",
  description:
    "기업 ITO 운영, AI 기반 운영 자동화, Kubernetes Cloud 엔지니어링을 수행하는 Logos Cloud 공식 홈페이지",
  openGraph: {
    title: "Logos Cloud | Enterprise ITO, AI Ops & K8S Cloud",
    description: "기업 IT 운영을 AI와 Cloud Native 방식으로 고도화하는 전문가 그룹",
    url: "https://www.logoscloud.co.kr",
    siteName: "Logos Cloud",
    images: [
      {
        url: "/logoscloud-ito-ai-k8s-hero.jpg",
        width: 1742,
        height: 922,
        alt: "Logos Cloud 기업 ITO, AI Ops, K8S Cloud 운영센터"
      }
    ],
    locale: "ko_KR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Logos Cloud | Enterprise ITO, AI Ops & K8S Cloud",
    description: "기업 IT 운영을 AI와 Cloud Native 방식으로 고도화하는 전문가 그룹",
    images: ["/logoscloud-ito-ai-k8s-hero.jpg"]
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
