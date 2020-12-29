<template>
  <div class="page-404">
    404 页面找不到
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'Page404'
})
export default class  extends Vue {

}
</script>

<style lang="scss" scoped>
.page-404 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
