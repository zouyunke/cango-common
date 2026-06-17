import Alert from './src/main.vue'

/* istanbul ignore next */
Alert.install = function (app) {
  app.component(Alert.name, Alert)
}

export default Alert
