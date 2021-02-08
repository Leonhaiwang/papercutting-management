<template>
  <div>
    <div class="topButton">
      <questionButton></questionButton>
    </div>
    <div class="question">
      <questionList
        title="请输入问卷标题"
        date="2021年1月1日"
        status="编辑中"
        type="编辑"
      ></questionList>
      <questionList
        title="中阳剪纸调查问卷"
        date="2021年2月7日"
        status="完成"
        type="查看结果"
        @click.native="drawer = true"
      ></questionList>
      <questionList
        title="中阳剪纸调查问卷"
        date="2021年2月7日"
        status="完成"
        type="查看结果"
        @click.native="drawer = true"
      ></questionList>
      <questionList
        title="中阳剪纸调查问卷"
        date="2021年2月7日"
        status="完成"
        type="查看结果"
      ></questionList>
    </div>
    <el-drawer
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
    >
      <p class = "p">问卷结果</p>
      <div class="pwrap"><span class = "left">问卷描述：</span><span class='right'>中阳剪纸调查问卷</span> </div>
      <div class="pwrap"><span class = "left">问卷状态：</span><span class='right'>编辑完成</span> </div>
      <div class="pwrap"><span class = "left">填写人数：</span><span class='right'>1024</span> </div>
       <div class="pwrap"><span class = "left">满意度</span><span class='right'></span> </div>
       <el-image
      style="width: 300px; height: 300px"
      :src="url"
      :fit="fit"></el-image>
    </el-drawer>
  </div>
</template>
<script>
import questionList from "../components/questionList";
import questionButton from "../views/questionButtom";

export default {
  components: {
    questionList,
    questionButton
  },
  data() {
    return {
      drawer: false,
      direction: "rtl",
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1637225641,2334418496&fm=26&gp=0.jpg'
    };
  },
  methods: {
    handleClose(done) {
     done();
    }
  }
};
</script>
<style scoped>
.pwrap{
  width: 300px;
  height: 40px;
  line-height: 40px;
  display: flex;
  flex-direction: row;
  margin-left: 50px;
 
}
.left{
  font-size: 18px;
  font-weight: 600;
  color: #4889b8;
}
.question {
  display: flex;
  flex-direction: row;
}
.p{
  font-size: 28px;
  font-weight: 700;
  color: #4889b8;
  margin-bottom: 30px;
}
</style>