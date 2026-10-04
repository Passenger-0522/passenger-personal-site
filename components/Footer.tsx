"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import { siteProfile } from "@/lib/content";
import { ArrowUp } from "lucide-react";
import { GithubIcon, XIcon, LinkedinIcon, MailIcon } from "./Icons";

export function Footer() {
  const { lang, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="wrap flex justify-between items-center flex-wrap gap-4">
        <div>
          © {new Date().getFullYear()} {siteProfile.name[lang]} ·{" "}
          <span className="text-muted text-xs">
            {t("在真实运营里沉淀 AI 工作流", "Verifiable AI Workflows in Ops")}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/contact" className="text-muted hover:text-ink text-sm">
            {t("联系与合作", "Contact & Collab")}
          </Link>
          <div className="social-icons !mt-0 !gap-3">
            <a
              href={siteProfile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={siteProfile.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              title="X / Twitter"
              aria-label="X / Twitter"
            >
              <XIcon className="w-4 h-4" />
            </a>
            <a
              href={siteProfile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${siteProfile.socials.email}`}
              title="Email"
              aria-label="Email"
            >
              <MailIcon className="w-4 h-4" />
            </a>
          </div>
          <button
            onClick={scrollToTop}
            className="p-1 text-muted hover:text-ink transition-colors flex items-center justify-center cursor-pointer"
            title={t("回到顶部", "Back to top")}
            type="button"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
