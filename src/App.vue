<template>
  <div id="app">
    <Header />
    <Main />
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Main from '@/components/Main'

  export default{
    components:{
      Header, Main
    }
  }

</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}

body{
  background-color: rgba(236, 236, 236, 0.377);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
