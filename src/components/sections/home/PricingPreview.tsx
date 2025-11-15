export default function Pricing() {
  return (
    <section id="pricing" className="py-12">
      <div className="mx-auto max-w-5xl px-4">
        <header className="text-center">
          <p className="text-xs font-semibold text-sky-400">پلن‌ها</p>
          <h2 className="mt-1 text-xl font-bold">
            ساده شروع کنید، مقیاس‌پذیر رشد کنید.
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            از استارتاپ کوچک تا سازمان بزرگ؛ پلن مناسب خودتان را انتخاب کنید. در
            هرزمان قابل ارتقا است.
          </p>
        </header>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {/* Starter */}
          <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
            <h3 className="text-sm font-semibold text-slate-50">استارتر</h3>
            <p className="mt-2 text-2xl font-bold">
              ۹۹
              <span className="mr-1 text-xs font-normal text-slate-400">
                دلار / ماه
              </span>
            </p>
            <p className="mt-2 text-xs text-slate-400">
              مناسب استارتاپ‌ها و تیم‌های کوچک که می‌خواهند تصویر کلی برند خود
              را ببینند.
            </p>
            <ul className="mt-3 list-disc space-y-1 pr-5 text-xs text-slate-300">
              <li>۳ پروفایل برند</li>
              <li>۵۰٫۰۰۰ منشن در ماه</li>
              <li>گزارش‌های ماهانه آماده</li>
            </ul>
            <button className="mt-4 w-full rounded-full border border-slate-700 px-4 py-2 text-xs text-slate-100 hover:border-slate-500 hover:bg-slate-900">
              شروع نسخه آزمایشی ۱۴ روزه
            </button>
          </div>

          {/* Pro */}
          <div className="flex flex-col rounded-2xl border border-sky-500 bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-950 p-4 shadow-xl shadow-sky-900/50">
            <h3 className="text-sm font-semibold text-slate-50">حرفه‌ای</h3>
            <p className="mt-2 text-2xl font-bold">
              ۲۹۹
              <span className="mr-1 text-xs font-normal text-slate-300">
                دلار / ماه
              </span>
            </p>
            <p className="mt-2 text-xs text-slate-300">
              محبوب‌ترین پلن برای تیم‌های مارکتینگ و روابط عمومی که نیاز به
              هشدارهای لحظه‌ای و گزارش‌های عمیق دارند.
            </p>
            <ul className="mt-3 list-disc space-y-1 pr-5 text-xs text-slate-200">
              <li>۱۰ پروفایل برند و رقبا</li>
              <li>۲۵۰٫۰۰۰ منشن در ماه</li>
              <li>هشدارهای هوشمند و API</li>
              <li>پشتیبانی اولویت‌دار</li>
            </ul>
            <button className="mt-4 w-full rounded-full bg-gradient-to-l from-sky-400 via-indigo-500 to-violet-500 px-4 py-2 text-xs font-semibold text-slate-50 hover:brightness-110">
              انتخاب پلن حرفه‌ای
            </button>
          </div>

          {/* Enterprise */}
          <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
            <h3 className="text-sm font-semibold text-slate-50">سازمانی</h3>
            <p className="mt-2 text-lg font-semibold">
              تماس بگیرید
              <span className="mr-1 text-xs font-normal text-slate-400">
                • سفارشی
              </span>
            </p>
            <p className="mt-2 text-xs text-slate-400">
              برای بانک‌ها، اپراتورها و سازمان‌های بزرگ با نیازهای امنیتی و
              داده‌ای خاص.
            </p>
            <ul className="mt-3 list-disc space-y-1 pr-5 text-xs text-slate-300">
              <li>تعداد نامحدود پروفایل</li>
              <li>حجم سفارشی منشن</li>
              <li>SSO، SAML، هاستینگ اختصاصی</li>
              <li>مدیر موفقیت مشتری اختصاصی</li>
            </ul>
            <button className="mt-4 w-full rounded-full border border-slate-700 px-4 py-2 text-xs text-slate-100 hover:border-slate-500 hover:bg-slate-900">
              درخواست جلسه معرفی
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
