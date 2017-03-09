<template>
  <div class="m-cell-media-wrap">
    <a href="javascript:;">
      <div class="m-cell-media-top">
        <div class="m-cell-media">
          <div class="m-cell-title m-ellipsis-2">
            <slot name="title"></slot>
          </div>
          <div class="m-cell-detail m-ellipsis-2">
            <slot name='describe'></slot>
          </div>
        </div>
        <div class="m-pull-right right-img" :style="{'background-image':'url('+img+')'}">
        </div>
      </div>
      <div class="m-cell-media-bottom">
        <p v-if="author">作者：{{author}}</p>
        <p v-if="column">{{column}}</p>
      </div>
    </a>
  </div>
</template>
<script>
  export default {
    props: ['author', 'column', 'img']
  }

</script>
<style lang="less">
  .m-cell-media-wrap {
    display: flex;
    flex-direction: column;
    padding: 18px 20px;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 1px;
      background: #eee;
      transform: scaleY(0.5);
    }
    .m-cell-media-top {
      display: flex;
      flex-direction: row;
      .m-cell-media {
        flex: 1;
        padding-right: 45px;
      }
      .m-cell-title {
        font-size: 17px;
        line-height: 22px;
        color: #333;
        font-weight: bold;
      }
      .m-cell-detail {
        font-size: 12px;
        padding-top: 12px;
        color: #939393;
      }
      .m-pull-right {
        width: 94px;
        height: 94px;
        overflow: hidden;
        background-position: center center;
        background-size: cover;
        img {
          width: 100%;
        }
      }
    }
    .m-cell-media-bottom {
      display: flex;
      justify-content: space-between;
      padding-top: 20px;
      margin-top: 12px;
      color: #bfbfbf;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 1px;
        background: #eee;
      }
    }
  }

</style>
