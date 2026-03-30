"use client";

export const runtime = "edge";

import { useState } from "react";

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "전화번호",
    value: "031-238-8797",
    link: "tel:0312388797",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "영업시간",
    value: "평일 09:00 – 18:00\n토요일 09:00 – 13:00\n일요일·공휴일 휴무",
    link: null,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "주소",
    value: "경기도 수원시",
    link: null,
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  }

  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-baro-red" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-baro-red/20 border border-baro-red/30 text-baro-red-light rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6">
            Contact
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">연락처</h1>
          <p className="text-gray-300 text-lg max-w-xl">
            견적 문의, 제품 상담 등 편하게 연락해 주세요.
            <br />
            빠르게 답변해 드립니다.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-black text-gray-900 mb-2">연락처 정보</h2>
              <div className="w-10 h-1 bg-baro-red rounded-full mb-6" />
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                전화 또는 온라인 문의를 통해 언제든지 상담하실 수 있습니다.
                소량 주문도 성심껏 응대합니다.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-baro-red/10 text-baro-red rounded-xl flex items-center justify-center flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                        {info.label}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-900 font-bold text-lg hover:text-baro-red transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-700 font-medium whitespace-pre-line leading-relaxed">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Call CTA */}
              <div className="mt-10 p-6 bg-gray-900 rounded-2xl text-center">
                <p className="text-gray-400 text-sm mb-2">빠른 상담</p>
                <a
                  href="tel:0312388797"
                  className="block text-3xl font-black text-white hover:text-baro-red transition-colors tracking-wide"
                >
                  031-238-8797
                </a>
                <p className="text-gray-500 text-xs mt-2">
                  평일 09:00 – 18:00
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-black text-gray-900 mb-2">온라인 문의</h2>
              <div className="w-10 h-1 bg-baro-red rounded-full mb-6" />

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    문의가 접수되었습니다
                  </h3>
                  <p className="text-gray-500 text-sm">
                    빠른 시간 내에 연락드리겠습니다.
                    <br />
                    급한 문의는 031-238-8797로 전화 주세요.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                        이름 <span className="text-baro-red">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="홍길동"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-baro-red focus:ring-1 focus:ring-baro-red transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                        연락처 <span className="text-baro-red">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="010-0000-0000"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-baro-red focus:ring-1 focus:ring-baro-red transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                      이메일
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-baro-red focus:ring-1 focus:ring-baro-red transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                      문의 서비스
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-baro-red focus:ring-1 focus:ring-baro-red transition-colors bg-white"
                    >
                      <option value="">서비스를 선택해 주세요</option>
                      <option value="label">라벨 인쇄</option>
                      <option value="sticker">스티커 인쇄</option>
                      <option value="packaging">포장재 인쇄</option>
                      <option value="misc">기타 인쇄물</option>
                      <option value="other">기타 문의</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">
                      문의 내용 <span className="text-baro-red">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="제품명, 수량, 규격, 납기 등 원하시는 내용을 자유롭게 적어주세요."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-baro-red focus:ring-1 focus:ring-baro-red transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-baro-red hover:bg-baro-red-dark disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-colors duration-200 text-sm flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        전송 중...
                      </>
                    ) : (
                      "문의 보내기"
                    )}
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    * 표시 항목은 필수 입력 사항입니다
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
