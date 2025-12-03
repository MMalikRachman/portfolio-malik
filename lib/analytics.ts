/**
 * Google Analytics Event Tracking Helper
 * 
 * Track custom events to Google Analytics
 */

declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: Record<string, any>
    ) => void;
  }
}

/**
 * Track a custom event to Google Analytics
 * @param eventName - Name of the event (e.g., 'button_click', 'form_submit')
 * @param parameters - Additional event parameters
 */
export function trackEvent(
  eventName: string,
  parameters?: Record<string, any>
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
    console.log('📊 GA Event Tracked:', eventName, parameters);
  } else {
    console.warn('⚠️ Google Analytics not initialized');
  }
}

/**
 * Track button clicks
 * @param buttonName - Descriptive name of the button
 * @param additionalParams - Additional tracking parameters
 */
export function trackButtonClick(
  buttonName: string,
  additionalParams?: Record<string, any>
) {
  trackEvent('button_click', {
    button_name: buttonName,
    ...additionalParams,
  });
}

/**
 * Track link clicks
 * @param linkName - Name/label of the link
 * @param url - Destination URL
 * @param additionalParams - Additional tracking parameters
 */
export function trackLinkClick(
  linkName: string,
  url: string,
  additionalParams?: Record<string, any>
) {
  trackEvent('link_click', {
    link_name: linkName,
    url: url,
    ...additionalParams,
  });
}

/**
 * Track social media clicks
 * @param platform - Social media platform (e.g., 'instagram', 'linkedin')
 * @param action - Action performed (e.g., 'profile_visit', 'share')
 */
export function trackSocialClick(
  platform: string,
  action: string = 'profile_visit'
) {
  trackEvent('social_interaction', {
    platform: platform,
    action: action,
  });
}

