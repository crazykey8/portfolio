export function smartScriptInit(selector = 'a[data-smart-script]') {
  const smartScriptUrl = window.AF_SMART_SCRIPT_RESULT.clickURL

  const links: NodeListOf<HTMLAnchorElement> =
    document.querySelectorAll(selector)

  const intervalId = setInterval(() => {
    if (smartScriptUrl) {
      clearInterval(intervalId)
      links.forEach((link) => link.setAttribute('href', smartScriptUrl))
    }
  })
}
