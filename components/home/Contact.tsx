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

const Contact = () => {
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl h-full">
              <h4 className="text-xl font-bold mb-6">{contactContent.contactInfoSection.title}</h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-1 rounded-full">
                    <Image src={mapPin.src} height={60} width={60} alt="Map Pin Lightech Icon"/>
                  </div>
                  <div>
                    <p className="font-medium">{contactContent.contactInfoSection.locationTitle}</p>
                    <p className="text-muted-foreground mt-1">
                      {contactContent.contactInfoSection.address}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-1 rounded-full">
                    <Image src={mailIcon.src} height={40} width={40} alt="E-Mail Lightech Icon"/>
                  </div>
                  <div>
                    <p className="font-medium">{contactContent.contactInfoSection.emailTitle}</p>
                    <p className="text-muted-foreground mt-1">{contactContent.contactInfoSection.email_1}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-1 rounded-full">
                    <Image src={phoneIcon.src} height={40} width={40} alt="Phone Lightech Icon"/>
                  </div>
                  <div>
                    <p className="font-medium">{contactContent.contactInfoSection.phoneTitle}</p>
                    <p className="text-muted-foreground mt-1 ltr">{contactContent.contactInfoSection.phone_1}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FileInput className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{contactContent.contactInfoSection.faxTitle}</p>
                    <p className="text-muted-foreground mt-1 ltr">{contactContent.contactInfoSection.fax_1}</p>
                  </div>
                </div>
              </div>
              
              {/* <div className="mt-12">
                <h4 className="text-xl font-bold mb-4">Working Hours</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="font-medium">Monday - Thursday</p>
                    <p className="text-muted-foreground">8:00 AM - 5:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium">Friday</p>
                    <p className="text-muted-foreground">8:00 AM - 12:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium">Saturday</p>
                    <p className="text-muted-foreground">9:00 AM - 4:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium">Sunday</p>
                    <p className="text-muted-foreground">9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div> */}
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
      </div>
    </section>
  );
};

export default Contact;