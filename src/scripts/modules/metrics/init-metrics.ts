import { setDataLayer } from './gtm'
import { setUtm } from './setUtm'
import { smartScriptInit } from './smart-script'

export function initMetrics() {
  setDataLayer()
  smartScriptInit()
  setUtm()
}
