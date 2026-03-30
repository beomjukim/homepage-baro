import Link from "next/link";

export const runtime = "edge";

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "고품질 인쇄",
    desc: "최신 장비와 고품질 재료로 선명하고 내구성 있는 인쇄물을 제공합니다.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "빠른 납기",
    desc: "신속한 생산 시스템으로 급한 주문도 빠르게 처리합니다.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "전문 상담",
    desc: "경험 많은 전문가가 최적의 인쇄 솔루션을 상담해 드립니다.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "합리적인 가격",
    desc: "소량부터 대량 주문까지 합리적인 가격으로 제공합니다.",
  },
];

const services = [
  {
    title: "라벨 인쇄",
    desc: "제품 라벨, 식품 라벨, 음료 라벨 등 다양한 용도의 라벨을 제작합니다.",
    icon: "🏷️",
  },
  {
    title: "스티커 인쇄",
    desc: "홍보용, 포장용, 브랜딩용 스티커를 다양한 소재로 제작합니다.",
    icon: "⭐",
  },
  {
    title: "포장재 인쇄",
    desc: "박스, 쇼핑백, 테이프 등 브랜드 포장재를 맞춤 제작합니다.",
    icon: "📦",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>
        {/* Red accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-baro-red" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-baro-red/20 border border-baro-red/30 text-baro-red-light rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 bg-baro-red rounded-full animate-pulse" />
              라벨 스티커 인쇄전문
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
              바로인쇄소
              <br />
              <span className="text-baro-red">ALL ABOUT</span>
              <br />
              LABEL PRINTING
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              라벨, 스티커, 포장재 전문 인쇄소.
              <br />
              고품질 인쇄로 고객의 브랜드를 더욱 빛냅니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-baro-red hover:bg-baro-red-dark text-white font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-baro-red/30 hover:-translate-y-0.5"
              >
                서비스 알아보기
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:bg-white/10"
              >
                견적 문의
              </Link>
            </div>
          </div>
        </div>

        {/* Phone CTA strip */}
        <div className="relative bg-baro-red/90 border-t border-baro-red">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span className="text-white/90 text-sm font-medium">
              전화 상담 · 견적 문의 환영합니다
            </span>
            <a
              href="tel:0312388797"
              className="text-white font-black text-lg tracking-wider hover:scale-105 transition-transform"
            >
              ☎ 031-238-8797
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              왜 바로인쇄소인가요?
            </h2>
            <p className="text-gray-500 text-lg">
              고객 만족을 최우선으로 생각합니다
            </p>
            <div className="w-12 h-1 bg-baro-red mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="group text-center p-6 rounded-2xl border border-gray-100 hover:border-baro-red/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-baro-red/10 text-baro-red rounded-2xl mb-4 group-hover:bg-baro-red group-hover:text-white transition-all duration-300">
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              주요 서비스
            </h2>
            <p className="text-gray-500 text-lg">
              다양한 인쇄 솔루션을 제공합니다
            </p>
            <div className="w-12 h-1 bg-baro-red mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="text-5xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-baro-red font-bold hover:underline text-sm"
            >
              전체 서비스 보기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            지금 바로 문의하세요
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            소량 주문부터 대량 주문까지 합리적인 가격으로 상담해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0312388797"
              className="inline-flex items-center justify-center gap-2 bg-baro-red hover:bg-baro-red-dark text-white font-bold px-8 py-4 rounded-full transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              031-238-8797
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:bg-white/10"
            >
              온라인 문의
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
