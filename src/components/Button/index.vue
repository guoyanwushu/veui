<template>
  <button type="button"
          :class="['v-button', size?'v-btn--'+size:'', type?'v-button--'+type:'', {isLoading: loading, isdisabled: disabled}, {'v-button-round': round}]"
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
      round: String,
      disabled: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      },
      icon: String,
      size: String,
      round: Boolean,
      type: {
        type: String,
        default: 'default'
      },
    },
    mounted () {
      console.log(this.round, this.$attrs)
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
