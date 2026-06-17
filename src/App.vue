<template>
  <div class="demo">
    <h1>CgUI Vue 3 Demo</h1>

    <section>
      <h2>Input</h2>
      <cg-input
        v-model="value"
        placeholder="请输入内容"
        clearable
      />
      <p>当前值：{{ value || '-' }}</p>
    </section>

    <section>
      <h2>Alert</h2>
      <cg-alert
        title="Vue 3 组件库已加载"
        description="这是通过 Vue 3 插件方式注册的组件。"
        type="success"
        show-icon
      />
    </section>

    <section>
      <h2>Switch</h2>
      <cg-switch v-model="enabled" />
      <span>{{ enabled ? '开启' : '关闭' }}</span>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      value: '',
      enabled: false
    }
  }
}
</script>

<style scoped>
.demo {
  max-width: 720px;
  margin: 40px auto;
  font-family: Arial, "PingFang SC", sans-serif;
  color: #303133;
}

section {
  margin-top: 24px;
}
</style>
