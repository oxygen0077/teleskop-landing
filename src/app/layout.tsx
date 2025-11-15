import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "تلسکوپ – مانیتورینگ رسانه و شبکه‌های اجتماعی",
  description:
    "لندینگ‌پیج نمونه برای پلتفرم مانیتورینگ شبکه‌های اجتماعی و رسانه‌ها (Next.js + Tailwind).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-slate-950 text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}
