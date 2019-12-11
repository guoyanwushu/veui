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
  let _options = Object.assign({}, defaultOptions, options)
  if (typeof Promise !== 'undefined') {
    return new Promise((resolve, reject) => {
      _options = Object.assign({}, _options, { resolve: resolve, reject: reject })
      showMessage(_options)
    })
  } else {
    showMessage(_options)
  }
}

function showMessage (finalOptions) {
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
  document.body.appendChild(instance.$el)
  Vue.nextTick(function () {
    instance.visible = true
  })
}

export default messageBox

// of from entries find findIndex fill copyWithin
// forEach map filter every some
// reduce
