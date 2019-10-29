<template>
  <div>
    <tree-node v-for="node in treeData" :node="node" :key="node.id"></tree-node>
  </div>
</template>
<script>
export default {
  name: 'ETree',
  componentName: 'ETree',
  data () {
    return {
      default
    }
  },
  props: {
    treeData: {
      type: Array
    },
    options: {
      checkbox:
    },
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
