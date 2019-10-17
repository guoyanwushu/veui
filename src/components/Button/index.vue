<template>
  <button type="button"
          :class="['v-button', 'el-btn--size_'+size?size:'normal', 'v--button--'+type, {isLoading: loading, isdisabled: disabled}]"
          :disabled='disabled'
          @click="handleClick"
  >
    <i class="iconfont icon-loading1 loading" v-if="loading"></i>
    <i :class="['iconfont', icon]" v-if="icon && !loading"></i>
    <slot></slot>
  </button>
</template>
<script>
  export default {
    name: 'VButton',
    props: {
      disabled: Boolean,
      loading: Boolean,
      icon: String,
      size: String,
      type: {
        type: String,
        default: 'default'
      },
    },
    methods: {
      handleClick() {
        this.$emit('click')
      }
    }
  }
</script>
<style lang="scss">
</style>
