<template>
  <div>
    <tree-node v-for="node in treeData" :node="node" :key="node.id" :options="options"></tree-node>
  </div>
</template>
<script>
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
  props: {
    treeData: {
      type: Array
    },
    options: Object,
    checked: {
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
