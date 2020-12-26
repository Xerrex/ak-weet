<template>
  <div id="app">
    <nav>
      <router-link to='/'>
        <div class="nav-logo">
          Twotter
        </div>
      </router-link>

      <router-link to='/'>
        <div class="nav-user">
          alex kagai
        </div>
      </router-link>
    </nav>
    <router-view/>
  </div>
</template>


<script>

export default{
  name: 'App',
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 5%;
  background-color: darkslateblue;
  color: white;

  .nav-logo {
    font-weight: bold;
    font-size: 24px;
  }

  .nav-user {
    font-weight: bold;
  }
}
</style>
