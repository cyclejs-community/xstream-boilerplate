import 'es6-shim' // suppport more browsers
// External imports
import Cycle from '@cycle/xstream-run'
import {makeDOMDriver} from '@cycle/dom'
import {makeRouterDriver, supportsHistory} from 'cyclic-router'
import {createHistory, createHashHistory} from 'history'
import switchPath from 'switch-path'

// Local imports
import main from 'page/main'

const history = supportsHistory() ? createHistory() : createHashHistory()

const drivers =
  {
    DOM: makeDOMDriver('#app', {transposition: false}),
    router: makeRouterDriver(history, switchPath)
  }

Cycle.run(main, drivers)
