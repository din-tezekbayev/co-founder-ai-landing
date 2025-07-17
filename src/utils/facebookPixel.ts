// Facebook Pixel utility functions

declare global {
  interface Window {
    fbq: any;
  }
}

// Facebook Pixel configuration
export const FACEBOOK_PIXEL_ID = '1114606174056981';

export interface FBPixelEvent {
  eventName: string;
  parameters?: Record<string, any>;
}

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    try {
      console.log(`[Facebook Pixel] Tracking event: ${eventName}`, parameters);
      if (parameters) {
        window.fbq('track', eventName, parameters);
      } else {
        window.fbq('track', eventName);
      }
    } catch (error) {
      console.error('[Facebook Pixel] Error tracking event:', error);
    }
  } else {
    console.warn('[Facebook Pixel] fbq not available, event not tracked:', eventName);
  }
};

// Predefined event tracking functions
export const trackPageView = () => {
  trackEvent('PageView');
};

export const trackLead = (leadData?: Record<string, any>) => {
  trackEvent('Lead', leadData);
};

export const trackCompleteRegistration = (registrationData?: Record<string, any>) => {
  trackEvent('CompleteRegistration', registrationData);
};

export const trackContact = (contactData?: Record<string, any>) => {
  trackEvent('Contact', contactData);
};

export const trackCustomEvent = (eventName: string, customData?: Record<string, any>) => {
  trackEvent(eventName, customData);
};

// Check if Facebook Pixel is loaded and available
export const isPixelLoaded = (): boolean => {
  return typeof window !== 'undefined' && typeof window.fbq === 'function';
};

// Wait for pixel to load with timeout
export const waitForPixelLoad = (timeout: number = 5000): Promise<boolean> => {
  return new Promise((resolve) => {
    if (isPixelLoaded()) {
      resolve(true);
      return;
    }

    const checkInterval = setInterval(() => {
      if (isPixelLoaded()) {
        clearInterval(checkInterval);
        resolve(true);
      }
    }, 100);

    setTimeout(() => {
      clearInterval(checkInterval);
      resolve(false);
    }, timeout);
  });
};