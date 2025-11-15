"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-sky-400 via-indigo-500 to-violet-500 text-base font-bold shadow-lg shadow-indigo-800/60">
            ت
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">تلسکوپ</span>
            <span className="text-[11px] text-slate-400">
              مانیتورینگ رسانه و شبکه‌های اجتماعی
            </span>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="inline-flex items-center justify-center rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-300 lg:hidden"
          onClick={() => setNavOpen((v) => !v)}
        >
          منو
        </button>
        {/* Nav */}
		<nav
		  className={`${
			navOpen ? "flex" : "hidden"
		  } absolute left-0 right-0 top-full flex-col gap-3 border-b border-slate-800 bg-slate-950 px-4 pb-3 pt-2 text-sm lg:static lg:flex lg:flex-row lg:items-center lg:border-none lg:bg-transparent lg:p-0`}
		>
		  <Link
			href="/"
			className="text-slate-200 hover:text-sky-400"
		  >
			صفحه اصلی
		  </Link>

		  <Link
			href="/#features"
			className="text-slate-200 hover:text-sky-400"
		  >
			امکانات
		  </Link>

		  <Link
			href="/#usecases"
			className="text-slate-200 hover:text-sky-400"
		  >
			کاربردها
		  </Link>

		  <Link
			href="/about"
			className="text-slate-200 hover:text-sky-400"
		  >
			درباره ما
		  </Link>

		  <Link
			href="/pricing"
			className="text-slate-200 hover:text-sky-400"
		  >
			قیمت‌ها
		  </Link>

		  <Link
			href="/contact"
			className="text-slate-200 hover:text-sky-400"
		  >
			ارتباط با ما
		  </Link>

		  <div className="flex flex-col gap-2 lg:ml-auto lg:flex-row">
			<Link
			  href="/login"
			  className="rounded-full border border-slate-600 px-4 py-1.5 text-xs text-slate-200 hover:border-slate-400 hover:bg-slate-900"
			>
			  ورود
			</Link>

			<Link
			  href="/contact"
			  className="rounded-full bg-gradient-to-l from-sky-400 via-indigo-500 to-violet-500 px-4 py-1.5 text-xs font-semibold text-slate-50 shadow-lg shadow-indigo-900/50 hover:brightness-110"
			>
			  شروع نسخه آزمایشی
			</Link>
		  </div>
		</nav>
      </div>
    </header>
  );
}
