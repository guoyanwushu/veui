<template>
  <div>

  </div>
</template>
<script>
  /**
   * 类型: 错误 警告 信息 成功反馈
   * 自动关闭 点击确认后关闭并执行回调 确认后直接关闭不执行回调
   * 带标题和内容
   */
  export default {
    name: 'alert',
    props: [{
      type: {
        type: String,
        default: 'info'
      },
      content: {
        type: String,
        required: true
      },
      callback: Function
    }]
  }
</script>
<style lang="scss">
</style>
