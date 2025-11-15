import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
      <Header />
      <main className="flex-1">
        <section className="bg-slate-950 py-10">
          <div className="mx-auto max-w-4xl px-4 text-right">
            <p className="text-xs font-semibold text-sky-400">درباره تلسکوپ</p>
            <h1 className="mt-1 text-2xl font-bold">ما چه کاری انجام می‌دهیم؟</h1>
            <p className="mt-3 text-sm text-slate-300">
              این صفحه یک نمونه‌ی ساده از صفحه‌ی معرفی محصول / شرکت است. بعداً
              می‌توانید داستان برند، تیم، مأموریت و ارزش‌های خودتان را اینجا قرار
              دهید.
            </p>
            <div className="mt-6 space-y-4 text-sm text-slate-300">
              <p>
                تلسکوپ به تیم‌های مارکتینگ، روابط عمومی و محصول کمک می‌کند
                گفت‌وگوهای واقعی کاربران در شبکه‌های اجتماعی و رسانه‌ها را درک
                کنند و بر اساس آن تصمیم‌های دقیق‌تری بگیرند.
              </p>
              <p>
                هدف ما این است که ابزارهای پیچیده‌ی مانیتورینگ و تحلیل داده را
                به تجربه‌ای ساده، زیبا و قابل استفاده برای همه‌ی تیم‌ها تبدیل
                کنیم؛ بدون نیاز به تیم فنی بزرگ یا دانش تخصصی تحلیل داده.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
