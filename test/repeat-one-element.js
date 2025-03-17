import createElement from "../src/create-element.js"
import { describe, it } from 'node:test'
import assert from 'node:assert'
import { getDocument } from "./utils.js"
import repeatOneElement from "../src/repeat-one-element.js"
describe ('Populate a select element with option tag', () => {
    it('should create a void element with the correct attribute', () => {
        const document = getDocument()
        const select = createElement(document)('select', {})
        const data = [
            {_: 'option1'},
            {_: 'option2'},
            {_: 'option3'}
        ]
        
        repeatOneElement(document)(select, 'option', data)
        const options = [...select.children].map (v => v.textContent)
        console.log('options', options)
        assert.strictEqual(options.length, 3)
        assert.strictEqual(options[1], 'option2')
    })
})
