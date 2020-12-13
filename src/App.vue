<template>
  <div id="app">
    <nav>
      <div class="nav-logo">
        Twotter
      </div>
      <div class="nav-user">
        alex kagai
      </div>
    </nav>
    <UserProfile/>
  </div>
</template>


<script>
import UserProfile from './views/UserProfile.vue'

export default{
  name: 'App',
  components:{ UserProfile }
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
