<template>
    <div class="user-profile">
        <div class="user-profile__sidebar">
          <div class="user-profile__user-panel">
            <h1 class="user-profile__username">@{{ user.username }}</h1>
            <div class="user-profile__admin-badge" v-if="user.isAdmin">
              Admin
            </div>
            <div class="user-profile__follower-count">
              <strong>Followers: </strong> {{followers }}
              <button @click="followUser"> follow </button>
            </div>
          </div> <!-- end of user Panel-->

          <div class="user-profile__create-tweet-panel">
            <CreateTweetItem @tweeted="addNewTweet"/>
          </div>

        </div><!-- end of sidebar-->
        <div class="user-profile__tweets-wrapper">
          <TweetItem v-for="tweet in user.tweets" 
            :key="tweet.id" :username="user.username" 
            :tweet="tweet" @favourite="toggleFavourite"/>
          
        </div>
    </div>
</template>

<script>
import TweetItem from '../components/TweetItem';
import CreateTweetItem from '../components/CreateTweetItem';

export default {
    name: 'UserProfile',
    components:{ TweetItem, CreateTweetItem },
    data(){
    return{
      followers:0,
      user:{
        username:'alexkagai',
        firstname: 'Alex',
        lastname: 'Kagai',
        email: 'alex@ak-tweet.com',
        isAdmin: true,
        tweets: [
          { id: 1, content:"welcome to Ak-tweet."},
          { id: 2, content:"theearthisSquare Vue3 Tut is awesome."},
          { id: 3, content:"Vue3 preview is awesome."},
          { id: 4, content:"Hapo tu Hapo tu"}
        ]
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
    },
    
    toggleFavourite(tweet_id){
      console.log(`Tweet #${ tweet_id} was favourited`)
    },

    addNewTweet(tweet){
      this.user.tweets.unshift({ id: this.user.tweets.length + 1, content: tweet})

    }
  }, // end of Methods
  mounted(){
    this.followUser();
    console.log(`${ this.user.username} just got followed`);
  }
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