<template>
  <div id="app">
  	<loading v-if="$store.state.loading"></loading>
    <router-view></router-view>
    <m-tabbar v-model="select">
      <m-tabbar-item id='Index' isRouter>
        <img src="./assets/images/ic_tab_home_normal.png" alt="" slot="icon-normal"> 
        <img src="./assets/images/ic_tab_home_active.png" alt="" slot="icon-active"> 
        首页
      </m-tabbar-item>
      <m-tabbar-item id='AudioBook' isRouter>
        <img src="./assets/images/ic_tab_subject_normal.png" alt="" slot="icon-normal"> 
        <img src="./assets/images/ic_tab_subject_active.png" alt="" slot="icon-active"> 
        书影音
      </m-tabbar-item>
      <m-tabbar-item id='Broadcast' isRouter>
        <img src="./assets/images/ic_tab_status_normal.png" alt="" slot="icon-normal"> 
        <img src="./assets/images/ic_tab_status_active.png" alt="" slot="icon-active"> 
        广播
      </m-tabbar-item>
      <m-tabbar-item id='Group' isRouter>
        <img src="./assets/images/ic_tab_group_normal.png" alt="" slot="icon-normal"> 
        <img src="./assets/images/ic_tab_group_active.png" alt="" slot="icon-active"> 
        小组
      </m-tabbar-item>
       <m-tabbar-item id='Mine' isRouter>
        <img src="./assets/images/ic_tab_profile_normal.png" alt="" slot="icon-normal"> 
        <img src="./assets/images/ic_tab_profile_active.png" alt="" slot="icon-active"> 
        我的
      </m-tabbar-item>
    </m-tabbar>
  </div>
</template>

<script>
import mTabbar from './components/tabbar'
import mTabbarItem from './components/tabbar-item'
export default {
  name: 'app',
  components:{
  	mTabbar,
    mTabbarItem
  },
  data() {
      return {
        select:"Index"
      }
    }
}
</script>

<style>

</style>
