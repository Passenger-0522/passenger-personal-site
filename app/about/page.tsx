"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { siteProfile, milestones } from "@/lib/content";
import { ArrowRight, CheckCircle2, Shield, Compass, BookOpen } from "lucide-react";

export default function AboutPage() {
  const { lang, t } = useLanguage();

  return (
    <main id="main">
      <header className="py-12 border-b border-line mb-8">
        <div className="wrap">
          <span className="eyebrow">{siteProfile.name[lang]}</span>
          <h1 className="text-3xl md:text-4xl font-semibold m-0 mb-3">
            {t("我想留下的不是做过什么，而是怎么做到", "About: Navigating Real Ops with AI")}
          </h1>
          <p className="text-muted text-base max-w-2xl m-0">
            {t(
              "从高强度口译训练，到货在海上的跨境电商，再到 AI 工作流架构师。",
              "From conference interpreting to cross-border logistics and AI systems."
            )}
          </p>
        </div>
      </header>

      <div className="wrap mb-16">
        {/* Bio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-10 items-start mb-14">
          <div>
            <div className="rounded-lg border border-line bg-surface overflow-hidden shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={siteProfile.heroImage}
                alt={siteProfile.name[lang]}
                className="w-full h-auto object-cover"
                width={240}
                height={320}
              />
            </div>
            <div className="mt-4 p-3 bg-code-bg rounded border border-line text-xs font-sans text-muted">
              <strong>{siteProfile.name[lang]}</strong>
              <div className="mt-1">{siteProfile.eyebrow[lang]}</div>
              <div className="mt-2 text-faint">
                {t("邮箱：", "Email: ")}
                <a
                  href={`mailto:${siteProfile.socials.email}`}
                  className="text-accent underline"
                >
                  {siteProfile.socials.email}
                </a>
              </div>
            </div>
          </div>

          <div className="prose">
            <h2>{t("从口译同传箱到跨境电商现场", "From the Interpreting Booth to Cross-Border Ops")}</h2>
            <p>
              {t(
                "在获得英语口译硕士学位期间，我接受了严苛的高保真信息重构训练：在极短的停顿内，穿透复杂的语言表层，抓住讲话者的底层核心诉求、逻辑关联与情绪语境。这一训练后来成为了我设计 AI 智能体与 Prompt 契约的底层母体——向大语言模型下发指令，绝非辞藻的堆砌，而是消除歧义的语义对齐。",
                "During my Master's training in Conference Interpreting, I developed an instinct for high-fidelity semantic transfer: cutting through verbal clutter in real time to capture true intent and core logic. That discipline proved indispensable when designing AI agent architectures—prompting LLMs is fundamentally about eliminating semantic ambiguity."
              )}
            </p>
            <p>
              {t(
                "离开象牙塔后，我投身于真实的跨境电商创业中。面对真实的供应链打样、头程运费、亚马逊站内广告竞价和现金流回款周期，任何纸上谈兵都会被现实狠狠击碎。这种物理世界的反馈回路，逼迫我不再迷信泛滥的 AI 概念，而是严格用‘输入真实性、完成证据与停机闸门’来衡量每一次自动化。",
                "Entering frontline Amazon e-commerce stripped away all academic illusions. Inventory on ocean freighters, fluctuating CPCs, and strict cashflow deadlines demanded ruthless empiricism. That friction taught me to treat AI not as a party trick, but as an operational system governed by strict inputs and stopping conditions."
              )}
            </p>

            <h2>{t("工作现场的三条准则", "Three Operating Axioms")}</h2>
            <div className="space-y-4 my-6">
              <div className="p-4 rounded-md border border-line bg-surface">
                <strong className="text-accent font-sans text-sm block mb-1">
                  01. {t("证据优先于推测 (Evidence First)", "Evidence Precedes Hypothesis")}
                </strong>
                <p className="text-sm text-muted m-0 font-sans leading-relaxed">
                  {t(
                    "绝不使用上一周的历史报表填补今天的空白；在源报表到达并校验通过前，冻结所有广告与价格调整建议。",
                    "Never plug today's data gaps with last week's snapshots. Freeze automated adjustments until fresh reports are cryptographically or temporally verified."
                  )}
                </p>
              </div>

              <div className="p-4 rounded-md border border-line bg-surface">
                <strong className="text-accent font-sans text-sm block mb-1">
                  02. {t("边界本身就是核心能力 (Boundaries Define Agency)", "Boundaries Define Agency")}
                </strong>
                <p className="text-sm text-muted m-0 font-sans leading-relaxed">
                  {t(
                    "一个成熟的 Skill 必须明确交代它绝不能做的事情：不篡改底层源数据、不越权修改账号、不把‘观察到排名变动’误当作‘证明了因果逻辑’。",
                    "A resilient agent is defined by what it refuses to do: never mutate root records, never invoke unverified write APIs, and never conflate correlation with causation."
                  )}
                </p>
              </div>

              <div className="p-4 rounded-md border border-line bg-surface">
                <strong className="text-accent font-sans text-sm block mb-1">
                  03. {t("内容是业务的转化层 (Content as Leverage)", "Content as Operational Leverage")}
                </strong>
                <p className="text-sm text-muted m-0 font-sans leading-relaxed">
                  {t(
                    "写文章和复盘不是为了展示虚名，而是把一次惨痛的踩坑与返工，沉淀为一套下次任何人（或 AI）都能安全执行的防错规则。",
                    "Writing field notes is not vanity; it is the process of extracting reusable fail-safes and reproducible checklists from operational setbacks."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Career Timeline */}
        <section className="mb-14 pt-8 border-t border-line">
          <h2 className="text-2xl font-semibold mb-6">
            {t("经历与演进 (Timeline)", "Timeline & Milestones")}
          </h2>
          <div className="space-y-6">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-4 p-4 rounded-md border border-line bg-surface"
              >
                <time className="font-mono text-sm font-semibold text-accent">
                  {m.year}
                </time>
                <div>
                  <h3 className="text-base font-semibold text-ink m-0 mb-1">
                    {m.role[lang]}
                  </h3>
                  <p className="text-sm text-muted m-0 font-sans">
                    {m.desc[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Now Section */}
        <section className="p-8 rounded-lg border border-line bg-surface">
          <div className="flex items-center gap-2 mb-4">
            <Compass className="w-5 h-5 text-accent" />
            <h2 className="text-xl font-semibold m-0">{t("现在进行时 · Now", "Now · Current Focus")}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm font-sans">
            <div>
              <span className="text-xs font-mono text-accent font-semibold block mb-1">
                BUILDING
              </span>
              <strong className="block text-ink mb-1">
                {t("Amazon 智能体调度系统", "Amazon Agent Orchestration")}
              </strong>
              <p className="text-muted text-xs leading-relaxed m-0">
                {t("将新品启动、竞品追踪与广告状态机接入轻量级工作台。", "Integrating launch SOPs and keyword telemetry into a unified cockpit.")}
              </p>
            </div>
            <div>
              <span className="text-xs font-mono text-accent font-semibold block mb-1">
                WRITING
              </span>
              <strong className="block text-ink mb-1">
                {t("《AI 时代的工作契约》系列", "Operational Contracts Series")}
              </strong>
              <p className="text-muted text-xs leading-relaxed m-0">
                {t("总结从提示词到四层 Skill 流水线的实战心得与反思。", "Deconstructing prompt fallacies into deterministic execution pipelines.")}
              </p>
            </div>
            <div>
              <span className="text-xs font-mono text-accent font-semibold block mb-1">
                ORGANIZING
              </span>
              <strong className="block text-ink mb-1">
                {t("Obsidian 第二大脑自动化", "Obsidian Second Brain Automation")}
              </strong>
              <p className="text-muted text-xs leading-relaxed m-0">
                {t("通过安全脚本批量校验元数据与双链结构，保持知识库生长。", "Safe metadata diffing and automated synthesis across personal wiki notes.")}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
