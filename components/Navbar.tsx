"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageContext";
import { Sun, Moon, Menu, X } from "lucide-react";
import { siteProfile } from "@/lib/content";

export function Navbar() {
  const pathname = usePathname();
  const { lang, toggleLang, t } = useLanguage();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial = saved === "dark" || (!saved && prefersDark) ? "dark" : "light";
      setTheme(initial);
      document.documentElement.setAttribute("data-theme", initial);
      document.documentElement.style.colorScheme = initial;
    } catch (e) {}
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    document.documentElement.style.colorScheme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  };

  const navItems = [
    { href: "/", labelZh: "首页", labelEn: "Home" },
    { href: "/blogs", labelZh: "手记", labelEn: "Blogs" },
    { href: "/projects", labelZh: "工作流 / 项目", labelEn: "Projects & Skills" },
    { href: "/about", labelZh: "关于", labelEn: "About" },
    { href: "/contact", labelZh: "联系", labelEn: "Contact" },
  ];

  return (
    <nav className="site-nav">
      <div className="wrap nav-container">
        <div className="flex items-center gap-3 mr-auto">
          <Link href="/" className="brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={siteProfile.avatar}
              alt={siteProfile.name[lang]}
              className="brand-avatar"
              width={32}
              height={32}
            />
            <span>{t("晓玲的手记 · X'Log", "Xiaoling's Log")}</span>
          </Link>
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded text-muted hover:text-ink transition-colors flex items-center justify-center"
            title={theme === "dark" ? t("切换到明亮模式", "Switch to light mode") : t("切换到暗色模式", "Switch to dark mode")}
            type="button"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-[18px] height-[18px]" />
            ) : (
              <Moon className="w-[18px] height-[18px]" />
            )}
          </button>
        </div>

        <ul className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={isActive ? "is-active" : ""}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t(item.labelZh, item.labelEn)}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="btn ghost sm !px-2.5 !py-1 font-sans text-xs border border-line rounded"
            type="button"
            title={t("切换至英文", "Switch to Chinese")}
          >
            {lang === "zh" ? "EN" : "中"}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-ink hover:text-accent rounded border border-line"
            type="button"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
