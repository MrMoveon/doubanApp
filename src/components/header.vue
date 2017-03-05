<template>
  <header class="m-header" :class="{'is-bg':bg,'is-fixed':fixed}">
    <div class="m-header-button is-left" v-show="leftShow">
      <slot name="left"></slot>
    </div>
    <h1 class="m-header-title" v-text="title"></h1>
    <div class="m-header-button is-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>
<script>
  /**
   * @param title - header显示的标题
   * @param bg - header是否显示的标题背景
   * @param {slot} [left] - 左侧的图片内容和文字
   * @param {slot} [right] - 右侧的图片内容和文字
   * @exmaple
   * <m-header title="豆瓣app" :bg="true">
   *  			<a href="javascript:;" slot="left"><img class="m-icon-img" src="../../assets/images/ic_bar_back_white.png"/>返回</a>
   *  			<a href="javascript:;" slot="right">分享</a>
   * </m-header>
   */
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      bg: {
        type: Boolean,
        default: false
      },
      fixed: {
        type: Boolean,
        default: false
      },
      leftShow: {
        type: Boolean,
        default: true
      }
    }
  }

</script>
<style lang="less">
  /*导入颜色变量*/
  
  @import "../assets/less/var.less";
  .m-header {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 10px;
    background: #fff;
    color: @headerDefaultColor;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 1px;
      background: @headerBorderColor;
      transform: scaleY(0.5);
    }
    a {
      color: @headerDefaultColor;
    }
    .m-header-button {
      width: 70px;
      align-items: stretch;
      &.is-left {
        text-align: left;
      }
      &.is-right {
        text-align: right;
      }
      .m-icon-img {
        width: 20px;
        height: 20px;
      }
      .margin-right-10 {
        margin-right: 10px;
      }
    }
    .m-header-title {
      flex: 1;
      text-align: center;
      font-size: 16px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    &.is-bg {
      background: @headerBg;
      color: #fff;
      a {
        color: #fff;
      }
      .m-header-title {
        color: #fff;
      }
      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 0px;
        background: @headerBorderColor;
        transform: scaleY(0.5);
      }
    }
    &.is-fixed {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      z-index: 9;
    }
  }

</style>
