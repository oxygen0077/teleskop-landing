"use client";

import { useState } from "react";

type UsecaseKey = "marketing" | "pr" | "research" | "product";

const usecaseData: Record<
  UsecaseKey,
  { title: string; text: string; items: string[] }
> = {
  marketing: {
    title: "مارکتینگ و مدیریت برند",
    text:
      "ببینید مخاطبان واقعاً درباره کمپین‌های شما چه می‌گویند، کدام پیام‌ها بیشتر وایرال شده‌اند و رقبایتان چطور در حال دیده شدن هستند.",
    items: [
      "پیگیری منشن‌های برند و هشتگ‌های کمپین",
      "مقایسه سهم صدا (Share of Voice) با رقبا",
      "شناسایی اینفلوئنسرهای اثرگذار روی برند شما",
    ],
  },
  pr: {
    title: "روابط عمومی و مدیریت بحران",
    text:
      "پیش از آن‌که بحران بزرگ شود آن را کشف کنید؛ درک کنید کدام رسانه‌ها و افراد بیشترین اثر را روی تصویر برند شما دارند.",
    items: [
      "هشدار فوری هنگام افزایش منشن‌های منفی",
      "تحلیل موج‌های خبری و منبع اولیه آن‌ها",
      "گزارش شفاف برای مدیریت ارشد در زمان بحران",
    ],
  },
  research: {
    title: "تحقیق بازار و بینش مخاطب",
    text:
      "از گفت‌وگوهای واقعی کاربران برای کشف نیازها، نارضایتی‌ها و فرصت‌های جدید بازار استفاده کنید.",
    items: [
      "تحلیل تم‌ها و موضوعات پرتکرار در گفتگوها",
      "کشف نیازهای پنهان مشتریان",
      "مقایسه برداشت بازار از شما و رقبا",
    ],
  },
  product: {
    title: "مدیریت و توسعه محصول",
    text:
      "صدای کاربران را مستقیم به بک‌لاگ محصول وصل کنید؛ بفهمید کدام ویژگی‌ها بیشتر درخواست می‌شوند و چه چیزهایی آزاردهنده است.",
    items: [
      "جمع‌آوری خودکار فیدبک از شبکه‌های اجتماعی",
      "اولویت‌بندی بر اساس حجم و احساس منشن‌ها",
      "اشتراک‌گذاری بینش‌ها با تیم‌های فنی و طراحی",
    ],
  },
};

export default function UseCases() {
  const [activeUsecase, setActiveUsecase] = useState<UsecaseKey>("marketing");
  const uc = usecaseData[activeUsecase];

  return (
    <section
      id="usecases"
      className="border-y border-slate-800 bg-slate-950/60 py-12"
    >
      <div className="mx-auto max-w-5xl px-4">
        <header className="text-center">
          <p className="text-xs font-semibold text-sky-400">کاربردها</p>
          <h2 className="mt-1 text-xl font-bold">
            برای چه تیم‌هایی مناسب است؟
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            تلسکوپ برای مارکترها، تیم‌های روابط عمومی، تحقیق بازار و مدیران
            محصول طراحی شده است.
          </p>
        </header>

        <div className="mt-8 grid gap-6 md:grid-cols-[1.2fr_minmax(0,1fr)]">
          <div>
            <div className="flex flex-wrap gap-2">
              {([
                ["marketing", "مارکتینگ و برند"],
                ["pr", "روابط عمومی و بحران"],
                ["research", "تحقیق بازار"],
                ["product", "مدیریت محصول"],
              ] as [UsecaseKey, string][]).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveUsecase(key)}
                  className={`rounded-full border px-3 py-1 text-[11px] ${
                    activeUsecase === key
                      ? "border-sky-400 bg-slate-900 text-sky-100 shadow-[0_0_16px_rgba(56,189,248,.4)]"
                      : "border-slate-700 bg-slate-900/70 text-slate-200 hover:border-slate-500"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
              <h3 className="text-sm font-semibold text-slate-50">
                {uc.title}
              </h3>
              <p className="mt-2 text-xs text-slate-300">{uc.text}</p>
              <ul className="mt-3 list-disc space-y-1 pr-5 text-xs text-slate-300">
                {uc.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-3 text-xs text-slate-300 md:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3">
              <p className="text-lg font-semibold text-emerald-400">–۴۰٪</p>
              <p className="mt-1 text-slate-300">
                کاهش زمان شناسایی بحران رسانه‌ای بعد از راه‌اندازی تلسکوپ
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3">
              <p className="text-lg font-semibold text-sky-400">+۲٫۳x</p>
              <p className="mt-1 text-slate-300">
                افزایش نرخ پاسخگویی به منشن‌های مهم مشتریان
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3">
              <p className="text-lg font-semibold text-indigo-400">۹۸٪</p>
              <p className="mt-1 text-slate-300">
                دقت تشخیص زبان و احساسات در شبکه‌های اجتماعی
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3">
              <p className="text-lg font-semibold text-violet-400">۲۴/۷</p>
              <p className="mt-1 text-slate-300">
                مانیتورینگ شبانه‌روزی بدون نیاز به نیروی اضافه
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
