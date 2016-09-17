import {describe, it} from 'mocha'
import assert from 'power-assert'
import xs from 'xstream'
import xsAdapter from '@cycle/xstream-adapter'
import {mockDOMSource, h1} from '@cycle/dom'

import ComponentRouter from 'component/ComponentRouter'

// mocks
const DOMSource = mockDOMSource(xsAdapter, {})
const component = {
  DOM: xs.of(h1({}, 'Hello World')),
  route$: xs.of('/path')
}
const match = {path: '/', value: () => component}
const router = {
  path: () => xs.empty(),
  define: () => xs.of(match)
    .startWith({path: '/login', value: () => component})
}
const routes$ = xs.of({
  '/': component
})

describe('ComponentRouter', function () {
  it('should throw if not given a routes$', () => {
    assert.throws(() => {
      ComponentRouter()
    }, Error, /ComponentRouter must have routes\$/)
  })

  it('should return the latest components sinks', function (done) {
    this.timeout = 5000

    const {DOM} = ComponentRouter({DOM: DOMSource, routes$, router})

    assert(typeof DOM.addListener === 'function')

    const expected = [
      { sel: 'div.loading.___cycle2', text: 'Loading...' },
      { sel: 'h1.___cycle2', 'text': 'Hello World' }
    ]

    // Test Loading page
    DOM.take(2).addListener({
      next: vNode => {
        const x = expected.shift()
        assert(vNode.sel === x.sel)
        assert(vNode.text === x.text)
        if (expected.length === 0) {
          done()
        }
      },
      error: done,
      complete: Function.prototype
    })
  })

  it('should return a pluck function to retrieve sinks', function (done) {
    this.timeout = 5000

    const {pluck} = ComponentRouter({DOM: DOMSource, routes$, router})

    assert(typeof pluck === 'function')

    const DOM = pluck('DOM')

    assert(typeof DOM.addListener === 'function')

    const expected = [
      { sel: 'div.loading.___cycle2', text: 'Loading...' },
      { sel: 'h1.___cycle2', 'text': 'Hello World' }
    ]

    // Test Loading page
    DOM.take(2).addListener({
      next: vNode => {
        const x = expected.shift()
        assert(vNode.sel === x.sel)
        assert(vNode.text === x.text)
        if (expected.length === 0) {
          done()
        }
      },
      error: done,
      complete: Function.prototype
    })
  })
})
