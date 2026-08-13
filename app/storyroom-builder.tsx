"use client";

import { useMemo, useState } from "react";
import { MessageSquare, Play, Send, Sparkles, UserRoundCheck, WandSparkles } from "lucide-react";
import "./storyroom-builder.module.css";

type StoryroomBuilderProps = {
  contactUrl: string;
};

const defaultPrompt =
  "라면 끓이는 영상을 45초 쇼츠 영상으로 만들고, 친근하고 맛있어 보이는 톤으로 장면 4개와 내레이션을 구성해줘.";

const fallbackScenes = [
  "시선을 잡는 오프닝 장면",
  "핵심 과정과 장점을 보여주는 장면",
  "결과물을 강조하는 클로즈업 장면",
  "행동을 유도하는 마무리 장면"
];

function pickTone(prompt: string) {
  if (/전문|B2B|기업|클라우드|Kubernetes|K8S|AI/i.test(prompt)) {
    return "신뢰감 있는 기업형 톤";
  }

  if (/쇼츠|짧|틱톡|릴스|재미|라면|요리/i.test(prompt)) {
    return "빠르고 생동감 있는 숏폼 톤";
  }

  if (/교육|강의|설명|가이드/i.test(prompt)) {
    return "차분하고 이해하기 쉬운 교육 톤";
  }

  return "명확하고 설득력 있는 소개 톤";
}

function buildScenes(prompt: string) {
  const cleanPrompt = prompt.trim();
  const subject = cleanPrompt
    .replace(/영상을|영상으로|만들어줘|구성해줘|제작해줘/g, "")
    .split(/[,.\n]/)[0]
    .trim();

  const title = subject.length > 0 ? subject.slice(0, 42) : "프롬프트 기반 영상";
  const tone = pickTone(cleanPrompt);

  return {
    title,
    tone,
    scenes: fallbackScenes.map((scene, index) => ({
      label: `Scene ${String(index + 1).padStart(2, "0")}`,
      title: index === 0 ? `${title} 오프닝` : scene,
      narration:
        index === 0
          ? `${title}의 핵심 메시지를 첫 화면에서 선명하게 보여줍니다.`
          : `${tone}으로 ${scene}을 자연스럽게 연결합니다.`
    }))
  };
}

export default function StoryroomBuilder({ contactUrl }: StoryroomBuilderProps) {
  const [prompt, setPrompt] = useState(defaultPrompt);
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [generatedPrompt, setGeneratedPrompt] = useState(defaultPrompt);

  const generated = useMemo(() => buildScenes(generatedPrompt), [generatedPrompt]);

  const handleGenerate = () => {
    const nextPrompt = prompt.trim() || defaultPrompt;
    setGeneratedPrompt(nextPrompt);
    setHasGenerated(false);
    setIsGenerating(true);

    window.setTimeout(() => {
      setIsGenerating(false);
      setHasGenerated(true);
    }, 900);
  };

  return (
    <form className="storyroom-panel" aria-label="AI 영상 스토리룸 제작 입력창" onSubmit={(event) => event.preventDefault()}>
      <div className="account-box">
        <UserRoundCheck size={28} />
        <div>
          <strong>Codex 계정으로 스토리 구성</strong>
          <span>나의 Codex 프롬프트 작업 방식에 맞춰 영상 스토리룸을 구성합니다.</span>
        </div>
      </div>

      <label className="prompt-box">
        <span>
          <MessageSquare size={18} />
          스토리 구성 생성 프롬프트
        </span>
        <textarea
          rows={7}
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          placeholder="예: Kubernetes 기반 멀티 클라우드 운영 서비스를 90초 B2B 소개 영상으로 만들고, 신뢰감 있는 톤으로 장면 5개와 내레이션을 구성해줘."
        />
      </label>

      <div className="builder-actions">
        <button type="button" onClick={handleGenerate} disabled={isGenerating}>
          <Sparkles size={18} />
          {isGenerating ? "영상 생성 중" : "영상 생성"}
        </button>
        <a href={contactUrl} target="_blank" rel="noreferrer">
          <Send size={18} />
          영상 제작 문의
        </a>
      </div>

      <section className={`generated-video ${hasGenerated ? "is-ready" : ""}`} aria-live="polite">
        <div className="video-stage">
          <div className="video-sky" />
          <div className="video-grid" />
          <div className="video-orbit one" />
          <div className="video-orbit two" />
          <div className="video-caption">
            <span>{isGenerating ? "Rendering" : hasGenerated ? "Generated Video" : "Preview"}</span>
            <strong>{isGenerating ? "프롬프트를 영상으로 변환 중" : generated.title}</strong>
          </div>
          <button className="video-play" type="button" aria-label="생성 영상 재생">
            {isGenerating ? <WandSparkles size={24} /> : <Play size={26} fill="currentColor" />}
          </button>
        </div>

        <div className="generation-status">
          <strong>{isGenerating ? "영상 스토리 구성 생성 중입니다." : hasGenerated ? "영상 미리보기가 생성되었습니다." : "프롬프트 입력 후 영상 생성 버튼을 누르세요."}</strong>
          <span>{hasGenerated ? generated.tone : "입력한 내용으로 장면, 내레이션, 화면 흐름을 자동 구성합니다."}</span>
        </div>

        {hasGenerated && (
          <div className="generated-scenes">
            {generated.scenes.map((scene) => (
              <article key={scene.label}>
                <span>{scene.label}</span>
                <strong>{scene.title}</strong>
                <p>{scene.narration}</p>
              </article>
            ))}
          </div>
        )}
      </section>
    </form>
  );
}
