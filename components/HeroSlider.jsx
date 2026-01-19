"use client";

import { useEffect, useMemo, useState } from "react";

export default function HeroSlider() {
  const slides = useMemo(
    () => [
      {
        key: "care",
        img: "/banners/care.jpg",
        title: "시설 운영자를 위한\n배상책임 보험 상담",
        desc:
          "요양시설·주차장 등 운영 중 생길 수 있는 사고/분쟁 리스크를\n이해하기 쉬운 언어로 정리해드립니다.",
        badges: ["운영 형태별 체크리스트", "가입 전 확인 포인트", "사고 시 대응 흐름"],
      },
      {
        key: "parking",
        img: "/banners/parking.jpg",
        title: "주차장 운영자\n배상책임 리스크 정리",
        desc:
          "사고가 났을 때 어떤 순서로 대응해야 하는지,\n상담 전에 핵심만 먼저 잡아드립니다.",
        badges: ["사고 유형 정리", "운영자 책임 포인트", "민원 대응 가이드"],
      },
      {
        key: "checklist",
        img: "/banners/checklist.jpg",
        title: "가입 전에\n체크할 것만 3분 정리",
        desc:
          "지금 바로 가입할 필요는 없습니다.\n먼저 구조를 이해하고 내 시설에 맞는 방향을 잡는 게 우선입니다.",
        badges: ["구조 이해", "체크포인트", "맞춤 안내"],
      },
    ],
    []
  );

  const [idx, setIdx] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const id = setInterval(() => setIdx((v) => (v + 1) % total), 5000); // ✅ 5초
    return () => clearInterval(id);
  }, [total]);

  const go = (next) => setIdx((next + total) % total);

  const s = slides[idx];

  return (
    <section className="hero">
      <div className="heroCard">
        <div className="heroMedia" aria-hidden="true">
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

          <div className="heroBadges">
            {s.badges.map((b) => (
              <span className="badge" key={b}>
                {b}
              </span>
            ))}
          </div>

          <div className="heroActions">
            <a className="btnPrimary" href="#consult">
              지금 상담 요청하기
            </a>
            <a className="btnGhost" href="#products">
              상품 먼저 보기
            </a>
          </div>

          <div className="heroNav">
            <button className="navBtn" onClick={() => go(idx - 1)} aria-label="이전 배너">
              ‹
            </button>

            <div className="dots" role="tablist" aria-label="배너 선택">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={"dot" + (i === idx ? " active" : "")}
                  onClick={() => setIdx(i)}
                  aria-label={`${i + 1}번 배너`}
                />
              ))}
            </div>

            <button className="navBtn" onClick={() => go(idx + 1)} aria-label="다음 배너">
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

