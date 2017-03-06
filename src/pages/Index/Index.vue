<template>
	<div>
		<header class="m-header is-fixed is-bg top-search">
			<div class="search-wrap">
				<img src="../../assets/images/ic_search_gray.png" alt="">
				<span class="placeholder">影视 图书 唱片 小组 舞台剧等</span>
				<img src="../../assets/images/ic_scan_gray.png" alt="">
			</div>
			<div class="m-header-button is-right" style="text-align: center;width: 50px;">
				<a href="javascript:;"><img class="m-icon-img" src="../../assets/images/ic_chat_white.png" /></a>
			</div>
		</header>
		<div class="page-content">
			<m-swipe swipeid="swipe01" :autoplay="1000" paginationDirection="right">
				<div class="swiper-slide " slot="swiper-con"><img src="../../assets/images/banner/01.jpg" alt=""></div>
				<div class="swiper-slide " slot="swiper-con"><img src="../../assets/images/banner/02.jpg" alt=""></div>
				<div class="swiper-slide " slot="swiper-con"><img src="../../assets/images/banner/03.jpg" alt=""></div>
			</m-swipe>
			<!--热门-->
			<div class="hot-wrap">
				<m-cell title="热门" label="hot">
					<a href="javascript:;" slot="cell-right">更多<img src="../../assets/images/ic_arrow_gray_small.png" alt=""></a>
				</m-cell>
				<m-cell-media author="豆瓣" column="广播精选">
					<img slot="right-img" src="../../assets/images/media.jpg" />
					<span slot="title">图文列表继承自列表组件图文列表继承自列表组件</span>
					<span slot="describe">图文列表继承自列表组件图文列表继承自列表组件图文列表继承自列表组件图文列表继承自列表组件图文列表继承自列表组件图文列表继承自列表组件图文列表继承自列表组件图文列表继承自列表组件</span>
				</m-cell-media>
			</div>
			<!--<m-cell title="提醒" icon>
				<img src="../../assets/images/ic_mine_notification.png" slot="icon">
				<a href="javascript:;" slot="cell-right"><img src="../../assets/images/ic_arrow_gray_small.png" alt=""></a>
			</m-cell>
			<m-cell title="设置">
				<a href="javascript:;" slot="cell-right"><img src="../../assets/images/ic_arrow_gray_small.png" alt=""></a>
			</m-cell>-->
			<!--推荐-->
			<div class="recommend-wrap">
				<m-cell title="一刻" label="recommend"></m-cell>
				<m-cell-media author="豆瓣" column="广播精选">
					<img slot="right-img" src="../../assets/images/media.jpg" />
					<span slot="title">图文列表继承自列表组件图文列表继承自列表组件</span>
					<span slot="describe">图文列表继承自列表组件图文列表继承自列表组件图文列表继承自列表组件图文列表继承自列表组件图文列表继承自列表组件图文列表继承自列表组件图文列表继承自列表组件图文列表继承自列表组件</span>
				</m-cell-media>
				<m-cell-media author="豆瓣">
					<img slot="right-img" src="../../assets/images/media.jpg" />
					<span slot="title">图文列表继承自列表组件图文列表继承自列表组件</span>
					<span slot="describe">图文列表继承自列表组件图文列表继承自列表组件图文列表继承自列表组件图文列表继承自列表组件图文列表继承自列表组件图文列表继承自列表组件图文列表继承自列表组件图文列表继承自列表组件</span>
				</m-cell-media>
			</div>
		</div>
	</div>
</template>

<script>
	import mHeader from '../../components/header'
	import mSwipe from '../../components/swipe'
	import mCell from '../../components/cell'
	import mCellMedia from '../../components/cell-media'
	export default {
		name: 'index',
		components: {
			mHeader,
			mSwipe,
			mCell,
			mCellMedia
		}
	}
</script>

<style lang="less">
	header.m-header {
		padding: 0 0 0 10px;
	}
	
	.is-fixed~.page-content {
		padding-top: 44px;
		padding-bottom:50px;
	}
	
	.top-search {
		.search-wrap {
			width: 100%;
			height: 30px;
			background: #fff;
			border-radius: 4px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			color: #c0c0c0;
			padding: 0 12px;
			.placeholder {
				flex: 1;
				text-align: left;
				padding-left: 12px;
			}
			img {
				width: 20px;
				height: 20px;
			}
		}
	}
	
	.hot-wrap,
	.recommend-wrap {
		padding-top: 12px;
	}
</style>