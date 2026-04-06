# Accessibility Widget Implementation Guide

## Overview

This document explains how the Sienna Accessibility Widget is implemented in the Next.js application to persist across client-side navigation, particularly when using `router.push()` for language switching.

## Problem Statement

The accessibility widget was disappearing when users clicked the language change button because:

1. **Initial Load**: The widget script loaded successfully on the first page load
2. **Client-Side Navigation**: When using `router.push()` for language switching, Next.js performs client-side navigation without a full page reload
3. **Script Non-Execution**: The `<script>` tag in the layout doesn't re-execute during client-side navigation
4. **Widget Loss**: The widget DOM elements were removed or became inactive after route changes

## Solution Architecture

### Component Structure

```
app/[lang]/layout.tsx          # Server component with layout structure
└── AccessibilityWidget.tsx    # Client component managing widget lifecycle
```

### Key Implementation Details

#### 1. AccessibilityWidget Component (`components/AccessibilityWidget.tsx`)

A client-side component that:
- Loads the Sienna accessibility script dynamically
- Monitors route changes using `usePathname()` hook
- Reinitializes the widget after each navigation
- Handles cleanup and error scenarios

**Key Features:**
- **Dynamic Script Loading**: Loads the widget script programmatically
- **Route Change Detection**: Uses Next.js `usePathname()` to detect navigation
- **Widget Reinitialization**: Calls widget initialization after route changes
- **Error Handling**: Gracefully handles script loading failures

#### 2. Layout Integration (`app/[lang]/layout.tsx`)

The layout file:
- Imports the `AccessibilityWidget` component
- Renders it in the body (removed the static script tag)
- Allows the client component to manage the widget lifecycle

## Code Implementation

### AccessibilityWidget Component

```typescript
"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AccessibilityWidget() {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize or reinitialize widget on mount and route changes
    const initializeWidget = () => {
      // Remove existing widget
      const existingWidget = document.querySelector('[data-asw-widget]');
      if (existingWidget) {
        existingWidget.remove();
      }

      // Load or reinitialize script
      const scriptExists = document.querySelector('script[src*="sienna-accessibility"]');
      if (scriptExists) {
        reinitializeWidget();
      } else {
        loadWidgetScript();
      }
    };

    initializeWidget();
  }, [pathname]); // Re-run when pathname changes

  return null;
}
```

### Layout Integration

```typescript
import AccessibilityWidget from '@/components/AccessibilityWidget';

export default function LangLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body>
        {/* Accessibility Widget - Managed by client component */}
        <AccessibilityWidget />
        <Navbar params={params} />
        {children}
        <Footer params={params} />
      </body>
    </html>
  );
}
```

## How It Works

### Initial Page Load

1. User visits the site (e.g., `/en`)
2. `AccessibilityWidget` component mounts
3. `useEffect` runs and loads the Sienna script
4. Widget initializes and displays on the page

### Language Change Navigation

1. User clicks language button (e.g., EN → AR)
2. `Navbar` calls `router.push('/ar')`
3. Next.js performs client-side navigation
4. `pathname` changes from `/en` to `/ar`
5. `useEffect` detects the pathname change
6. Widget is reinitialized for the new route
7. Widget persists and remains visible

### Subsequent Navigations

1. Any route change triggers the `useEffect` dependency
2. Widget reinitializes automatically
3. User experience remains consistent

## Benefits

✅ **Persistent Widget**: Widget stays visible across all navigation
✅ **No Page Reload**: Maintains fast client-side navigation
✅ **Automatic Management**: No manual intervention needed
✅ **Error Resilient**: Handles script loading failures gracefully
✅ **Performance Optimized**: Script loads once, reinitializes efficiently

## Testing Checklist

- [ ] Widget appears on initial page load
- [ ] Widget persists when changing language (EN ↔ AR)
- [ ] Widget persists when navigating between pages
- [ ] Widget settings are maintained across navigation
- [ ] Widget works in both LTR and RTL layouts
- [ ] No console errors related to widget
- [ ] Widget position remains consistent

## Troubleshooting

### Widget Not Appearing

**Check:**
1. Browser console for script loading errors
2. Network tab to verify CDN accessibility
3. Ad blockers or privacy extensions blocking the script

**Solution:**
- Verify CDN URL is accessible
- Check browser console for specific errors
- Ensure no CSP policies blocking the script

### Widget Disappears After Navigation

**Check:**
1. `AccessibilityWidget` component is imported in layout
2. Component is rendered in the body
3. `usePathname()` hook is working correctly

**Solution:**
- Verify the component is properly integrated
- Check React DevTools to ensure component is mounted
- Review browser console for any errors

### Widget Initializes Multiple Times

**Check:**
1. Multiple instances of `AccessibilityWidget` in the component tree
2. Unnecessary re-renders causing multiple initializations

**Solution:**
- Ensure only one `AccessibilityWidget` instance exists
- Review component hierarchy in React DevTools

## Alternative Approaches

### Approach 1: Script in _document.js (Not Recommended for App Router)
- Only works with Pages Router
- Doesn't solve client-side navigation issue

### Approach 2: useEffect in Layout (Not Possible)
- Layouts must be Server Components in App Router
- Cannot use hooks directly in layout

### Approach 3: Third-Party Script Component (Partial Solution)
- Next.js `<Script>` component with `strategy="afterInteractive"`
- May not reinitialize on route changes
- Our solution provides more control

## Best Practices

1. **Single Instance**: Only render `AccessibilityWidget` once in the layout
2. **Error Handling**: Always include error handling for script loading
3. **Console Logging**: Keep initialization logs for debugging (remove in production)
4. **Testing**: Test across different routes and navigation patterns
5. **Performance**: Monitor for any performance impact during navigation

## Future Enhancements

- Add configuration props for widget position and settings
- Implement widget state persistence across sessions
- Add TypeScript types for Sienna widget API
- Create custom hooks for widget control
- Add analytics tracking for widget usage

## References

- [Sienna Accessibility Widget Documentation](https://cdn.jsdelivr.net/npm/sienna-accessibility@latest/)
- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [Next.js Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components)
- [usePathname Hook](https://nextjs.org/docs/app/api-reference/functions/use-pathname)

## Support

For issues or questions:
1. Check browser console for errors
2. Review this documentation
3. Test in different browsers
4. Contact development team

---

**Last Updated**: 2026-04-06  
**Version**: 1.0.0  
**Maintainer**: Development Team