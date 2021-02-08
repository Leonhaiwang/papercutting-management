<template>
  <div class="wrapper">
    <div class="newCli">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="问卷主题">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="问卷时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker
              placeholder="选择时间"
              v-model="form.date2"
              style="width: 100%;"
            ></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="问卷性质">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="有奖问答" name="type"></el-checkbox>
            <el-checkbox label="谢谢参与" name="type"></el-checkbox>
            <el-checkbox label="再来一瓶" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="选择题">
         你对本网站的评价是
        </el-form-item>
        <el-form-item label="选项">
          <el-radio-group>
            <el-radio :label="3">喜欢</el-radio>
            <el-radio :label="6">非常喜欢</el-radio>
            <el-radio :label="9">不太喜欢</el-radio>
            <el-radio :label="9">不喜欢</el-radio>
            
          </el-radio-group>
        </el-form-item>
        
        <el-form-item label="选择题">
         你对本网站的评价是
        </el-form-item>
        <el-form-item label="选项">
          <el-radio-group>
            <el-radio :label="3">喜欢</el-radio>
            <el-radio :label="6">非常喜欢</el-radio>
            <el-radio :label="9">不太喜欢</el-radio>
            <el-radio :label="9">不喜欢</el-radio>
            
          </el-radio-group>
        </el-form-item>
        <el-form-item label="选择题">
         你对本网站的评价是
        </el-form-item>
        
        <el-form-item label="选项">
          <el-radio-group>
            <el-radio :label="3">喜欢</el-radio>
            <el-radio :label="6">非常喜欢</el-radio>
            <el-radio :label="9">不太喜欢</el-radio>
            <el-radio :label="9">不喜欢</el-radio>
            
          </el-radio-group>
        </el-form-item>

        <el-form-item label="建议">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.$router.push({ path: "/question" });
    }
  }
};
</script>
<style scoped>
.newCli {
  width: 600px;
}
.wrapper {
  display: flex;
  justify-content: center;
}
</style>