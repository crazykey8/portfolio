// Declare Registration widget
interface RegistrationApi {
  init(id: string): void
  onRegistrationCompleted(): void
}

declare global {
  interface Window {
    registrationApi: RegistrationApi
    registrationConfig: {
      configPath: '/' | './'
    }
    urlsConfig: {
      cdnUrl: string
      registrationWidgetLoader: string
    }
  }
}

// Declare GTM
export interface LayerOptions {
  event?: string
  eventCategory: string
  eventAction: string
  eventLabel?: string
}

declare global {
  interface Window {
    dataLayer: LayerOptions[]
  }
}

// Declare smart-script
declare global {
  interface Window {
    AF_SMART_SCRIPT_RESULT: {
      clickURL: string
    }
  }
}

// Declare user-group
declare global {
  interface Window {
    seoUserGroup: `n1Y5qz6iTe6D13WfijemqA.${1 | 2}`
  }
}

// Declare project-url
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: symbol]: any
  }
}
