<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <div v-for='i in arr' class="wrap">
      <div>
        TIT：<h3>{{i.tit}}</h3>
        CON：<p>{{i.con}}</p>
        <button @click="del(i)">del</button>
      </div>
    </div>
    
    <button @click="abc">+</button>
    <div v-show="lanf">
      <input type="text" v-model="lan.tit">
      <input type="text" v-model="lan.con">
      <button @click="submit">添加</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created(){
    this.$http.get('http://localhost:3000/').then(e=>this.arr=e.body)
  },
  data(){
    return {
      lan:{},
      arr:[],
      lanf:false
    }
  },
  methods:{
    del(e){
      this.$http.post('http://localhost:3000/del',{id:e.id},{emulateJSON:true}).then(function(){
        var _index = this.arr.indexOf(e)
        this.arr.splice(_index,1)
      })
    },
    submit(e){
      this.$http.post('http://localhost:3000/add',this.lan,{emulateJSON:true}).then(function(){
        this.arr.push(this.lan)
      })
    },
    abc(){
      this.lanf=!this.lanf
    }
  }
  
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{text-align: center;margin-top: 50px;}
.wrap{width: 600px;margin: 20px auto;}
button{width: 50px;}
h3{overflow: hidden;text-overflow:ellipsis;white-space: nowrap;width: 50px;}
p{overflow: hidden;text-overflow:ellipsis;white-space: nowrap;width: 600px;}
</style>
