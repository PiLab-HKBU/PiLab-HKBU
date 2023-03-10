<template>
  <div class="container is-max-widescreen">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link :to="{ name: 'home', params: {}}">
          <img src="@/assets/img/PI-Lab-Logo-Small.jpg" alt="logo"
               style="height: 60px; margin-top: 10px; margin-left: 10px">
        </router-link>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="baseNavbar">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="baseNavbar" class="navbar-menu">
        <div class="navbar-start">

        </div>

        <div class="navbar-end">
          <router-link :to="{ name: 'home', params: {}}"
                       :class="['navbar-item', currentIndex === '' ? 'is-active' : '']">
            Home
          </router-link>

          <router-link :to="{ name: 'teamMember', params: {}}"
                       :class="['navbar-item', currentIndex === 'teamMember' ? 'is-active' : '']">
            Team Members
          </router-link>

          <div class="navbar-item has-dropdown is-hoverable">
            <router-link :to="{ name: 'projects', params: {}}"
                         :class="['navbar-item', currentIndex === 'projects' ? 'is-active' : '']">
              Projects
            </router-link>

            <div class="navbar-dropdown">
              <template v-for="project in projectsData.list">
                <router-link class="navbar-item" :to="{ name: 'project', query: {pid: project.id}}">
                  {{ project.shortTitle }}
                </router-link>
              </template>
            </div>
          </div>

          <!--          <a class="navbar-item">-->
          <!--            Participants-->
          <!--          </a>-->

          <!--          <a class="navbar-item">-->
          <!--            Work With Us-->
          <!--          </a>-->

<!--          <a href="#/blog" target="_blank" :class="['navbar-item']">-->
<!--            Blog-->
<!--          </a>-->

          <!--          <router-link :to="{ name: 'contact', params: {}}" :class="['navbar-item', currentIndex === 'contact' ? 'is-active' : '']">-->
          <!--            Contact-->
          <!--          </router-link>-->
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import {projectsData} from "@/data/projectsData";

export default {
  name: "NavigationBarView",
  data() {
    return {
      projectsData
    }
  },
  computed: {
    currentRoute() {
      return this.$route["path"]
    },
    currentIndex() {
      return this.currentRoute.split("/")[1]
    }
  },
  methods: {}
}

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach(el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});
</script>

<style scoped>
</style>