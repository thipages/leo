import readableTextColor from './readable-text-color.js'
import cssFromRgb from './css-from-rgb.js'
import ce from './create-element.js'
/**
 * createElement function is for browser only
 * Tests are performed from create-elements.js with nodejs/linkedom
 */
const createElement = ce(globalThis.document)
export {
    readableTextColor,
    cssFromRgb,
    createElement
}