import type { LayerOptions } from 'declare'

function createPushLayer(options: LayerOptions) {
  return () => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'landing',
      eventLabel: '{{Page URL}}',
      ...options,
    })
  }
}

export const handlersGtmEvent = {
  REGISTRATION_LINK_BUTTON_CLICK: createPushLayer({
    eventCategory: 'registration',
    eventAction: 'registration_link_button_click',
  }),

  MAIN_LOGO_CLICK: createPushLayer({
    eventCategory: 'logo',
    eventAction: 'main_logo_click',
  }),

  LOGIN_BUTTON_CLICK: createPushLayer({
    eventCategory: 'login',
    eventAction: 'login_button_click',
  }),

  LOGIN_TEXT_CLICK: createPushLayer({
    eventCategory: 'login',
    eventAction: 'login_text_click',
  }),

  HEADER_DOWNLOAD_CLICK: createPushLayer({
    eventCategory: 'download',
    eventAction: 'header_download_click',
    eventLabel: '{{Referrer}}',
  }),

  IOS_DOWNLOAD_CLICK: createPushLayer({
    eventCategory: 'download',
    eventAction: 'ios_download_click',
  }),

  ANDROID_DOWNLOAD_CLICK: createPushLayer({
    eventCategory: 'download',
    eventAction: 'android_download_click',
  }),

  HUAWEI_DOWNLOAD_CLICK: createPushLayer({
    eventCategory: 'download',
    eventAction: 'huawei_download_click',
  }),

  SAMSUNG_DOWNLOAD_CLICK: createPushLayer({
    eventCategory: 'download',
    eventAction: 'samsung_download_click',
  }),

  XIAOMI_DOWNLOAD_CLICK: createPushLayer({
    eventCategory: 'download',
    eventAction: 'xiaomi_download_click',
  }),

  RUSTORE_DOWNLOAD_CLICK: createPushLayer({
    eventCategory: 'download',
    eventAction: 'rustore_download_click',
  }),

  RULES_CLICK: createPushLayer({
    eventCategory: 'rules',
    eventAction: 'rules_click',
  }),

  VKONTAKTE_PM_ACCOUNT: createPushLayer({
    eventCategory: 'social',
    eventAction: 'vkontakte_pm_account',
  }),

  PARTICIPATION_FIELD_MESSAGE: createPushLayer({
    eventCategory: 'participation',
    eventAction: 'participation_field_message',
  }),

  PARTICIPATION_FIELD_EMAIL: createPushLayer({
    eventCategory: 'participation',
    eventAction: 'participation_field_email',
  }),

  PARTICIPATION_FIELD_ADRESS: createPushLayer({
    eventCategory: 'participation',
    eventAction: 'participation_field_adress',
  }),

  PARTICIPATION_FIELD_PHONE: createPushLayer({
    eventCategory: 'participation',
    eventAction: 'participation_field_phone',
  }),

  PARTICIPATION_FILE_UPLOAD: createPushLayer({
    eventCategory: 'participation',
    eventAction: 'participation_file_upload',
  }),

  PARTICIPATION_ID_SENT_SUCCESS: createPushLayer({
    eventCategory: 'participation',
    eventAction: 'participation_id_sent_success',
  }),

  PARTICIPATION_ID_SENT_BUTTON: createPushLayer({
    eventCategory: 'participation',
    eventAction: 'participation_id_sent_button',
  }),

  NAVIGATION_ARROW_RIGHT: createPushLayer({
    eventCategory: 'navigation',
    eventAction: 'navigation_arrow_right',
  }),

  NAVIGATION_ARROW_LEFT: createPushLayer({
    eventCategory: 'navigation',
    eventAction: 'navigation_arrow_left',
  }),
}
