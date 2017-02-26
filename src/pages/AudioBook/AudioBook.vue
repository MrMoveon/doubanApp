<template>
  <div>
  	<m-header title="书影音" fixed>
  			<a href="javascript:;" slot="right"><img class="m-icon-img margin-right-10" src="../../assets/images/ic_actionbar_search_icon.png"/></a>
  			<a href="javascript:;" slot="right"><img class="m-icon-img" src="../../assets/images/ic_chat_green.png"/></a>
  	</m-header>
  </div>
</template>

<script>
  import mHeader from '../../components/header'
  
  export default {
    name: 'broadcast',
    components: {
      mHeader
    }
  }
</script>


<style lang="less">

</style>