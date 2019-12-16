<template>
  <div class="v-input" :class="[{'v-input__focues': isFoucs, 'v-input__disabled': disabled}]">
    <template v-if="type !== 'textarea'">
      <div v-if="$slots.prepend" class="v-input__prepend">
        <slot name="prepend"></slot>
      </div>
      <input type="text" v-model="val"
         :class="{'v-input__prefix': prefixIcon, 'v-input__afterfix': afterfixIcon}"
         @compositionstart="handleCompositionStart"
         @compositionupdate="handleCompositionUpdate"
         @compositionend="handleCompositionEnd"
         @input="handleInput"
         @focus="handleFocus"
         @blur="handleBlur"
         @change="handleChange"
         :disabled="disabled"
         :placeholder="placeholder">
      <div v-if="$slots.prefix || prefixIcon" class="prefixWrap">
        <slot name="prefix"></slot>
        <i :class="prefixIcon" v-if="prefixIcon"></i>
      </div>
      <template v-if="!clearable && !showPassword && !isWordLimitVisible">
        <slot name="afterfix"></slot>
        <i :class="afterfixIcon" v-if="afterfixIcon"></i>
      </template>
      <i v-show="clearable && value"
         class="iconfont icon-close v-input__clear"
         @click="clear">
      </i>
      <i v-if="showPassword"
         :class=""
         @click="handlePasswordVisible">
      </i>
      <div v-if="$slots.append" class="v-input__append">
        <slot name="append"></slot>
      </div>
    </template>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isFoucs: false,
        val: this.value,
        composing: false //是否正在中文输入法选词过程的标志位
      }
    },
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      value: String,
      labelText: String,
      type: {
        default: 'text',
        type: String
      },
      prefixIcon: String,
      afterfixIcon: String,
      showPassword: Boolean,
      clearable: Boolean,
      isWordLimitVisible: Boolean,
      placeholder: {
        type: String,
        default: '请输入内容'
      },
      width: {
        type: Number,
        default: 150
      },
      disabled: Boolean,
      required: Boolean,
      readonly: Boolean,
    },
    watch: {
      value: function (newVal, oldVal) {
        this.val = newVal
      }
    },
    methods: {
      handleInput(event) {
        if (this.composing) return
        this.$emit('input', event.target.value)
      },
      handleCompositionStart() {
        this.composing = true
      },
      handleCompositionEnd() {
        this.composing = false
      },
      handlePasswordVisible() {

      },
      handleCompositionUpdate() {

      },
      handleFocus(event) {
        this.isFoucs = true
        this.$emit('focus', event)
      },
      handleBlur(event) {
        this.isFoucs = false
        this.$emit('blur', event)
      },
      handleChange() {
        this.$emit('change', this.value)
      },
      clear() {
        this.value = '';
      }
    }
  }
</script>
<style lang="scss">


</style>
