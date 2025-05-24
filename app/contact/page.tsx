import { Metadata } from "next";
import Contact from "@/components/home/Contact";

export const metadata: Metadata = {
  title: "Contact Us | Lightech",
  description: "Get in touch with Lightech for professional lighting solutions. Contact our team for consultations, quotes, or inquiries.",
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Get in touch with our team for lighting consultations, quotes, or inquiries.
          </p>
        </div>
      </section>

      <Contact />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="h-[400px] rounded-xl overflow-hidden">
            {/* This would be replaced with an actual Google Maps iframe in a production site */}
            <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
              <p className="text-muted-foreground">Google Maps would be embedded here</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}