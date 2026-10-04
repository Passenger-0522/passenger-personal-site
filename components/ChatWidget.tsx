"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import { siteProfile, skillsProjects, articles } from "@/lib/content";
import { MessageSquare, X, Send, Bot, Sparkles } from "lucide-react";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
}

export function ChatWidget() {
  const { lang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);

  const initialBotGreeting = t(
    `你好！我是晓玲的 AI 助理。你可以向我咨询关于跨境电商运营、AI 工作流构建、Skill 契约设计或合作探讨的任何问题。请问你想了解什么？`,
    `Hello! I'm Xiaoling's AI assistant. Ask me anything about cross-border e-commerce ops, AI workflow orchestration, verifiable Skill contracts, or collaboration!`
  );

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          sender: "bot",
          text: initialBotGreeting,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }
  }, [lang]);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const presetQuestions = [
    {
      zh: "你的背景经历和定位是什么？",
      en: "What is your background and positioning?",
      answerZh:
        "晓玲是英语口译硕士毕业，曾深入 Amazon 跨境电商一线运营，目前是独立一人公司 (OPC) 实践者。核心定位是把真实业务中的选品、竞品、数据看板和内容生产，沉淀为可复现、有边界的 AI 工作流与智能体系统。",
      answerEn:
        "Xiaoling holds a Master's in Translation & Interpreting, operated frontline Amazon e-commerce stores, and is now an independent OPC builder. She specializes in turning messy operational challenges into verifiable, boundary-aware AI workflows.",
    },
    {
      zh: "什么是“Skill 工作契约”？",
      en: "What is a 'Skill Operational Contract'?",
      answerZh:
        "普通提示词只追求 AI 给一次回答；而 Skill 工作契约追求下一次仍按相同标准交付。它必须明确：触发时机、唯一真实输入源、交付物格式、完成证据（waiting/partial/blocked 状态机），以及绝对不能做的危险边界（如不篡改源数据、不盲目调价）。",
      answerEn:
        "Prompts generate one-off outputs, whereas operational contracts guarantee consistent, auditable execution. A contract defines explicit triggers, single sources of truth, strict deliverables, evidence states (waiting/partial/blocked), and immutable safety boundaries.",
    },
    {
      zh: "怎么把 AI 真正用进亚马逊真实运营？",
      en: "How do you apply AI to real Amazon operations?",
      answerZh:
        "核心是‘不要造万能 Agent，而是建立四层调度’：总路由 Skill（定任务）→ 专项执行 Skill（做竞品/做词库/算毛利）→ 检查审查 Skill（验真实性与违禁词）→ 输出适配 Skill。并且让自动化有证据闭环，未核验的数据坚决不放行调价决策。",
      answerEn:
        "Avoid monolithic agents in favor of a 4-tier pipeline: Master Router → Domain Execution (competitors, keywords, margins) → Quality Gate (fact verification) → Platform Exporters. Never allow unverified data to trigger automated bid changes.",
    },
    {
      zh: "如何与你发起咨询或合作？",
      en: "How to collaborate or get in touch?",
      answerZh:
        "欢迎交流！主要合作方向包括：AI 跨境工作流共创、亚马逊精细化运营咨询、自媒体内容合作与演讲分享。你可以直接在‘联系 (Contact)’页面留言，或者发送邮件至 contact@liangxiaoling.com。",
      answerEn:
        "I welcome collaborations on AI e-commerce workflow co-creation, operational consulting, and media sharing. Visit the Contact page or send an email to contact@liangxiaoling.com.",
    },
  ];

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    // Knowledge matching logic
    setTimeout(() => {
      let reply = "";
      const match = presetQuestions.find((q) =>
        query.toLowerCase().includes(q.zh.slice(0, 4)) ||
        query.toLowerCase().includes(q.en.slice(0, 6)) ||
        q.zh.includes(query) ||
        q.en.toLowerCase().includes(query.toLowerCase())
      );

      if (match) {
        reply = lang === "zh" ? match.answerZh : match.answerEn;
      } else if (
        query.includes("背景") ||
        query.includes("你是谁") ||
        query.includes("who are you") ||
        query.includes("background")
      ) {
        reply = presetQuestions[0][lang === "zh" ? "answerZh" : "answerEn"];
      } else if (
        query.includes("契约") ||
        query.includes("skill") ||
        query.includes("contract")
      ) {
        reply = presetQuestions[1][lang === "zh" ? "answerZh" : "answerEn"];
      } else if (
        query.includes("亚马逊") ||
        query.includes("amazon") ||
        query.includes("运营") ||
        query.includes("ops")
      ) {
        reply = presetQuestions[2][lang === "zh" ? "answerZh" : "answerEn"];
      } else if (
        query.includes("合作") ||
        query.includes("联系") ||
        query.includes("contact") ||
        query.includes("email") ||
        query.includes("hire")
      ) {
        reply = presetQuestions[3][lang === "zh" ? "answerZh" : "answerEn"];
      } else {
        reply =
          lang === "zh"
            ? `关于“${query}”：晓玲的系统主张“证据优先，保持边界”。任何业务结论都应建立在新鲜源数据与可复核规则之上。如果你需要定制化的工作流或深入探讨，欢迎在联系页面留言！`
            : `Regarding "${query}": Xiaoling's core philosophy is "evidence-first with clear boundaries." Reliable operations stem from verified data freshness and reproducible gates. Feel free to reach out via the Contact page!`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: reply,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      <div className="chat-dock">
        {!isOpen && (
          <button
            className="chat-hint"
            onClick={() => setIsOpen(true)}
            type="button"
          >
            {t("问晓玲的 AI 助理", "Ask Xiaoling")}
          </button>
        )}
        <button
          className="chat-launcher"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={t("打开 AI 问答助理", "Open AI Assistant")}
          type="button"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-accent" />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={siteProfile.avatar} alt="Xiaoling AI" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="chat-panel">
          <div className="chat-head">
            <div className="chat-head-user">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={siteProfile.avatar} alt="Xiaoling" />
              <div>
                <strong>{t("晓玲 · AI 参谋", "Xiaoling · AI Copilot")}</strong>
                <span>{t("在线 · 知识库支持", "Online · Powered by Knowledge Base")}</span>
              </div>
            </div>
            <button
              className="chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              type="button"
            >
              ×
            </button>
          </div>

          <div className="chat-log" ref={logRef}>
            {messages.map((m) => (
              <div
                key={m.id}
                className={`chat-bubble ${m.sender === "bot" ? "bot" : "user"}`}
              >
                {m.text}
              </div>
            ))}

            {isTyping && (
              <div className="chat-bubble bot text-muted text-xs italic">
                {t("正在思考与检索知识库...", "Thinking & retrieving from knowledge base...")}
              </div>
            )}

            {messages.length === 1 && (
              <div className="chat-suggestions">
                <span className="text-xs text-muted font-sans flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-accent" />
                  {t("你可以试着问：", "Suggested prompts:")}
                </span>
                {presetQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    className="chat-suggest-btn"
                    onClick={() => handleSend(lang === "zh" ? q.zh : q.en)}
                    type="button"
                  >
                    {lang === "zh" ? q.zh : q.en}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            className="chat-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t("输入你的问题…", "Ask anything about ops & AI…")}
              className="chat-input"
            />
            <button
              type="submit"
              className="btn primary !p-2 !rounded-md"
              disabled={!input.trim()}
              aria-label="Send"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
