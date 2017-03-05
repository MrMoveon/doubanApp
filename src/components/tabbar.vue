<template>
  <div class="m-tabbar">
    <slot></slot>
  </div>
</template>
<script>
  import mTabbarItem from './tabbar-item';
  export default {
    props: ['value'],
    computed: {
      value() {
        return this.$route.matched[0].name
      }
    }
  }

</script>
<style lang="less">
  /*导入颜色变量*/
  
  @import "../assets/less/var.less";
  .m-tabbar {
    display: flex;
    flex-direction: row;
    position: fixed;
    z-index: 9;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    overflow: hidden;
    height: 50px;
    background: #fff;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      height: 1px;
      background: @tabbarBorderColor;
      transform: scaleY(0.5);
    }
  }

</style>
