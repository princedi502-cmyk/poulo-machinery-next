// Google Analytics 4 / Google Tag Manager Event Tracker

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
  }
}

export type EventName =
  | 'quote_click'
  | 'whatsapp_click'
  | 'phone_click'
  | 'catalog_download'
  | 'view_pl920'
  | 'view_pl5810'
  | 'lead_form_start'
  | 'lead_form_submit';

export function trackEvent(eventName: EventName, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;

  // Push to GTM dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...params,
    timestamp: new Date().toISOString(),
  });

  // Call gtag if initialized
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics Event] ${eventName}:`, params);
  }
}

