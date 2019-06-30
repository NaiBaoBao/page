<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <button @click="business">查看商家信息</button>
    <button @click="guest">查看顾客信息</button>
    <select name="selectGB" class="from-type input" onchange="byPower(this.value)">
      <option style="display:none">根据用户类型查看</option>
      <option value="1" @click="guest">1.顾客</option>
      <option value="0" @change="business">0.商家</option>
    </select>
    <div id="one">
      <i class="guest" v-show="Gshow">
        <div class="panel -heading">用户管理</div>
        <table>
          <tr>
            <th style="width: 200px">用户账户</th>
            <th style="width: 200px">用户密码</th>
            <th style="width: 200px">用户名称</th>
            <th style="width: 200px">用户地址</th>
            <th style="width: 200px">用户电话</th>
          </tr>
          <tbody>
            <tr v-for="guest in Glist" :key="guest.id">
              <td>{{guest.id}}</td>
              <td>{{guest.password }}</td>
              <td>{{guest.name}}</td>
              <td>{{guest.address}}</td>
              <td>{{guest.phone}}</td>
              <td><a href="#" v-on:click="Edit(row)">编辑</a><a href="#" v-on:click="Delete(row.Id)">删除</a></td>
            </tr>
            <tr>
              <td><label>
                <input type="text" v-model="G.account" placeholder="请输入账号"/>
              </label></td>
              <td><label>
                <input type="text" v-model="G.password" placeholder="请输入密码"/>
              </label></td>
              <td><label>
                <input type="text" v-model="G.name" placeholder="请输入账户名"/>
              </label></td>
              <td><label>
                <input type="text" v-model="G.address" placeholder="请输入地址"/>
              </label></td>
              <td><label>
                <input type="text" v-model="G.phone" placeholder="请输入手机号"/>
              </label></td>
              <td><button type="button"  @click="addGuest">添加</button></td>
            </tr>
          </tbody>
        </table>
      </i>
      <i class="business" v-show="Bshow">
        <div class="panel -heading">商家管理</div>
        <table>
          <tr>
            <th style="width: 200px">商家帐号</th>
            <th style="width: 200px">商家密码</th>
            <th style="width: 200px">商家名称</th>
            <th style="width: 200px">商家地址</th>
            <th style="width: 200px">商家电话</th>
          </tr>
          <tbody>
          <tr v-for="business in Blist" :key="business.id">
            <td>{{business.account}}</td>
            <td>{{business.password }}</td>
            <td>{{business.name}}</td>
            <td>{{business.address}}</td>
            <td>{{business.phone}}</td>
            <td><a href="#" v-on:click="Edit(row)">编辑</a><a href="#" v-on:click="Delete(row.Id)">删除</a></td>
          </tr>
          <tr>
            <td><label>
              <select >
                <option>商家</option>
                <option>顾客</option>
              </select>
            </label></td>
            <td><label>
              <input type="text" />
            </label></td>
            <td><button type="button"  >保存</button></td>
          </tr>
          </tbody>
        </table>
      </i>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        Bshow: false,
        Gshow:false,
        Glist:[],
        Blist:[],
        G:{
          account:'',
          password:'',
          name:'',
          address:'',
          phone:''
        },
        msg:"管理页面"
      }
    },
    created(){
      this.axios.get('http://127.0.0.1:8080/person/admin/findAll').then(res=>{
        console.log(res)
        if(res.status==200){
          console.log(res.data[0])
          this.Glist=[]
          for(var i=0;i<res.data.length;i++){
            this.Glist.push(res.data[i])
          }
        }
      })
    },
    methods:{
      business:function(){
        this.Bshow=true
        this.Gshow=false
      },
      guest:function(){
        this.Bshow=false
        this.Gshow=true
      },
      addGuest:function () {
        let postData = this.$qs.stringify({
          account: this.$data.G.account,
          password: this.$data.G.password,
          name: this.$data.G.name,
          address: this.$data.G.address,
          phone: this.$data.G.phone
        });
        this.axios({
          method: 'post',

          url: '',

          data: postData
        }).then((res) => {
          console.log(res)

        })
      }
    },
    name: "AdminPersonal",
  }
</script>

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
