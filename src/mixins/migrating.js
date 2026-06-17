/**
 * Show migrating guide in browser console.
 *
 * Usage:
 * import Migrating from '@/mixins/migrating';
 *
 * mixins: [Migrating]
 *
 * add getMigratingConfig method for your component.
 *  getMigratingConfig() {
 *    return {
 *      props: {
 *        'allow-no-selection': 'allow-no-selection is removed.',
 *        'selection-mode': 'selection-mode is removed.'
 *      },
 *      events: {
 *        selectionchange: 'selectionchange is renamed to selection-change.'
 *      }
 *    };
 *  },
 */
export default {
  mounted () {
    if (process.env.NODE_ENV === 'production') return
    if (typeof this.getMigratingConfig !== 'function') return

    const { props = {}, events = {} } = this.getMigratingConfig()
    const attrs = this.$attrs || {}

    for (let propName in attrs) {
      if (Object.prototype.hasOwnProperty.call(attrs, propName) && props[propName]) {
        console.warn(`[Element Migrating][${this.$options.name}][Attribute]: ${props[propName]}`)
      }
    }

    for (let eventName in events) {
      const listenerName = `on${eventName.charAt(0).toUpperCase()}${eventName.slice(1)}`

      if (Object.prototype.hasOwnProperty.call(attrs, listenerName)) {
        console.warn(`[Element Migrating][${this.$options.name}][Event]: ${events[eventName]}`)
      }
    }
  },
  methods: {
    getMigratingConfig () {
      return {
        props: {},
        events: {}
      }
    }
  }
}
