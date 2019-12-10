import MessageBox from './MessageBox'
import Vue from 'vue'
var MessageBoxConstructor = Vue.extend(MessageBox)
var instance
const defaultOptions = {
  title: '',
  type: 'info',
  content: '',
  showConfirmButton: false,
  showCancelButton: true,
  confirmCallback: null,
  cancelCallback: null,
  confirmButtonText: '确定',
  cancelButtonText: '取消'
}
function messageBox (options) {
  const finalOptions = Object.assign({}, defaultOptions, options)
  if (!instance) {
    instance = new MessageBoxConstructor({
      el: document.createElement('div')
    })
  }
  for (var item in finalOptions) {
    if (finalOptions.hasOwnProperty(item)) {
      instance[item] = finalOptions[item]
    }
  }
  console.log(instance)
  document.body.appendChild(instance.$el)
  Vue.nextTick(function () {
    instance.visible = true
  })
}
export default messageBox

// of from entries find findIndex fill copyWithin
// forEach map filter every some
// reduce
