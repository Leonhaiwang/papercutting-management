<template>
  <div class="wrapper">
     <el-button  class = "button" type="success"  plain @click="changeNew">新增问卷</el-button>
  </div>
</template>
<script>
export default {
  data:{
    return:{

    }
  },
  methods:{
    changeNew(){
      this.$router.push({ path: "/newQuestionList" });
    }
  }
}
</script>
<style scoped>
.wrapper{
  padding-left: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
</style>