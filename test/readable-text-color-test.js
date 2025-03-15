import {readableTextColor} from "./../src/index.js"
import { describe, it } from 'node:test'
import assert from 'node:assert'
describe ('Black and white tests', () => {
    it('should give a white color from a black background', () => {
        assert.deepEqual(
            readableTextColor(0, 0, 0), [255, 255, 255]
        )
    })
    it('should give a black color from a white background', () => {
        assert.deepEqual(
            readableTextColor(255, 255, 255), [0, 0, 0]
        )
    })
})
