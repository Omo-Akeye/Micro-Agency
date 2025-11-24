import { Suspense } from 'react';
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <Suspense fallback={<div>Loading...</div>}>
        <ContactForm />
      </Suspense>
    </main>
  );
}
