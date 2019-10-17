<template>
  <div>
    <div>

      <template v-if="type !== 'textarea'">
        <div v-if="$slots.prepend"></div>
        <input type="text"
               @compositionstart="handleCompositionStart"
               @compositionupdate="handleCompositionUpdate"
               @compositionend="handleCompositionEnd"
               @input="handleInput"
               @focus="handleFocus"
               @blur="handleBlur"
               @change="handleChange">
        <span v-if="$slots.prefix || prefixIcon"></span>
        <span v-if="$slots.afterfix || afterfixIcon"></span>
        <div v-if="$slots.afterpend"></div>
      </template>
      <textarea v-if="type === 'textarea'"></textarea>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value: this.val
      }
    },
    props: {
      val: String,
      labelText: String,
      type: {
        default: 'text',
        type: String
      },
      clearable: Boolean,
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
      focus() {
        this.$emit('focus')
      },
      change () {
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
