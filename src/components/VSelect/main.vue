<template>
  <div class="v-select--wrap">
    <e-input type="text" @focus="focus" :value="val"></e-input>
    <ul v-show="isActive" class="v-select__options">
      <div class="v-select__arrow"></div>
      <li v-for="item in options" :key="item[valueField]" @click="selectItem(item)" :class="{'v-select__active': item[valueField] == selectedValue}">{{item[textField]}}</li>
    </ul>
  </div>
</template>
<script>
import EInput from '../EInput/input'
export default {
  name: 'VSelect',
  componentName: 'VSelect',
  data () {
    return {
      isActive: false,
      val: this.value
    }
  },
  components: {
    EInput
  },
  created () {
    if (this.selectedValue) {
      const _selectedItem = this.options.find(item => item[this.valueField] === this.selectedValue)
      this.val = _selectedItem[this.textField]
    }
  },
  props: {
    selectedValue: '',
    value: String,
    options: Array,
    textField: {
      type: String,
      default: 'text'
    },
    valueField: {
      type: String,
      default: 'id'
    },
    panelMaxHeight: Number,
    multi: {
      type: Boolean,
      multi: false
    },
    onSelect: Function,
    onChange: Function
  },
  model: {
    prop: 'selectedValue',
    event: 'select'
  },
  methods: {
    selectItem (item) {
      // 要提供钩子给外部
      console.log(item)
      this.val = item[this.textField]
      this.$emit('select', item[this.valueField])
      this.isActive = false
    },
    focus () {
      this.isActive = true
    },
    blur () {
      this.isActive = false
    }
  }
}
</script>
<style lang="scss">
</style>
