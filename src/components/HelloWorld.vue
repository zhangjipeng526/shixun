<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <div v-for='(i,index) in arr' class="wrap">
      <div>
        TIT：<h3>{{i.tit}}</h3>
        CON：<p>{{i.con}}</p>
        <button @click="del(index)">del</button>
      </div>
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
      arr:[]
    }
  },
  methods:{
    del(e){
      alert(1)
      this.$http.post('http://localhost:3000/del',{id:e},{emulateJSON:true})
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
