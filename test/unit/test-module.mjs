/* eslint-disable prefer-arrow-callback */

export default {}

import lib from '../test-lib.mjs'

const {
  parser,
  test,
} = lib

test('Module Exports', function (t) {
  t.equal(typeof parser.parse, 'function', 'parse is there')
  t.end()
})
