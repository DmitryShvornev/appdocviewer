<template>
  <DashboardPage>
    <SideBar></SideBar>
    <DashboardPanel></DashboardPanel>
  </DashboardPage>
</template>

<script>
import DashboardPage from './components/DashboardPage.vue';
import SideBar from './components/SideBar.vue';
import DashboardPanel from './components/DashboardPanel.vue'

export default {
  name: 'App',
  components: {
    DashboardPage,
    SideBar,
    DashboardPanel,
  }
}
</script>
<style>

#app {
  font-family: 'Montserrat', system-ui;
}
</style>
