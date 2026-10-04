"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { skillsProjects, SkillProject } from "@/lib/content";
import { CheckCircle2, RefreshCw, Cpu, Shield, ArrowDownRight } from "lucide-react";

export default function ProjectsPage() {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { key: "all", zh: "全部系统", en: "All Systems" },
    { key: "Amazon", zh: "Amazon 运营", en: "Amazon Ops" },
    { key: "AI & Work OS", zh: "AI & 调度层", en: "AI & Work OS" },
    { key: "Content & Wiki", zh: "内容与知识库", en: "Content & Knowledge" },
  ];

  const filteredProjects = skillsProjects.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  return (
    <main id="main">
      <header className="py-12 border-b border-line mb-8">
        <div className="wrap">
          <span className="eyebrow">
            {t("智能体 · 工作流 · 技能契约", "AGENTS · WORKFLOWS · CONTRACTS")}
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold m-0 mb-3">
            {t("让经验变成可重复调用的系统", "Codified Operational Leverage")}
          </h1>
          <p className="text-muted text-base max-w-2xl m-0">
            {t(
              "我不把简单的‘提示词收藏’当作成果。每一个在这里列出的 Skill 与工作流，都经过真实业务场景打磨，具备明确输入、处理方法、交付验收标准与严格的安全停机边界。",
              "These are not prompts; they are operational workflows refined through frontline commerce. Explicit inputs, methods, gates, and immutable safety rules."
            )}
          </p>
        </div>
      </header>

      <div className="wrap mb-16">
        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`btn sm !rounded-full ${
                  activeCategory === cat.key ? "primary" : "ghost"
                }`}
                type="button"
              >
                {lang === "zh" ? cat.zh : cat.en}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 text-xs font-sans text-muted">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-accent inline-block" />
              {t("已验证 (生产使用)", "Verified")}
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
              {t("持续迭代 (打磨中)", "Iterating")}
            </span>
          </div>
        </div>

        {/* Project Detailed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-lg border border-line bg-surface flex flex-col hover:border-accent transition-colors"
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-xs text-muted">
                  #{project.index} · {project.category}
                </span>
                <span
                  className={`text-xs px-2.5 py-0.5 rounded font-sans font-medium ${
                    project.status === "verified"
                      ? "bg-accent/10 text-accent"
                      : "bg-amber-500/10 text-amber-600"
                  }`}
                >
                  {project.statusText[lang]}
                </span>
              </div>

              <h2 className="text-xl font-semibold text-ink m-0 mb-2">
                {project.title[lang]}
              </h2>

              <p className="text-sm text-muted mb-4 font-sans leading-relaxed">
                {project.summary[lang]}
              </p>

              {/* Specs Box */}
              <div className="bg-bg rounded-md p-4 space-y-3 text-xs font-sans border border-line mb-4">
                <div>
                  <strong className="text-accent block mb-0.5">
                    {t("解决的真实痛点：", "Friction Addressed:")}
                  </strong>
                  <span className="text-muted leading-relaxed">
                    {project.problem[lang]}
                  </span>
                </div>

                <div>
                  <strong className="text-accent block mb-0.5">
                    {t("处理逻辑与方法：", "Methodology:")}
                  </strong>
                  <span className="text-muted leading-relaxed">
                    {project.method[lang]}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-line">
                  <div>
                    <strong className="text-ink block mb-0.5">
                      {t("输入真实源：", "Input Source:")}
                    </strong>
                    <span className="text-muted">{project.input[lang]}</span>
                  </div>
                  <div>
                    <strong className="text-ink block mb-0.5">
                      {t("交付产物：", "Deliverables:")}
                    </strong>
                    <span className="text-muted">{project.output[lang]}</span>
                  </div>
                </div>
              </div>

              {/* Boundary / Safety Rule */}
              <div className="mt-auto pt-3 border-t border-dashed border-line text-xs font-sans text-faint flex items-start gap-1.5">
                <Shield className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                <div>
                  <strong className="text-ink">
                    {t("安全停机边界：", "Safety Gate: ")}
                  </strong>
                  <span>{project.boundary[lang]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
