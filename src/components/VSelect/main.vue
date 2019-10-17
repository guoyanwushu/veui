<template>
  <div class="v-select--wrap">
    <input type="text" @focus="focus">
    <ul v-show="isActive">
      <li v-for="item in options" :key="item" @click="selectItem">{{item[textField]}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'VSelect',
  componentName: 'VSelect',
  data () {
    return {
      isActive: false
    }
  },
  props: {
    options: Array,
    textField: {
      type: String,
      default: 'id'
    },
    valueField: {
      type: String,
      default: 'value'
    },
    panelMaxHeight: Number,
    multi: {
      type: Boolean,
      multi: false
    },
    onSelect: Function,
    onChange: Function
  },
  methods: {
    selectItem () {
      this.onSelect.call(this)
    },
    focus () {
      this.isActive = true
    }

  }
}
</script>
<style lang="scss">
</style>
