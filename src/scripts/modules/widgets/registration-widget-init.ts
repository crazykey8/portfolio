// id контейнера для реги
const regId = ['pariReg']

const configPath = location.host === 'www.pari.ru' ? '/' : './'
let isInit = false

window.registrationConfig = { configPath }

export function initRegistrationWidget(): Promise<'init'> {
  if (isInit) {
    return Promise.resolve('init')
  } else {
    return new Promise((resolve) => {
      const init = () => {
        const script = document.createElement('script')
        script.src =
          window.urlsConfig.cdnUrl +
          '/' +
          window.urlsConfig.registrationWidgetLoader
        document.head.appendChild(script)

        script.onload = () => {
          const intevalId = setInterval(() => {
            if (window.registrationApi) {
              clearInterval(intevalId)
              regId.forEach((id) => window.registrationApi.init(id))
              isInit = true
              resolve('init')
            }
          }, 100)
        }
      }

      const scriptElement = document.createElement('script')
      scriptElement.type = 'text/javascript'
      scriptElement.onload = init
      document.head.appendChild(scriptElement)
    })
  }
}
