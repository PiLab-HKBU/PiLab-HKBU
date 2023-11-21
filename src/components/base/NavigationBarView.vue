<script setup>
import {projectsData} from "@/data/projectsData";
import {computed, ref} from "vue";
import {useRoute} from "vue-router";
import { store } from "@/data/store";

const location = useRoute();

const currentRoute = computed(() => {
  return location.path
})

const currentIndex = computed(() => {
  try {
    return location.path.split("/")[1]
  } catch {
    return ""
  }
})

const navbarBurger = ref(false)

</script>

<template>
  <div class="container is-max-widescreen" v-if="!store.hiddenTopAndBottom">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link :to="{ name: 'home', params: {}}">
          <img src="@/assets/img/PI-Lab-Logo-Small.jpg" alt="logo"
               style="height: 60px; margin-top: 10px; margin-left: 10px">
        </router-link>

        <a role="button" :class="['navbar-burger', navbarBurger ? 'is-active' : '']" aria-label="menu" aria-expanded="false" @click="navbarBurger=!navbarBurger" data-target="baseNavbar">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="baseNavbar" :class="['navbar-menu', navbarBurger ? 'is-active' : '']">
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

          <a href="#/blog" target="_blank" :class="['navbar-item']">
            Blog
          </a>

          <!--          <router-link :to="{ name: 'contact', params: {}}" :class="['navbar-item', currentIndex === 'contact' ? 'is-active' : '']">-->
          <!--            Contact-->
          <!--          </router-link>-->
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
</style>