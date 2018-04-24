import { gridUnit } from './styles'
import { stripUnit } from 'polished'

// CSS Grid is 1-indexed
const gridOffset = 1

// Convert pixels to larger grid units
export function convertToGrid(y, x) {
  return `${Math.floor(y / stripUnit(gridUnit)) + gridOffset}/${Math.floor(
    x / stripUnit(gridUnit)
  ) + gridOffset}`
}

export function copyToClipboard(str) {
  const el = document.createElement('textarea')
  el.value = str
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
  console.log(`Copied ${str}`)
}

export const topLeftCoordinates = areaString =>
  `${areaString.split('/')[0]}/${areaString.split('/')[1]}`

export const bottomRightCoordinates = areaString =>
  `${areaString.split('/')[2]}/${areaString.split('/')[3]}`
