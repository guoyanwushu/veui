export default {
  name: 'ElRow',
  componentName: 'ElRow',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: Number,
    align: String
  },
  computed: {
    style () {
      var ret = {}
      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`
        ret.marginRight = ret.marginLeft
      }
    }
  },
  render (h) {
    return h(this.tag, {
      class: [
        'el-row'
      ]
    }, this.$slots.default)
  }
}
