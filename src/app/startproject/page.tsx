import type { Metadata } from "next";
import { Suspense } from 'react';
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Start a Project",
  description: "Ready to build? Tell us about your project and we'll get back to you within 24 hours. Landing pages, MVPs, web apps, and full product builds.",
  alternates: {
    canonical: "https://functionstudioo.com/startproject/",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <Suspense fallback={<div>Loading...</div>}>
        <ContactForm />
      </Suspense>
    </main>
  );
}
