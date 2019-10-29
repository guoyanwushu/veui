<template>
  <div>
    <div>
      <template v-if="type !== 'textarea'">
        <div v-if="$slots.prepend">
          <slot name="prepend"></slot>
        </div>
        <input type="text"
               @compositionstart="handleCompositionStart"
               @compositionupdate="handleCompositionUpdate"
               @compositionend="handleCompositionEnd"
               @input="handleInput"
               @focus="handleFocus"
               @blur="handleBlur"
               @change="handleChange">
        <span v-if="$slots.prefix || prefixIcon">
          <slot name="prefix"></slot>
          <i :class="prefixIcon" v-if="prefixIcon"></i>
        </span>
        <template v-if="!clearable && !showPassword && !isWordLimitVisible">
          <slot name="afterfix"></slot>
          <i :class="afterfixIcon" v-if="afterfixIcon"></i>
        </template>
        <i v-if="clearable"
          :class=""
          @click="clear">
        </i>
        <i v-if="showPassword"
           :class=""
           @click="handlePasswordVisible">
        </i>
        <div v-if="$slots.append">
          <slot name="append"></slot>
        </div>
      </template>
      <textarea v-if="type === 'textarea'"></textarea>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value: this.val,
        composing: false //是否正在中文输入法选词过程的标志位
      }
    },
    props: {
      val: String,
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
    methods: {
      handleInput (event) {
        if (this.composing) return
        this.$emit('input', event.target.value)
      },
      handleCompositionStart () {
        this.composing = true
      },
      handleCompositionEnd () {
        this.composing = false
      },
      handlePasswordVisible () {

      },
      handleFocus (event) {
        this.$emit('focus', event)
      },
      handleBlur (event) {
        this.$emit('blur', event)
      },
      handleChange () {
        this.$emit('change', this.value)
      },
      clear () {
        this.value = ''
      }
    }
  }
</script>
<style lang="scss">


</style>
