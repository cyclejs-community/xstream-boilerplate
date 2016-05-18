import 'normalize-css'

// Globals
import xs from 'xstream'

// Pages
import Landing from './Landing'

// Components
import ComponentRouter from 'component/ComponentRouter'

const routes =
  {
    '/': Landing
  }

export default function main (sources) {
  return ComponentRouter({...sources, routes$: xs.of(routes)})
}
