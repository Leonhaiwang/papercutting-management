<template>
  <div class="index">
    <el-container>
      <el-header>
        <span class="title">中 阳 剪 纸 文 化 管 理 系 统</span>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            :default-active="path"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#edd42a"
          >
            <el-menu-item index="/usermanage" @click="changeN">
              <i class="el-icon-menu"></i>
              <span slot="title">用户管理</span>
            </el-menu-item>
            <el-menu-item index="/watchtime" @click="changeA('/watchtime')">
              <i class="el-icon-date"></i>
              <span slot="title">剪纸管理</span>
            </el-menu-item>
            <el-menu-item index="/usermanage" @click="changeN">
              <i class="el-icon-setting"></i>
              <span slot="title">论坛管理</span>
            </el-menu-item>
            <el-menu-item index="/usermanage" @click="changeN">
              <i class="el-icon-setting"></i>
              <span slot="title">纠错查漏</span>
            </el-menu-item>
            <el-menu-item index="/usermanage" @click="changeN">
              <i class="el-icon-setting"></i>
              <span slot="title">问卷调查</span>
            </el-menu-item>
            
          </el-menu>
        </el-aside>
       
        <el-main>
          <router-view />
        </el-main>
      </el-container>
      <el-footer>
        <span class="bottomS">中阳剪纸管理系统作者：name</span>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nowSystem: localStorage.getItem("a") !== "人脸" ? "扫码签到" : "人脸签到",
      isShow: localStorage.getItem("a") !== "人脸",
      dialogVisible: false,
      path: "/HelloWorld",
      input: ""
    };
  },
  methods: {
    sm() {
      this.nowSystem = "扫码签到";
      this.isShow = true;
      localStorage.setItem("a", "扫码");
      localStorage.setItem("type", "2"); //type值
      this.$router.push({ path: "/HelloWorld" });
      window.location.reload();
    },
    face() {
      this.nowSystem = "人脸签到";
      this.isShow = false;
      localStorage.setItem("a", "人脸");
      localStorage.setItem("type", "1");
      this.$router.push({ path: "/watchtime" });
      window.location.reload();
    },
    setA() {
      if (!localStorage.getItem("a")) {
        localStorage.setItem("a", "扫码");
        localStorage.setItem("type", "2");
      }
    },
    submitpassword() {
      if (this.input === "20201016") {
        this.dialogVisible = false;
        sessionStorage.setItem("admin", "admin");
        this.$router.push({ path: "/usermanage" });
      } else {
        this.$message({
          message: "密码错误，请重新输入",
          type: "error"
        });
        this.input = "";
      }
    },

    changeN() {
      if (!sessionStorage.getItem("admin")) {
        this.dialogVisible = true;
      } else {
        this.dialogVisible = false;
        this.$router.push({ path: "/usermanage" });
        this.path = "/usermanage";
      }
    },

    changeA(indexX) {
      if (this.$route.path !== indexX) this.$router.push({ path: indexX });
    },
    deleteT() {
      this.dialogVisible = false;
      if (this.$route.path === "/home") {
        this.path = "";
      } else {
        this.path = this.$route.path;
      }
    }
  },
  created() {
    this.setA();
    this.path = this.$route.path;
  }
};
</script>
<style scoped>
.bottomS {
  position: relative;
  left: 30%;
}
.nowS {
  font-size: 15px;
}
.title {
  position: relative;
  left: 7%;
  font-weight: bold;
  font-size: 22px;
}
.el-dropdown {
  float: right;
}
.el-dropdown-link {
  cursor: pointer;
  color: white;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-container {
  height: 100%;
}
.index {
  height: 100%;
}
.tac {
  width: 100% !important;
}
.el-header,
.el-footer {
  background-color: #353c3f;
  color: white;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #313743;
  color: #e9eef3;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 100%;
  display: block;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow: auto;
  padding: 20px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>