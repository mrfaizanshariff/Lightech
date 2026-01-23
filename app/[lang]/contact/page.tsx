import Contact from "@/components/home/Contact";
import IndividualPageHeader from "@/components/shared-ui/individual-page-header";


export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'ar' },
  ];
}
export default function ContactPage({ params }: { params: { lang: 'en' | 'ar' } }) {
  const language = params.lang
  return (
    <main className="pt-20">
    
   

      <IndividualPageHeader backgroundImage={"url('https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"}
        title={language==='en'? "Contact Us":"اتصل بنا"}
        description={language === 'en' ? "Get in touch with our team for lighting consultations, quotes, or inquiries.":"تواصل مع فريقنا للحصول على استشارات الإضاءة أو عروض الأسعار أو الاستفسارات."}
      />
      <Contact params={params} isSection={false} />
    </main>
  );
}