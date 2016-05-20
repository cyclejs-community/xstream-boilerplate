import xs from 'xstream'
import isolate from '@cycle/isolate'
import {div, h1} from '@cycle/dom'

function Landing (sources) {
  return {
    DOM: xs.of(
      div({}, [
        h1('.welcome', 'Cycle.js Diversity XStream Boilerplate!')
      ]))
  }
}

export default sources => isolate(Landing)(sources)
