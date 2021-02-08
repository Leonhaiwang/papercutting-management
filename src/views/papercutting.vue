<template >
  <div class="papercutting">
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      list-type="picture"
    >
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
    <div>选择剪纸类型</div>
    <el-radio v-model="radio" label="1">神话传说</el-radio>
    <el-radio v-model="radio" label="2">神话传说</el-radio>
    <el-radio v-model="radio" label="2">神话传说</el-radio>
    <div>添加描述</div>
     <el-input type="textarea" ></el-input>
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
    }
  }
};
</script>