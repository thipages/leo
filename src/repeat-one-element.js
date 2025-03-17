import createElement from './create-element.js'
/**
 * Populate a HTML element with homogeneous tags associated with its attributes and text content
 * @param {*} document
 */
export default function(document) {
    /**
     * 
     * @param {Node} parentNode, the node to populate
     * @param {String} tagToRepeat the tag used to populate the parent node
     * @param {Array} dataArray the associated attributes and text content
     */
    return  function (parentNode, tagToRepeat, dataArray) {
        dataArray.map(
            data => parentNode.appendChild(
                createElement(document)(tagToRepeat, data)
            )
        )
    }
}