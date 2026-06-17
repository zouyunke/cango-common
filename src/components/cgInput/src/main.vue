<template>
  <div
    class="cg-input"
    :class="`cg-component-size__${size}`"
  >
    <input
      class="cg-input__content"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="handleInput"
    />
    <button
      v-if="clearable && !disabled && modelValue"
      class="cg-input__clear"
      type="button"
      @click="clear"
    >
      x
    </button>
  </div>
</template>

<script>
export default {
  name: 'cg-input',
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default',
      validator: value => ['large', 'default', 'small', 'mini'].includes(value)
    }
  },
  emits: [
    'update:modelValue',
    'clear'
  ],
  methods: {
    handleInput (event) {
      this.$emit('update:modelValue', event.target.value)
    },
    clear () {
      this.$emit('update:modelValue', '')
      this.$emit('clear')
    }
  }
}
</script>

<style lang="less" scoped>
.cg-input {
  position: relative;
}

.cg-input__clear {
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  border: 0;
  background: transparent;
  color: #909399;
  cursor: pointer;
}
</style>
