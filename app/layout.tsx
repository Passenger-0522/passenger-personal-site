import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: {
    default: "晓玲的手记 · X'Log | AI × 跨境电商实战工作流",
    template: "%s | 晓玲的手记 · X'Log",
  },
  description:
    "英语口译硕士转型的 Amazon 跨境电商与 AI 工作流实践者。记录真实业务中可复现、有边界的自动化智能体系统与工作契约。",
  keywords: [
    "Amazon",
    "AI Agent",
    "Skill 架构",
    "跨境电商",
    "Work OS",
    "Obsidian",
    "数据看板",
    "一人公司",
  ],
  authors: [{ name: "梁晓玲 (Xiaoling Liang)" }],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "晓玲的手记 · X'Log",
    title: "晓玲的手记 · X'Log | AI × 跨境电商实战工作流",
    description: "在真实运营里，把经验沉淀为可复现的智能体与工作流。",
    images: ["/hero-portrait.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var t = localStorage.getItem("theme");
                  if (t !== "light" && t !== "dark") {
                    t = window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                  }
                  document.documentElement.setAttribute("data-theme", t);
                  document.documentElement.style.colorScheme = t;
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <LanguageProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
          <ChatWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}
