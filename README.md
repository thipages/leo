# leo
Leo's functions

```javascript
import {
    readableTextColor,
    cssFromRgb
} from 'https://esm.run/@titsoft/leo'
```

## readable-text-color.js

Given a RGB background, define a black or white text color

```
function(rBackground:int, gBackground:int, bBackground:int) : Array
```

## css-from-rgb.js

Given a RGB Color, get the corresponding CSS string.

```
function(r:int, g:int, b:int) : String

```

## create-element.js

Create a HTML element with attributes and text content (no element children)

```
function (tag: string, attributesAndContent: object): HTMLElement
```

`attributesAndContent` may contain
- attributes key/values pairs
- element `textContent` filled with _underscore_ property


Example
``` javascript
createElement('option', {
    value: 'a value',
    hidden: true,
    _: 'a text content'
})
```
