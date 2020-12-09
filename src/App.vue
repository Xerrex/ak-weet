<template>
  <div id="nav">
    @{{ user.username }} - {{ fullname }}
    <strong> Followers</strong> {{ followers }}
    <button @click="followUser"> follow </button>

  </div>
</template>


<script>
export default{
  name: 'App',
  data(){
    return{
      followers:0,
      user:{
        username:'alexkagai',
        firstname: 'Alex',
        lastname: 'Kagai',
        email: 'alex@ak-tweet.com',
        isAdmin: true
      }
    }
  }, // end of data
  watch:{
    followers(currentCount, previousCount){
      if(previousCount < currentCount){
        console.log(`${this.user.username} has gained a new follower`)
      }
    }

  }, // end of watch
  computed:{
    fullname(){
      return `${this.user.firstname} ${this.user.lastname}`
    }

  }, //end of Computed
  methods:{
    followUser(){
      this.followers++;
    }
  }, // end of Methods
  mounted(){
    this.followUser();
    console.log(`${ this.user.username} just got followed`);
  }
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
  text-align: center;
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
