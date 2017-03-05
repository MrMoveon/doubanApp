<template>
  <div class="m-cell normal" :class="{'is-hot':hot,'is-icon':icon}">
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
      icon: {
        type: Boolean,
        default: false
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
    &.normal {
      &:after {
        content: '';
        position: absolute;
        width: 5px;
        left: 0;
        top: 10px;
        bottom: 10px;
        background: #42bd56;
      }
    }
    &.is-hot {
      &:after {
        content: '';
        position: absolute;
        width: 5px;
        left: 0;
        top: 10px;
        bottom: 10px;
        background: #ff8447;
      }
    }
    &.is-icon {
      &:after {
        content: '';
        position: absolute;
        width: 0px;
        left: 0;
        top: 10px;
        bottom: 10px;
        background: #ff8447;
      }
    }
  }

</style>
