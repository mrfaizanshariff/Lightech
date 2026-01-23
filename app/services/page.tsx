'use client';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function ServicesRedirect() {
    useEffect(() => {
      const lang = sessionStorage.getItem('language');
      if (lang === 'ar') {
        redirect('/ar/services');
      } else {
      redirect('/en/services');
      }
    }
  ,[])
}
