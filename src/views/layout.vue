<template>
  <div class="container-full">
    <header>
      <v-button icon="icon-jinggao" type="primary" @click="alertMessage">弹出</v-button>
      <v-button icon="icon-jinggao" type="primary" loading="true">加载中</v-button>
      <v-button @click="alertMessage2" type="warning">弹出</v-button>
    </header>
    <article>
      <aside class="col-3">
        <main-nav></main-nav>
      </aside>
      <section class="col-9">
        <sub-nav></sub-nav>
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
  import VButton from '../components/Button/index'
  export default  {
    data () {
      return {
        status: false,
        year: 100
      }
    },
    mounted () {

    },
    components: {
      VButton
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
    top: 60px;
    right: 0;
    bottom: 0;
  }
</style>
