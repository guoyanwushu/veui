function dispatch (componentName, eventName, params) {
  var parent = this.$parent || this.$root
  while (parent) {
    if (parent.$options.componentName === componentName) {
      parent.$emit(eventName, params)
      break
    } else {
      parent = parent.$parent || parent.$root
    }
  }
}
export { dispatch }
