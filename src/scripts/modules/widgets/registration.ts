export function hideLinkAfterRegistration() {
  window.registrationApi.onRegistrationCompleted = () => {
    const link: HTMLElement | null = document.querySelector(
      '.popup__content--register .register__link',
    )

    if (link) {
      link.style.display = 'none'
    }
  }
}
