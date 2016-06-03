import xs from 'xstream'
import delay from 'xstream/extra/delay'

import isolate from '@cycle/isolate'
import {div, h1} from '@cycle/dom'

function Landing (sources) {
  const route$ = xs.of('/login')
    .compose(delay(3000))

  return {
    DOM: xs.of(
      div({}, [
        h1('.welcome', 'Cycle.js Diversity XStream Boilerplate!')
      ])
    ),
    route$
  }
}

export default sources => isolate(Landing)(sources)
