<template>
  <div class="container-full">
    <!--<header>
      <v-button icon="icon-jinggao" type="primary" @click="alertMessage" round>弹出</v-button>
      <v-button icon="icon-jinggao" type="primary" :loading="true">加载中</v-button>
      <v-button @click="alertMessage2" type="warning">弹出</v-button>
    </header>-->
    <section>
      <h2>按钮</h2>
      <p>尺寸</p>
      <div>
        <v-button>默认尺寸</v-button>
        <v-button size="medium">中型按钮</v-button>
        <v-button size="small">小型按钮</v-button>
        <v-button size="mini">最小型按钮</v-button>
      </div>
      <p>类型</p>
      <div>
        <v-button>默认按钮</v-button>
        <v-button type="info">默认按钮</v-button>
        <v-button type="primary">主要按钮</v-button>
        <v-button type="success">成功按钮</v-button>
        <v-button type="warning">警告按钮</v-button>
        <v-button type="danger">危险按钮</v-button>
      </div>
      <p>状态</p>
      <div>
        <v-button disabled>默认按钮</v-button>
        <v-button type="info" disabled>信息按钮</v-button>
        <v-button type="primary" disabled>主要按钮</v-button>
        <v-button type="success" disabled>成功按钮</v-button>
        <v-button type="warning" disabled>警告按钮</v-button>
        <v-button type="danger" disabled>危险按钮</v-button>
      </div>
      <p>按钮组</p>
      <div>
        <v-button-group>
          <v-button type="primary">按钮一</v-button>
          <v-button type="primary">按钮二</v-button>
        </v-button-group>
        <v-button-group>
          <v-button type="primary">按钮一</v-button>
          <v-button type="primary">按钮二</v-button>
          <v-button type="primary">按钮三</v-button>
        </v-button-group>
      </div>
    </section>
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
        :multi="false"
        :searchable="true"
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
  import VButtonGroup from '../components/Button/button-group'
  import VSelect from '../components/VSelect/main'
  export default  {
    data () {
      return {
        status: false,
        year: 100,
        fruit: 2,
        username: '王大锤',
        _options: this.options,
        list: [{
          id:1,
          text: '橘子',
          disabled: true
        }, {
          id: 2,
          text: '香蕉'
        }, {
          id: 3,
          text: '芒果',
        }]
      }
    },
    mounted () {

    },
    components: {
      VButton,
      VButtonGroup,
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
  .v-button + .v-button{
    margin-left: 10px;
  }
  .v-button-group + .v-button-group {
    margin-top: 10px;
  }
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
