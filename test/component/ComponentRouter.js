import {describe, it} from 'mocha'
import assert from 'power-assert'
import xs from 'xstream'
import {mockDOMSource, h1} from '@cycle/dom'

import ComponentRouter from 'component/ComponentRouter'

// mocks
const DOMSource = mockDOMSource({})
const component = {
  DOM: xs.of(h1({}, 'Hello World')),
  route$: xs.of('/path')
}
const match = {path: '/', value: () => component}
const router = {
  path: () => xs.empty(),
  define: () => xs.of(match)
}
const routes$ = xs.of({
  '/': component
})

describe('ComponentRouter', () => {
  it('should throw if not given a routes$', () => {
    assert.throws(() => {
      ComponentRouter()
    }, Error, /ComponentRouter must have routes\$/)
  })

  it('should return the latest components sinks', (done) => {
    const {DOM} = ComponentRouter({DOM: DOMSource, routes$, router})

    assert(typeof DOM.addListener === 'function')

    // Test Loading page
    DOM.take(1).addListener({
      next: vNode => {
        assert(vNode.sel === 'div.loading')
        assert(vNode.text === 'Loading...')
      },
      error: done,
      complete: () => {}
    })

    // Test Component
    DOM.drop(1).addListener({
      next: vNode => {
        assert(vNode.sel === 'h1')
        assert(vNode.text === 'Hello World')
      },
      error: done,
      complete: () => done()
    })

  })

  it('should return a pluck function to retrieve sinks', (done) => {
    const {pluck} = ComponentRouter({DOM: DOMSource, routes$, router})

    assert(typeof pluck === 'function')

    const DOM = pluck('DOM')

    assert(typeof DOM.addListener === 'function')

    // Test Loading page
    DOM.take(1).addListener({
      next: vNode => {
        assert(vNode.sel === 'div.loading')
        assert(vNode.text === 'Loading...')
      },
      error: done,
      complete: () => {}
    })

    // Test Component
    DOM.drop(1).take(1).addListener({
      next: vNode => {
        assert(vNode.sel === 'h1')
        assert(vNode.text === 'Hello World')
      },
      error: done,
      complete: () => done()
    })
  })
})
