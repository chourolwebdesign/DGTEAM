import { Resend } from "resend";

type MailInput = { subject: string; replyTo: string; html: string; notifyTo?: string; confirmation?: { to: string; subject: string; html: string } };

export async function sendMail(input: MailInput) {
  if (!process.env.RESEND_API_KEY) {
    if (process.env.NODE_ENV === "development") return { id: "development-noop" };
    throw new Error("Email service is not configured");
  }
  const resend = new Resend(process.env.RESEND_API_KEY);
  const from = process.env.EMAIL_FROM ?? "DG Team <anfrage@dgteam.de>";
  const notify = input.notifyTo ?? process.env.CONTACT_NOTIFY_EMAIL ?? "kontakt@dgteam.de";
  const result = await resend.emails.send({ from, to: notify, replyTo: input.replyTo, subject: input.subject, html: input.html });
  if (input.confirmation) await resend.emails.send({ from, to: input.confirmation.to, subject: input.confirmation.subject, html: input.confirmation.html });
  return result;
}

export const escapeHtml = (value: unknown) => String(value ?? "").replace(/[&<>'\"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", "\"": "&quot;" })[char] ?? char);
