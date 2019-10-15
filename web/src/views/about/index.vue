<template>
  <section class="author">
    <article class="item">
      <h1 class="logo">
        <img src="../../assets/images/LOGO.png" alt="LOGO">
      </h1>
    </article>
    <article class="text">
      <p>
        职业是一名全栈工程师，本网站在开源博客基础上进行开发，为了分享自己的技术知识，希望跟大家在技术的道路上共同成长。
      </p>
      <p>技术QQ交流群：172593706</p>
      <p>搜索【编码时间】获取更多资源</p>
    </article>
    <article class="end">
      <p>最后，祝大家每天开心，每天幸福！</p>
    </article>
  </section>
</template>

<script>
  export default {
    created() {
      document.title = `波博客 - boblog.com`
    }
  }
</script>

<style scoped lang="scss">
  .author {
    box-sizing: border-box;
    width: 70%;
    min-height: 80vh;
    margin: 24px auto;
    padding-bottom: 24px;
    background-color: white;
  }

  .item {
    width: 100%;
    padding: 48px 0;
    text-align: center;
    background: white;
  }

  .logo {
    width: 360px;
    margin: 0 auto;

    & img {
      width: 100%;
    }
  }

  a {
    color: #409EFF;
  }

  .text {
    padding: 0 24px 24px;
    line-height: 42px;
    font-size: 20px;
    color: #666;
    text-indent: 2em;
  }

  .content {
    padding-top: 24px;
  }

  .end {
    line-height: 42px;
    font-size: 20px;
    color: #666;
    text-indent: 2em;
  }

  @media screen and (min-width: 200px) and (max-width: 750px) {
    .author {
      width: 100%;
    }
  }
</style>
