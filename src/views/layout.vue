<template>
  <div class="container-full">
    <header>
      <v-button icon="icon-jinggao" type="primary" @click="alertMessage">弹出</v-button>
      <v-button icon="icon-jinggao" type="primary" :loading="true">加载中</v-button>
      <v-button @click="alertMessage2" type="warning">弹出</v-button>
    </header>
    <div>
      <e-input :clearable="true">
        <i class="iconfont icon-caidan" slot="prepend"></i>
      </e-input>
      <e-input placeholder="请输入用户名" prefixIcon="iconfont icon-xiayu" v-model="username">
      </e-input>
      <e-input placeholder="请输入用户名" prefixIcon="iconfont icon-xiayu" :disabled="true">
      </e-input>
      <v-select
        :options="list"
        v-model="fruit"
        :multi="true"
      >
        <template #options="{optionItem}">{{optionItem.text+'--※'}}</template>
      </v-select>
    </div>
    <article>
      <aside class="col-3">
      </aside>
      <section class="col-9">
        <section>
          <router-view>
          </router-view>
        </section>
      </section>
    </article>
  </div>
</template>
<script>
  import messageBox from '../components/MessageBox/index'
  import EInput from '../components/EInput/input'
  import VButton from '../components/Button/index'
  import VSelect from '../components/VSelect/main'
  export default  {
    data () {
      return {
        status: false,
        year: 100,
        fruit: [2,3],
        username: '王大锤',
        list: [{
          id:1,
          text: '橘子',
          disabled: true
        }, {
          id: 2,
          text: '香蕉'
        }, {
          id: 3,
          text: '芒果'
        }]
      }
    },
    mounted () {

    },
    components: {
      VButton,
      EInput,
      VSelect
    },
    methods: {
      alertMessage () {
        this.status = true;
        setTimeout(() => {
          console.log('hello world')
          this.status = false
        }, 2000);
        messageBox({
          title: '支付确认',
          type: 'warning',
          content: '确认支付302元购买当前物品?'
        })
      },
      alertMessage2 () {
        messageBox({
          title: '确认删除么',
          type: 'info',
          content: '将会删除当前购物车?',
          showConfirmButton: true,
          confirmButtonText: 'ok'
        }).then(function (action, inst) {
          console.log(action)
        }).catch(function (action) {
          console.log(`关闭了哦:${action}`)
        })
      }
    }
  }
</script>
<style lang="scss">
  header {
    height: 60px;
  }
  aside {
    height: 100%;
  }
  article {
    position: absolute;
    left: 0;
    top: 800px;
    right: 0;
    bottom: 0;
  }
</style>
