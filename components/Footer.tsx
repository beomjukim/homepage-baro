import Logo from "./Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="col-span-1">
            <div className="mb-4">
              <Logo size="sm" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mt-4">
              라벨, 스티커, 포장재 전문 인쇄소입니다.
              <br />
              고품질 인쇄로 고객의 브랜드를 빛냅니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              바로가기
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-baro-red transition-colors">
                  홈
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-baro-red transition-colors"
                >
                  서비스
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-baro-red transition-colors"
                >
                  연락처
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              연락처
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 mt-0.5 text-baro-red flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:0312388797"
                  className="hover:text-baro-red transition-colors"
                >
                  031-238-8797
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 mt-0.5 text-baro-red flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>
                  평일 09:00 – 18:00
                  <br />
                  토요일 09:00 – 13:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-xs text-gray-500 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} 바로인쇄소. All rights reserved.</p>
          <p>라벨 스티커 인쇄전문 · ALL ABOUT LABEL PRINTING</p>
        </div>
      </div>
    </footer>
  );
}
