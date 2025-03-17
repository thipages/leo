import createElement from "../src/create-element.js"
import { getDocument } from "./utils.js"
import { describe, it } from 'node:test'
import assert from 'node:assert'
describe ('Create a regular element', () => {
    it('should create a void element with the correct attribute', () => {
        const document = getDocument()
        const element = createElement(document)('option', {
            value: 'an attribute value',
            hidden: true,
            _: 'a textContent value'
        })
        assert.strictEqual(element.value, 'an attribute value')
        assert.strictEqual(element.hidden, true)
        assert.strictEqual(element.textContent, 'a textContent value')
    })
})