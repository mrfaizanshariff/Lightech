'use client';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function AboutRedirect() {
  useEffect(() => {
       const lang = sessionStorage.getItem('language');
       if (lang === 'ar') {
         redirect('/ar/about');
       } else {
       redirect('/en/about');
       }
     }
   ,[])
}
