import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// envها را یک بار اینجا بخوانیم
const supabaseUrl = process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error(
    "❌ SUPABASE_URL یا SUPABASE_SERVICE_ROLE_KEY در .env.local تنظیم نشده است."
  );
}

export async function POST(req: Request) {
  try {
    // اگر env مشکل داشته باشد، اصلاً سعی نکنیم به Supabase وصل شویم
    if (!supabaseUrl || !serviceRoleKey) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "پیکربندی سرور کامل نیست (کلیدهای Supabase تنظیم نشده). لطفاً با مدیر سیستم تماس بگیرید.",
        },
        { status: 500 },
      );
    }

    const body = await req.json();
    const { name, email, phone, message } = body ?? {};

    // اعتبارسنجی ساده
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { ok: false, message: "همه فیلدها (نام، ایمیل، شماره، توضیحات) الزامی هستند." },
        { status: 400 },
      );
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey);

    const { error } = await supabase.from("contact_requests").insert([
      {
        name,
        email,
        phone,
        message,
        status: "new",
      },
    ]);

    if (error) {
      console.error("❌ Supabase insert error:", error);
      return NextResponse.json(
        {
          ok: false,
          message: "خطا در ذخیره اطلاعات در پایگاه داده.",
          details: error.message,
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { ok: true, message: "درخواست شما با موفقیت ثبت شد ✅" },
      { status: 200 },
    );
  } catch (err: any) {
    console.error("❌ Contact API error:", err);
    return NextResponse.json(
      {
        ok: false,
        message: "خطای غیرمنتظره در سرور رخ داد.",
        details: err?.message,
      },
      { status: 500 },
    );
  }
}
