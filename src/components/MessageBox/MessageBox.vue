<template>
  <transition name="show">
    <div class="message-container" v-show="visible" @click.self="handleWrapperClick">
      <div class="message-box">
        <p class="message-header">
          <span class="message-title">{{title}}</span>
          <i @click="closeBox" v-if="showCloseButton">X</i>
        </p>
        <div class="message-content">
          <i class="iconfont type"
             :class="{'icon-chenggong': type == 'success',
                    'icon-jinggao': type == 'warning',
                    'icon-cuowu': type == 'error',
                    'icon-tishi': type == 'info'}" v-if="type"></i>
          {{content}}
        </div>
        <div class="message-options">
          <el-button @click.native="handleAction('cancel')" v-if="showCancelButton">{{cancelButtonText || '取消'}}</el-button>
          <el-button @click.native="handleAction('confirm')" v-if="showConfirmButton" :type="'primary'">{{confirmButtonText ||
            '确定'}}
          </el-button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  import ElButton from "../Button/index";

  /**
   * 类型: 错误 警告 信息 成功反馈
   * 自动关闭 点击确认后关闭并执行回调 确认后直接关闭不执行回调
   * 带标题和内容
   */
  export default {
    components: {ElButton},
    name: 'alert',
    data() {
      return {
        visible: false,
        year: 99
      }
    },
    props: {
      type: {
        type: String,
        default: 'info'
      },
      content: {
        type: String,
      },
      title: String,
      confirmCallback: Function,
      cancelButtonText: String,
      confirmButtonText: String,
      showCloseButton: {
        type: Boolean,
        default: true
      },
      showCancelButton: {
        type: Boolean,
        default: true
      },
      showConfirmButton: {
        type: Boolean,
        default: false
      },
      closeOnClickModal: {
        type: Boolean,
        default: true
      },
    },
    methods: {
      closeBox() {
        this.visible = false
      },
      confirmBox() {
        this.visible = false
        if (this.confirmCallback) {
          this.confirmCallback();
        }
      },
      handleAction (action) {
        this.visible = false
        if (action == 'confirm') {
          this.resolve?this.resolve(action, this):''
        } else {
          this.reject?this.reject(action, this):''
        }
        this.callback?this.callback(action, this):''
      },
      handleWrapperClick() {
        this.visible = false
      }
    },
    doClose() {
      if ('') {

      }
    },
    handleWrapperClick() {
      if (this.closeOnClickModal) {
        this.visible = false
      }
    }
  }
</script>
<style lang="scss">
  .message-container {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .message-box {
    position: absolute;
    left: 50%;
    top: 50%;
    background-color: #fff;
    transform: translate3d(-50%, -50%, 0);
    width: 320px;
    height: 140px;
    border: 1px solid #ccc;
    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }

  .message-header {
    display: flex;
    padding: 12px;
    justify-content: space-between;
    .message-title {
      width: 160px;
      white-space: nowrap;
      overflow: hidden;
      font-size: 16px;
      text-align: left;
      text-overflow: ellipsis;
    }
    i {
      padding: 2px;
    }
  }

  .message-content {
    padding: 0 12px;
    font-size: 14px;
    .type {
      padding-right: 5px;
    }
  }

  .message-options {
    position: absolute;
    padding: 0 12px;
    bottom: 5px;
    left: 0;
    right: 0;
    text-align: right;
    button {
      margin-left: 8px;
    }
  }

  .show-enter-active {
    animation: show-in .3s;
  }

  .show-leave-active {
    animation: show-out .3s;
  }

  @keyframes show-in {
    0% {
      transform: translate3d(0, -20px, 0);
      opacity: 0;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  @keyframes show-out {
    0% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
    100% {
      transform: translate3d(0, -20px, 0);
      opacity: 0;
    }
  }
</style>
