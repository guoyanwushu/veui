<template>
  <div class="node-container">
    <div class="main-content">
      <p class="node-label" @click="handleClick">
        <i class="iconfont icon-jia" v-show="!spread && node.children" @click.stop="spreadNode"></i>
        <i class="iconfont icon-jian" v-show="spread && node.children" @click.stop="shrinkNode"></i>
        <span class="checkbox" :class="{'checked': checked == 1, 'partchecked': checked == 2, 'unchecked': checked == 0}" @click.stop="handleCheckbox">
          <i v-if="checked == 1">V</i>
          <i v-if="checked == 2">▬</i>
        </span>
        {{node.label}}
      </p>
      <div v-show="node.children && spread" class="children-wrapper">
        <tree-node v-for="childnode in node.children" :node="childnode" :key="childnode.id" :options="options" :pchecked="checked"></tree-node>
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
      spread:  this.defaultSpread,
      checked: (this.pchecked == 1 || this.partChecked == 0)?this.pchecked:(+this.node.checked),
      partChecked: false
    }
  },
  inject: ['defaultSpread', 'checkbox'],
  methods: {
    spreadNode() {
      this.spread = true
    },
    shrinkNode () {
      this.spread = false
    },
    handleCheckbox () {
      this.checked = +(!this.checked);
      if (this.$parent && this.$parent.$options.componentName === 'TreeNode') {
        this.checked?this.$parent.childcheck():this.$parent.childuncheck()
      }
    },
    childcheck () {
      const children = this.$children;
      this.checked = children.every((child) => child.checked == 1)?1:2;
      if (this.$parent && this.$parent.$options.componentName === 'TreeNode') {
        this.$parent.childcheck()
      }
    },
    childuncheck () {
      const children = this.$children;
      this.checked = children.some((child) => (child.checked == 1 || child.checked == 2))?2:0;
      if (this.$parent && this.$parent.$options.componentName === 'TreeNode') {
        this.$parent.childuncheck()
      }
    },
    handleClick() {
      if (this.node.children) {
        this.spread = !this.spread
      } else {
        dispatch.call(this, 'ETree', 'clickNode', this.node)
      }
    }
  },
  props: {
    node: {
      type: Object
    },
    showChildren: {
      type: Boolean,
      default: false
    },
    options: Object,
    pchecked: {
      type: Number
    }
  }
}
</script>
<style lang="scss" scoped>
  .node-label {
    text-align: left;
    padding-left: 16px;
    position: relative;
    .iconfont {
      position: absolute;
      left: 0;
      top: 3px;
    }
  }
  .children-wrapper {
    padding-left: 20px;
  }
  .checkbox {
    margin-left: 8px;
    display: inline-block;
    width: 18px;
    height: 18px;
    position: relative;
    border: 1px solid #409eff;
    border-radius: 3px;
    vertical-align: middle;
    text-align: center;
    box-sizing: border-box;
    i {
      color: #fff;
      font-size: 10px;
      font-style: normal;
      vertical-align: middle;
    }
    &.checked, &.partchecked{
      background-color: #409eff;
      color: #fff;
    }
    &.checked {

    }
  }
</style>
