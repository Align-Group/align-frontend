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
      <!-- <dashboard-navbar :type="$route.meta.navbarType"></dashboard-navbar> -->

      <!-- <div @click="$sidebar.displaySidebar(false)"> -->
      <!-- <fade-transition :duration="200" origin="center top" mode="out-in"> -->
      <!-- your content here -->
      <router-view></router-view>
      <!-- </fade-transition> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
