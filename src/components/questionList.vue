<template>
  <div class="questionList">
    <p class="textClass">
      {{title}}
    </p>
    <p class="middleP">
     {{status}}
    </p>
   
    <p class="middleBottom">
     {{date}}
    </p>
     <el-button  class = "button" type="warning" round plain size="mini">编辑</el-button>
  </div>
</template>
<script>
export default {
 props:{
   title:String,
   date:String,
   status:String
 },
 data:{
   return:{
     
   }
 }
}
</script>
<style scoped>
.button{
  position: relative;
  top: 30px;
}
.questionList{
  height: 220px;
  width:150px;
  background-color: #f7ffff;
  border: #fff 3px solid;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);  
  border-radius: 5px;
  margin: 10px;
  text-align: center;
  
}
.middleP{
  position: relative;
  font-size: 14px;
  top:31px;
}
.middleBottom{
  position: relative;
  font-size: 12px;
  top: 80px;
  color: grey;
}
.textClass{
  margin: 30px;
  font-weight: bold;
  font-size: 18px;
  }
</style>