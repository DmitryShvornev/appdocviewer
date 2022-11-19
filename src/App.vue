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
  name: process.env.VUE_APP_NAME,
  components: {
    DashboardPage,
    SideBar,
    DashboardPanel,
  }
}
</script>
<style>
@import url('https://fonts.google.com/specimen/Montserrat');

html,
body {
  font-family: 'Montserrat', sans-serif;
}

#app {
  font-family: 'Montserrat', sans-serif;
}

:root {
  --box-shadow-color: rgba(0, 0, 0, 0.1);
  --black-secondary: #212529;
  --border-color: #E0E0E0;
  --border-secondary: #E9ECEF;
  --text-color: #6C757D;
  --text-secondary: #DEE2E6;
  --red: #DC3545;
  --blue: #0D6EFD;
}
</style>
