import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceKey) {
    throw new Error("Supabase waitlist configuration is missing");
  }

  return createClient(supabaseUrl, serviceKey);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const email = String(body.email || "").trim().toLowerCase();
    const machine = String(body.machine || "").trim();
    const grinder = String(body.grinder || "").trim();
    const country = String(body.country || "Israel").trim();
    const problem = String(body.problem || "").trim();

    if (!isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }
    if (!machine) {
      return NextResponse.json({ ok: false, error: "Machine is required" }, { status: 400 });
    }

    // Upsert prevents duplicates if user submits again. Create the client at runtime so secrets are not needed during image build.
    const { error } = await getSupabaseClient()
      .from("waitlist")
      .upsert({ email, machine, grinder, country, problem }, { onConflict: "email" });

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}