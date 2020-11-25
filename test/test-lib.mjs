import parser from '../src/markdown.mjs'
import test from 'tape'
import jsdomImport from 'jsdom'

const JSDOM = jsdomImport.JSDOM
const { document } = (new JSDOM()).window

const trimInput = text => {
  if (text[0] !== '\n') {
    return text
  }

  const md = text.substr(1)
  const trimLeftCount = md.length - md.trimStart().length

  return md
    .split('\n')
    .map(line => line.substr(trimLeftCount).trimEnd())
    .join('\n')
}

const inlineHtml = text =>
  text[0]
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .join('')

const parse = (input, opt) =>
  parser.parse(trimInput(input), Object.assign({
    document,
  }, opt))

const parseRaw = (input, opt) =>
  parser.parse(input, Object.assign({
    document,
  }, opt))

const parseToHtml = (input, opt) =>
  parse(input, opt).innerHTML

export default {
  parser,
  parse,
  parseRaw,
  parseToHtml,
  inlineHtml,
  test,
  document,
}
