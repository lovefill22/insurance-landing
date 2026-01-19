"use client";

import { useMemo, useState } from "react";
import HeroSlider from "../components/HeroSlider";
import { siteConfig } from "../lib/siteConfig";

const PRODUCTS = [
  {
    key: "care",
    label: "요양시설 전문인배상보험",
    short: "요양시설 운영 리스크를 핵심만 정리",
    who: [
      "요양원 / 주간보호 / 방문요양",
      "센터장·시설장·관리책임자",
      "직원 실수/과실에 대한 배상 대비",
    ],
    focus: [
      "시설 운영 특성에 맞춘 보장 구조",
      "사고 발생 시 대응 프로세스 안내",
      "견적/가입 전 체크포인트 정리",
    ],
    faq: [
      {
        q: "가입 전에 무엇부터 확인하나요?",
        a: "시설 형태(요양원/주간보호 등)와 운영 구조, 직원 역할 범위를 먼저 정리하면 빠릅니다.",
      },
      {
        q: "사고가 났을 때는?",
        a: "사실관계 정리 → 증빙 확보 → 신고/접수 순으로 진행되며, 상담 시 체크리스트를 드립니다.",
      },
    ],
  },
  {
    key: "parking",
    label: "주차장배상보험",
    short: "주차장 운영에서 자주 발생하는 분쟁 대비",
    who: [
      "자주식 / 기계식 주차장",
      "상가·건물 부설 주차장",
      "주차관리 위탁 운영",
    ],
    focus: [
      "사고 유형별 기준 정리",
      "운영 형태에 따른 가입 포인트",
      "분쟁 줄이는 대응 가이드",
    ],
    faq: [
      {
        q: "주차장 형태가 달라도 가능한가요?",
        a: "가능합니다. 형태·면수·운영 방식에 따라 조건이 달라 맞춤 안내가 필요합니다.",
      },
      {
        q: "민원/분쟁이 많은데 도움이 되나요?",
        a: "사고 대응 기준을 사전에 정리하면 분쟁 비용과 시간을 크게 줄일 수 있습니다.",
      },
    ],
  },
];

export default function Page() {
  const [tab, setTab] = useState("care");

  const active = useMemo(
    () => PRODUCTS.find((p) => p.key === tab),
    [tab]
  );

  const onClickConsult = () => {
    alert(
      "상담 페이지는 다음 단계에서 연결합니다.\n지금은 디자인/레이아웃 확인 단계입니다."
    );
  };

  return (
    <>
      {/* 🔥 메인 로테이션 배너 */}
      <HeroSlider />

      {/* 현재 제공 상품 */}
      <section className="section" id="products">
        <div className="container">
          <h2 className="sectionTitle">현재 제공 상품</h2>

          <div className="tabs">
            {PRODUCTS.map((p) => (
              <button
                key={p.key}
                className={`tab ${tab === p.key ? "tabActive" : ""}`}
                onClick={() => setTab(p.key)}
              >
                {p.key === "care" ? "요양시설" : "주차장"}
              </button>
            ))}
          </div>

          <div className="grid2">
            <div className="card">
              <div className="cardTitle">{active.label}</div>
              <p className="cardText">{active.short}</p>
              <ul className="bullets">
                {active.who.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>

            <div className="card">
              <div className="cardTitle">이 상품에서 도와드리는 것</div>
              <p className="cardText">
                상담 전 단계에서 헷갈리는 부분을 먼저 정리해드립니다.
              </p>
              <ul className="bullets">
                {active.focus.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ height: 16 }} />

          <div className="card">
            <div className="cardTitle">자주 묻는 질문</div>
            <div className="grid2">
              {active.faq.map((item, idx) => (
                <div className="card" key={idx} style={{ boxShadow: "none" }}>
                  <div className="cardTitle" style={{ fontSize: 14 }}>
                    Q. {item.q}
                  </div>
                  <p className="cardText">A. {item.a}</p>
                </div>
              ))}
            </div>

            <div style={{ height: 12 }} />
            <div className="heroActions">
              <button className="btnPrimary" onClick={onClickConsult}>
                상담 요청하기
              </button>
              <button
                className="btnGhost"
                onClick={() => setTab(tab === "care" ? "parking" : "care")}
              >
                다른 상품 보기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="footer">
        <div className="container footerRow">
          <div>
            <div style={{ fontWeight: 900, color: "#0f172a" }}>
              {siteConfig?.brandName ?? "시설 배상책임 보험 상담"}
            </div>
            <div>© {new Date().getFullYear()} All rights reserved.</div>
          </div>

          <div style={{ maxWidth: 560 }}>
            <div style={{ fontWeight: 900, color: "#0f172a" }}>안내</div>
            <div>
              본 페이지는 정보 제공 목적이며, 실제 가입/보장/보험료는 시설
              정보 및 운영 형태에 따라 달라질 수 있습니다.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
