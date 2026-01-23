'use client';
import { redirect, useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function Home() {
  const router = useRouter();
  useEffect(() => {
    // Detect lang: sessionStorage, localStorage, or browser default
    let lang = sessionStorage.getItem('language') || 'en';  // Default to 'en'
    
    // Optional: Auto-detect from browser
    if (!lang) {
      lang = navigator.language.startsWith('ar') ? 'ar' : 'en';
    }
    
    // Redirect
    router.push(`/${lang}`);  // Client-side push for SPA feel
    // Alternative for strict static: window.location.href = `/${lang}`;
  }, [router]);

  return (
    <div>
      {/* Optional: Loading spinner */}
      <p>Redirecting...</p>
    </div>
  );
}
