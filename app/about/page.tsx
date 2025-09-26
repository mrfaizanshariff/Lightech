'use client'
import IndividualPageHeader from "@/components/shared-ui/individual-page-header";
import { useLanguage } from "@/context/LanguageContext";
import { Metadata } from "next";
import content from "../../public/assets/content.json"
import Image from "next/image";
// export const metadata: Metadata = {
//   title: "About Us | Lightech",
//   description: "Learn about Lightech, a dynamic lighting company founded in 2005 with expertise in lighting projects, architecture, interior, and landscape lighting.",
// };

export default function AboutPage() {
  const {language} = useLanguage();
  const aboutPageContent = JSON.parse(JSON.stringify(content))[language === "en"?"english":"ar"].aboutPage
  return (
    <main className="pt-20">
        <IndividualPageHeader 
        title={aboutPageContent.header.title}
        description={aboutPageContent.header.description}
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{aboutPageContent.ourStory.heading}</h2>
              {
                aboutPageContent.ourStory.paragraphs.map(
                  (p:string,index:number)=>{
                    return (
                    <p key={index} className="text-muted-foreground mb-4">
                      {p}  
                    </p>
                    )
                  }
                )
              }
             
            </div>
            <div className="grid grid-cols-2 gap-4">
              {
                aboutPageContent.ourStory.gallery.map(
                  (img:any,index:number)=>{
                    return (
                    <div key={index} className="overflow-hidden rounded-lg">
                      <img
                        src={`/assets/${img.src}`} 
                        alt={img.alt} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    )
                  }
                )
              }
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {
              aboutPageContent.missionVisionValues.cards.map(
                (card:any,index:number)=>{
                  return (
                    index !== 2 ?
                  <div key={index} className="backdrop-blur-md bg-white/50 dark:bg-white/5 p-8 rounded-xl">
                    <h3 className="text-2xl font-bold mb-4">{card.heading}</h3>
                    <p className="text-muted-foreground">
                      {card.body}
                    </p>
                  </div> :
                    <div key={index} className="backdrop-blur-md bg-white/50 dark:bg-white/5 p-8 rounded-xl">
                    <h3 className="text-2xl font-bold mb-4">{card.heading}</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      {
                        card.values.map(
                          (val:any,i:number)=>{
                            return (
                              <li key={i} className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-primary rounded-full"></span>
                              <span>{val}</span>
                            </li>
                            )
                          }
                        )
                      }
                    </ul>
                   </div>
                  )
                }
              )
            }
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{aboutPageContent.strategicObjectives.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {
              aboutPageContent.strategicObjectives.items.map(
                (item:any,i:number)=>{
                  return (
                    <div key={i} className="group hover:scale-105 transition-transform duration-300">
                      <div className="backdrop-blur-md bg-white/50 dark:bg-white/5 p-6 rounded-xl h-full border border-gray-200 dark:border-gray-800">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                          <span className="text-xl">{item.icon}</span>
                        </div>
                        <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">
                        {item.description}
                        </p>
                      </div>
                    </div>
                  )
                }
              )
            }
            

          </div>
        </div>
      </section>
      
      {/* Additional sections would go here for a complete About page */}
    </main>
  );
}