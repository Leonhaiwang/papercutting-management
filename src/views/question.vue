<template>
  <div>
    <div class="topButton">
      <questionButton></questionButton>
    </div>
    <div class="question">

    <questionList title = "请输入问卷标题" date = "2021年1月1日" status = "编辑中"></questionList>
    <questionList title = "中阳剪纸调查问卷" date = "2021年2月7日" status = "完成"></questionList>
    <questionList title = "中阳剪纸调查问卷" date = "2021年2月7日" status = "完成"></questionList>
    
  </div>
  </div>
  
</template>
<script>
import questionList from "../components/questionList";
import questionButton from "../views/questionButtom";

export default {
  components: {
    questionList,
    questionButton
  }
};
</script>
<style scoped>
.question{
  display: flex;
  flex-direction: row;

}
</style>