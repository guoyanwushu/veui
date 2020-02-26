<template>
  <div class="v-select--wrap" ref="select">
    <e-input type="text" @focus="focus" :value="val" :readonly="!searchable" v-if="!multi" @input="filterOptions"
             @blur="blur" ref="singleInput"></e-input>
    <e-input type="text" @focus="focus" :value="multiText.join(',')" :readonly="!searchable" v-if="multi"
             @blur="blur"></e-input>
    <transition name="dd">
      <ul v-show="isActive" class="v-select__options" @mouseenter="isSelecting=true" @mouseleave="isSelecting=false">
        <div class="v-select__arrow"></div>
        <div v-if="!multi">
          <li v-for="item in showoptions"
              :key="item[valueField]"
              @click="selectItem(item)"
              @mouseenter="isHover=true"
              @mouseleave="isHover=false"
              :class="{'v-select__selected': item[valueField] == selectedValue,
                        'v-select__active': item[valueField] == selectedValue&&!isSelecting ,
                        'v-select__disabled': item.disabled,
                        'v-select__available': !item.disabled}">
            <slot name="options" v-bind:optionItem="item">{{item[textField]}}</slot>
          </li>
          <li v-if="!showoptions.length"><span>暂无数据...</span></li>
        </div>


        <div v-if="multi">
          <li v-for="item in showoptions"
              :key="item[valueField]"
              @click="handelMultiChoose(item)"
              @mouseenter="isHover=true"
              @mouseleave="isHover=false"
              :class="{'v-select__selected': multiValue.indexOf(item[valueField])>-1,
                    'v-select__active': item[valueField] == selectedValue&&!isSelecting ,
                    'v-select__disabled': item.disabled,
                    'v-select__available': !item.disabled}">
            <slot name="options" v-bind:optionItem="item">{{item[textField]}}</slot>
            <i class="v-select__multicheck" v-show="multiValue.indexOf(item[valueField])>-1">√</i>
          </li>
        </div>
      </ul>
    </transition>
  </div>
</template>
<script>
  import EInput from '../EInput/input'

  export default {
    name: 'VSelect',
    componentName: 'VSelect',
    data() {
      return {
        isActive: false,
        isSelecting: false,
        val: this.value,
        multiValue: [],
        multiText: [],
        isHover: false,
        showoptions: this.options
      }
    },
    components: {
      EInput
    },
    created() {
      if (this.remote && this.remoteFunc) {
        this.remoteFunc().then((data) => {
          this.options = data
        })
      }
      if (this.selectedValue && !this.multi) {
        const _selectedItem = this.options.find(item => item[this.valueField] === this.selectedValue)
        this.val = _selectedItem[this.textField]
      }
      if (this.selectedValue && this.multi) {
        this.multiValue = this.selectedValue
        this.options.map(item => {
          if (this.multiValue.indexOf(item[this.valueField]) > -1 && !item.disabled) {
            this.multiText.push(item[this.textField])
          }
        })
      }
    },
    props: {
      selectedValue: '',
      value: String,
      options: Array,
      remote: {
        type: Boolean,
        default: false
      },
      remoteFunc: Function,
      searchable: {
        type: Boolean,
        default: false
      },
      textField: {
        type: String,
        default: 'text'
      },
      valueField: {
        type: String,
        default: 'id'
      },
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
    directives: {
      'hover': {
        inserted: function (el, binding) {
          console.log(binding)
          el.title = '瞅啥呢'
        }
      },
      beforeUpdate: function () {

      },
      updated: function (el, binding, newNode, oldNode) {

      }
    },
    methods: {
      filterOptions: function (val) {
        this.showoptions = this.options.filter(function (item) {
          console.log(item);
          return item.text.indexOf(val) > -1
        })
      },
      selectItem(item) {
        if (item.disabled) {
          return
        }
        this.val = item[this.textField]
        this.$emit('select', item[this.valueField])
        this.isActive = false
      },
      handelMultiChoose(optionItem) {
        if (optionItem.disabled) return
        var index = this.multiValue.findIndex(item => item == optionItem[this.valueField]);
        if (index > -1) {
          this.multiValue.splice(index, 1)
          this.multiText.splice(index, 1)
        } else {
          this.multiValue.push(optionItem[this.valueField])
          this.multiText.push(optionItem[this.textField])
        }
        this.$emit('select', this.multiValue);
      },
      focus() {
        this.isActive = true;
      },
      blur() {
        if (!this.isHover) {
          this.isActive = false
          this.$refs.singleInput.val = this.val || ''
          this.showoptions = this.options
        }
      }
    }
  }
</script>
<style lang="scss">
  .dd-enter-active, .dd-leave-active {
    transition: all .2s ease;
    transform-origin: left top;
  }

  .dd-enter, .dd-leave-to {
    opacity: 0;
    transform: scaleY(0.0001);
  }
</style>
