import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/validation";
import { escapeHtml, sendMail } from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(request:Request){
  try {
    const ip=request.headers.get("x-forwarded-for")?.split(",")[0]??"unknown";
    if(!rateLimit(`quote:${ip}`,3,300_000)) return NextResponse.json({message:"Zu viele Anfragen."},{status:429});
    const parsed=quoteSchema.safeParse(await request.json());
    if(!parsed.success) return NextResponse.json({message:"Bitte prüfen Sie Ihre Angaben."},{status:400});
    const data=parsed.data;
    const reference=`DG-${new Date().toISOString().slice(0,10).replaceAll("-","")}-${crypto.randomUUID().slice(0,6).toUpperCase()}`;
    const rows=Object.entries(data).filter(([key])=>key!=="consent"&&key!=="uploadedFiles").map(([key,value])=>`<tr><th style="text-align:left;padding:6px">${escapeHtml(key)}</th><td style="padding:6px">${escapeHtml(value)}</td></tr>`).join("");
    const files=data.uploadedFiles.map(file=>`<li>${escapeHtml(file.name)} – privater Blob-Pfad: ${escapeHtml(file.pathname)}</li>`).join("")||"<li>Keine Dateien</li>";
    await sendMail({subject:`Angebotsanfrage ${reference}: ${data.service}`,replyTo:data.email,notifyTo:process.env.QUOTE_NOTIFY_EMAIL,html:`<h1>Neue Angebotsanfrage ${reference}</h1><table>${rows}</table><h2>Dateien</h2><ul>${files}</ul><p>Einwilligung: ${new Date().toISOString()}</p>`,confirmation:{to:data.email,subject:`Ihre DG Team Anfrage ${reference}`,html:`<h1>Vielen Dank, ${escapeHtml(data.firstName)}.</h1><p>Ihre unverbindliche Anfrage mit der Referenz <strong>${reference}</strong> ist eingegangen. DG Team prüft die Angaben und meldet sich zeitnah.</p>`}});
    return NextResponse.json({ok:true,reference});
  } catch(error) {
    console.error("Quote request failed",error instanceof Error?error.message:"unknown");
    return NextResponse.json({message:"Senden fehlgeschlagen."},{status:500});
  }
}
