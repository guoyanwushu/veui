<template>
  <div class="container-full">
    <header>
      <button class="btn btn-primary" @click="alertMessage">弹出</button>
      <button class="btn btn-primary" @click="alertMessage2">弹出</button>
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
  export default  {
    mounted () {

    },
    methods: {
      alertMessage () {
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
          content: '将会删除当前购物车?'
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
