import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  Building2,
  Check,
  CloudCog,
  DatabaseZap,
  Gauge,
  GitBranch,
  Layers3,
  Mail,
  Network,
  ShieldCheck,
  Workflow
} from "lucide-react";

const capabilities = [
  {
    icon: CloudCog,
    title: "Enterprise ITO 운영",
    description:
      "서버, 네트워크, 데이터베이스, 미들웨어, 클라우드 운영을 하나의 관제 흐름으로 정리하고 장애 대응 시간을 줄입니다."
  },
  {
    icon: BrainCircuit,
    title: "AI 기반 운영 고도화",
    description:
      "로그, 지표, 알림 데이터를 AI 분석 흐름과 연결해 반복 점검, 이상 징후 탐지, 운영 리포팅을 자동화합니다."
  },
  {
    icon: Layers3,
    title: "K8S Cloud Engineering",
    description:
      "Kubernetes, 컨테이너 플랫폼, GitOps, 모니터링, 보안 기준을 운영 현장에 맞게 설계하고 안정화합니다."
  }
];

const operations = [
  "24/7 운영 관제 체계",
  "장애 분석 및 재발 방지",
  "Kubernetes 플랫폼 운영",
  "AI 자동점검 리포트",
  "클라우드 비용/성능 최적화",
  "보안·컴플라이언스 기준화"
];

const process = [
  {
    title: "현황 진단",
    body: "현재 인프라, 운영 도구, 장애 이력, 알림 체계를 빠르게 파악해 개선 우선순위를 정합니다."
  },
  {
    title: "운영 표준화",
    body: "점검표, 대응 절차, 대시보드, 리포트 형식을 표준화해 누구나 같은 품질로 운영하게 만듭니다."
  },
  {
    title: "AI 자동화",
    body: "반복 점검과 이벤트 해석을 자동화하고, 필요한 알림만 선별해 운영자의 피로도를 낮춥니다."
  },
  {
    title: "지속 개선",
    body: "K8S, Cloud, 보안, 비용 지표를 주기적으로 개선하며 운영 품질을 장기적으로 끌어올립니다."
  }
];

