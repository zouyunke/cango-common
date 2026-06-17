import Switch from './src/main'

/* istanbul ignore next */
Switch.install = function (app) {
  app.component(Switch.name, Switch)
}

export default Switch
