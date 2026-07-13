import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { site } from "@/content/site";
export default function sitemap():MetadataRoute.Sitemap{const routes=["","/leistungen","/angebot","/kontakt","/einsatzgebiete","/karriere","/faq","/impressum","/datenschutz","/agb"];return [...routes.map(route=>({url:`${site.url}${route}`,lastModified:new Date(),changeFrequency:route===""?"weekly" as const:"monthly" as const,priority:route===""?1:.7})),...services.map(service=>({url:`${site.url}/leistungen/${service.slug}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:.8}))]}
