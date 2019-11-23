<template>
  <div class="toast" v-show="isshow">
    {{message}}
  </div>
</template>

<script>
 export default{
   name:'toast',
   // props:{
   //   message:{
   //     type:String,
   //     default:''
   //   },
   //   isshow:{
   //     type:Boolean,
   //     default:false
   //   }
   // },
   data(){
     return {
       message:'',
       isshow:false
     }
   },
   methods:{
       show(message,duration){
           this.isshow = true;
           this.message = message;
           setTimeout(()=>{
               this.isshow=false;
               this.message=''
           },duration)
           console.log(this.isshow, this.message)
       }
   }
 }
</script>

<style scoped>
 .toast{
     position:fixed;
     top:50%;
     left:50%;
     transform: translate(-50%,-50%);
     color:#fff;
     padding:5px;
     background-color: rgba(0,0,0,0.75);
     z-index: 40;
 }
</style>
