export default function Features() {
  const features = [
    {
      icon: "👂",
      title: "شنیدن اجتماعی در لحظه",
      text: "رصد خودکار شبکه‌های اجتماعی، سایت‌های خبری، بلاگ‌ها و فروم‌ها با فیلترهای پیشرفته برای برند، رقبا و کل صنعت شما.",
      tag: "پشتیبانی از چند زبان",
    },
    {
      icon: "📊",
      title: "تحلیل احساسات و ترندها",
      text: "دسته‌بندی خودکار منشن‌ها بر اساس مثبت، منفی و خنثی بودن و شناسایی ترندها و موج‌های خبری مهم.",
      tag: "NLP و هوش مصنوعی",
    },
    {
      icon: "🚨",
      title: "هشدارهای هوشمند",
      text: "وقتی ناگهان حجم منفی‌ها زیاد می‌شود یا رقیب شما کمپین جدید شروع می‌کند، تلسکوپ به‌صورت خودکار هشدار می‌فرستد.",
      tag: "ایمیل، اس‌ام‌اس، وب‌هوک",
    },
    {
      icon: "📑",
      title: "گزارش‌دهی خودکار",
      text: "ساخت گزارش‌های هفتگی و ماهانه در چند کلیک؛ مناسب ارائه به مدیرعامل، هیئت‌مدیره و مشتریان آژانس.",
      tag: "خروجی PDF و پاورپوینت",
    },
    {
      icon: "👥",
      title: "مدیریت تیمی",
      text: "تعریف دسترسی برای اعضای تیم، مارکترها، تحلیل‌گران و مدیران با سطح دسترسی متفاوت.",
      tag: "SSO و SAML (پلن سازمانی)",
    },
    {
      icon: "🔗",
      title: "اتصال به ابزارهای دیگر",
      text: "اتصال داده‌ها به CRM، ابزارهای تیکتینگ و داشبورد BI برای ایجاد یک نمای ۳۶۰ درجه از مشتری.",
      tag: "API و Webhook",
    },
  ];

  return (
    <section id="features" className="py-12">
      <div className="mx-auto max-w-5xl px-4">
        <header className="text-center">
          <p className="text-xs font-semibold text-sky-400">امکانات کلیدی</p>
          <h2 className="mt-1 text-xl font-bold">
            هرچیزی که برای شنیدن صدای مخاطب لازم دارید.
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            از رصد منشن‌ها تا تحلیل احساسات و گزارش‌دهی خودکار؛ تلسکوپ تمام
            مراحل را برای شما ساده می‌کند.
          </p>
        </header>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="flex flex-col rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-4"
            >
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-sky-400 via-indigo-500 to-violet-500 text-base shadow-md shadow-indigo-900/70">
                {f.icon}
              </div>
              <h3 className="text-sm font-semibold text-slate-50">
                {f.title}
              </h3>
              <p className="mt-2 text-xs text-slate-400">{f.text}</p>
              <span className="mt-3 inline-flex w-fit rounded-full border border-slate-700 px-2 py-1 text-[10px] text-slate-200">
                {f.tag}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
