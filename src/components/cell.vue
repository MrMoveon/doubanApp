<template>
  <div class="m-cell normal" :class="label">
    <div class="m-cell-title">
      <slot name="icon"></slot> {{title}}
    </div>
    <div class="m-cell-right">
      <slot name="cell-right"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      hot: {
        type: Boolean,
        default: false
      },
      recommend: {
        type: Boolean,
        default: false
      },
      icon: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: 'normal'
      }
    }
  }

</script>
<style lang="less">
  .m-cell {
    position: relative;
    padding: 10px 5px 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 1px;
      background: #eee;
      transform: scaleY(0.5);
    }
    .m-cell-title {
      font-size: 15px;
      img {
        width: 20px;
        height: 20px;
      }
    }
    .m-cell-right {
      font-size: 12px;
      a {
        color: #666;
      }
      img {
        width: 20px;
        height: 20px;
      }
    }
    &.normal {}
    &.hot {
      padding: 0px 5px 0px 15px;
      height: 22px;
      &:after {
        content: '';
        position: absolute;
        width: 5px;
        left: 0;
        top: 0px;
        bottom: 0px;
        background: #ff8447;
      }
      &:before {
        height: 0
      }
    }
    &.recommend {
      padding: 0px 5px 0px 15px;
      height: 22px;
      &:after {
        content: '';
        position: absolute;
        width: 5px;
        left: 0;
        top: 0px;
        bottom: 0px;
        background: #42bd56;
      }
      &:before {
        height: 0
      }
    }
  }
</style>