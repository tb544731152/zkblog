<template>
  <section class="Footer-wrap">
    <footer class="footer-inner">
      <p>zkblog.sxccsd.com - 赵奎博客 Copyright&copy; Author赵奎 zhaok@sxccsd.com</p>
      <p><a href="http://www.miit.gov.cn" target="_blank">晋ICP备19008667号</a></p>
    </footer>
  </section>
</template>

<script>
  import {mapState, mapActions} from 'vuex';

  export default {
    data() {
      return {}
    },
  }
</script>

<style lang="scss" scoped>
  .footer-inner {
    padding: 64px 32px;
    line-height: 36px;
    text-align: center;
    font-size: 18px;
    color: #fff;
    background: #262626;
  }

  .footer-inner a {
    color: #fff;
    text-decoration: none;
  }
</style>
