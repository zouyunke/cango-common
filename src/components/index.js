import config from '../config'

const CgUI = {
  install (app) {
    config.forEach(item => {
      app.component(item.component.name, item.component)
    })
  }
}

export default CgUI
