"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-slate-800 bg-slate-950 py-12">
      <div className="mx-auto max-w-5xl px-4">
        <header className="text-center">
          <p className="text-xs font-semibold text-sky-400">درخواست دمو</p>
          <h2 className="mt-1 text-xl font-bold">
            آماده‌اید ببینید تلسکوپ برای شما چه می‌کند؟
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            فرم کوتاه زیر را در سایت اصلی خودتان قرار دهید و لید دریافت کنید؛
            این فقط یک نمونه است.
          </p>
        </header>

        <div className="mx-auto mt-7 max-w-md rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("این فقط فرم نمایشی است 🙂");
            }}
            className="space-y-3 text-xs"
          >
            <div>
              <label className="block text-slate-200" htmlFor="name">
                نام و نام خانوادگی
              </label>
              <input
                id="name"
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:border-sky-500"
                placeholder="مثلاً: علی رضایی"
              />
            </div>
            <div>
              <label className="block text-slate-200" htmlFor="email">
                ایمیل کاری
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:border-sky-500"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="block text-slate-200" htmlFor="company">
                نام سازمان
              </label>
              <input
                id="company"
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:border-sky-500"
                placeholder="نام برند یا شرکت"
              />
            </div>
            <div>
              <label className="block text-slate-200" htmlFor="size">
                اندازه تیم شما
              </label>
              <select
                id="size"
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:border-sky-500"
                defaultValue="۱–۱۰ نفر"
              >
                <option>۱–۱۰ نفر</option>
                <option>۱۱–۵۰ نفر</option>
                <option>۵۱–۲۰۰ نفر</option>
                <option>بیش از ۲۰۰ نفر</option>
              </select>
            </div>
            <button
              type="submit"
              className="mt-1 w-full rounded-full bg-gradient-to-l from-sky-400 via-indigo-500 to-violet-500 px-4 py-2 text-xs font-semibold text-slate-50 hover:brightness-110"
            >
              ثبت درخواست دمو
            </button>
            <p className="text-[11px] text-slate-400">
              با ثبت این فرم، یکی از اعضای تیم ما برای هماهنگی جلسه دمو با شما
              تماس خواهد گرفت.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
