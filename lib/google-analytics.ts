export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_location: url,
    })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track Villa del Dique specific events for SEO insights
export const trackVilladelDiqueEvent = (eventName: string, properties?: Record<string, any>) => {
  event({
    action: eventName,
    category: "Villa del Dique",
    label: properties?.page || "unknown",
    value: properties?.value || 1,
  })
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}
