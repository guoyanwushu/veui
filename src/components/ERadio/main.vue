<template>
  <label>
    <span class="v-radio--wrap">
      <input type="radio" class="v-radio" @change="handelChange" v-model="model" ref="radio" :value="label" :disabled="disabled">
      <span class="v-radio--icon"></span>
    </span>
    <slot></slot>
    <span class="v-radio--label" v-if="!$slots.default">{{label}}</span>
  </label>
</template>
<script>
  export default {
    name: 'ERadio',
    props: {
      value: String,
      label: String,
      disabled: Boolean
    },
    computed: {
      model: {
        get() {
          return this.value
        },
        set(value) {
          console.log(value);
          this.$emit('input', value);
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
<style lang="scss">
  @import "../../styles/variable";

  .v-radio--wrap {
    position: relative;
    line-height: 30px;
    vertical-align: middle;
  }

  .v-radio--icon {
    display: inline-block;
    width: 16px;
    height: 16px;

    border-radius: 8px;
    box-sizing: border-box;
    border: 1px solid $--color--primary;
  }

  .v-radio--label {
    margin-left: 14px;
  }

  .v-radio {
    width: 16px;
    height: 16px;
    position: absolute;
    visibility: hidden;
    &:checked + .v-radio--icon {
      background-color: #fff;
      border: 5px solid $--color--primary
    }
    &:disabled + .v-radio--icon {
      border-color: #ccc;
    }
  }
</style>
