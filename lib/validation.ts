import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Bitte geben Sie Ihren Namen ein.").max(100),
  email: z.email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  phone: z.string().trim().max(40).optional(),
  message: z.string().trim().min(10, "Bitte beschreiben Sie Ihr Anliegen kurz.").max(4000),
  consent: z.boolean().refine(Boolean, "Bitte stimmen Sie der Verarbeitung Ihrer Angaben zu."),
  website: z.string().max(0).optional()
});

export const quoteSchema = z.object({
  customerType: z.enum(["Privatkunde", "Gewerbekunde"]),
  service: z.string().min(1),
  address: z.string().min(3),
  postalCode: z.string().min(4),
  city: z.string().min(2),
  objectType: z.string().min(1),
  timeframe: z.string().min(1),
  description: z.string().min(10),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  company: z.string().optional(),
  email: z.email(),
  phone: z.string().min(6),
  contactMethod: z.enum(["Telefon", "WhatsApp", "E-Mail"]),
  uploadedFiles: z.array(z.object({ name: z.string().max(180), pathname: z.string().max(500), url: z.url() })).max(15).default([]),
  consent: z.boolean().refine(Boolean)
});

export const careerSchema = z.object({
  name: z.string().min(2), email: z.email(), phone: z.string().min(6), city: z.string().min(2),
  model: z.enum(["Vollzeit", "Teilzeit", "Minijob", "Ferienjob"]),
  license: z.enum(["Ja", "Nein"]), experience: z.string().optional(), start: z.string().min(2),
  message: z.string().min(10), consent: z.boolean().refine(Boolean)
});
