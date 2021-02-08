<template>
  <div class="usermanage">
    <div class="inner">
      <div class="inputbutton">
        <div>
          <el-button type="primary" plain @click="toggleSelection()"
            >取消选择</el-button
          >
          <el-button type="danger" plain @click="handleDeleteMax()"
            >批量删除</el-button
          >
          <el-button @click="drawer = true" type="success" plain
            >添加用户</el-button
          >
          <el-button @click="addExcel = true" type="warning" plain
            >批量添加</el-button
          >
        </div>
        <div class="search">
          <el-input
            clearable
            placeholder="输入关键字搜索"
            prefix-icon="el-icon-search"
            v-model="searchText"
            @input="inputChange"
          ></el-input>
        </div>

        <el-drawer :visible.sync="drawer" :direction="direction">
          <span class="shoudongtext">添加用户</span>
          <el-input
            class="inputnum"
            placeholder="姓名"
            v-model="name"
            show-word-limit
          ></el-input>
          <el-input
            class="inputnum"
            placeholder="手机号"
            v-model="classname"
            show-word-limit
          ></el-input>
          <el-input
            class="inputnum"
            placeholder="请输入用户ID"
            v-model="uid"
            maxlength="10"
            show-word-limit
          ></el-input>

          <el-button
            class="plainbutton"
            type="primary"
            plain
            round
            @click="addOnePerson"
            >提交</el-button
          >
        </el-drawer>
      </div>
    </div>

    <!-- 表 -->
    <div class="innerbox">
      <el-table
        ref="multipleTable"
        tooltip-effect="dark"
        :data="tableData"
        stripe
        style="width: 100%"
        @selection-change="handleSelectionChange"
        :row-style="rowStyle"
        :row-class-name="rowClassName"
        @row-click="rowclick"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          min-width="60"
        ></el-table-column>
        <el-table-column
          prop="uid"
          label="手机号"
          min-width="60"
        ></el-table-column>

        <el-table-column
          prop="class"
          label="昵称"
          min-width="60"
        ></el-table-column>
        <el-table-column
          prop="mac"
          v-if="isShow"
          label="地址"
          min-width="100"
        ></el-table-column>
        <el-table-column label="操作" min-width="80">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              >删除用户</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[9, 13, 20]"
        :page-size="number"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newtableData: [],
      tableData: [
        { name: "张三", uid: 17735669856, class: "天天开心" },
        { name: "李四", uid: 16233454434, class: "万事如意" },
        { name: "张三", uid: 17735669856, class: "天天开心" },
        { name: "李四", uid: 16233454434, class: "万事如意" },
        { name: "张三", uid: 17735669856, class: "天天开心" },
        { name: "李四", uid: 16233454434, class: "万事如意" },
        { name: "张三", uid: 17735669856, class: "天天开心" },
        { name: "李四", uid: 16233454434, class: "万事如意" }
        // { name: "张三", uid: 17735669856, class: "天天开心" }
      ],
      searchValueData: [], //保存搜索到的值
      uid: "",
      drawer: false,
      addExcel: false,
      changeweek: false,
      direction: "rtl",
      stunum: "",
      name: "",
      classname: "",
      nowWeek: "",
      newWeek: "",
      type: "",
      fileList: [], //上传文件的文件夹
      multipleSelection: [], //选中的删除用户的uid
      newval: [],
      currentPage: 1, //当前页
      total: 0, //总条数
      number: 9, //每页number条
      macAddress: "", //唯一地址,
      searchText: "",
      daochuExcel: []
    };
  },
  created() {
    this.getA();
    this.getAllUser();
    this.getWeek();
  },
  methods: {
    addOnePerson(){
      let obj = {}
      obj.name = this.name
      obj.uid = this.uid
      obj.class = this.classname
      this.tableData.push(obj)
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    searchValue(str) {
      this.searchValueData = [];
      this.newtableData.forEach(el => {
        if (
          el.uid.indexOf(str) !== -1 ||
          el.class.indexOf(str) !== -1 ||
          el.name.indexOf(str) !== -1
        ) {
          this.searchValueData.push(el);
        }
      });
      this.total = this.searchValueData.length;
      this.tableData = this.searchValueData.slice(
        (this.currentPage - 1) * this.number,
        this.currentPage * this.number
      );
      // console.log(this.searchValueData)
    },
    rowclick(row, column, event) {
      this.$refs.multipleTable.toggleRowSelection(row);
      this.multipleSelection.push(row);
    },

    handleSizeChange(val) {
      this.number = val;
      if (this.searchText === "") {
        this.getTableData();
      } else {
        this.searchValue(this.searchText);
      }
    },
    //获取当前页面值
    handleCurrentChange(val) {
      this.currentPage = val;
      if (this.searchText === "") {
        this.getTableData();
      } else {
        this.searchValue(this.searchText);
      }
    },
    getTableData() {
      this.tableData = this.newtableData.slice(
        (this.currentPage - 1) * this.number,
        this.currentPage * this.number
      );
    },

    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    rowStyle({ row, rowIndex }) {
      Object.defineProperty(row, "rowIndex", {
        //给每一行添加不可枚举属性rowIndex来标识当前行
        value: rowIndex,
        writable: true,
        enumerable: false
      });
    },

    //选中高亮
    rowClassName({ row, rowIndex }) {
      let rowName = "",
        findRow = this.multipleSelection.find(c => c.rowIndex === row.rowIndex);
      if (findRow) {
        rowName = "current-row ";
      }
      return rowName; //也可以再加上其他类名 如果有需求的话
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    //删除
    handleDelete(index) {
      index = `'${index}'`;
      // console.log(index)
      this.tableData.forEach(i => {
        if (parseInt(index) === i.uid) {
          console.log(this.tableData.splice(0, 1));
        }
      });
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    submit() {
      (this.name = ""), (this.classname = ""), (this.stunum = "");
      alert("已添加");
    },
    changeweekS() {
      this.setWeek();
    },
    getA() {
      var token = localStorage.getItem("a");
      this.a = token;
      var T = localStorage.getItem("type");
      this.type = T;
    }
  }
};
</script>
<style scoped>
.ppp > p {
  margin: 20px 20px -30px 20px;
  color: #ff970f;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
}
.block {
  margin-top: 15px;
}
.nowWeek {
  position: relative;
  top: 20px;
  color: gray;
  font-size: 16px;
}
.el-table--striped .el-table__body tr.el-table__row--striped.current-row td {
  background: #a7c2e0 !important;
}
.inputbutton {
  /* position: fixed;
  z-index: 9999; */
  top: 85px;
}
.innerbox {
  /* position: absolute; */
  /* overflow: hidden; */
  width: 100%;
  top: 50px;
}

.addbutton {
  margin-top: 40px;
  margin-bottom: 30px;
}
.inputbutton {
  display: flex;
  justify-content: space-between;
  margin-top: -10px;
  margin-bottom: 10px;
}
.shoudongtext {
  color: rgb(0, 138, 201);
  font-size: 30px;
  font-weight: bold;
}
.inputnum {
  margin-top: 40px;
  width: 90%;
}
.plainbutton {
  margin-top: 30px;
  width: 140px;
}
</style>