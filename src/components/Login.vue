<template id="Login">
  <div>
    <h1>{{msg}}</h1>
    <h2>
     <form v-model="L">
       <lable>账号</lable>
       <label>
          <input v-model="L.id" placeholder="请输入账号">
          </label>
       <br>
        <lable>密码</lable>
        <label>
         <input type="password" v-model="L.password" placeholder="请输入密码">
       </label>
       <h1>
         <button type="submit" @click="Login" style="width: 60px; height: 40px;" >登陆</button>
       </h1>
       <h3>
         <router-link to="/HelloWorld">返回主页</router-link>
       </h3>
       <h3>
         <router-link to="/Register">新用户？点击注册新账号</router-link>
        </h3>
     </form>
    </h2>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        L: {
          id: '',
          password: ''
        },
        msg: '登陆账号'
      }
    },
    methods: {
      Login() {
        let postData = this.$qs.stringify({
          id: this.$data.L.id,
          password: this.$data.L.password
        });
        if(this.$data.L.id==''||this.$data.L.password==''){
          alert("账户或密码不可为空，请重新输入！")
        }else{
          alert("请确认账号密码：" + this.$data.L.id + " " + this.$data.L.password);
          this.axios({
            method: 'post',
            url: 'http://127.0.0.1:8080/person/admin/login',
            data: postData,
            cache:'false'
          }).then((res) => {
            console.log(res)
            if (res.data.id == this.$data.L.id) {//管理员登陆
              alert("管理员" + this.$data.L.id + "登陆成功");
              this.$router.push({path: '/AdminPersonal'})
            }
            //管理员登陆失败，进入用户登陆流程
            else if (res.data.id == null) {
              this.axios({
                method: 'post',
                url: 'http://127.0.0.1:8080/person/user/login',
                data: postData,
                cache:'false'
              }).then((response) => {
                console.log(response)
                if (response.data.id == null) {
                  alert("登陆失败，账号或密码错误！")
                } else if (response.data.id.trim() == this.$data.L.id.trim()) {
                  if(response.data.isorder == "0"){
                    alert("用户" + response.data.name + "登陆成功！")
                    this.$router.push({path: '/GuestPersonal',name:'GuestPersonal',params:{UserId:this.$data.L.id}})
                  }
                  else if(response.data.isorder == "1"){
                    alert("商家" + response.data.name + "登陆成功！")
                    this.$router.push({path: '/BusinessPersonal',name:'BusinessPersonal',params:{UserId:this.$data.L.id}})
                  }
                }
              })
            }
          }).catch((error) => {
            console.log(error)
          })
        }
      },
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
