// External imports
import Cycle from '@cycle/xstream-run'
import {makeDOMDriver} from '@cycle/dom'
import {makeRouterDriver, supportsHistory} from 'cyclic-router'
import {createHistory, createHashHistory} from 'history'

// Local imports
import main from 'page/main'

const history = supportsHistory()
  ? [createHistory(), {capture: true}]
  : [createHashHistory(), {capture: false}]

const drivers =
  {
    DOM: makeDOMDriver('#app', {transposition: false}),
    router: makeRouterDriver(...history)
  }

const dispose = Cycle.run(main, drivers)

if (module.hot) {
  module.hot.accept()
  module.hot.dispose(() => {
    dispose()
  })
}
