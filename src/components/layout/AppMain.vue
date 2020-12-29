<template>
  <section class="app-main">
    主内容
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "AppMain"
})
export default class AppMain extends Vue {}
</script>

<style scoped>

.app-main {
  overflow: hidden;
}
</style>