import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-50">
      <Header />
      <main className="flex-1">
        <section className="bg-slate-950 py-8">
          <div className="mx-auto max-w-4xl px-4 text-right">
            <p className="text-xs font-semibold text-sky-400">ارتباط با ما</p>
            <h1 className="mt-1 text-2xl font-bold">درخواست دمو و مشاوره</h1>
            <p className="mt-2 text-sm text-slate-300">
              فرم زیر را تکمیل کنید تا تیم فروش / پشتیبانی با شما تماس بگیرد.
              این صفحه فقط نمونه است و بعداً می‌توانید آن را به سیستم واقعی
              متصل کنید.
            </p>
          </div>
        </section>

        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
