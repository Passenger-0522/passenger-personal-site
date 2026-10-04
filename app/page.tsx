"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import {
  siteProfile,
  milestones,
  articles,
  skillsProjects,
} from "@/lib/content";
import {
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Clock,
  Layers,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  const { lang, t } = useLanguage();
  const featuredArticles = articles.slice(0, 4);
  const featuredSkills = skillsProjects.slice(0, 4);

  return (
    <main id="main">
      <div className="wrap">
        {/* Hero Section */}
        <section className="hero">
          <div>
            <span className="eyebrow">{siteProfile.eyebrow[lang]}</span>
            <h1>
              {lang === "zh" ? (
                <>
                  在真实运营里，
                  <br />
                  把 AI 变成<span>可执行的工作流</span>。
                </>
              ) : (
                <>
                  Verifiable AI Workflows
                  <br />
                  In Real-World Operations.
                </>
              )}
            </h1>
            <p className="motto">
              {siteProfile.motto[lang]}
              <cite>{siteProfile.mottoCite[lang]}</cite>
            </p>
            <p className="lede">{siteProfile.lede[lang]}</p>

            <div className="actions">
              <Link className="btn primary" href="/projects">
                {t("查看工作流与 Skills", "Explore Workflows")}
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
              <Link className="btn ghost" href="/blogs">
                {t("阅读实战手记", "Read Field Notes")}
              </Link>
              <Link className="btn ghost" href="/about">
                {t("关于经历与原则", "About & Principles")}
              </Link>
            </div>

            <div className="social-icons">
              <a
                href={siteProfile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href={siteProfile.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                title="X / Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a
                href={siteProfile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href={`mailto:${siteProfile.socials.email}`} title="Email">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>

          <div className="hero-art">
            <div className="hero-art-box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={siteProfile.heroImage}
                alt={siteProfile.name[lang]}
                className="w-full h-auto object-cover"
                width={280}
                height={373}
              />
            </div>
          </div>
        </section>

        {/* Milestone Meta Row */}
        <section className="meta-row">
          {milestones.map((m) => (
            <div className="meta-card" key={m.year}>
              <strong>
                {m.year} · {m.role[lang]}
              </strong>
              <p>{m.desc[lang]}</p>
            </div>
          ))}
        </section>

        {/* Operating Loop Section */}
        <section className="operating-loop-box">
          <div className="flex justify-between items-baseline flex-wrap gap-2">
            <div>
              <span className="eyebrow">{t("工作闭环", "OPERATING LOOP")}</span>
              <h2 className="text-xl font-semibold m-0">
                {t("从真实问题到可复用资产", "From Real Friction to Verifiable Assets")}
              </h2>
            </div>
            <span className="text-xs font-mono text-muted bg-code-bg px-2 py-1 rounded">
              SYSTEM V1.0
            </span>
          </div>

          <div className="loop-steps">
            <div className="loop-step">
              <span>01</span>
              <strong>{t("真实业务", "Real Ops")}</strong>
              <small>{t("从一线痛点与摩擦开始", "Starts with genuine operational pain")}</small>
            </div>
            <div className="loop-step">
              <span>02</span>
              <strong>{t("工作流拆解", "Workflow")}</strong>
              <small>{t("把判断、依赖与动作拆开", "Decouples judgment from mechanical tasks")}</small>
            </div>
            <div className="loop-step">
              <span>03</span>
              <strong>{t("Skill 契约", "Contract")}</strong>
              <small>{t("固定输入、输出与安全边界", "Anchors truth source, outputs & limits")}</small>
            </div>
            <div className="loop-step">
              <span>04</span>
              <strong>{t("证据闸门", "Evidence Gate")}</strong>
              <small>{t("时效不足则冻结决策建议", "Stale data blocks automated action")}</small>
            </div>
            <div className="loop-step">
              <span>05</span>
              <strong>{t("经验沉淀", "Knowledge OS")}</strong>
              <small>{t("让一次踩坑变成复用能力", "Turns hard-earned lessons into leverage")}</small>
            </div>
          </div>
        </section>

        {/* Blogs Section */}
        <section className="mb-14">
          <div className="section-head">
            <h2>{t("手记 · 思考与复盘", "Field Notes & Writing")}</h2>
            <Link href="/blogs" className="flex items-center gap-1 group">
              {t("全部手记", "All Notes")}
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="post-list">
            {featuredArticles.map((article) => (
              <Link
                key={article.slug}
                className="post-card"
                href={`/blogs/${article.slug}`}
              >
                <time>{article.date}</time>
                <div>
                  <h3>{article.title[lang]}</h3>
                  <p>{article.excerpt[lang]}</p>
                  <div className="flex gap-2 mt-2">
                    <span className="text-xs text-muted font-sans bg-code-bg px-2 py-0.5 rounded">
                      {lang === "zh" ? article.category : article.categoryEn}
                    </span>
                    <span className="text-xs text-muted font-sans flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime[lang]}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Workflows & Projects Section */}
        <section className="mb-16">
          <div className="section-head">
            <h2>{t("工作流与智能体 (Workflows & Skills)", "Workflows & Skills")}</h2>
            <Link href="/projects" className="flex items-center gap-1 group">
              {t("查看全部系统", "All Systems")}
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="project-grid">
            {featuredSkills.map((p) => (
              <div key={p.id} className="project-card">
                <div className="project-meta">
                  <span className="project-tag">{p.category}</span>
                  <span
                    className={`project-status ${
                      p.status === "verified" ? "verified" : "iterating"
                    }`}
                  >
                    {p.statusText[lang]}
                  </span>
                </div>
                <h3>{p.title[lang]}</h3>
                <p>{p.summary[lang]}</p>
                <div className="project-boundary">
                  <strong>{t("边界约定：", "Boundary: ")}</strong>
                  {p.boundary[lang]}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work OS Architecture Box */}
        <section className="mb-16 p-8 rounded-lg border border-line bg-surface">
          <div className="max-w-2xl">
            <span className="eyebrow">{t("系统架构", "WORK OS ARCHITECTURE")}</span>
            <h2 className="text-2xl font-semibold mb-3">
              {t("真正缺的不是更多工具，而是稳定入口与证据闭环", "What We Lack Is Dispatch & Evidence, Not More Tools")}
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-6">
              {t(
                "当流量、财务、竞品与内容各自独立存在，上层需要的不是重新造轮子，而是一个轻量级的 Work OS 调度层——知道今天数据是否新鲜、从哪里切入、哪一步必须等待人工确认。",
                "When traffic, finance, competitors, and content live separately, the upper layer needs a lean dispatcher rather than a monolith—tracking freshness, entrypoints, and human-in-the-loop gates."
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-line">
            <div className="p-4 rounded border border-line bg-bg">
              <span className="text-xs font-mono text-accent">MODULE 01</span>
              <strong className="block text-sm mt-1">{t("流量与广告", "Traffic & Ads")}</strong>
              <small className="text-xs text-muted">{t("小时级波动与搜索词库", "Hourly shifts & query bank")}</small>
            </div>
            <div className="p-4 rounded border border-line bg-bg">
              <span className="text-xs font-mono text-accent">MODULE 02</span>
              <strong className="block text-sm mt-1">{t("利润与现金流", "Margins & Cashflow")}</strong>
              <small className="text-xs text-muted">{t("采购、头程与回款周期", "Supply costs & payout cycles")}</small>
            </div>
            <div className="p-4 rounded border border-line bg-bg">
              <span className="text-xs font-mono text-accent">MODULE 03</span>
              <strong className="block text-sm mt-1">{t("竞品与市场", "Competitors & Intel")}</strong>
              <small className="text-xs text-muted">{t("快照追踪与证据链核验", "Snapshots & verified claims")}</small>
            </div>
            <div className="p-4 rounded border border-line bg-bg">
              <span className="text-xs font-mono text-accent">MODULE 04</span>
              <strong className="block text-sm mt-1">{t("内容与知识库", "Content & Wiki OS")}</strong>
              <small className="text-xs text-muted">{t("母稿分发与双向链接沉淀", "Source draft & knowledge link")}</small>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
