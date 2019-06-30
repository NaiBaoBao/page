<template id="Register">
  <div>
    <h1>{{msg}}</h1>
    <h2>
     <form v-model="R">
       <lable>账号</lable>
       <label>
         <input v-model="R.id" placeholder="请输入账号">
        </label>
       <br>
        <lable>密码</lable>
        <label>
          <input type='password' v-model="R.password" placeholder="请输入密码">
        </label>
       <br>
        <lable>账户名</lable>
         <label>
           <input v-model="R.name" placeholder="请输入账户名">
          </label>
       <br>
         <lable>地址</lable>
         <label>
          <input v-model="R.address" placeholder="请输入地址">
        </label>
        <br>
          <h1>
            <button type="submit" @click="Register" style="width: 60px; height: 40px;">注册</button>
         </h1>
       <h3>
          <router-link to="/HelloWorld">返回主页</router-link>
        </h3>
        <h3>
         <router-link to="/Login">已有账号？点击登陆</router-link>
        </h3>
      </form>
  </h2>
  </div>
</template>

<script>
    export default {
        name: "Register",
      data() {
        return {
          R: {
            id: '',
            password: '',
            isorder:'0',
            name:'',
            address:'',

          },
          msg:"注册新用户"
        }
      },

      methods: {
        Register() {
          let postData = this.$qs.stringify({
            id: this.$data.R.id,
            password: this.$data.R.password,
            isorder:'0',
            name:this.$data.R.name,
            address:this.$data.R.address,
          });
          if(this.$data.R.id==''||this.$data.R.password==''){
            alert("账户或密码不可为空，请重新输入！")
          }else{
            alert("请确认信息："+this.$data.R.id + " " + this.$data.R.password+ " " + this.$data.R.name+ " " + this.$data.R.address+ " ");
            this.axios({
              method: 'post',
              url: 'http://127.0.0.1:8080/person/user',
              data: postData
            }).then((res) => {
              if(res.data=='1'){
                alert("用户："+this.$data.R.id+"，将会自动跳转到登陆页面")
                this.$router.push({path: '/Login'})
              }
              console.log(res);
            }).catch((error) => {
              alert("注册失败！请重试");
              console.log(error)
            })
          }
        }
      }
    }
</script>

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
</style>
