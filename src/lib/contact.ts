import { hasSupabase } from "./hasSupabase";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function submitContactForm(
  data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  if (!hasSupabase) {
    return {
      success: false,
      error:
        "This form isn't connected yet — set VITE_SUPABASE_URL/VITE_SUPABASE_PUBLISHABLE_KEY " +
        "and deploy the send-message edge function. Email directly in the meantime.",
    };
  }

  try {
    const { supabase } = await import("@/integrations/supabase/client");
    const { data: result, error } = await supabase!.functions.invoke("send-message", {
      body: data,
    });

    if (error) throw new Error(error.message || "Failed to send message");
    if (result && typeof result === "object" && "error" in result && result.error) {
      throw new Error(String(result.error));
    }

    return { success: true };
  } catch (error) {
    console.error("Contact form submission error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send message",
    };
  }
}
