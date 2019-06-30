<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img src="../assets/index.jpg" />
    <div class="button">
      <input type="button" onclick="window.location.href='http://localhost:8081/?#/Login';" style="width: 60px; height: 40px;" value="登陆" />
      <input type="button" onclick="window.location.href='http://localhost:8081/?#/Register';" style="width: 60px; height: 40px;" value="注册" />
    </div>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎来到顺风外卖系统'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: 700;
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
.button{

  border: none;
  line-height: 60px;
  text-align: center;

  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
  letter-spacing:2px;
  }
</style>
