<template>
    <div class="user-profile">
        <div class="user-profile__sidebar">
          <div class="user-profile__user-panel">
            <div class="user-profile__username">
              <h2>{{ fullname }}</h2>
              <span>@{{ state.user.username }}</span>
            </div>
            <div class="user-profile__admin-badge" v-if="state.user.isAdmin">
              Admin
            </div>
            <div class="user-profile__follower-count">
              <strong>Followers: </strong> {{ state.followers }}
              <button @click="followUser"> follow </button>
            </div>
          </div> <!-- end of user Panel-->

          <div class="user-profile__create-tweet-panel">
            <CreateTweetItem @tweeted="addNewTweet"/>
          </div>

        </div><!-- end of sidebar-->
        <div class="user-profile__tweets-wrapper">
          <TweetItem v-for="tweet in state.user.tweets" 
            :key="tweet.id" :username="state.user.username" 
            :tweet="tweet" @favourite="toggleFavourite"/>
          
        </div>
    </div>
</template>

<script>
import TweetItem from '../components/TweetItem';
import CreateTweetItem from '../components/CreateTweetItem';
import { reactive, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { users } from '@/assets/users';

export default {
    name: 'UserProfile',
    components:{ TweetItem, CreateTweetItem },
    setup(){

      const route = useRoute();
      const userid = computed(()=>route.params.userid);

      const state = reactive({
        followers:0,
        user: users[userid.value -1] || users[0]
      })

      // Computed Section
      const fullname = computed(()=>{
        return `${state.user.firstname} ${state.user.lastname}`
      })

      // TODO Watch Section


      // Methods Section
      function followUser(){
        state.followers++;
      }
    
      function toggleFavourite(tweet_id){
        console.log(`Tweet #${ tweet_id} was favourited`)
      }

      function addNewTweet(tweet){
        state.user.tweets.unshift({ id: state.user.tweets.length + 1, content: tweet})
      }

      // On mountrd Section.
      onMounted(()=>{
        followUser();
      })

      return{
        state, fullname,
        followUser, toggleFavourite, addNewTweet
      }
    } // end of setup
}
</script>

<style lang="scss" scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 50px;
  padding: 50px 5%;

  .user-profile__user-panel {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
    margin-bottom: auto;

    h1 {
      margin: 0;
    }

    .user-profile__username{
      margin:10px;

      h2 {
        margin-bottom: 0;
      }
    span{
      font-size: 15px;
      margin-bottom:5px;
      font-style: italic;
    }

    }

    .user-profile__admin-badge {
      background: rebeccapurple;
      color: white;
      border-radius: 5px;
      margin-right: auto;
      padding: 0 10px;
      font-weight: bold;
    }
  }

  .user-profile__tweets-wrapper {
    display: grid;
    grid-gap: 10px;
    margin-bottom: auto;
  }

  .user-profile__create-tweet-panel{
    border: 1px solid #DFE3E8;
    border-radius: 5px;
    margin-top: 10px;
    padding: 20px 5px;
  }
}
</style>