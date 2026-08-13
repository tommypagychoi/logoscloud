import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  Cloud,
  Gem,
  Layers3,
  Mail,
  Palette,
  PenTool,
  Sparkles,
  Target,
  Workflow
} from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "기업 로고 디자인",
    description: "회사명, 업종, 고객군을 분석해 명확하게 기억되는 심볼과 워드마크를 설계합니다."
  },
  {
    icon: Palette,
    title: "브랜드 시스템",
    description: "컬러, 폰트, 아이콘, 사용 규칙까지 실무자가 바로 쓸 수 있는 기준으로 정리합니다."
  },
  {
    icon: Layers3,
    title: "비즈니스 패키지",
    description: "명함, 제안서 표지, SNS 프로필, 간판 적용 예시까지 한 번에 확장합니다."
  }
];

const process = [
  "브랜드 방향 인터뷰",
  "시장 및 경쟁사 톤 분석",
  "로고 시안 제작",
  "수정 및 최종 납품"
];

const packages = [
  {
    name: "Starter",
    target: "개인사업자, 신규 브랜드",
    items: ["로고 시안 2종", "컬러 팔레트", "PNG/JPG 납품"]
  },
  {
    name: "Business",
    target: "기업 홈페이지, 쇼핑몰, 서비스 런칭",
    items: ["로고 시안 3종", "브랜드 가이드", "명함/SNS 적용 이미지"]
  },
  {
    name: "Corporate",
    target: "법인, 프랜차이즈, 투자 제안용 브랜드",
    items: ["심볼/워드마크 시스템", "문서/제안서 템플릿", "응용 디자인 세트"]
  }
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Logos Cloud 홈">
          <span className="brand-mark">
            <Cloud size={22} />
          </span>
          <strong>Logos Cloud</strong>
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#services">서비스</a>
          <a href="#process">프로세스</a>
          <a href="#packages">패키지</a>
          <a href="#contact">문의</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <Image
          className="hero-image"
          src="/logoscloud-brand-studio.jpg"
          alt="브랜드 디자인 보드와 로고 시안이 놓인 스튜디오"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">
            <Sparkles size={16} />
            Corporate Brand Design Studio
          </p>
          <h1>기업의 첫인상을 설계하는 로고 디자인 파트너</h1>
          <p className="hero-copy">
            Logos Cloud는 신규 법인, 쇼핑몰, 서비스 런칭에 필요한 로고와 브랜드 사용 기준을
            실무에 바로 적용 가능한 형태로 제공합니다.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#contact">
              프로젝트 문의
              <ArrowRight size={18} />
            </a>
            <a className="secondary-link" href="#packages">패키지 보기</a>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="핵심 강점">
        <div>
          <strong>4단계</strong>
          <span>명확한 제작 프로세스</span>
        </div>
        <div>
          <strong>1:1</strong>
          <span>브랜드 방향 상담</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>상업용 납품 기준</span>
        </div>
      </section>

      <section className="section intro-section">
        <div>
          <p className="section-kicker">Why Logos Cloud</p>
          <h2>예쁜 로고보다 오래 쓰이는 브랜드 기준을 만듭니다.</h2>
        </div>
        <p>
          로고는 간판, 홈페이지, 명함, 제안서, SNS에서 반복해서 쓰입니다. 그래서 Logos Cloud는
          보기 좋은 시안에서 멈추지 않고 실제 운영 환경에서 일관되게 적용되는 디자인 기준까지 함께 설계합니다.
        </p>
      </section>

      <section className="section" id="services">
        <div className="section-head">
          <p className="section-kicker">Services</p>
          <h2>기업 홈페이지와 브랜드 런칭에 필요한 핵심 디자인</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <span>
                  <Icon size={24} />
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="feature-band">
        <div className="feature-copy">
          <p className="section-kicker">Brand System</p>
          <h2>로고 하나가 아니라 회사 전체에 적용되는 디자인 언어</h2>
          <p>
            웹사이트 첫 화면, 제안서 표지, 영업자료, 프로필 이미지까지 같은 인상을 줄 수 있도록
            로고의 확장 사용을 함께 고려합니다.
          </p>
        </div>
        <div className="brand-board" aria-label="브랜드 구성 요소">
          <div className="board-tile dark">
            <Cloud size={34} />
            <span>Symbol</span>
          </div>
          <div className="board-tile blue">#1267D8</div>
          <div className="board-tile teal">#0F766E</div>
          <div className="board-tile yellow">Accent</div>
          <div className="board-tile wide">Logos Cloud</div>
          <div className="board-tile line">Business Identity</div>
        </div>
      </section>

      <section className="section" id="process">
        <div className="section-head">
          <p className="section-kicker">Process</p>
          <h2>처음 맡겨도 이해하기 쉬운 제작 흐름</h2>
        </div>
        <div className="process-list">
          {process.map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
              <p>
                {index === 0 && "회사 소개, 고객층, 선호 톤, 사용처를 정리해 방향을 잡습니다."}
                {index === 1 && "동종 업계의 시각 언어를 확인하고 차별화 포인트를 찾습니다."}
                {index === 2 && "브랜드 성격에 맞는 시안을 제작하고 적용 예시와 함께 제안합니다."}
                {index === 3 && "선택 시안을 다듬어 웹/인쇄/운영용 파일로 정리해 전달합니다."}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="packages">
        <div className="section-head">
          <p className="section-kicker">Packages</p>
          <h2>사업 단계에 맞춰 선택하는 브랜드 제작 범위</h2>
        </div>
        <div className="package-grid">
          {packages.map((item) => (
            <article className="package-card" key={item.name}>
              <div>
                <Gem size={22} />
                <h3>{item.name}</h3>
              </div>
              <p>{item.target}</p>
              <ul>
                {item.items.map((entry) => (
                  <li key={entry}>
                    <Check size={16} />
                    {entry}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>새로운 회사, 서비스, 쇼핑몰의 얼굴을 함께 만들겠습니다.</h2>
          <p>
            회사명, 업종, 원하는 분위기, 필요한 납품물을 보내주시면 제작 범위와 진행 일정을 정리해드립니다.
          </p>
        </div>
        <div className="contact-box">
          <a href="mailto:hello@logoscloud.com">
            <Mail size={20} />
            hello@logoscloud.com
          </a>
          <span>
            <Building2 size={20} />
            Corporate logo and brand identity
          </span>
          <span>
            <Target size={20} />
            신규 브랜드, 법인, 쇼핑몰, 서비스 런칭
          </span>
          <span>
            <Workflow size={20} />
            상담 후 맞춤 견적
          </span>
        </div>
      </section>

      <footer className="site-footer">
        <strong>Logos Cloud</strong>
        <span>© 2026 Logos Cloud. Brand identity design studio.</span>
        <span>
          <BadgeCheck size={16} />
          www.logoscloud.com
        </span>
      </footer>
    </main>
  );
}
