<template>
  <div class="container">
    <!-- <h3>Hello World</h3> -->
    <!-- {{hello.title}} -->
    <!-- <nuxt-content :document="hello" /> -->
    <div v-for="article in articles" :key="article.slug">
      <h2>{{article.title}}</h2>
      <nuxt-content :document="article" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const hello = await $content('hello').fetch()
    const articles = await $content('articles')
      .sortBy('title')
      .limit(2)
      .fetch()

    return {
      hello,
      articles
    }
  }
}
</script>

<style>
h3 {
  font-size: 25px;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
