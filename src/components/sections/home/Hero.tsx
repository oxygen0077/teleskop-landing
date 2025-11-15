export default function Hero() {
  return (
    <section className="bg-slate-950 bg-[radial-gradient(circle_at_0_0,rgba(56,189,248,.4),transparent_55%),radial-gradient(circle_at_100%_120%,rgba(129,140,248,.4),transparent_60%)] py-12">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-[1.2fr_minmax(0,1fr)] md:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-[11px] text-slate-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.9)]" />
            در لحظه بشنوید که درباره برند شما چه گفته می‌شود
          </div>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
            پنل هوشمند{" "}
            <span className="bg-gradient-to-l from-sky-400 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
              شنیدن اجتماعی
            </span>{" "}
            و مانیتورینگ رسانه برای برندهای امروزی.
          </h1>

          <p className="mt-3 max-w-xl text-sm text-slate-300">
            تلسکوپ همه‌ی شبکه‌های اجتماعی، سایت‌ها و رسانه‌های آنلاین را رصد
            می‌کند، داده‌ها را تحلیل می‌کند و آن را به بینش‌های قابل‌اقدام برای
            تیم مارکتینگ و روابط عمومی شما تبدیل می‌کند.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-l from-sky-400 via-indigo-500 to-violet-500 px-5 py-2 text-xs font-semibold text-slate-50 shadow-lg shadow-indigo-900/60 hover:brightness-110"
            >
              رزرو دمو ۳۰ دقیقه‌ای
            </a>
            <a
              href="#features"
              className="rounded-full border border-slate-600 px-5 py-2 text-xs text-slate-100 hover:border-slate-400 hover:bg-slate-900"
            >
              مشاهده نمونه داشبورد
            </a>
          </div>

          <dl className="mt-7 flex flex-wrap gap-6 text-xs text-slate-400">
            <div>
              <dt>افزایش سرعت واکنش به بحران</dt>
              <dd className="text-base font-semibold text-slate-50">+۳۲٪</dd>
            </div>
            <div>
              <dt>منبع خبری و شبکه اجتماعی رصدشده</dt>
              <dd className="text-base font-semibold text-slate-50">+۵۰K</dd>
            </div>
            <div>
              <dt>میانگین زمان کشف منشن جدید</dt>
              <dd className="text-base font-semibold text-slate-50">
                &lt;۵ دقیقه
              </dd>
            </div>
          </dl>
        </div>

        <aside className="rounded-2xl border border-slate-700/70 bg-slate-900/90 p-4 shadow-2xl shadow-slate-950/90">
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-xs font-semibold text-slate-100">
                تصویر کلی احساسات برند
              </p>
              <p className="text-[11px] text-slate-400">
                ۷ روز گذشته • شبکه‌های اجتماعی + وب
              </p>
            </div>
            <span className="rounded-full border border-slate-600 bg-slate-900 px-2 py-1 text-[10px] text-slate-200">
              نمونه داشبورد
            </span>
          </div>

          <div className="mt-4 rounded-xl border border-slate-700/70 bg-slate-950/80 p-3">
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>حجم منشن‌ها</span>
              <span>۶۵٪ مثبت • ۲۵٪ خنثی • ۱۰٪ منفی</span>
            </div>
            <div className="mt-3 flex h-28 items-end gap-1.5">
              {[35, 55, 90, 70, 100, 60, 45].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-full bg-gradient-to-t from-sky-400 to-violet-500"
                  style={{ height: `${h}%`, opacity: i === 2 || i === 4 ? 1 : 0.7 }}
                />
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
              <span className="rounded-full border border-slate-600 px-2 py-0.5 text-[10px]">
                هشدارهای خودکار برای منفی شدن موج‌ها
              </span>
              <span>به‌روزرسانی در لحظه</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
