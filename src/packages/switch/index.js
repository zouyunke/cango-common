import Switch from './src/main.vue'

/* istanbul ignore next */
Switch.install = function (app) {
  app.component(Switch.name, Switch)
}

export default Switch
