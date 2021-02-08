<template >
  <div class="papercutting">
    <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </el-upload>
    <div class="adddes">选择剪纸类型</div>
    <div><el-radio v-model="radio" label="1">民俗信仰</el-radio>
    <el-radio v-model="radio" label="2">岁时节令</el-radio>
    <el-radio v-model="radio" label="3">人生礼仪</el-radio>
    <el-radio v-model="radio" label="3">神话传说</el-radio></div>
    <div class ="adddes">添加描述</div>
    <el-input class="textarea" type="textarea"></el-input>
      <div>
         <el-button  class = "button" type="primary"  plain @click="changeNew">提交</el-button>
      </div>
   
  </div>
</template>
<script>
import markdown from "../components/markdown";
export default {
  components: {
    markdown
  },
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    changeNew(){
      this.$router.push({ path: "/papercutting" });
      
    }
  }
};
</script>
<style scoped>
.textarea {
  width: 360px;
}
.adddes{
  margin: 20px 0;
  font-size: 18px;
  font-weight: 600;
  color: #4889b8;
}
.button{
  margin-top: 30px ;
}

</style>