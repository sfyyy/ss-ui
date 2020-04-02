<template>
  <div id="app">
    <SButton disabled @click="handleClick" icon="s-iconicon-test" type="primary">按钮</SButton>
    <SButton plain type="success">成功</SButton>
    <SButton icon="s-iconicon-test1" circle type="danger"></SButton>
  </div>
</template>

<style lang="stylus">
</style>



<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  private handleClick(e: Object): void {
    console.log('chufale 点击事件', e)
  }
}
</script>



