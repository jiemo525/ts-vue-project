<template>
  <div class="main-container">
    <el-container>
      <el-header>
        <AppHeader />
      </el-header>
      <el-container class="main-content">
        <el-aside width="200px">
          <SideBar />
        </el-aside>
        <el-main>
          <AppMain />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AppMain, SideBar, AppHeader } from "../components/layout";
import { DeviceType, AppModule } from "../store/modules/app";
import { isMobileOrPc } from "../utils/tools"

@Component({
  name: "Layout",
  components: {
    AppMain,
    SideBar,
    AppHeader,
  },
})
export default class extends Vue {
  mounted() {
    const isMobile = isMobileOrPc();
    if (isMobile) {
      AppModule.ToggleDevice(DeviceType.Mobile);
    } else {
      AppModule.ToggleDevice(DeviceType.Desktop);
    }
  }
}
</script>

<style lang="scss" scoped>

.main-container {
  height: 100vh;
  background: $bgColor;
}
.main-content {
  height: calc(100vh - 60px);
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
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