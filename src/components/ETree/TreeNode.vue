<template>
  <div class="node-container">
    <div class="main-content">
      <p class="node-label" @click="handleClick">
        <i class="iconfont icon-jia" v-show="!spread && node.children" @click.stop="spreadNode"></i>
        <i class="iconfont icon-jian" v-show="spread && node.children" @click.stop="shrinkNode"></i>
        <i class=""></i>
        <input type="checkbox" v-show="">
        {{node.label}}
      </p>
      <div v-show="node.children && spread" class="children-wrapper">
        <tree-node v-for="childnode in node.children" :node="childnode" :key="childnode.id"></tree-node>
      </div>
    </div>
  </div>
</template>
<script>
import {dispatch} from "../../util";

export default {
    name: 'TreeNode',
    componentName: 'TreeNode',
    data () {
      return {
        spread:  this.node.spread !== undefined ? this.node.spread : true
      }
    },
    methods: {
      spreadNode() {
        console.log('click the + button');
        this.spread = true
      },
      shrinkNode () {
        this.spread = false
      },
      handleClick() {
        if (this.node.children) {
          this.spread = !this.spread
        } else {
          dispatch.call(this, 'ETree', 'clickNode', this.node);
        }
      }
    },
    props: {
      node: {
        type: Object
      },
      showChildren: {
        type: Boolean,
        default: false,
      }
    }
}
</script>
<style lang="scss" scoped>
  .node-label {
    text-align: left;
  }
  .children-wrapper {
    padding-left: 20px;
  }
</style>
