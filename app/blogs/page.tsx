"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { articles, Article } from "@/lib/content";
import { Search, Clock, Tag } from "lucide-react";

export default function BlogsPage() {
  const { lang, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { key: "all", zh: "全部", en: "All" },
    { key: "AI & Work OS", zh: "AI & Work OS", en: "AI & Work OS" },
    { key: "Amazon 实战", zh: "Amazon 实战", en: "Amazon Field Notes" },
    { key: "创业复盘", zh: "创业复盘", en: "Startup Review" },
    { key: "思考与认知", zh: "思考与认知", en: "Cognition & Thoughts" },
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesCat =
      selectedCategory === "all" || article.category === selectedCategory;
    const title = article.title[lang].toLowerCase();
    const excerpt = article.excerpt[lang].toLowerCase();
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || title.includes(q) || excerpt.includes(q);
    return matchesCat && matchesSearch;
  });

  return (
    <main id="main">
      <header className="py-12 border-b border-line mb-8">
        <div className="wrap">
          <span className="eyebrow">{t("实战手记与长文", "FIELD NOTES & ESSAYS")}</span>
          <h1 className="text-3xl md:text-4xl font-semibold m-0 mb-3">
            {t("在真实工作里，把判断留下来", "Field Notes: Auditable Judgments in Ops")}
          </h1>
          <p className="text-muted text-base max-w-2xl m-0">
            {t(
              "关于 Amazon 真实运营、AI 工作流编排、数字安全边界与创业复盘的思考记录。拒绝假大空的 AI 概念，只写真实实践与可复核方法。",
              "Reflections on real-world Amazon ops, AI workflow orchestration, digital security boundaries, and startup reviews. Grounded in practice."
            )}
          </p>
        </div>
      </header>

      <div className="wrap mb-16">
        {/* Search & Category Filter */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`btn sm !rounded-full ${
                  selectedCategory === cat.key ? "primary" : "ghost"
                }`}
                type="button"
              >
                {lang === "zh" ? cat.zh : cat.en}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("搜索手记标题或关键词…", "Search articles…")}
              className="w-full pl-9 pr-3 py-1.5 text-xs font-sans rounded-md border border-line bg-bg focus:outline-none focus:border-accent text-ink"
            />
          </div>
        </div>

        {/* Post List */}
        <div className="post-list">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <Link
                key={article.slug}
                className="post-card"
                href={`/blogs/${article.slug}`}
              >
                <time>{article.date}</time>
                <div>
                  <h3>{article.title[lang]}</h3>
                  <p>{article.excerpt[lang]}</p>
                  <div className="flex flex-wrap items-center gap-3 mt-3">
                    <span className="text-xs text-muted font-sans bg-code-bg px-2 py-0.5 rounded">
                      {lang === "zh" ? article.category : article.categoryEn}
                    </span>
                    <span className="text-xs text-muted font-sans flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime[lang]}
                    </span>
                    <div className="flex gap-1.5 items-center">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-faint font-sans"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center py-16 text-muted font-sans">
              {t("未找到符合条件的手记", "No articles found.")}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
