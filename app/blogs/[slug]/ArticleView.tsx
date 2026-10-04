"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { Article } from "@/lib/content";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  Check,
  ChevronLeft,
  ChevronRight,
  BookOpen,
} from "lucide-react";

export function ArticleView({
  article,
  prevArticle,
  nextArticle,
}: {
  article: Article;
  prevArticle: Article | null;
  nextArticle: Article | null;
}) {
  const { lang, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <main id="main" className="py-10">
      <article className="wrap-narrow">
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-xs font-sans text-muted hover:text-ink transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {t("返回手记列表", "Back to all notes")}
          </Link>
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1 text-xs font-sans text-muted hover:text-ink p-1 rounded border border-line"
            type="button"
            title={t("复制文章链接", "Copy URL")}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-accent" />
                <span>{t("已复制链接", "Copied")}</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>{t("分享", "Share")}</span>
              </>
            )}
          </button>
        </div>

        {/* Header */}
        <header className="mb-10 pb-8 border-b border-line">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-sans font-semibold text-accent uppercase tracking-wider">
              {lang === "zh" ? article.category : article.categoryEn}
            </span>
            <span className="text-faint text-xs">•</span>
            <span className="text-xs font-mono text-muted flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {article.date}
            </span>
            <span className="text-faint text-xs">•</span>
            <span className="text-xs font-mono text-muted flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readTime[lang]}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-6 text-ink">
            {article.title[lang]}
          </h1>

          <p className="text-lg text-muted leading-relaxed font-serif m-0">
            {article.excerpt[lang]}
          </p>

          {/* Thesis Callout */}
          <div className="mt-8 p-4 rounded-md border-l-4 border-accent bg-code-bg">
            <span className="text-xs font-sans font-bold text-accent uppercase tracking-wider block mb-1">
              {t("核心论点 · THESIS", "CORE THESIS")}
            </span>
            <p className="text-sm font-sans font-medium text-ink m-0 italic">
              “{article.thesis[lang]}”
            </p>
          </div>
        </header>

        {/* Prose Body */}
        <div className="prose">
          {article.sections.map((section, idx) => (
            <section key={idx} className="mb-8">
              <h2>{section.title}</h2>
              {section.paragraphs?.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}

              {section.quote && (
                <blockquote>
                  <p>{section.quote}</p>
                </blockquote>
              )}

              {section.bullets && (
                <ul>
                  {section.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              )}

              {section.code && (
                <pre>
                  <code>{section.code.code}</code>
                </pre>
              )}
            </section>
          ))}
        </div>

        {/* Tags */}
        <div className="pt-6 pb-8 border-t border-line flex flex-wrap items-center gap-2">
          <span className="text-xs text-muted font-sans mr-2">
            {t("标签：", "Tags: ")}
          </span>
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-sans bg-code-bg text-muted px-2.5 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Previous / Next Article Navigation */}
        <nav className="py-8 border-t border-line grid grid-cols-1 md:grid-cols-2 gap-4">
          {prevArticle ? (
            <Link
              href={`/blogs/${prevArticle.slug}`}
              className="p-4 rounded-lg border border-line hover:border-accent transition-colors flex flex-col"
            >
              <span className="text-xs text-muted font-sans flex items-center gap-1 mb-1">
                <ChevronLeft className="w-3.5 h-3.5" />
                {t("上一篇手记", "Previous Note")}
              </span>
              <strong className="text-sm text-ink line-clamp-1">
                {prevArticle.title[lang]}
              </strong>
            </Link>
          ) : (
            <div />
          )}

          {nextArticle && (
            <Link
              href={`/blogs/${nextArticle.slug}`}
              className="p-4 rounded-lg border border-line hover:border-accent transition-colors flex flex-col text-right md:ml-auto w-full"
            >
              <span className="text-xs text-muted font-sans flex items-center justify-end gap-1 mb-1">
                {t("下一篇手记", "Next Note")}
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
              <strong className="text-sm text-ink line-clamp-1">
                {nextArticle.title[lang]}
              </strong>
            </Link>
          )}
        </nav>
      </article>
    </main>
  );
}
