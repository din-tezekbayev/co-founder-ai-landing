// Facebook Pixel utility functions

declare global {
  interface Window {
    fbq: any;
  }
}

// Facebook Pixel configuration
export const FACEBOOK_PIXEL_ID = '1114606174056981';
export const FACEBOOK_ACCESS_TOKEN = 'EAAMssAT4yRABPPandOHPRo0JcFA3XwmdPFerlRLE6chznDB624vHWsOCf7Fpks4KcF5aENaNTTXUNLxBtP5s4N2tKwBzJSrdvCAQaPFCrZATlUEsSEoyQnUz6AEUHErMbPQOqx6Wzj1Nc7GTxHLHg3wL1aM8boblWlYA1zZBG34qmmZBVSQl2y3oaNvuAZDZD';

export interface FBPixelEvent {
  eventName: string;
  parameters?: Record<string, any>;
}

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    if (parameters) {
      window.fbq('track', eventName, parameters);
    } else {
      window.fbq('track', eventName);
    }
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

// Initialize Facebook Pixel (if not already done in HTML)
export const initFacebookPixel = (pixelId: string) => {
  if (typeof window !== 'undefined') {
    // Check if fbq is already available
    if (!window.fbq) {
      const script = document.createElement('script');
      script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
      `;
      document.head.appendChild(script);
    }
    
    // Initialize with pixel ID
    window.fbq('init', pixelId);
    window.fbq('track', 'PageView');
  }
};