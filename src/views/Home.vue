<template>
  <div class="home">
    <div class="page-title">
      <h1>welcome Home</h1>
    </div>
    <div class='user-list'>
      <router-link v-for="user in users" :to="{ name:'UserProfile', params:{userid:user.id}}" :key='user.id'>
        <div class="user">
          {{ user.username }}
          <div class="user_tweets">
            tweeted {{user.tweets.length }} times 
          </div>

        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { users } from '@/assets/users';
// @ is an alias to /src


export default {
  name: 'Home',
  setup(){
    return{
      users
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    align-content: center;
    font-size: 50px;
  }

  .user-list{
    display: flex;
    align-items: center;
    justify-content:space-evenly;
    .user{
      padding: 20px;
      margin: 10px;
      background-color: white;
      border-radius: 5px;
      border: 1px solid #DFE3E8;
      box-sizing: border-box;
      cursor: pointer;
      transition: all 0.25s ease;
      font-weight: bold;

      &:hover {
        transform: scale(1.1, 1.1);
      }
    }
  }
}
</style>
