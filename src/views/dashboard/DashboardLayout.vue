<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Dashboard',
            path: '/dashboard',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Users & Teams',
            path: '/teams',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Appraisal Template',
            path: '/appraisalTemplate',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Schedule',
            path: '/schedule',
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Settings',
            path: '/settings',
          }"
        >
        </sidebar-item>
      </template>
    </side-bar>
    <div class="main-content">
      <!-- your content here -->
      <DashboardNavbar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import DashboardNavbar from "../../components/dashboard/DashboardNavbar";

export default {
  name: "DashboardLayout",
  component: {
    DashboardNavbar,
  },
};
</script>

<style lang="scss" scoped></style>
