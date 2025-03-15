import {cssFromRgb} from "../src/index.js"
import { describe, it } from 'node:test'
import assert from 'node:assert'
describe ('Basic test', () => {
    it('should give a correct CSS string from r, g, b input', () => {
        assert.strictEqual(
            cssFromRgb(10, 20, 30), 'rgb(10, 20, 30)'
        )
    })
})
