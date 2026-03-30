import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "바로인쇄소 - 라벨 스티커 인쇄전문",
  description:
    "바로인쇄소는 라벨, 스티커, 포장재 등 다양한 인쇄물을 전문으로 제작합니다. ALL ABOUT LABEL PRINTING",
  keywords: "라벨 인쇄, 스티커 인쇄, 포장재, 바로인쇄소, 인쇄 전문",
  openGraph: {
    title: "바로인쇄소 - 라벨 스티커 인쇄전문",
    description:
      "라벨, 스티커, 포장재 등 다양한 인쇄물을 전문으로 제작합니다.",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col bg-white text-gray-800">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
