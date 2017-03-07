<template>
	<div class="m-loading">
		<img src="../../assets/images/loading_green.gif" />
	</div>
</template>
<script>
</script>
<style lang="less">
	.m-loading {
		position: fixed;
		z-index: 9998;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background: rgba(0,0,0,0);
		img{
			position: fixed;
			top: 50%;
			left: 50%;
			margin-left: -20px;
			margin-top: -20px;
			z-index: 9999;
			width: 40px;
			height: 40px;
		}
	}
</style>