import CgInput from './components/cgInput'
import CgAlert from './packages/alert'
import CgSwitch from './packages/switch'
import './themes/index.less'

export const components = [
  CgInput,
  CgAlert,
  CgSwitch
]

export {
  CgInput,
  CgAlert,
  CgSwitch
}

const CgUI = {
  install (app) {
    components.forEach(component => {
      app.component(component.name, component)
    })
  }
}

export default CgUI
