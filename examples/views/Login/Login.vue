<template>
  <div>
      <Sbutton>
          按钮
      </Sbutton>
      <el-button> </el-button>
  </div>
</template>


<script lang="ts">
import{Component,Vue}from 'vue-property-decorator';
import Sbutton from '@/components/Sbutton.vue'

@Component({
  components:{
    Sbutton
  }
})
export default class Login extends Vue{

}
</script>


<style lang="stylus" scope>

</style>