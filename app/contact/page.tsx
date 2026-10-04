"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { siteProfile } from "@/lib/content";
import {
  Mail,
  Send,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon, XIcon, LinkedinIcon, MailIcon } from "@/components/Icons";

export default function ContactPage() {
  const { lang, t } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "ai-workflow",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main id="main">
      <header className="py-12 border-b border-line mb-8">
        <div className="wrap">
          <span className="eyebrow">{t("交流与合作", "WORK WITH ME")}</span>
          <h1 className="text-3xl md:text-4xl font-semibold m-0 mb-3">
            {t("联系与咨询", "Contact & Consultation")}
          </h1>
          <p className="text-muted text-base max-w-2xl m-0">
            {t(
              "欢迎交流关于 AI 工作流共创、亚马逊精细化运营、Agent 提示词契约、知识库自动化或内容合作的事项。我会认真阅读并回复每一封真诚的来信。",
              "Open for consulting on AI workflows, cross-border operations, agent contract design, knowledge base orchestration, and speaking engagements."
            )}
          </p>
        </div>
      </header>

      <div className="wrap mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Consultation Info Card */}
          <section className="p-8 rounded-lg border border-line bg-surface flex flex-col">
            <span className="eyebrow">{t("合作咨询", "CONSULTATION")}</span>
            <h2 className="text-2xl font-semibold mb-3">
              {t("我很乐意提供帮助", "I'd Love to Help")}
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-6 font-sans">
              {t(
                "请告诉我你当前在业务或系统中卡住的具体问题。无论是如何把分散的 SOP 变成可靠的 Skill，还是如何搭建本地运营数据闸门，我都会梳理出清晰的分析和切实可行的步骤建议。",
                "Let me know what you're stuck on. Whether it's translating messy SOPs into auditable agent workflows, or designing an evidence gate for your analytics cockpit, I'll provide structured, actionable feedback."
              )}
            </p>

            <ul className="space-y-3 font-sans text-xs border-y border-line py-5 my-2">
              <li className="flex justify-between items-center">
                <strong className="text-ink">{t("响应周期：", "Turnaround:")}</strong>
                <span className="text-muted">{t("24–48 小时内回复", "Within 24–48 hours")}</span>
              </li>
              <li className="flex justify-between items-center">
                <strong className="text-ink">{t("探讨领域：", "Topics:")}</strong>
                <span className="text-muted">
                  {t(
                    "AI 工作流 · Amazon 运营 · Obsidian · OPC 创业",
                    "AI Workflows · Amazon Ops · Second Brain · OPC"
                  )}
                </span>
              </li>
              <li className="flex justify-between items-center">
                <strong className="text-ink">{t("直接邮箱：", "Direct Email:")}</strong>
                <a
                  href={`mailto:${siteProfile.socials.email}`}
                  className="text-accent underline font-mono"
                >
                  {siteProfile.socials.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={`mailto:${siteProfile.socials.email}?subject=Hello%20from%20Website`}
                className="btn primary flex-1"
              >
                <Mail className="w-4 h-4 mr-1.5" />
                {t("直接发送邮件", "Send an Email")}
              </a>
              <a
                href={siteProfile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn ghost flex-1"
              >
                <LinkedinIcon className="w-4 h-4 mr-1.5" />
                {t("LinkedIn 交流", "Say Hello on LinkedIn")}
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-line">
              <span className="text-xs font-sans text-muted block mb-3">
                {t("社交媒体与平台：", "Find me on:")}
              </span>
              <div className="flex gap-4">
                <a
                  href={siteProfile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn ghost sm !px-3"
                >
                  <GithubIcon className="w-3.5 h-3.5 mr-1" />
                  GitHub
                </a>
                <a
                  href={siteProfile.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn ghost sm !px-3"
                >
                  <XIcon className="w-3.5 h-3.5 mr-1" />
                  X
                </a>
                <a
                  href={siteProfile.socials.xiaohongshu}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn ghost sm !px-3"
                >
                  {t("小红书", "RED")}
                </a>
              </div>
            </div>
          </section>

          {/* Interactive Contact Form */}
          <section className="p-8 rounded-lg border border-line bg-surface">
            <h2 className="text-xl font-semibold mb-2">
              {t("留言信箱", "Leave a Message")}
            </h2>
            <p className="text-xs text-muted font-sans mb-6">
              {t(
                "填写下方表单，信息将直接发送至我的工作收件箱：",
                "Fill out the form below to reach my personal inbox:"
              )}
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-md bg-accent/10 border border-accent/20 text-center font-sans space-y-3">
                <CheckCircle2 className="w-8 h-8 text-accent mx-auto" />
                <h3 className="text-base font-semibold text-ink m-0">
                  {t("留言已收到！", "Message Received!")}
                </h3>
                <p className="text-xs text-muted m-0">
                  {t(
                    "感谢你的来信，我会在 24 小时内通过邮箱与你取得联系。",
                    "Thank you for reaching out. I'll get back to you within 24 hours."
                  )}
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="btn ghost sm mt-2"
                  type="button"
                >
                  {t("再发一条", "Send another")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
                <div>
                  <label className="block text-ink font-medium mb-1.5">
                    {t("你的称呼 / 姓名 *", "Your Name *")}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder={t("例如：张先生 / Alex", "e.g. Alex")}
                    className="w-full px-3 py-2 rounded border border-line bg-bg text-ink focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-ink font-medium mb-1.5">
                    {t("你的联系邮箱 *", "Email Address *")}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="name@example.com"
                    className="w-full px-3 py-2 rounded border border-line bg-bg text-ink focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-ink font-medium mb-1.5">
                    {t("探讨主题 *", "Topic *")}
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) =>
                      setFormData({ ...formData, topic: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded border border-line bg-bg text-ink focus:outline-none focus:border-accent"
                  >
                    <option value="ai-workflow">
                      {t("AI 工作流与智能体设计", "AI Workflows & Agent Design")}
                    </option>
                    <option value="amazon-ops">
                      {t("Amazon / 跨境电商运营探讨", "Cross-Border E-commerce Ops")}
                    </option>
                    <option value="obsidian-knowledge">
                      {t("Obsidian 知识库与思维框架", "Obsidian Second Brain")}
                    </option>
                    <option value="content-collab">
                      {t("自媒体内容共创 / 演讲邀请", "Content Co-Creation / Speaking")}
                    </option>
                    <option value="other">{t("其他事项", "Other Inquiries")}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-ink font-medium mb-1.5">
                    {t("问题详情与背景说明 *", "Details & Context *")}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder={t(
                      "请简要描述你的业务背景、遇到的阻碍或期望达成的合作模式…",
                      "Briefly explain your context, obstacles, or desired collaboration..."
                    )}
                    className="w-full px-3 py-2 rounded border border-line bg-bg text-ink focus:outline-none focus:border-accent resize-none"
                  />
                </div>

                <button type="submit" className="btn primary w-full !py-2.5">
                  <Send className="w-3.5 h-3.5 mr-1.5" />
                  {t("确认发送留言", "Send Message")}
                </button>
              </form>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
