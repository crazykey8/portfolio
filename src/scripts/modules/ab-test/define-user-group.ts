// Функция для установки значения в объекте window
;(function setGroupProperty(): void {
  const groupName = 'user-group' + location.pathname
  const deviceTypeName = 'user-device' + location.pathname

  const groups = {
    1: 'n1Y5qz6iTe6D13WfijemqA.1',
    2: 'n1Y5qz6iTe6D13WfijemqA.2',
  } as const

  let group = getCookie(groupName)

  if (!group) {
    group = groups[getRandomNumber()]
    setCookie(groupName, group, 30) // Кука будет жить 365 дней
  }

  const device = detectDevice()
  setCookie(deviceTypeName, device, 30) // Кука будет жить 365 дней

  if (group === groups[1] || group === groups[2]) {
    window.seoUserGroup = group
  } else {
    window.seoUserGroup = groups[1]
  }

  document.addEventListener('DOMContentLoaded', () => {
    switch (group) {
      case groups[1]:
        setGroupInDOM(`gr-1`)
        break

      case groups[2]:
        setGroupInDOM(`gr-2`)
        break
    }
  })

  // Функция для получения значения из куки
  function getCookie(name: string): string | undefined {
    const value = '; ' + document.cookie
    const parts = value.split('; ' + name + '=')
    if (parts.length === 2) return parts.pop()?.split(';').shift()
  }

  // Функция для создания куки
  function setCookie(name: string, value: string, days: number): void {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    const expires = 'expires=' + date.toUTCString()
    document.cookie = name + '=' + value + '; ' + expires + '; path=/'
  }

  type RandomValues = 1 | 2

  // Функция для получения случайного числа 1 или 2
  function getRandomNumber(): RandomValues {
    return (Math.floor(Math.random() * 2) + 1) as RandomValues
  }

  function setGroupInDOM(groupName: string) {
    document.body.classList.add(groupName)
  }

  function detectDevice() {
    const userAgent = navigator.userAgent.toLowerCase()

    if (/iphone|ipad|ipod/.test(userAgent)) {
      return 'iOS'
    } else if (/android/.test(userAgent)) {
      return 'Android'
    } else {
      return 'Desktop'
    }
  }
})()
