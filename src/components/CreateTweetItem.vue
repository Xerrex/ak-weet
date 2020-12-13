<template>
  <form class="create-tweet" @submit.prevent="addNewTweet" 
    :class="{ '--exceeded': tweetContentCharCount > 180 }">
    <label for="newTweet"><strong>Tweet</strong> {{ tweetContentCharCount}}/180</label>
    <textarea id="newTweet" rows="4" v-model="tweetContent"/>
    
    <div class="create-tweet__type">
      <label for="tweet_type"><strong>Type</strong></label>
      <select id="tweet_type" v-model="tweetContentType">
        <option v-for="(type, index) in tweetTypes" 
          :key="index" :value="type.value" >
          {{ type.name}}
        </option>
      </select>
    </div>

    <button type="submit">tweet</button>

  </form>

</template>
<script>
export default {
    name:"CreateTweetItem",
    data(){
        return{
          tweetContent: "",
          tweetContentType: "instant",
          tweetTypes:[
            {name:"Draft", value:"draft"},
            {name:"Instant", value:"instant"}
          ],
        }
    },
    computed:{
      tweetContentCharCount(){
        return this.tweetContent.length
      }
    }, // end of computed
    methods:{
      addNewTweet(){
        if(this.tweetContent && this.tweetContentType !== "draft"){
          this.$emit('tweeted', this.tweetContent);
          this.tweetContent = "";
        }
        
      }
    } // end of methods
}
</script>

<style lang="scss" scoped>

.create-tweet{
  display: flex;
  flex-direction: column;

  textarea {
    border: 1px solid #DFE3E8;
    border-radius: 5px;
  }

  .create-tweet__type {
    display: flex;
    justify-content: space-between;
    padding:10px 0;

    select {
      width: 80%;
    }
  }

  button {
    padding: 10px 20px;
    margin: auto 0;
    border-radius: 5px;
    border: none;
    background-color: rgb(80, 139, 226);
    color: white;
    font-weight: bold;
    font-variant-caps:small-caps;
  }

  &.--exceeded {
    color: red;
    border-color: red;

      button {
        background-color: red;
        color: white;
      }
  }
}

</style>