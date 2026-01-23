'use client';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function ProjectsRedirect() {
  useEffect(() => {
       const lang = sessionStorage.getItem('language');
       if (lang === 'ar') {
         redirect('/ar/projects');
       } else {
       redirect('/en/projects');
       }
     }
   ,[])
}
