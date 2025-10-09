"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import mapPin from "../../public/icons_svg/location_pin_15.svg"
import mailIcon from "../../public/icons_svg/email_16.svg"
import phoneIcon from "../../public/icons_svg/phone_14.svg"
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Mail, Phone, MapPin, Send, FileInput } from "lucide-react";
import content from '../../public/assets/content.json';
import { useLanguage } from "@/context/LanguageContext";
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(6, { message: "Please enter a valid phone number." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = ({isSection=true}) => {
  const {language} = useLanguage()
  const contactContent = JSON.parse(JSON.stringify(content))[language==="en"?"english":"ar"].contactSection;
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    // Here you would normally send the form data to your backend
    form.reset();
    // Show success message
  }

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm text-primary font-medium tracking-wider mb-2">{contactContent.title}</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">{contactContent.subtitle}</h3>
          <p className="text-muted-foreground">{contactContent.desciption}
          </p>
        </div>
        {
          isSection ? 
          (

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl h-full">
              <h4 className="text-xl font-bold mb-6">{contactContent.contactInfoSection[0].title}</h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-1 rounded-full">
                    <Image src={mapPin.src} height={40} width={40} alt="Map Pin Lightech Icon"/>
                  </div>
                  <div className="w-fit flex-shrink-[4]">
                    <p className="font-medium">{contactContent.contactInfoSection[0].locationTitle}</p>
                    <p className="text-muted-foreground mt-1">
                      {contactContent.contactInfoSection[0].address}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-1 rounded-full">
                    <Image src={mailIcon.src} height={40} width={40} alt="E-Mail Lightech Icon"/>
                  </div>
                  <div>
                    <p className="font-medium">{contactContent.contactInfoSection[0].emailTitle}</p>
                    <p className="text-muted-foreground mt-1">{contactContent.contactInfoSection[0].email_1}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-1 rounded-full">
                    <Image src={phoneIcon.src} height={40} width={40} alt="Phone Lightech Icon"/>
                  </div>
                  <div>
                    <p className="font-medium">{contactContent.contactInfoSection[0].phoneTitle}</p>
                    <a href={`tel:${contactContent.contactInfoSection[0].phone_1}`} className="text-muted-foreground mt-1 ltr">{contactContent.contactInfoSection[0].phone_1}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FileInput className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{contactContent.contactInfoSection[0].faxTitle}</p>
                    <p className="text-muted-foreground mt-1 ltr">{contactContent.contactInfoSection[0].fax_1}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project..." 
                          rows={6}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" size="lg" className="w-full group">
                  {contactContent.submitBtn.label}
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
          ):(
        <div >
         
          
          <div className=" md:mx-20 px-10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project..." 
                          rows={6}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" size="lg" className="w-full group">
                  {contactContent.submitBtn.label}
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </Form>
          </div>
          <div className="flex justify-center items-end mt-20">
                <h4 className="text-xl md:text-3xl font-bold mb-6">{contactContent.contactInfoSection[0].title}</h4>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 my-9 gap-12">
          
            {
              contactContent.contactInfoSection.map((contact:any,index:number)=>{
               return (
                <>
                <div  key={index} className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl">
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-1 rounded-full">
                      <Image src={mapPin.src} height={40} width={40} alt="Map Pin Lightech Icon"/>
                    </div>
                    <div className="w-fit flex-shrink-[4] ">
                      <p className="font-medium">{contact.locationTitle}</p>
                      <p className="text-muted-foreground mt-1">
                        {contact.address}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-1 rounded-full">
                      <Image src={mailIcon.src} height={40} width={40} alt="E-Mail Lightech Icon"/>
                    </div>
                    <div>
                      <p className="font-medium">{contact.emailTitle}</p>
                      <p className="text-muted-foreground mt-1">{contact.email_1}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-1 rounded-full">
                      <Image src={phoneIcon.src} height={40} width={40} alt="Phone Lightech Icon"/>
                    </div>
                    <div>
                      <p className="font-medium">{contact.phoneTitle}</p>
                      <a href={`tel:${contact.phone_1}`} className="text-muted-foreground mt-1 ltr">{contact.phone_1}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <FileInput className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{contact.faxTitle}</p>
                      <p className="text-muted-foreground mt-1 ltr">{contact.fax_1}</p>
                    </div>
                  </div>
                </div>
            
                </div>
                   <section key={index+contact.title}   className="py-12">
                  <div className="container mx-auto px-4">
                    <div className="h-[500px] w-full rounded-xl overflow-hidden">
                      {/* This would be replaced with an actual Google Maps iframe in a production site */}
                      <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                        <iframe src={contact.googleMapUrl}
                        className="h-full w-full"
                        loading="lazy"></iframe>
                      </div>
                    </div>
                  </div>
                </section>
                </>

               )
             
              })
            }


            
          </div>
        </div>

          )
        }
      </div>
    </section>
  );
};

export default Contact;