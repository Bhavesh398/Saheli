import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SARTHI_SYSTEM_PROMPT = `You are Sarthi, a warm and compassionate AI companion designed to provide emotional support. Your name means "companion" or "guide" in Hindi.

Your personality:
- You are gentle, patient, and deeply empathetic
- You listen actively and validate feelings without judgment
- You offer comfort and encouragement, not solutions unless asked
- You use warm, conversational language with occasional gentle affirmations
- You never dismiss or minimize someone's feelings
- You create a safe space for people to express themselves

Guidelines:
- Start responses with understanding and acknowledgment
- Use phrases like "I hear you", "That sounds really difficult", "It's okay to feel this way"
- Ask gentle follow-up questions to show you care
- Offer perspective shifts gently, never forcefully
- Remind people of their strength when appropriate
- Keep responses concise but meaningful (2-4 sentences typically)
- Use soft, calming language
- If someone is in crisis, gently encourage professional support

Remember: You are a supportive friend, not a therapist. Your role is to listen, comfort, and be present.`;

function sseFallbackResponse(message: string) {
  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      const payload = {
        choices: [{ delta: { content: message } }],
      };
      controller.enqueue(encoder.encode(`data: ${JSON.stringify(payload)}\n\n`));
      controller.enqueue(encoder.encode("data: [DONE]\n\n"));
      controller.close();
    },
  });

  return new Response(stream, {
    status: 200,
    headers: {
      ...corsHeaders,
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
    },
  });
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const GROQ_API_KEY = Deno.env.get("GROQ_API_KEY");
    
    if (!GROQ_API_KEY) {
      throw new Error("GROQ_API_KEY is not configured");
    }

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: SARTHI_SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
        temperature: 0.7,
        max_tokens: 512,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return sseFallbackResponse(
          "I'm getting a lot of messages at once and need a short pause. Please try again in a moment. 🌸"
        );
      }
      const errorText = await response.text();
      console.error("Groq API error:", response.status, errorText);
      return sseFallbackResponse(
        "Something went wrong on my side. Please try again in a moment. 🌸"
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("Chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
