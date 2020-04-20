<template>
  <label class="v-radio">
    <span class="v-radio--wrap">
      <input type="radio" class="v-radio--input" @change="handelChange" v-model="model" ref="radio" :value="label" :disabled="disabled">
      <span :class="['v-radio--icon', {selected: model === label, disabled: disabled}]"></span>
    </span>
    <span :class="['v-radio--label', {selected: model === label && !disabled, disabled: disabled}]"><slot></slot></span>
    <span class="v-radio--label" v-if="!$slots.default" :class="{selected: model === label}">{{label}}</span>
  </label>
</template>
<script>
  import {dispatch} from "../../util";

  export default {
    name: 'ERadio',
    data () {
      return {
        radioGroup: null
      }
    },
    props: {
      value: String,
      label: String,
      disabled: Boolean,
    },
    computed: {
      inGroup () {
        var parent = this.$parent
        var _inGroup = false
        while (parent) {
          if (parent.$options.name === 'radio-group') {
            _inGroup = true
            this.radioGroup = parent
            break
          } else {
            parent = parent.$parent
          }
        }
        return _inGroup
      },
      model: {
        get() {
          console.log(this.inGroup, this.radioGroup);
          return this.inGroup ? this.radioGroup.value : this.value
        },
        set(value) {
          this.inGroup ? dispatch.call(this, 'radio-group', 'input', value) : this.$emit('input', value)
          if (value === this.label) {
            this.$refs.radio.checked = true;
          }
        }
      }
    },
    methods: {
      handelChange() {
        this.$emit('change',)
      }
    }
  }
</script>

