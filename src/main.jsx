import React, { useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, BookOpen, ChevronRight, MapPin } from "lucide-react";
import "./styles.css";

import heroImage from "./assets/hero.png";
import camponotusImage from "./assets/card1-Camponotus ant.png";
import attaImage from "./assets/card2-Atta cephalotes leafcutter ant.png";
import paraponeraImage from "./assets/card3-Paraponera clavata bullet ant.png";
import messorImage from "./assets/card4-Messor harvester ant.png";
import oecophyllaImage from "./assets/card5-Oecophylla smaragdina weaver ant.png";

const specimens = [
  {
    id: "camponotus",
    number: "01",
    name: "弓背蚁",
    latin: "Camponotus",
    region: "森林、城市边缘、枯木环境",
    habit: "常在木质结构或土壤中筑巢，工蚁体型差异明显。",
    note: "弓背蚁的身体轮廓沉稳而清晰，适合作为档案馆的开篇标本。",
    image: camponotusImage,
  },
  {
    id: "atta",
    number: "02",
    name: "切叶蚁",
    latin: "Atta cephalotes",
    region: "中南美洲热带雨林",
    habit: "切割叶片并培育真菌，是高度协作的社会性昆虫。",
    note: "叶片与蚁体形成强烈的自然叙事，像一张静物观察笔记。",
    image: attaImage,
  },
  {
    id: "paraponera",
    number: "03",
    name: "子弹蚁",
    latin: "Paraponera clavata",
    region: "中南美洲湿润森林",
    habit: "体型较大，活动范围接近森林地表和树干区域。",
    note: "深色甲壳与锐利形态让它更接近博物馆里的力量型标本。",
    image: paraponeraImage,
  },
  {
    id: "messor",
    number: "04",
    name: "收获蚁",
    latin: "Messor",
    region: "干燥草地、荒漠边缘、地中海区域",
    habit: "以采集和储存种子闻名，群落结构稳定而高效。",
    note: "种子让画面有了尺度感，也暗示了蚁群与环境的交换关系。",
    image: messorImage,
  },
  {
    id: "oecophylla",
    number: "05",
    name: "编织蚁",
    latin: "Oecophylla smaragdina",
    region: "亚洲与澳洲热带树冠",
    habit: "利用幼虫吐丝把叶片缝合成巢，行动敏捷。",
    note: "橙色身体在浅色背景上很克制，但足够成为最后的视觉记忆点。",
    image: oecophyllaImage,
  },
];

function App() {
  const [selectedId, setSelectedId] = useState(specimens[0].id);
  const detailPanelRef = useRef(null);
  const selectedSpecimen = useMemo(
    () => specimens.find((specimen) => specimen.id === selectedId),
    [selectedId],
  );

  const handleSpecimenSelect = (specimenId) => {
    setSelectedId(specimenId);

    if (window.matchMedia("(max-width: 1120px)").matches) {
      window.requestAnimationFrame(() => {
        detailPanelRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  };

  return (
    <main>
      <nav className="site-nav" aria-label="主导航">
        <a className="brand" href="#top">
          <span>Ant Archive</span>
          <small>蚂蚁档案馆</small>
        </a>
        <a className="nav-link" href="#specimens">
          Specimens
          <ChevronRight size={16} strokeWidth={1.5} />
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Natural History / Visual Archive</p>
          <h1>蟻記録</h1>
          <p className="hero-kicker">Ant Archive / 蚂蚁档案馆</p>
          <p className="hero-text">
            一个由留白、自然光与微距静物感构成的蚂蚁视觉档案。
            它不急着解释一切，只邀请你靠近、观察、停留。
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#specimens">
              进入档案
              <ArrowUpRight size={18} strokeWidth={1.6} />
            </a>
            <span className="archive-code">AA / Vol. 01</span>
          </div>
        </div>
        <figure className="hero-media">
          <img src={heroImage} alt="玻璃标本盒与蚂蚁构成的自然档案馆静物" />
          <figcaption>Specimen table, soft daylight, quiet observation.</figcaption>
        </figure>
      </section>

      <section className="intro" aria-label="项目介绍">
        <p>Archive Note</p>
        <h2>以标本室的安静，重新观看微小生命。</h2>
        <div>
          <p>
            玻璃、纸张与干燥植物之间，微小的身体被自然光暂时留住。
          </p>
          <p>
            每一次靠近，都是从尺度之外回到尺度之内，重新辨认那些几乎被忽略的秩序。
          </p>
        </div>
      </section>

      <section className="specimen-section" id="specimens">
        <div className="section-heading">
          <p className="eyebrow">Selected Specimens</p>
          <h2>標本目録</h2>
        </div>

        <div className="specimen-grid">
          {specimens.map((specimen) => (
            <button
              className={`specimen-card ${specimen.id === selectedId ? "is-active" : ""}`}
              key={specimen.id}
              onClick={() => handleSpecimenSelect(specimen.id)}
              type="button"
            >
              <span className="card-number">{specimen.number}</span>
              <img src={specimen.image} alt={`${specimen.name}，${specimen.latin}`} />
              <span className="card-content">
                <span>
                  <strong>{specimen.name}</strong>
                  <em>{specimen.latin}</em>
                </span>
                <ArrowUpRight size={17} strokeWidth={1.5} />
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="detail-panel" ref={detailPanelRef} aria-label="蚂蚁详情">
        <div className="detail-image">
          <img src={selectedSpecimen.image} alt={`${selectedSpecimen.name}详情图`} />
        </div>
        <article className="detail-copy">
          <p className="eyebrow">Specimen {selectedSpecimen.number}</p>
          <h2>{selectedSpecimen.name}</h2>
          <p className="latin-name">{selectedSpecimen.latin}</p>
          <div className="detail-facts">
            <p>
              <MapPin size={17} strokeWidth={1.5} />
              {selectedSpecimen.region}
            </p>
            <p>
              <BookOpen size={17} strokeWidth={1.5} />
              {selectedSpecimen.habit}
            </p>
          </div>
          <p className="detail-note">{selectedSpecimen.note}</p>
        </article>
      </section>

      <footer>
        <span>Ant Archive</span>
        <span>First edition, built as an AI-assisted visual website.</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
