export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-6 text-[11px] text-slate-500">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid gap-4 md:grid-cols-[1.2fr_repeat(3,minmax(0,1fr))]">
          <div>
            <p className="text-xs font-semibold text-slate-100">
              تلسکوپ – نمونه سایت
            </p>
            <p className="mt-1">
              این یک نمونه رابط برای وب‌سایتی شبیه Teleskop است که می‌توانید آن
              را مطابق برند و نیاز خود سفارشی‌سازی کنید.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-100">محصول</p>
            <ul className="mt-1 space-y-1">
              <li>
                <a href="#features" className="hover:text-slate-300">
                  امکانات
                </a>
              </li>
              <li>
                <a href="#usecases" className="hover:text-slate-300">
                  کاربردها
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-slate-300">
                  قیمت‌ها
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-100">منابع</p>
            <ul className="mt-1 space-y-1">
              <li>
                <a href="#" className="hover:text-slate-300">
                  سوالات متداول
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-300">
                  مستندات API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-300">
                  بلاگ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-100">قوانین</p>
            <ul className="mt-1 space-y-1">
              <li>
                <a href="#" className="hover:text-slate-300">
                  حریم خصوصی
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-300">
                  شرایط استفاده
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-800 pt-3">
          <span>© ۲۰۲۵ تلسکوپ (نمونه). همه حقوق محفوظ است.</span>
          <span>ساخته شده با Next.js، React و Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
