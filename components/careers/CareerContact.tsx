"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Send, Upload, Mail, Phone, MapPin } from "lucide-react";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(6, { message: "Please enter a valid phone number." }),
  subject: z.string().min(2, { message: "Please specify the position." }),
  // resume: z
  //   .any()
  //   .refine((files) => files?.length > 0, "Resume is required.")
  //   .refine(
  //     (files) => files?.[0]?.size <= MAX_FILE_SIZE,
  //     "Max file size is 5MB."
  //   )
  //   .refine(
  //     (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
  //     "Only PDF, DOC, and DOCX files are accepted."
  //   ),
  message: z.string().min(10, { message: "Cover letter must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;


const CareerContact = ({ content }: any) => {
  const [sendingMessage, setSendingMessage] = useState(false);
  const [fileName, setFileName] = useState<string>("");
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setSendingMessage(true);
    setSubmitStatus("idle");

    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("subject", "Applying for the position of " + values.subject);
      formData.append("message", values.message);
      // formData.append("resume", values.resume[0]);
      formData.append("access_key", "25802634-a3cc-4424-9b59-36b44c7c392f");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        form.reset();
        setFileName("");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Form submission error:", error);
    } finally {
      setSendingMessage(false);
    }
  }

  return (
    <section id="apply" className="py-20 bg-gray-50 dark:bg-gray-900" aria-labelledby="apply-heading">
      {/* <div>
        <h2 id="apply-heading" className="text-4xl px-8 pt-8 text-primary font-bold tracking-wider mb-2">
          {content.title}
        </h2>
        <hr className="mb-4 ml-8" />
      </div> */}
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">{content.subtitle}</h3>
          <p className="text-muted-foreground">{content.description}</p>
        </div>

        <div className="mx-auto">
          
          {/* Application Form */}
          <div >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{content.form.fields.name}</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your Name" {...field} />
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
                          <FormLabel>{content.form.fields.email}</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter your email" {...field} />
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
                          <FormLabel>{content.form.fields.phone}</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{content.form.fields.position}</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter the position you are applying for" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* <FormField
                    control={form.control}
                    name="resume"
                    render={({ field: { onChange, value, ...field } }) => (
                      <FormItem>
                        <FormLabel>{content.form.fields.resume}</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type="file"
                              accept=".pdf,.doc,.docx"
                              className="hidden"
                              id="resume-upload"
                              onChange={(e) => {
                                onChange(e.target.files);
                                setFileName(e.target.files?.[0]?.name || "");
                              }}
                              {...field}
                            />
                            <label
                              htmlFor="resume-upload"
                              className="flex items-center justify-center gap-2 w-full px-4 py-3 border border-input rounded-md cursor-pointer hover:bg-accent transition-colors"
                            >
                              <Upload className="h-4 w-4" aria-hidden="true" />
                              <span className="text-sm">
                                {fileName || content.form.fields.resumePlaceholder}
                              </span>
                            </label>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{content.form.fields.coverLetter}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Add your message here..."
                            rows={6}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
                      <p className="text-green-800 dark:text-green-200 text-sm">
                        Message Sent Successfully
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                      <p className="text-red-800 dark:text-red-200 text-sm">
                        There was an error is submitting your message. Please try again later.
                      </p>
                    </div>
                  )}

                  <Button type="submit" size="lg" className="w-full group" disabled={sendingMessage}>
                    {sendingMessage ? content.form.submitting : content.form.submit}
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerContact;

// Made with Bob

