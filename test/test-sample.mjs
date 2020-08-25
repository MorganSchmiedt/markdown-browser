/* eslint-env node, es6 */
/* eslint-disable no-console */

import lib from './test-lib.mjs'

const {
  parse,
} = lib

const input = `
  ...Markdown texte here...`

const element = parse(input, {
  // Parser options here
})

console.log(element.innerHTML)
