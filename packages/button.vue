<template>
  <button
    @click="emitClick"
    class="S-button"
    :disabled="disabled"
    :class="[`S-button--${type}`,{
    'is-plain' :plain,
    'is-round':round,
    'is-circle':circle,
    'is-disabled':disabled
  }]"
  >
    <span>
      <i :class="['iconfont', `${icon}`]"></i>
      <slot></slot>
    </span>
  </button>
</template>


<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class Sbutton extends Vue {
  //type 获取button 样式
  @Prop(String)
  type!: string
  //plain 朴素模式
  @Prop({ default: false, type: Boolean })
  plain?: Boolean
  //圆角属性
  @Prop({ default: false, type: Boolean })
  round?: Boolean
  //圆形属性
  @Prop({ default: false, type: Boolean })
  circle?: Boolean
  //icon图标
  @Prop(String)
  icon!: string
  //disabled 不能点击状态
  @Prop({ default: false, type: Boolean })
  disabled!: Boolean
  //声明一个组件的名字
  static ComponentName: string = 'SButton'
  @Emit('click')
  private emitClick(): void {}
  private mounted() {
    console.log(this.$slots.default, 'plain')
  }
}
</script>
<style lang="scss" scope>
.S-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  //禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.S-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
  }
}
.S-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
  }
}
.S-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
  }
}
.S-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
  }
}
.S-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    background-color: #f78989;
    color: #fff;
  }
}
.S-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.S-button--success.is-plain {
  color: #67c23a;
  background: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.S-button--info.is-plain {
  color: #909399;
  background: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.S-button--warning.is-plain {
  color: #e6a23c;
  background: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.S-button--danger.is-plain {
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
// round属性
.S-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
// circle属性
.S-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
// icon配套样式
.S-button[class*='one-icon-'] + span {
  margin-left: 5px;
}
// disabled属性
.S-button.is-disabled {
  cursor: no-drop;
}
</style>