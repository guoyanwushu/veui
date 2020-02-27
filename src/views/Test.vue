<template>
  <div>
    <!--<e-input placeholder="请输入账号" label-text="账户名:"></e-input>
    <e-radio label="apple" v-model="fruit" disabled>苹果(大)</e-radio>
    <e-radio label="orange" v-model="fruit">橘子(小)</e-radio>
    <input type="radio" v-model="testRad" value="hello">
    <input type="radio" v-model="testRad" value="world">-->
    <e-tree :treeData="treeData" @clickNode="handleClickNode" :options="treeOptions" @onCheck="handleCheck" :defaultSpread="true" :checkbox="true"></e-tree>
  </div>
</template>
<script>
  import EInput from '../components/EInput/input'
  import ERadio from '../components/ERadio/main'
  import ETree from '../components/ETree/main'
  export default {
    data () {
      return {
        fruit: 'apple',
        testRad: 'hello',
        treeOptions: {
          checkbox: true,
          onlyLeafCheck: true
        },
        treeData: [{
          id: 1,
          label: '根节点',
          checked: true,
          children: [
            {
              id: 2,
              label: '子节点',
              checked: true,
            },
            {
              id: 3,
              label: '子节点2',
              spread: false,
              checked: true,
              children: [{
                id: 4,
                label: '孙子节点1',
                checked: true,
              }, {
                id: 5,
                label: '孙子节点2',
                checked: true
              }]
            }
          ]
        }]
      }
    },
    directives: {
      focus: {
        bind: function (el, binding) {
          el.setAttribute()
        },
        inserted: function (el, binding) {
          el.focus()
        }
      }
    },
    components: {
      EInput,
      ERadio,
      ETree
    },
    methods: {
      handleClickNode (node) {
        console.log(`node:${node}`)
      },
      handleCheck (node) {
        console.log(node);
      }
    }
  }
</script>
<style lang="less">
</style>
