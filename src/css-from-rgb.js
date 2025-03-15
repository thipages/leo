/**
 * Given a RGB Color, get the corresponding CSS string.
 * 
 * @param {integer} r red color (0-255)
 * @param {integer} g green color (0-255)
 * @param {integer} b blue color (0-255)
 * @returns the corresponding CSS string
 */
export default function(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`
}