const stacks = [
  "Kubernetes",
  "Cloud Native",
  "Prometheus",
  "Grafana",
  "GitOps",
  "Linux",
  "Database",
  "AI Ops"
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Logos Cloud 홈">
          <span className="brand-mark">
            <CloudCog size={22} />
          </span>
          <strong>Logos Cloud</strong>
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#capabilities">역량</a>
          <a href="#operations">운영</a>
          <a href="#process">방식</a>
          <a href="#contact">문의</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <Image
          className="hero-image"
          src="/logoscloud-ito-ai-k8s-hero.jpg"
          alt="기업 ITO 관제센터에서 AI와 Kubernetes Cloud 운영을 수행하는 전문 엔지니어 팀"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">
            <ShieldCheck size={16} />
            Enterprise ITO · AI Ops · K8S Cloud
          </p>
          <h1>기업 IT 운영을 AI와 Cloud Native 방식으로 선명하게 바꿉니다.</h1>
          <p className="hero-copy">
            Logos Cloud는 ITO 운영 경험, AI 자동화 역량, Kubernetes Cloud 엔지니어링을
            결합한 전문가 그룹입니다. 복잡한 운영 환경을 안정적이고 예측 가능한 체계로
            정리합니다.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#contact">
              운영 상담하기
              <ArrowRight size={18} />
            </a>
            <a className="secondary-link" href="#capabilities">핵심 역량 보기</a>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="핵심 지표">
        <div>
          <strong>ITO</strong>
          <span>기업 인프라 운영 전문성</span>
        </div>
        <div>
          <strong>AI</strong>
          <span>자동점검과 운영 분석 고도화</span>
        </div>
        <div>
          <strong>K8S</strong>
          <span>Cloud Native 플랫폼 엔지니어링</span>
        </div>
      </section>

      <section className="section intro-section">
        <div>
          <p className="section-kicker">Mission</p>
          <h2>운영은 더 조용하게, 장애 대응은 더 빠르게, 인프라는 더 단단하게.</h2>
        </div>
        <p>
          기업 IT 운영은 단순 유지보수가 아니라 서비스 신뢰도를 지키는 핵심 업무입니다.
          Logos Cloud는 현장 운영자의 관점에서 관제, 자동화, Kubernetes, Cloud, ��안을
          연결해 운영 품질을 끌어올립니다.
        </p>
      </section>

      <section className="section" id="capabilities">
        <div className="section-head">
          <p className="section-kicker">Capabilities</p>
          <h2>기업 운영 환경에 바로 적용되는 전문 역량</h2>
        </div>
        <div className="service-grid">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <article className="service-card" key={item.title}>
                <span>
                  <Icon size={24} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="feature-band" id="operations">
        <div className="feature-copy">
          <p className="section-kicker">Operating Model</p>
          <h2>관제, 자동화, 플랫폼 운영을 하나의 흐름으로 연결합니다.</h2>
          <p>
            알림이 많아도 중요한 신호를 놓치지 않도록 운영 기준을 정리하고, AI 분석과
            자동 리포팅으로 반복 업무를 줄입니다. K8S와 Cloud 환경은 안정성, 비용,
            보안을 함께 보며 운영합니다.
          </p>
        </div>
        <div className="ops-board" aria-label="운영 영역">
          {operations.map((item, index) => (
            <div className="ops-tile" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section stack-section">
        <div className="section-head">
          <p className="section-kicker">Stack</p>
          <h2>현장 운영에 필요한 기술을 실무 중심으로 다룹니다.</h2>
        </div>
        <div className="stack-grid">
          {stacks.map((stack) => (
            <span key={stack}>{stack}</span>
          ))}
        </div>
      </section>

      <section className="section" id="process">
        <div className="section-head">
          <p className="section-kicker">Process</p>
          <h2>운영 환경을 진단하고 자동화까지 이어가는 방식</h2>
        </div>
        <div className="process-list">
          {process.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section evidence-section">
        <div className="section-head">
          <p className="section-kicker">Expert Group</p>
          <h2>K8S Cloud 엔지니어들이 운영의 기준을 세웁니다.</h2>
        </div>
        <div className="evidence-grid">
          <article>
            <Network size={24} />
            <h3>인프라 전체 시야</h3>
            <p>서버, 네트워크, 보안, 클라우드, 애플리케이션 지표를 함께 보며 원인을 좁힙니다.</p>
          </article>
          <article>
            <Gauge size={24} />
            <h3>운영 품질 지표화</h3>
            <p>장애, 성능, 비용, 알림 품질을 지표로 만들고 개선 여부를 추적합니다.</p>
          </article>
          <article>
            <DatabaseZap size={24} />
            <h3>자동화 가능한 운영</h3>
            <p>반복 점검과 보고를 자동화해 엔지니어가 더 중요한 판단에 집중하도록 합니다.</p>
          </article>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>기업 운영 환경을 더 안정적인 Cloud Native 체계로 바꾸고 싶다면.</h2>
          <p>
            현재 운영 중인 인프라, Kubernetes 클러스터, 장애 이력, 자동화 목표를 알려주시면
            필요한 진단 범위와 개선 방향을 정리해드리겠습니다.
          </p>
        </div>
        <div className="contact-box">
          <a href="mailto:hello@logoscloud.co.kr">
            <Mail size={20} />
            hello@logoscloud.co.kr
          </a>
          <span>
            <Building2 size={20} />
            Enterprise ITO Consulting
          </span>
          <span>
            <GitBranch size={20} />
            Kubernetes & Cloud Native
          </span>
          <span>
            <Workflow size={20} />
            AI Ops Automation
          </span>
        </div>
      </section>

      <footer className="site-footer">
        <strong>Logos Cloud</strong>
        <span>© 2026 Logos Cloud. Enterprise ITO, AI Ops and K8S Cloud Engineering.</span>
        <span>
          <BadgeCheck size={16} />
          www.logoscloud.co.kr
        </span>
      </footer>
    </main>
  );
}
