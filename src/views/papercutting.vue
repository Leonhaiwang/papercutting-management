<template>
  <div class="papercuttingmanage">
    <el-button class="button" type="danger" plain @click="changeNew"
      >新增剪纸</el-button
    >
    <papertable></papertable>
  </div>
</template>
<script>
import papertable from "../components/papertable";
export default {
  components: {
    papertable
  },
  data: {
    return: {}
  },
  methods: {
    changeNew() {
      this.$router.push({ path: "/newpapercutting" });
    }
  }
};
</script>
<style scoped>
.button{
  margin-bottom:10px;
}
</style>