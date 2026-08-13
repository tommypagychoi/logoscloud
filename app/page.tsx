import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  Building2,
  Check,
  Cloud,
  Cpu,
  DatabaseZap,
  Gem,
  GitBranch,
  Mail,
  Network,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow
} from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "멀티 클라우드 운영과 구축",
    description: "AWS, Azure, GCP, 프라이빗 클라우드를 목적에 맞게 설계하고 안정적인 운영 체계로 연결합니다."
  },
  {
    icon: BrainCircuit,
    title: "AI 인프라 선도 전략",
    description: "AI 서비스가 빠르게 확장될 수 있도록 데이터, 모델, GPU, 자동화 운영 기반을 함께 설계합니다."
  },
  {
    icon: ServerCog,
    title: "K8S 전문 집단",
    description: "Kubernetes 플랫폼, GitOps, 모니터링, 보안 정책까지 실전 경험을 갖춘 전문가가 구축합니다."
  }
];

const process = [
  "클라우드 현황 진단",
  "목표 아키텍처 설계",
  "K8S와 AI 운영 자동화",
  "관제와 지속 개선"
];

const packages = [
  {
    name: "Multi Cloud",
    target: "멀티 클라우드 cloud",
    items: ["클라우드 계정/네트워크 진단", "표준 아키텍처 설계", "운영 전환 로드맵"]
  },
  {
    name: "AI Leading",
    target: "AI 선두를 이끌어 가는 기업",
    items: ["AI 인프라 전략", "데이터/모델 운영 기반", "자동화와 성능 최적화"]
  },
  {
    name: "K8S Expert",
    target: "K8S 전문 집단 전문가 구성",
    items: ["Kubernetes 플랫폼 구축", "GitOps 배포 체계", "보안/모니터링 표준화"]
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
          <a href="#packages">역량</a>
          <a href="#contact">문의</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <Image
          className="hero-image"
          src="/logoscloud-cloud-ai-hero.svg"
          alt="멀티 클라우드와 AI 운영 대시보드가 보이는 관제 센터"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">
            <Sparkles size={16} />
            Multi Cloud · AI · Kubernetes
          </p>
          <h1>멀티 클라우드 운영과 AI 혁신을 이끄는 Logos Cloud</h1>
          <p className="hero-copy">
            Logos Cloud는 멀티 클라우드 운영과 구축, AI 기반 인프라 혁신, Kubernetes 플랫폼 전문성을
            하나로 연결해 기업의 클라우드 전환과 안정적인 운영을 지원합니다.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#contact">
              프로젝트 문의
              <ArrowRight size={18} />
            </a>
            <a className="secondary-link" href="#packages">핵심 역량 보기</a>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="핵심 강점">
        <div>
          <strong>Multi</strong>
          <span>퍼블릭·프라이빗 클라우드 통합 운영</span>
        </div>
        <div>
          <strong>AI</strong>
          <span>AI 선두를 이끌어 가는 인프라 전략</span>
        </div>
        <div>
          <strong>K8S</strong>
          <span>Kubernetes 전문가 중심 구성</span>
        </div>
      </section>

      <section className="section intro-section">
        <div>
          <p className="section-kicker">Why Logos Cloud</p>
          <h2>복잡한 클라우드 환경을 하나의 운영 전략으로 정리합니다.</h2>
        </div>
        <p>
          기업의 클라우드는 단일 플랫폼에서 끝나지 않습니다. Logos Cloud는 멀티 클라우드, AI 워크로드,
          Kubernetes 운영을 함께 바라보며 구축 이후에도 지속 가능한 표준과 자동화 체계를 만듭니다.
        </p>
      </section>

      <section className="section" id="services">
        <div className="section-head">
          <p className="section-kicker">Services</p>
          <h2>멀티 클라우드 운영과 AI 전환에 필요한 핵심 서비스</h2>
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
          <p className="section-kicker">Cloud Operating Model</p>
          <h2>구축, 자동화, 관제, 최적화를 하나의 흐름으로 연결합니다.</h2>
          <p>
            클라우드 리소스, 컨테이너 플랫폼, AI 운영 환경을 표준화해 장애 대응과 비용 최적화,
            보안 운영이 반복 가능한 체계로 움직이도록 설계합니다.
          </p>
        </div>
        <div className="brand-board" aria-label="클라우드 운영 구성 요소">
          <div className="board-tile dark">
            <Network size={34} />
            <span>Multi Cloud</span>
          </div>
          <div className="board-tile blue">AI Ops</div>
          <div className="board-tile teal">K8S</div>
          <div className="board-tile yellow">GitOps</div>
          <div className="board-tile wide">Logos Cloud</div>
          <div className="board-tile line">Secure Operations</div>
        </div>
      </section>

      <section className="section" id="process">
        <div className="section-head">
          <p className="section-kicker">Process</p>
          <h2>현황 진단부터 운영 고도화까지 이어지는 실행 흐름</h2>
        </div>
        <div className="process-list">
          {process.map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
              <p>
                {index === 0 && "현재 인프라, 비용, 보안, 운영 병목을 빠르게 파악합니다."}
                {index === 1 && "비즈니스 목표에 맞는 멀티 클라우드와 네트워크 구조를 설계합니다."}
                {index === 2 && "Kubernetes와 AI 운영을 자동화해 배포와 확장을 표준화합니다."}
                {index === 3 && "관제, 장애 대응, 비용 최적화를 지속적으로 개선합니다."}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="packages">
        <div className="section-head">
          <p className="section-kicker">Capabilities</p>
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

      <section className="section tech-section" aria-label="운영 전문 영역">
        <div className="section-head">
          <p className="section-kicker">Expertise</p>
          <h2>클라우드 운영팀이 바로 필요로 하는 전문 영역</h2>
        </div>
        <div className="tech-grid">
          <article>
            <Cpu size={24} />
            <h3>AI 워크로드 인프라</h3>
            <p>GPU, 데이터 파이프라인, 모델 서빙 환경을 운영 관점에서 설계합니다.</p>
          </article>
          <article>
            <GitBranch size={24} />
            <h3>GitOps 기반 배포</h3>
            <p>변경 이력과 배포 상태를 추적 가능한 구조로 표준화합니다.</p>
          </article>
          <article>
            <ShieldCheck size={24} />
            <h3>보안과 거버넌스</h3>
            <p>권한, 정책, 감사, 네트워크 보안을 운영 프로세스 안에 녹입니다.</p>
          </article>
          <article>
            <DatabaseZap size={24} />
            <h3>관제와 비용 최적화</h3>
            <p>사용량, 성능, 장애 징후를 빠르게 보고 개선할 수 있게 만듭니다.</p>
          </article>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>멀티 클라우드와 AI 운영 전환을 함께 설계하겠습니다.</h2>
          <p>
            현재 클라우드 환경, 목표 아키텍처, AI 또는 Kubernetes 운영 과제를 보내주시면
            필요한 구축 범위와 실행 일정을 정리해드립니다.
          </p>
        </div>
        <div className="contact-box">
          <a href="mailto:kjy5894@logos.co.kr">
            <Mail size={20} />
            kjy5894@logos.co.kr
          </a>
          <span>
            <Building2 size={20} />
            Multi cloud and AI infrastructure
          </span>
          <span>
            <Target size={20} />
            클라우드 운영, 구축, 전환, 고도화
          </span>
          <span>
            <Workflow size={20} />
            상담 후 맞춤 제안
          </span>
        </div>
      </section>

      <footer className="site-footer">
        <strong>Logos Cloud</strong>
        <span>© 2026 Logos Cloud. Multi cloud, AI and Kubernetes operations.</span>
        <span>
          <BadgeCheck size={16} />
          www.logoscloud.kr
        </span>
      </footer>
    </main>
  );
}
