"use client";

import { useEffect, useMemo, useState } from "react";

export default function HeroSlider() {
  const slides = useMemo(
    () => [
      {
        key: "care",
        img: "/banners/banner-01.jpg",
        title: "시설 운영자를 위한\n배상책임 보험 상담",
        desc: "요양시설·주차장 등 시설 운영 중 발생할 수 있는 리스크를\n핵심만 쉽게 정리해드립니다.",
        chips: ["운영 형태별 체크리스트", "가입 전 확인 포인트", "사고 시 대응 흐름"],
      },
      {
        key: "parking",
        img: "/banners/banner-02.jpg",
        title: "주차장 운영자\n배상책임 리스크 정리",
        desc: "사고가 났을 때 어떤 순서로 대응해야 하는지,\n상담 전 핵심만 먼저 잡아드립니다.",
        chips: ["사고 유형 정리", "운영자 책임 포인트", "민원 대응 가이드"],
      },
      {
        key: "check",
        img: "/banners/banner-03.jpg",
        title: "가입 전에 확인할 것\n3분 체크리스트",
        desc: "상담 신청 전, 내 시설 상황을 먼저 정리하면\n상담 품질이 확 올라갑니다.",
        chips: ["필수 서류", "운영 구조", "보장 구조"],
      },
    ],
    []
  );

  const [idx, setIdx] = useState(0);
  const s = slides[idx];

  // 자동 로테이션 (5초)
  useEffect(() => {
    const t = setInterval(() => {
      setIdx((v) => (v + 1) % slides.length);
    }, 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  const goPrev = () => setIdx((v) => (v - 1 + slides.length) % slides.length);
  const goNext = () => setIdx((v) => (v + 1) % slides.length);

  return (
    <section className="hero">
      <div className="heroCard">
        <div className="heroMedia" aria-hidden="true">
          {/* ✅ 여기 src가 /banners/... 로 들어가야 정상 표시 */}
          <img src={s.img} alt="" className="heroImg" />
          <div className="heroShade" />
        </div>

        <div className="heroContent">
          <h1 className="heroTitle">
            {s.title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h1>

          <p className="heroDesc">
            {s.desc.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>

          <div className="heroChips">
            {s.chips.map((c) => (
              <span className="chip" key={c}>
                {c}
              </span>
            ))}
          </div>

          <div className="heroActions">
            <a className="btnPrimary" href="#contact">
              지금 상담 요청하기
            </a>
            <a className="btnSecondary" href="#products">
              상품 먼저 보기
            </a>
          </div>

          <div className="heroNav">
            <button className="navBtn" onClick={goPrev} aria-label="prev">
              ‹
            </button>

            <div className="dots" aria-label="slides">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={i === idx ? "dot on" : "dot"}
                  onClick={() => setIdx(i)}
                  aria-label={`slide ${i + 1}`}
                />
              ))}
            </div>

            <button className="navBtn" onClick={goNext} aria-label="next">
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
