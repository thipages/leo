import {parseHTML} from 'linkedom'
export function getDocument () {
    const {document} = parseHTML(`
        <!doctype html>
        <html lang="en">
          <head></head>
          <body></body>
        </html>
      `)
    return document
}