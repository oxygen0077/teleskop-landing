import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// این کلاینت فقط باید در سرور (API route ها) استفاده شود
export const supabaseServer = createClient(supabaseUrl, serviceRoleKey);
