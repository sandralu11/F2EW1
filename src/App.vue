<template>
  <div id="app">
    <HeadWrapper/>

    <router-view/>

    <FootWrapper/>
  </div>
</template>

<script>
import HeadWrapper from './components/headWrapper.vue'
import FootWrapper from './components/footWrapper.vue'

export default {
  components: {
    HeadWrapper,
    FootWrapper
  }
}
</script>

<style lang="scss">
ul,li,a { 
  text-decoration: none; 
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
