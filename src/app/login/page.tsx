"use client";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-50">
      <div className="w-full max-w-sm rounded-2xl border border-slate-800 bg-slate-900/90 p-6 text-right">
        <h1 className="mb-4 text-lg font-bold">ورود به پنل تلسکوپ</h1>
        <form
          className="space-y-3 text-xs"
          onSubmit={(e) => {
            e.preventDefault();
            alert("این فقط یک صفحه‌ی نمونه است 🙂");
          }}
        >
          <div>
            <label className="block text-slate-200" htmlFor="email">
              ایمیل
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:border-sky-500"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label className="block text-slate-200" htmlFor="password">
              رمز عبور
            </label>
            <input
              id="password"
              type="password"
              className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none focus:border-sky-500"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-gradient-to-l from-sky-400 via-indigo-500 to-violet-500 px-4 py-2 text-xs font-semibold text-slate-50 hover:brightness-110"
          >
            ورود
          </button>
          <p className="mt-2 text-[11px] text-slate-400">
            این فرم فقط نمایشی است؛ می‌توانید بعداً آن را به بک‌اند واقعی وصل
            کنید.
          </p>
        </form>
      </div>
    </div>
  );
}
