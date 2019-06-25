<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>欢迎登录</h2>
    <br>
    <form v-model="L">
      <label>username</label>
      <input v-model="L.id" placeholder="input id">
      <br>
      <label>password</label>
      <input v-model="L.password" placeholder="input password">
      <br>
      <button type="submit" @click="login">login</button>
    </form>
    <button type="submit" @click="findAll">findAll</button>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
  data () {
    return {
      L:{
        id: '',
        password: '',
      },
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    login(){
      let postData=this.$qs.stringify({
        id: this.$data.L.id,
        password: this.$data.L.password
      })
      alert(this.$data.L.id+" "+this.$data.L.password)
      this.axios({
        method: 'post',
        url: 'http://127.0.0.1:8080/person/admin/login',
        data: postData
      }).then((res)=>{
        console.log(res.data)
        this.$router.push({path:'AdminHome'})
      }).catch((error)=>{
        console.log(error)
      })
    },
    findAll(){
      this.axios.get('http://127.0.0.1:8080/person/admin')
        .then((res)=>{
          alert(res.data)
        })
        .catch((res)=>{
          alert(res.type)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
}
</style>
