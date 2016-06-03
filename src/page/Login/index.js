import xs from 'xstream'
import isolate from '@cycle/isolate'
import {div, h1} from '@cycle/dom'

function Login (sources) {
  return {
    DOM: xs.of(
      div({}, [
        h1('.login', 'Login page')
      ])
    )
  }
}

export default sources => isolate(Login)(sources)
