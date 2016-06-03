import 'normalize-css'

// Globals
import xs from 'xstream'

// Pages
import Landing from './Landing'
import Login from './Login'

// Components
import ComponentRouter from 'component/ComponentRouter'

const routes =
  {
    '/': Landing,
    '/login': Login
  }

export default function main (sources) {
  const page = ComponentRouter({...sources, routes$: xs.of(routes)})

  return {
    DOM: page.DOM,
    router: page.route$
  }
}
