/**
 * Given a RGB background, define a black or white text color.
 * 
 * @param {*} rBackground red color (0-255)
 * @param {*} gBackground green color (0-255)
 * @param {*} bBackground blue color (0-255)
 * @returns white [255, 255, 255] or black [0, 0, 0] color according to a relative luminance computation
 * source : https://en.wikipedia.org/wiki/Relative_luminance
 */
export default function(rBackground, gBackground, bBackground) {  
  const relativeLuminance =  0.2126*rBackground + 0.7152*gBackground + 0.0722*bBackground
  return relativeLuminance < 255 / 2
    ? [255, 255, 255]
    : [0,0,0]
}