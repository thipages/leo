const VOID_ELEMENTS = ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr" ]
/**
 * Create a HTML element with attributes and text content (no element children)
 * @param {*} document
 * @returns an HTMLElement with a text content and attributes
 */
export default function(document) {
    /**
     * @param {string} tag
     * @param {object} attributesAndContent
     */
    return function (tag, attributesAndContent) {
        const element = document.createElement(tag)
        const isVoid = VOID_ELEMENTS.includes(element)
        for (const [attributeOrContent, value] of Object.entries(attributesAndContent)) {
            if (attributeOrContent === '_' && !isVoid) {
                element.textContent = value     
            } else {
                element.setAttribute(attributeOrContent, value)    
             }
        }
        return element
    }
}