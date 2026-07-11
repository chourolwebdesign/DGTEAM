"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { contactSchema } from "@/lib/validation";

type FormData=z.infer<typeof contactSchema>;
export function ContactForm(){const [status,setStatus]=useState<"idle"|"success"|"error">("idle");const {register,handleSubmit,formState:{errors,isSubmitting},reset}=useForm<FormData>({resolver:zodResolver(contactSchema),defaultValues:{name:"",email:"",phone:"",message:"",consent:false,website:""}});async function submit(data:FormData){setStatus("idle");try{const response=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});if(!response.ok)throw new Error();setStatus("success");reset()}catch{setStatus("error")}}return <form className="form-card" onSubmit={handleSubmit(submit)} noValidate><div className="form-grid">
  <div className="field"><label htmlFor="contact-name">Name *</label><input id="contact-name" autoComplete="name" {...register("name")} aria-invalid={!!errors.name}/>{errors.name&&<span className="field-error">{errors.name.message}</span>}</div>
  <div className="field"><label htmlFor="contact-email">E-Mail *</label><input id="contact-email" type="email" autoComplete="email" {...register("email")} aria-invalid={!!errors.email}/>{errors.email&&<span className="field-error">{errors.email.message}</span>}</div>
  <div className="field full"><label htmlFor="contact-phone">Telefon <span>(optional)</span></label><input id="contact-phone" type="tel" autoComplete="tel" {...register("phone")}/></div>
  <div className="field full"><label htmlFor="contact-message">Nachricht *</label><textarea id="contact-message" {...register("message")} aria-invalid={!!errors.message}/>{errors.message&&<span className="field-error">{errors.message.message}</span>}</div>
  <div style={{position:'absolute',left:'-9999px'}} aria-hidden><label>Website<input tabIndex={-1} autoComplete="off" {...register("website")}/></label></div>
  <label className="checkbox field full"><input type="checkbox" {...register("consent")}/><span>Ich stimme der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage gemäß der Datenschutzerklärung zu. *</span></label>{errors.consent&&<span className="field-error">{errors.consent.message}</span>}
  {status==="success"&&<div className="form-status success field full" role="status">Vielen Dank. Ihre Nachricht wurde erfolgreich übermittelt.</div>}{status==="error"&&<div className="form-status error field full" role="alert">Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch.</div>}
  <button className="button button-primary field full" disabled={isSubmitting}>{isSubmitting?"Anfrage wird gesendet …":"Nachricht senden"}</button>
  </div></form>}
