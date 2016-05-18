import {describe, it} from 'mocha'
import assert from 'power-assert'
import xs from 'xstream'
import delay from 'xstream/extra/delay'

import {requireSources, isStream, mergeFlatten} from 'util/index'

describe('util', () => {
  describe('requireSources', () => {

    it('should throw if something is not defined', () => {
      assert.throws(() => {
        requireSources('Something', {}, 'other')
      }, Error, /Something must have/)
    })

    it('should not throw if something is defined', () => {
      assert.doesNotThrow(() => {
        assert.doesNotThrow(() => {
          requireSources('Something', {a: 1}, 'a')
        })
      })
    })

  })

  describe('isStream', () => {
    it('should return false if given something not an xstream Stream', () => {
      assert(isStream(1) === false)
    })

    it('should return true if given a Stream', () => {
      assert(isStream(xs.of(1)))
    })
  })

  describe('mergeLatest', () => {
    it('should merge multiple objects of streams together', (done) => {
      const a = {a: xs.of(1)}
      const b = {a: xs.of(2).compose(delay(100))}

      const expected = [1, 2]

      mergeFlatten('a', [a, b])
        .addListener({
          next: x => {
            assert(x === expected.shift())
          },
          error: done,
          complete: () => {
            assert(expected.length === 0)
            done()
          }
        })
    })

    it('should merge a mix of streams and objects together', (done) => {
      const a = xs.of({a: xs.of(1)})
      const b = {a: xs.of(2).compose(delay(100))}

      const expected = [1, 2]

      mergeFlatten('a', [a, b])
        .addListener({
          next: x => {
            assert(x === expected.shift())
          },
          error: done,
          complete: () => {
            assert(expected.length === 0)
            done()
          }
        })
    })
  })
})
