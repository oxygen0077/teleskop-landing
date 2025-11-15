// src/app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = (body.name || "").toString().trim();
    const email = (body.email || "").toString().trim();
    const company = (body.company || "").toString().trim();
    const size = (body.size || "").toString().trim();

    // اعتبارسنجی ساده سمت سرور
    if (!name || !email) {
      return NextResponse.json(
        { ok: false, message: "نام و ایمیل الزامی است." },
        { status: 400 }
      );
    }

    // اینجا می‌تونی بعداً:
    // - به دیتابیس بنویسی (Supabase, MongoDB و …)
    // - ایمیل بفرستی (SendGrid, Resend, SMTP)
    // فعلاً فقط لاگ می‌کنیم تا مطمئن بشیم درخواست می‌رسه:
    console.log("New contact request:", { name, email, company, size });

    return NextResponse.json(
      {
        ok: true,
        message: "درخواست شما با موفقیت ثبت شد.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      {
        ok: false,
        message: "خطا در سرور. لطفاً چند دقیقه بعد دوباره تلاش کنید.",
      },
      { status: 500 }
    );
  }
}
