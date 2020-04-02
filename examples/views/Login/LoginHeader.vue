<template>
  <div class="login-page">
    <div class="page-center">
      <div class="info">
        <div class="title">
          <span>{{name}}在线</span>
        </div>
      </div>
      <!-- 插槽 -->
      <div class="container">
        <slot name="container">
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component,Vue } from "vue-property-decorator";
@Component({
  components:{}
})
export default class LoginHeader extends Vue {
  private name:string = 'shengsheng';
}
</script>

<style lang="stylus">
  .title
    display flex
    justify-content center
</style>
