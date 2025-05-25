import { Metadata } from "next";
import Contact from "@/components/home/Contact";
import IndividualPageHeader from "@/components/shared-ui/individual-page-header";

export const metadata: Metadata = {
  title: "Contact Us | Lightech",
  description: "Get in touch with Lightech for professional lighting solutions. Contact our team for consultations, quotes, or inquiries.",
};

export default function ContactPage() {
  return (
    <main className="pt-20">
    
   

      <IndividualPageHeader backgroundImage={"url('https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"}
        title={"Contact Us"}
        description={" Get in touch with our team for lighting consultations, quotes, or inquiries."}
      />
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