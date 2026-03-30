import Link from "next/link";

export const runtime = "edge";

export const metadata = {
  title: "서비스 | 바로인쇄소",
  description:
    "바로인쇄소의 다양한 인쇄 서비스 - 라벨, 스티커, 포장재, 박스, 쇼핑백 등",
};

const services = [
  {
    id: "label",
    emoji: "🏷️",
    title: "라벨 인쇄",
    subtitle: "Label Printing",
    desc: "제품의 얼굴이 되는 라벨, 바로인쇄소가 완성합니다.",
    details: [
      "식품·음료 라벨",
      "제품 성분표 라벨",
      "가격표 라벨",
      "바코드 라벨",
      "물류·배송 라벨",
      "내열·방수 특수 라벨",
    ],
    materials: ["아트지", "유포지", "투명PET", "은박PET", "모조지"],
  },
  {
    id: "sticker",
    emoji: "⭐",
    title: "스티커 인쇄",
    subtitle: "Sticker Printing",
    desc: "브랜드 아이덴티티를 담은 고품질 스티커를 제작합니다.",
    details: [
      "홍보·판촉 스티커",
      "브랜드 로고 스티커",
      "포장 봉인 스티커",
      "캐릭터·일러스트 스티커",
      "날씨·온도 변색 스티커",
      "다이컷 스티커",
    ],
    materials: ["광택 스티커지", "무광 스티커지", "투명 스티커", "홀로그램"],
  },
  {
    id: "packaging",
    emoji: "📦",
    title: "포장재 인쇄",
    subtitle: "Packaging Printing",
    desc: "제품 가치를 높이는 맞춤형 포장재를 제작합니다.",
    details: [
      "제품 박스",
      "쇼핑백",
      "테이프",
      "완충재 포장지",
      "선물 포장지",
      "친환경 포장재",
    ],
    materials: ["아트지", "크라프트지", "골판지", "PP코팅"],
  },
  {
    id: "misc",
    emoji: "🖨️",
    title: "기타 인쇄물",
    subtitle: "Other Prints",
    desc: "다양한 인쇄물을 원스톱으로 제작합니다.",
    details: [
      "명함",
      "리플렛·팸플릿",
      "현수막·배너",
      "봉투",
      "영수증 용지",
      "폼 인쇄",
    ],
    materials: ["아트지", "모조지", "스노우지", "스티커지"],
  },
];

const process = [
  { step: "01", title: "상담 및 견적", desc: "전화 또는 온라인으로 제품 사양, 수량, 납기를 상담하고 견적을 받으세요." },
  { step: "02", title: "디자인 확인", desc: "시안을 제출하시면 전문 담당자가 인쇄 적합성을 검토하고 피드백을 드립니다." },
  { step: "03", title: "인쇄 제작", desc: "승인된 시안을 바탕으로 최신 장비로 고품질 인쇄를 진행합니다." },
  { step: "04", title: "납품 완료", desc: "완제품 품질 검수 후 신속하게 배송 또는 방문 수령으로 납품합니다." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-baro-red" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-baro-red/20 border border-baro-red/30 text-baro-red-light rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6">
            Services
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">서비스 소개</h1>
          <p className="text-gray-300 text-lg max-w-xl">
            라벨, 스티커, 포장재 등 다양한 인쇄 서비스를 원스톱으로 제공합니다.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div
                key={s.id}
                className="border border-gray-100 rounded-2xl p-8 hover:border-baro-red/20 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl">{s.emoji}</div>
                  <div>
                    <p className="text-xs text-baro-red font-semibold uppercase tracking-widest mb-1">
                      {s.subtitle}
                    </p>
                    <h2 className="text-2xl font-black text-gray-900">{s.title}</h2>
                    <p className="text-gray-500 text-sm mt-1">{s.desc}</p>
                  </div>
                </div>

                <div className="mb-5">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    제품 종류
                  </h3>
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                    {s.details.map((d, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-baro-red rounded-full flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                    사용 소재
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {s.materials.map((m, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              주문 프로세스
            </h2>
            <p className="text-gray-500 text-lg">간단한 4단계로 완성됩니다</p>
            <div className="w-12 h-1 bg-baro-red mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={i} className="relative">
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 z-0" style={{ width: "calc(100% - 2rem)" }} />
                )}
                <div className="relative z-10 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="w-14 h-14 bg-baro-red text-white rounded-2xl flex items-center justify-center font-black text-lg mb-4">
                    {p.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-baro-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-3">
            지금 바로 견적을 받아보세요
          </h2>
          <p className="text-red-100 mb-8">
            소량부터 대량까지, 맞춤형 인쇄 솔루션을 제공합니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0312388797"
              className="inline-flex items-center justify-center gap-2 bg-white text-baro-red font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
            >
              ☎ 031-238-8797
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-baro-red transition-all"
            >
              온라인 문의
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
