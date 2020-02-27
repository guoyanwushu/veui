<template>
  <div>
    <tree-node v-for="node in treeData" :node="node" :key="node.id" :options="options"></tree-node>
  </div>
</template>
<script>
// 要做什么东西，拿起来就做是不好的习惯。得先分析一下具体的需求，需求之间的联系。以及所要用到的技术，以及没有想通的地方和可能可行的解决办法。针对完备性，可扩展性，和可交互性需要做的措施。总的来说，要先想好做些什么，以及怎么做
// 谋定而后动， 通过上一部分卡壳的出错的，就是值得去学习和总结的地方，从而转换为自己的经验.
export default {
  name: 'ETree',
  componentName: 'ETree',
  data () {
    return {
      defaultOPtions: {
        checkbox: false,
        onlyLeafCheck: false,
        autoSpread: true
      }
    }
  },
  provide () {
    return {
      defaultSpread: this.defaultSpread,
      checkbox: this.checkbox
    }
  },
  props: {
    treeData: {
      type: Array
    },
    options: Object,
    checked: {
      type: Boolean,
      default: false
    },
    defaultSpread: {
      type: Boolean,
      default: false
    },
    checkbox: {
      type: Boolean,
      default: false
    }
  },
  methods: {
  },
  components: {
    TreeNode: () => import('./TreeNode.vue')
  }
}
</script>
<style lang="less">
</style>
