<template>
  <div>
    <e-input placeholder="请输入账号" label-text="账户名:"></e-input>
    <e-radio label="apple" v-model="fruit" disabled>苹果(大)</e-radio>
    <e-radio label="orange" v-model="fruit">橘子(小)</e-radio>
    <input type="radio" v-model="testRad" value="hello">
    <input type="radio" v-model="testRad" value="world">
  </div>
</template>
<script>
  import EInput from '../components/EInput/input'
  import ERadio from '../components/ERadio/main'
  export default {
    data () {
      return {
        fruit: 'apple',
        testRad: 'hello'
      }
    },
    components: {
      EInput,
      ERadio
    }
  }
</script>
<style lang="less">
</style>
