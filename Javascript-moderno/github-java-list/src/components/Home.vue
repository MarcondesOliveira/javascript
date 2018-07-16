<template>
  <div class="container">
    <header>
      <i class="fa fa-github" aria-hidden="true"></i>
      <h1>{{ msg }}</h1>
      
    </header>

    <ul>
      <li v-for="todo in todos" >
        <div class="esq">
                    <div>
                        <b>{{todo.name}}</b>
                        <p>{{todo.description}}</p> 
                    </div>
                    <div>
                        
                        <i class="fa fa-code-fork" aria-hidden="true"></i>
                        {{todo.forks_count}}
                        <i class="fa fa-star" aria-hidden="true"></i>
                        {{todo.stargazers_count}}
                    </div>
                </div>
                <div class="dir">
                    <img v-bind:src="todo.owner.avatar_url" alt="avatar">
                    <b>{{todo.owner.login}}</b>
                </div>
      </li>
    </ul>     
    
  </div>
</template>

<script>


import axios from 'axios'
import VueAxios from 'vue-axios'

const ENDPOINT = 'https://api.github.com/search/repositories?q=language:Java&sort=stars&page=1&per_page=100'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'GitHub Java List with Vue',
      bottom: false,
      todos: [
        {name: ''},
        {description: ''},
        {avatar_url: ''},
        {login: ''},
        {full_name: ''},
        {forks_count: ''}
      ]
    }
  },
  mounted(){
    axios.get(ENDPOINT).then((response) => {
      this.todos = response.data.items
    })
  },
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */

body{
        background-color: black;
    }

    header{
        color: rgb(161, 20, 20);
        text-align: center;
        margin-top: 15px;
    }

    ul{
        display: flex;
        flex-direction: column;
        padding: 15px;
        margin: 15px;
        background-color: rgb(224, 255, 243);
        border-radius: 5px;
    }

    ul li{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 15px;
        margin: 15px;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        list-style: none;
    }

    .esq{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 60%;
    }

    .dir{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 40px;
        padding-right: 50px;
    }

    img{
        height: 50px;
        border-radius: 10px;
    }

    p{
        font-size: 15px;
    }




</style>
