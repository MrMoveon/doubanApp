<template>
	<div>
		<m-header title="豆瓣app" :bg="true" fixed>
			<a href="javascript:;" slot="right">分享</a>
		</m-header>
		<div class="page-content">
			<m-swipe swipeid="swipe01" :autoplay="1000" effect="cube">
				<div class="swiper-slide slide02" slot="swiper-con">Slide 1</div>
				<div class="swiper-slide slide01" slot="swiper-con">Slide 2</div>
				<div class="swiper-slide slide03" slot="swiper-con">Slide 3</div>
			</m-swipe>
			<m-swipe swipeid="swipe021" :loop="false" paginationType="fraction" :autoplay="2000">
				<div class="swiper-slide slide01" slot="swiper-con">Slide 1</div>
				<div class="swiper-slide slide02" slot="swiper-con">Slide 2</div>
				<div class="swiper-slide slide03" slot="swiper-con">Slide 3</div>
			</m-swipe>
			<p>asdasdas</p>
			<p>asdasdas</p>

			<p>asdasdas</p>
			<p>asdasdas</p>
			<p>asdasdas</p>

			<p>asdasdas</p>
			<p>asdasdas</p>
			<p>asdasdas</p>
			<p>asdasdas</p>
			<p>asdasdas</p>
			<p>asdasdas</p>
			<p>asdasdas</p>

		</div>
	</div>
</template>

<script>
	import mHeader from '../../components/header'
	import mSwipe from '../../components/swipe'
	export default {
		name: 'index',
		components: {
			mHeader,
			mSwipe
		}
	}
</script>


<style lang="less">
.is-fixed ~ .page-content{
padding-top:44px;
}
.slide01{
    background: #41b883;
    text-align: center;
    line-height: 200px;
    font-size: 30px;
    color: #fff;
}
.slide02{
    background: #364a60;
    text-align: center;
    line-height: 200px;
    font-size: 30px;
    color: #fff;
}
.slide03{
    background: #ea6f5a;
    text-align: center;
    line-height: 200px;
    font-size: 30px;
    color: #fff;
}
</style>