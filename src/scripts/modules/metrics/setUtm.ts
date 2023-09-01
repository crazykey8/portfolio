const queries = location.search.replace('?', '')

export function setUtm(selector = 'a:not([href^="#"])') {
  const links: NodeListOf<HTMLAnchorElement> =
    document.querySelectorAll(selector)

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      if (event.currentTarget instanceof HTMLAnchorElement) {
        const query =
          (new URL(event.currentTarget?.href).search.length > 0 ? '&' : '?') +
          queries

        const link = event.currentTarget.href + query

        if (event.currentTarget.href) {
          if (event.currentTarget.target === '_blank') {
            window.open(link, '_blank')
          } else {
            location.href = link
          }
        }
      }
    })
  })
}
