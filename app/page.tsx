"use client";

import { CalendarDays, CheckCircle2, LogOut, Plus, Send, Users } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase";
import type { Profile, WeeklyReport } from "@/lib/types";

const supabase = createClient();

function getMonday(value = new Date()) {
  const date = new Date(value);
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  date.setDate(diff);
  return date.toISOString().slice(0, 10);
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState<Profile | null>(null);
  const [reports, setReports] = useState<WeeklyReport[]>([]);
  const [weekStart, setWeekStart] = useState(getMonday());
  const [achievements, setAchievements] = useState("");
  const [plans, setPlans] = useState("");
  const [blockers, setBlockers] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const metrics = useMemo(() => {
    const submitted = reports.filter((report) => report.status !== "draft").length;
    const reviewed = reports.filter((report) => report.status === "reviewed").length;
    return {
      total: reports.length,
      submitted,
      reviewed,
      pending: Math.max(0, 15 - submitted)
    };
  }, [reports]);

  async function loadSession() {
    setLoading(true);
    const { data } = await supabase.auth.getUser();
    if (!data.user) {
      setProfile(null);
      setLoading(false);
      return;
    }

    const { data: profileData } = await supabase
      .from("profiles")
      .select("id, full_name, department, role")
      .eq("id", data.user.id)
      .single();

    setProfile(profileData);
    await loadReports(profileData);
    setLoading(false);
  }

  async function loadReports(currentProfile = profile) {
    if (!currentProfile) return;
    const query = supabase
      .from("weekly_reports")
      .select("*, profiles(full_name, department)")
      .order("week_start", { ascending: false })
      .order("updated_at", { ascending: false });

    const { data, error } =
      currentProfile.role === "admin" ? await query : await query.eq("user_id", currentProfile.id);

    if (error) {
      setMessage(error.message);
      return;
    }

    setReports(data ?? []);
  }

  async function signIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setMessage(error.message);
      return;
    }
    await loadSession();
  }

  async function signOut() {
    await supabase.auth.signOut();
    setProfile(null);
    setReports([]);
  }

  async function saveReport(status: "draft" | "submitted") {
    if (!profile) return;
    setMessage("");
    const payload = {
      user_id: profile.id,
      week_start: weekStart,
      achievements,
      plans,
      blockers,
      status
    };

    const { error } = await supabase
      .from("weekly_reports")
      .upsert(payload, { onConflict: "user_id,week_start" });

    if (error) {
      setMessage(error.message);
      return;
    }

    setAchievements("");
    setPlans("");
    setBlockers("");
    setMessage(status === "submitted" ? "주간보고가 제출되었습니다." : "임시 저장되었습니다.");
    await loadReports();
  }

  async function markReviewed(report: WeeklyReport) {
    const { error } = await supabase
      .from("weekly_reports")
      .update({ status: "reviewed" })
      .eq("id", report.id);

    if (error) {
      setMessage(error.message);
      return;
    }
    await loadReports();
  }

  useEffect(() => {
    loadSession();
  }, []);

  if (loading) {
    return <main className="main">불러오는 중...</main>;
  }

  if (!profile) {
    return (
      <main className="auth-box panel">
        <p className="eyebrow">logoscloud.co.kr</p>
        <h1>주간보고 로그인</h1>
        <p className="subtle">관리자가 발급한 계정으로 로그인하세요.</p>
        <form onSubmit={signIn}>
          <div className="field">
            <label htmlFor="email">이메일</label>
            <input
              className="input"
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="password">비밀번호</label>
            <input
              className="input"
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <button className="btn primary" type="submit">
            <CheckCircle2 size={18} />
            로그인
          </button>
        </form>
        {message ? <p className="notice">{message}</p> : null}
      </main>
    );
  }

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">LC</div>
          <div>
            <p className="brand-title">LogosCloud</p>
            <span className="subtle">Weekly Board</span>
          </div>
        </div>
        <nav className="nav">
          <a className="active" href="#reports">주간보고</a>
          <a href="#compose">작성</a>
          <a href="#members">구성원</a>
        </nav>
      </aside>

      <main className="main">
        <div className="topbar">
          <div>
            <p className="eyebrow">팀 주간보고</p>
            <h1>{profile.role === "admin" ? "전체 현황 관리" : "내 보고 작성"}</h1>
            <p className="subtle">
              {profile.full_name} · {profile.department ?? "소속 미지정"}
            </p>
          </div>
          <button className="btn secondary" onClick={signOut} type="button">
            <LogOut size={17} />
            로그아웃
          </button>
        </div>

        <section className="metrics" aria-label="요약 지표">
          <div className="metric card">
            <strong>{metrics.total}</strong>
            <span className="subtle">보고서</span>
          </div>
          <div className="metric card">
            <strong>{metrics.submitted}</strong>
            <span className="subtle">제출</span>
          </div>
          <div className="metric card">
            <strong>{metrics.reviewed}</strong>
            <span className="subtle">검토 완료</span>
          </div>
          <div className="metric card">
            <strong>{metrics.pending}</strong>
            <span className="subtle">미제출 추정</span>
          </div>
        </section>

        <div className="grid">
          <section className="panel" id="compose">
            <div className="toolbar">
              <Plus size={20} />
              <h2>이번 주 보고 작성</h2>
            </div>
            <div className="field">
              <label htmlFor="week">주 시작일</label>
              <input
                className="input"
                id="week"
                type="date"
                value={weekStart}
                onChange={(event) => setWeekStart(event.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="achievements">이번 주 진행/완료</label>
              <textarea
                className="textarea"
                id="achievements"
                value={achievements}
                onChange={(event) => setAchievements(event.target.value)}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="plans">다음 주 계획</label>
              <textarea
                className="textarea"
                id="plans"
                value={plans}
                onChange={(event) => setPlans(event.target.value)}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="blockers">이슈/지원 요청</label>
              <textarea
                className="textarea"
                id="blockers"
                value={blockers}
                onChange={(event) => setBlockers(event.target.value)}
              />
            </div>
            <div className="toolbar">
              <button className="btn secondary" type="button" onClick={() => saveReport("draft")}>
                임시 저장
              </button>
              <button className="btn primary" type="button" onClick={() => saveReport("submitted")}>
                <Send size={17} />
                제출
              </button>
            </div>
            {message ? <p className="notice">{message}</p> : null}
          </section>

          <section className="panel" id="reports">
            <div className="toolbar">
              <CalendarDays size={20} />
              <h2>보고 목록</h2>
            </div>
            <div className="report-list">
              {reports.map((report) => (
                <article className="report card" key={report.id}>
                  <div className="report-head">
                    <div>
                      <strong>{report.profiles?.full_name ?? profile.full_name}</strong>
                      <p className="subtle">{report.week_start}</p>
                    </div>
                    <span className={`badge ${report.status === "draft" ? "warn" : ""}`}>
                      {report.status}
                    </span>
                  </div>
                  <div className="content-grid">
                    <div className="content-block">
                      <strong>완료</strong>
                      <span>{report.achievements}</span>
                    </div>
                    <div className="content-block">
                      <strong>계획</strong>
                      <span>{report.plans}</span>
                    </div>
                    <div className="content-block">
                      <strong>이슈</strong>
                      <span>{report.blockers || "없음"}</span>
                    </div>
                  </div>
                  {profile.role === "admin" && report.status !== "reviewed" ? (
                    <button
                      className="btn secondary"
                      type="button"
                      onClick={() => markReviewed(report)}
                    >
                      검토 완료
                    </button>
                  ) : null}
                </article>
              ))}
              {reports.length === 0 ? <p className="subtle">아직 등록된 보고가 없습니다.</p> : null}
            </div>
          </section>
        </div>

        <section className="panel" id="members" style={{ marginTop: 18 }}>
          <div className="toolbar">
            <Users size={20} />
            <h2>운영 방식</h2>
          </div>
          <p className="subtle">
            관리자는 Supabase Authentication에서 15개 계정을 만들고 profiles 테이블에 이름, 부서,
            권한을 등록합니다. 일반 사용자는 본인 보고만 보고, 관리자는 전체 보고를 확인합니다.
          </p>
        </section>
      </main>
    </div>
  );
}
