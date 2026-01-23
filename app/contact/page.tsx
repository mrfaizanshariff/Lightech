'use client';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function ContactRedirect() {
  useEffect(() => {
       const lang = sessionStorage.getItem('language');
       if (lang === 'ar') {
         redirect('/ar/contact');
       } else {
       redirect('/en/contact');
       }
     }
   ,[])
}
