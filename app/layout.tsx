import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import "@/components/layout/header.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd } from "@/lib/structured-data";
import { site } from "@/content/site";

const manrope=Manrope({subsets:["latin"],variable:"--font-manrope",display:"swap"});
export const metadata:Metadata={metadataBase:new URL(site.url),title:{default:"DG Team | Entrümpelung, Entkernung & Baustellenräumung",template:"%s | DG Team"},description:site.description,alternates:{canonical:"/"},openGraph:{type:"website",locale:"de_DE",siteName:site.name,title:site.statement,description:site.description,images:[{url:"/images/hero-industrial-demo.png",width:1672,height:941,alt:"DG Team – klare Flächen, klare Abläufe"}]},twitter:{card:"summary_large_image"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="de" className={manrope.variable}><body><a className="skip-link" href="#main">Zum Inhalt springen</a><JsonLd data={organizationJsonLd}/><Header/><main id="main">{children}</main><Footer/></body></html>}
