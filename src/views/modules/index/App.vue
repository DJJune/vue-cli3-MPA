<template>
  <div id="app">
    <div id="nav">
      <h1>主页面</h1>
      <div>
        <div class="client" @click="route(0)">客户端</div>
        <div class="console" @click="route(1)">日志页</div>
      </div>
      <div>
        <a class="client" href="client.html">客户端</a>
        <a class="console" href="console.html">日志页</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {},
  computed: {},
  methods: {
    route (category) {
      console.log(category)
      if (category) {
        // 跳转至日志页
        window.location.href = 'console.html'
      } else {
        // 跳转至客户端页面
        window.location.href = 'client.html'
      }
    }
  }
}
</script>

<style lang="scss">
  #app {
    .client, .console {
      display: inline-block;
      border: 1px solid #ccc;
      padding: 3px 15px;
      margin: 10px 20px;
      font-size: 14px;
      color: blue;
      cursor: pointer
    }
  }
</style>
