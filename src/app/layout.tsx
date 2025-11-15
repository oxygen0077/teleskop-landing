import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "تلسکوپ - مانیتورینگ رسانه و شبکه‌های اجتماعی",
  description:
    "پنل هوشمند شنیدن اجتماعی و مانیتورینگ رسانه برای برندهای امروزی. رصد شبکه‌های اجتماعی، وب‌سایت‌ها و رسانه‌ها در یک داشبورد یکپارچه.",
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
