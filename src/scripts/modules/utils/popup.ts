import { lockScroll, unlockScroll } from 'utils'

interface PopupElement extends HTMLElement {
  dataset: {
    popup?: string
  }
}

export function initPopups() {
  const popups: NodeListOf<HTMLElement> = document.querySelectorAll('.popup')
  const linkPopups: NodeListOf<PopupElement> =
    document.body.querySelectorAll('[data-popup]')

  popups.forEach((popup) => setClosePopupHandler(popup))
  linkPopups.forEach((link) => setOpenPopupHandler(link))
}

export function setOpenPopupHandler(link: PopupElement) {
  link.addEventListener('click', openPopupHandler)

  function openPopupHandler(event: MouseEvent) {
    event.preventDefault()

    if (link.dataset.popup) {
      openPopup(link.dataset.popup)
    } else {
      console.error('Попап не найден')
    }
  }
}

export function openPopup(popupSelector: string) {
  const popup: HTMLElement | null = document.querySelector(popupSelector)

  if (popup) {
    lockScroll()
    popup.classList.add('popup-open') // Добавляем класс для анимации появления
    document.addEventListener('keydown', isEscapeHandler)
  } else {
    console.error('Попап не найден')
  }
}

export function setClosePopupHandler(popup: HTMLElement) {
  const buttonClosePopup: HTMLElement | null = popup.querySelector(
    '.popup__close-button',
  )

  buttonClosePopup?.addEventListener('click', closeHandler)
  popup.addEventListener('click', closeHandler)

  function closeHandler(event: MouseEvent) {
    if (
      popup.classList.contains('popup-open') &&
      event.target instanceof HTMLElement &&
      (!event.target.closest('.popup__content') ||
        event.target.closest('.popup__close-button'))
    ) {
      popup.classList.remove('popup-open')
      unlockScroll()
      document.removeEventListener('keydown', isEscapeHandler)
    }
  }
}

function isEscapeHandler(event: KeyboardEvent) {
  if (event.key == 'Escape') {
    const popups: NodeListOf<HTMLElement> = document.querySelectorAll('.popup')
    popups.forEach((popup) => {
      popup.classList.remove('popup-open')
    })
    unlockScroll()
    document.removeEventListener('keydown', isEscapeHandler)
  }
}
