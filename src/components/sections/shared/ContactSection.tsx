// src/components/sections/shared/ContactSection.tsx
"use client";

import { useState } from "react";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg(null);
    setErrorMsg(null);

    // قبل از await فرم را نگه می‌داریم
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // تلاش برای خواندن JSON؛ اگر نشد null
      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.ok) {
        const msg =
          data?.message ||
          `خطای سرور (کد وضعیت ${res.status}) در ارسال فرم`;
        throw new Error(msg);
      }

      setSuccessMsg(data.message || "درخواست شما با موفقیت ثبت شد.");
      form.reset();
    } catch (err: any) {
      setErrorMsg(err.message || "خطا در ارسال فرم");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="border-t border-slate-800 bg-slate-950 py-16"
    >
      <div className="mx-auto max-w-5xl px-4">
        {/* عنوان سکشن */}
        <header className="mb-8 text-center">
          <p className="text-xs font-semibold text-sky-400">
            درخواست دمو / ارتباط با ما
          </p>
          <h2 className="mt-2 text-xl font-bold text-slate-50">
            آماده‌اید ببینید تلسکوپ چه کاری برای برند شما می‌کند؟
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            فرم زیر را پر کنید؛ تیم ما برای هماهنگی دمو و پاسخ به سوال‌ها با شما تماس خواهد گرفت.
          </p>
        </header>

        {/* کارت فرم */}
        <div className="mx-auto max-w-md rounded-2xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/40">
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {/* نام */}
            <div>
              <label htmlFor="name" className="mb-1 block text-slate-200">
                نام و نام خانوادگی *
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none transition-colors focus:border-sky-500"
                placeholder="مثلاً: مارک الویس"
              />
            </div>

            {/* ایمیل */}
            <div>
              <label htmlFor="email" className="mb-1 block text-slate-200">
                ایمیل کاری *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none transition-colors focus:border-sky-500"
                placeholder="you@company.com"
              />
            </div>

            {/* تلفن */}
            <div>
              <label htmlFor="phone" className="mb-1 block text-slate-200">
                شماره تماس *
              </label>
              <input
                id="phone"
                name="phone"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none transition-colors focus:border-sky-500"
                placeholder="09xxxxxxxxx"
              />
            </div>

            {/* پیام */}
            <div>
              <label htmlFor="message" className="mb-1 block text-slate-200">
                توضیحات / نیاز شما *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none transition-colors focus:border-sky-500"
                placeholder="مثلاً: مانیتورینگ شبکه‌های اجتماعی برای صنعت FMCG..."
              />
            </div>

            {/* دکمه ارسال */}
            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full rounded-full bg-gradient-to-l from-sky-400 via-indigo-500 to-violet-500 px-4 py-2 text-xs font-semibold text-slate-50 shadow-md shadow-violet-800/40 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "در حال ارسال..." : "ارسال درخواست"}
            </button>

            {/* پیام‌ها */}
            {successMsg && (
              <p className="mt-2 text-[11px] text-emerald-400">
                {successMsg}
              </p>
            )}
            {errorMsg && (
              <p className="mt-2 text-[11px] text-rose-400">{errorMsg}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
