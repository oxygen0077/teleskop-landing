import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
      <Header />
      <main className="flex-1">
        <section className="bg-slate-950 py-10">
          <div className="mx-auto max-w-5xl px-4 text-right">
            <p className="text-xs font-semibold text-sky-400">پلن‌ها</p>
            <h1 className="mt-1 text-2xl font-bold">
              پلن‌های قیمت‌گذاری تلسکوپ
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              در این صفحه می‌توانید جزئیات کامل پلن‌ها را ببینید و هر زمان
              بخواهید آن‌ها را تغییر دهید. این متن فعلاً نمایشی است و می‌توانید
              بعداً سفارشی‌اش کنید.
            </p>
          </div>
        </section>

        <Pricing />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
