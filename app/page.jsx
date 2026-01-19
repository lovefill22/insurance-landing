"use client";

import { useMemo, useState } from "react";
import { siteConfig } from "../lib/siteConfig";

const PRODUCTS = [
  {
    key: "care",
    label: "요양시설 전문인배상보험",
    short: "요양시설 운영 리스크를 핵심만 정리",
    who: ["요양원 / 주간보호 / 방문요양", "센터장·시설장·관리책임자", "직원 실수/과실에 대한 배상 대비"],
    focus: ["시설 운영 특성에 맞춘 보장 구조", "사고 발생 시 대응 프로세스 안내", "견적/가입 전 체크포인트 정리"],
    faq: [
      { q: "가입 전에 무엇부터 확인하나요?", a: "시설 형태(요양원/주간보호 등)와 운영 구조, 직원 역할 범위를 먼저 정리하면 빠릅니다." },
      { q: "사고가 났을 때는?", a: "사실관계 정리 → 증빙 확보 → 신고/접수 순으로 진행되며, 상담 시 체크리스트를 드립니다." },
    ],
  },
  {
    key: "parking",
    label: "주차장배상보험",
    short: "주차장 운영에서 자주 발생하는 분쟁 대비",
    who: ["자주식/기계식 주차장", "상가/건물 부설 주차장", "주차관리 위탁 운영"],
    focus: ["사고 유형별(접촉/파손 등) 기준 정리", "운영 형태에 따른 가입 포인트", "클레임 분쟁 줄이는 안내 문구"],
    faq: [
      { q: "주차장 형태가 다른데도 가능한가요?", a: "가능합니다. 형태/면수/운영방식에 따라 조건이 달라져서 맞춤 안내가 필요합니다." },
      { q: "민원/분쟁이 많은 편인데 도움이 되나요?", a: "사고 대응 기준을 사전에 정리해두면 분쟁 비용과 시간을 크게 줄일 수 있습니다." },
    ],
  },
];

export default function Page() {
  const [tab, setTab] = useState("care");

  const active = useMemo(() => PRODUCTS.find((p) => p.key === tab), [tab]);

  const onClickConsult = () => {
    // 상담페이지는 나중에 연결 — 지금은 버튼 UX만
    alert("상담 접수 기능은 다음 단계에서 연결할게요. (지금은 디자인/레이아웃 먼저)");
  };

  return (
    <>
      {/* Top Nav */}
      <header className="nav">
        <div className="container navInner">
          <div className="brand">
            <span className="logoDot" />
            <span>{siteConfig?.brandName ?? "시설배상 보험상담"}</span>
          </div>

          <div className="navActions">
            <button className="btn" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}>
              하단 정보
            </button>
            <button className="btn btnPrimary" onClick={onClickConsult}>
              상담 요청하기
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container heroGrid">
          <div className="heroCard">
            <h1 className="heroTitle">
              시설 운영자를 위한 <br />
              <span style={{ color: "var(--accent)" }}>배상책임 보험 상담</span>
            </h1>
            <p className="heroSub">
              요양시설·주차장 등 시설 운영에서 생길 수 있는 사고/분쟁 리스크를
              <b> 이해하기 쉬운 언어로</b> 정리하고, 상황에 맞는 가입 포인트를 안내합니다.
            </p>

            <div className="pills">
              <span className="pill">✅ 운영 형태별 체크리스트</span>
              <span className="pill">✅ 가입 전 확인 포인트</span>
              <span className="pill">✅ 사고 시 대응 흐름</span>
            </div>

            <div className="heroCtaRow">
              <button className="btn btnPrimary" onClick={onClickConsult}>
                지금 상담 요청하기
              </button>
              <button className="btn" onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}>
                상품 먼저 보기
              </button>
            </div>

            <div className="smallNote">
              * 본 페이지는 정보 제공 목적이며, 최종 가입/보장 내용은 상담을 통해 확정됩니다.
            </div>
          </div>

          <aside className="sideCard">
            <div className="kpiTitle">오늘 할 수 있는 것</div>
            <ul className="kpiList">
              <li>내 시설에 맞는 상품 선택</li>
              <li>가입 전 체크포인트 3분 정리</li>
              <li>사고/민원 발생 시 대응 흐름 확인</li>
            </ul>
            <button className="btn btnPrimary" onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}>
              바로 선택하기
            </button>
          </aside>
        </div>
      </section>

      {/* Products */}
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
              <p className="cardText">상담 전 단계에서 “헷갈리는 부분”을 먼저 정리해드립니다.</p>
              <ul className="bullets">
                {active.focus.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ height: 14 }} />

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
            <div className="heroCtaRow">
              <button className="btn btnPrimary" onClick={onClickConsult}>
                상담 요청하기
              </button>
              <button className="btn" onClick={() => setTab(tab === "care" ? "parking" : "care")}>
                다른 상품 보기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footerRow">
          <div>
            <div style={{ fontWeight: 900, color: "#0f172a" }}>
              {siteConfig?.brandName ?? "시설배상 보험상담"}
            </div>
            <div>© {new Date().getFullYear()} All rights reserved.</div>
          </div>
          <div style={{ maxWidth: 560 }}>
            <div style={{ fontWeight: 900, color: "#0f172a" }}>안내</div>
            <div>
              본 페이지는 정보 제공 목적이며, 실제 가입/보장/보험료는 시설 정보 및 운영 형태에 따라 달라질 수 있습니다.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
