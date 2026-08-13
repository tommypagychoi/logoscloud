import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  Building2,
  Check,
  Cloud,
  ExternalLink,
  FileText,
  Film,
  Mail,
  MessageSquare,
  Network,
  Play,
  Send,
  ServerCog,
  Sparkles,
  Target,
  Workflow
} from "lucide-react";

const contactUrl = "https://tosky.co.kr/ko/contact/";

const services = [
  {
    icon: Cloud,
    title: "멀티 클라우드 운영과 구축",
    description: "AWS, Azure, GCP, 프라이빗 클라우드를 목적에 맞게 설계하고 안정적인 운영 체계로 연결합니다."
  },
  {
    icon: BrainCircuit,
    title: "AI Agent 서비스 빌더",
    description: "업무 데이터와 프롬프트를 연결해 기업 환경에 맞는 AI Agent와 자동화 서비스를 설계합니다."
  },
  {
    icon: Film,
    title: "AI 영상 스토리룸",
    description: "PDF, 제안서, 교육자료를 업로드하고 프롬프트로 영상 스토리와 장면 구성을 빠르게 만듭니다."
  }
];

const process = [
  "자료 업로드",
  "프롬프트 설계",
  "스토리보드 생성",
  "영상 제작 문의"
];

const capabilities = [
  {
    name: "Multi Cloud",
    target: "멀티 클라우드 cloud",
    items: ["클라우드 계정/네트워크 진단", "표준 아키텍처 설계", "운영 전환 로드맵"]
  },
  {
    name: "AI Leading",
    target: "AI 선두를 이끌어 가는 기업",
    items: ["AI Agent 전략", "Knowledge 기반 구축", "프롬프트 워크플로우 설계"]
  },
  {
    name: "StoryRoom",
    target: "PDF 자료를 영상 스토리로 전환",
    items: ["문서 요약", "장면 구성", "영상 제작 도입 문의"]
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
          <a href="#storyroom">StoryRoom</a>
          <a href="#process">프로세스</a>
          <a href="#contact">문의</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <Image
          className="hero-image"
          src="/logoscloud-cloud-ai-hero.svg"
          alt="AI 영상 스토리룸과 멀티 클라우드 운영 대시보드"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">
            <Sparkles size={16} />
            AI Service Builder · StoryRoom · Multi Cloud
          </p>
          <h1>문서를 AI 영상 스토리룸으로 바꾸는 클라우드 플랫폼</h1>
          <p className="hero-copy">
            Logos Cloud는 PDF와 업무 자료를 업로드하고 프롬프트를 입력해 영상 스토리 구성까지 이어지는
            AI Service Builder 화면을 제공합니다. 멀티 클라우드 운영과 AI 구축 역량으로 기업의 AX 전환을 지원합니다.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href={contactUrl} target="_blank" rel="noreferrer">
              제품 도입 문의
              <ExternalLink size={18} />
            </a>
            <a className="secondary-link" href="#storyroom">StoryRoom 체험 화면</a>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="핵심 강점">
        <div>
          <strong>PDF</strong>
          <span>파일 업로드 기반 영상 기획</span>
        </div>
        <div>
          <strong>Prompt</strong>
          <span>프롬프트로 장면과 톤 설정</span>
        </div>
        <div>
          <strong>Cloud</strong>
          <span>멀티 클라우드와 AI 운영 기반</span>
        </div>
      </section>

      <section className="section intro-section">
        <div>
          <p className="section-kicker">Why Logos Cloud</p>
          <h2>자료를 올리고 원하는 방향을 입력하면 영상 스토리가 시작됩니다.</h2>
        </div>
        <p>
          제안서, 제품소개서, 교육자료처럼 이미 만들어둔 문서를 다시 영상으로 설명해야 할 때가 많습니다.
          Logos Cloud는 자료 업로드, 프롬프트 입력, 장면 설계, 제작 문의까지 한 화면에서 이어지는 StoryRoom 경험을 제공합니다.
        </p>
      </section>

      <section className="section" id="services">
        <div className="section-head">
          <p className="section-kicker">Services</p>
          <h2>AI 영상 제작과 클라우드 운영에 필요한 핵심 서비스</h2>
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

      <section className="storyroom-section" id="storyroom">
        <div className="storyroom-copy">
          <p className="section-kicker">StoryRoom Builder</p>
          <h2>PDF 파일과 프롬프트로 영상 스토리룸을 만드는 화면</h2>
          <p>
            사용자는 보통 PDF 같은 파일을 업로드하고, 원하는 영상 목적과 톤을 프롬프트로 입력합니다.
            StoryRoom은 핵심 메시지, 장면 흐름, 내레이션 방향을 정리해 제품 소개나 교육 영상 제작으로 연결합니다.
          </p>
          <a className="primary-link storyroom-link" href={contactUrl} target="_blank" rel="noreferrer">
            제품 도입 문의
            <ExternalLink size={18} />
          </a>
        </div>

        <form className="storyroom-panel" aria-label="AI 영상 스토리룸 제작 입력창">
          <div className="upload-box">
            <FileText size={34} />
            <strong>PDF 또는 업무 자료 업로드</strong>
            <span>PDF, PPT, DOC, TXT 파일을 기반으로 영상 스토리를 구성합니다.</span>
            <input type="file" accept=".pdf,.ppt,.pptx,.doc,.docx,.txt" aria-label="파일 업로드" />
          </div>

          <label className="prompt-box">
            <span>
              <MessageSquare size={18} />
              프롬프트 입력
            </span>
            <textarea
              rows={7}
              placeholder="예: 이 제품소개서를 90초 분량의 B2B 영업 영상으로 만들고, 신뢰감 있는 톤으로 핵심 장면 5개와 내레이션을 구성해줘."
            />
          </label>

          <div className="builder-actions">
            <button type="button">
              <Sparkles size={18} />
              스토리 구성 생성
            </button>
            <a href={contactUrl} target="_blank" rel="noreferrer">
              <Send size={18} />
              도입 문의로 연결
            </a>
          </div>
        </form>
      </section>

      <section className="story-preview" aria-label="영상 스토리룸 미리보기">
        <div className="preview-player">
          <span className="play-mark">
            <Play size={30} fill="currentColor" />
          </span>
          <div>
            <p className="section-kicker">Generated Story</p>
            <h2>업로드 문서 기반 영상 시나리오 미리보기</h2>
          </div>
        </div>
        <div className="scene-list">
          <article>
            <span>01</span>
            <h3>문제 정의</h3>
            <p>업로드한 PDF에서 고객의 핵심 문제와 시장 배경을 추출합니다.</p>
          </article>
          <article>
            <span>02</span>
            <h3>솔루션 소개</h3>
            <p>제품 강점과 차별점을 영상 장면 단위로 정리합니다.</p>
          </article>
          <article>
            <span>03</span>
            <h3>도입 효과</h3>
            <p>비즈니스 성과, 운영 효율, AI 활용 가치를 설득력 있게 구성합니다.</p>
          </article>
        </div>
      </section>

      <section className="feature-band">
        <div className="feature-copy">
          <p className="section-kicker">Cloud Operating Model</p>
          <h2>StoryRoom 뒤에는 안정적인 멀티 클라우드와 AI 운영 기반이 필요합니다.</h2>
          <p>
            클라우드 리소스, 컨테이너 플랫폼, AI 운영 환경을 표준화해 기업형 AI 서비스를 안정적으로 확장할 수 있게 설계합니다.
          </p>
        </div>
        <div className="brand-board" aria-label="클라우드 운영 구성 요소">
          <div className="board-tile dark">
            <Network size={34} />
            <span>Multi Cloud</span>
          </div>
          <div className="board-tile blue">AI Agent</div>
          <div className="board-tile teal">StoryRoom</div>
          <div className="board-tile yellow">K8S</div>
          <div className="board-tile wide">Logos Cloud</div>
          <div className="board-tile line">Secure Operations</div>
        </div>
      </section>

      <section className="section" id="process">
        <div className="section-head">
          <p className="section-kicker">Process</p>
          <h2>자료 업로드부터 영상 제작 문의까지 이어지는 흐름</h2>
        </div>
        <div className="process-list">
          {process.map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item}</h3>
              <p>
                {index === 0 && "PDF, 제안서, 교육자료 등 영상으로 바꿀 원본 파일을 업로드합니다."}
                {index === 1 && "영상 목적, 대상 고객, 톤앤매너, 분량을 프롬프트로 입력합니다."}
                {index === 2 && "핵심 메시지와 장면 흐름, 내레이션 방향을 스토리룸으로 구성합니다."}
                {index === 3 && "구체적인 제작 범위는 제품 도입 문의 페이지에서 상담으로 연결합니다."}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="packages">
        <div className="section-head">
          <p className="section-kicker">Capabilities</p>
          <h2>사업 단계에 맞춰 선택하는 AI 도입 범위</h2>
        </div>
        <div className="package-grid">
          {capabilities.map((item) => (
            <article className="package-card" key={item.name}>
              <div>
                <ServerCog size={22} />
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
          <h2>AI 영상 스토리룸과 멀티 클라우드 도입을 함께 설계하겠습니다.</h2>
          <p>
            현재 보유한 PDF 자료, 만들고 싶은 영상 목적, 클라우드 운영 환경을 보내주시면 필요한 구축 범위와 도입 일정을 정리해드립니다.
          </p>
        </div>
        <div className="contact-box">
          <a href="mailto:kjy5894@logosin.co.kr">
            <Mail size={20} />
            kjy5894@logosin.co.kr
          </a>
          <a href={contactUrl} target="_blank" rel="noreferrer">
            <ExternalLink size={20} />
            제품 도입 문의
          </a>
          <span>
            <Building2 size={20} />
            AI video StoryRoom and multi cloud
          </span>
          <span>
            <Target size={20} />
            PDF 기반 영상 기획, AI Agent, K8S 운영
          </span>
          <span>
            <Workflow size={20} />
            상담 후 맞춤 제안
          </span>
        </div>
      </section>

      <footer className="site-footer">
        <strong>Logos Cloud</strong>
        <span>© 2026 Logos Cloud. AI StoryRoom, multi cloud and Kubernetes operations.</span>
        <span>
          <BadgeCheck size={16} />
          www.logoscloud.kr
        </span>
      </footer>
    </main>
  );
}
