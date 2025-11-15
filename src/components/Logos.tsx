export default function Logos() {
  return (
    <section className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 py-6 text-center text-[11px] text-slate-400">
        <p>اعتماد تیم‌های مارکتینگ، روابط‌عمومی و آژانس‌های پیشرو</p>
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {[
            "آژانس دیجیتال مارکتینگ",
            "برند FMCG",
            "بانک و فین‌تک",
            "استارتاپ سری A",
            "تیم تحقیق بازار",
          ].map((label) => (
            <span
              key={label}
              className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-[11px] text-slate-200"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
