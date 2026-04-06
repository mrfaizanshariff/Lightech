"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * AccessibilityWidget Component
 * 
 * Manages the Sienna Accessibility Widget lifecycle across client-side navigation.
 * This component ensures the widget persists when using Next.js router.push()
 * for language switching or any other client-side navigation.
 * 
 * Key Features:
 * - Loads the widget script dynamically on mount
 * - Reinitializes the widget after route changes by reloading the script
 * - Cleans up properly on unmount
 * - Handles script loading errors gracefully
 */
export default function AccessibilityWidget() {
  const pathname = usePathname();

  useEffect(() => {
    // Function to initialize or reinitialize the widget
    const initializeWidget = () => {
      if (typeof window === 'undefined') return;

      // Check if the Sienna script already exists
      const existingScript = document.querySelector('script[src*="sienna-accessibility"]');
      
      if (existingScript) {
        // Script already loaded, just reinitialize by reloading
        reinitializeWidget();
      } else {
        // Load the script for the first time
        loadWidgetScript();
      }
    };

    // Function to load the widget script
    const loadWidgetScript = () => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/sienna-accessibility@latest/dist/sienna-accessibility.umd.js';
      script.setAttribute('data-asw-position', 'bottom-right');
      script.defer = true;
      
      script.onload = () => {
        console.log('Accessibility widget script loaded successfully');
      };

      script.onerror = () => {
        console.error('Failed to load accessibility widget script');
      };

      document.body.appendChild(script);
    };

    // Function to reinitialize the widget without using Sienna global object
    const reinitializeWidget = () => {
      try {
        // Remove the existing script
        const existingScript = document.querySelector('script[src*="sienna-accessibility"]');
        if (existingScript) {
          existingScript.remove();
        }

        // Remove any existing widget DOM elements
        const widgetSelectors = [
          '[data-asw-widget]',
          '.asw-widget',
          '#sienna-accessibility-widget',
          '[class*="sienna"]',
          '[id*="sienna"]',
          '[class*="accessibility-widget"]'
        ];
        
        widgetSelectors.forEach(selector => {
          const elements = document.querySelectorAll(selector);
          elements.forEach(element => element.remove());
        });

        // Wait a moment for cleanup, then reload the script
        setTimeout(() => {
          loadWidgetScript();
        }, 100);

      } catch (error) {
        console.error('Error reinitializing accessibility widget:', error);
      }
    };

    // Initialize on mount and when pathname changes
    initializeWidget();

    // Cleanup function
    return () => {
      // Optional: Clean up on unmount if needed
    };
  }, [pathname]); // Re-run when pathname changes

  // This component doesn't render anything visible
  return null;
}

// Made with Bob
