import { initMetrics } from 'metrics'

import {
  defineProject,
  initOverlayScrollbars,
  initPopups,
  initScrollToSection,
  OverlayScrollbarsContainer,
} from 'utils'

import { hideLinkAfterRegistration, initRegistrationWidget } from 'widgets'

initMetrics()

initPopups()

initScrollToSection()

initRegistrationWidget().then(() => {
  hideLinkAfterRegistration()
})

defineProject()

const scrollBarsContainers: OverlayScrollbarsContainer[] = [
  { selector: 'body', theme: 'os-theme-light' },
  { selector: '.popup__text' },
]

initOverlayScrollbars(scrollBarsContainers)
