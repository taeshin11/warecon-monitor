import { SheetPostData } from "@/types";

export const postToSheet = async (data: SheetPostData) => {
  const url = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL;
  if (!url) return;

  try {
    await fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        userAgent: navigator.userAgent,
        referrer: document.referrer,
      }),
    });
  } catch (err) {
    console.error("Sheet webhook error:", err);
  }
};
