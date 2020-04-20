<template>
  <div>
    <v-radio  v-model="fruit" label="apple" disabled="">苹果</v-radio>
    <v-radio  v-model="fruit" label="orange">橘子</v-radio>
    <v-radio  v-model="fruit" label="banana">香蕉</v-radio>
    <v-radio  v-model="fruit" label="youzi">柚子</v-radio>
    <input type="radio" value="apple" v-model="tfruit"> 小苹果
    <input type="radio" value="orange" v-model="tfruit"> 小橘子
    <radio-group v-model="fruit">
      <v-radio  label="orange">橘子</v-radio>
      <v-radio  label="banana">香蕉</v-radio>
      <v-radio  label="youzi">柚子</v-radio>
    </radio-group>
  </div>
</template>
<script>
import VRadio from '../components/ERadio/main'
import RadioGroup from '../components/ERadio/radio-group'
export default {
  data () {
    return {
      fruit: 'apple'
    }
  },
  computed: {
    tfruit: {
      get () {
        return this.fruit
      },
      set (value) {
        this.fruit = value
      }
    }
  },
  components: {
    VRadio,
    RadioGroup
  }
}
</script>
<style lang="less">
</style>
