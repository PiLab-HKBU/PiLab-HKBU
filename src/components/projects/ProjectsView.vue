<template>
  <section class="section theme-background-color">
    <div class="container is-max-widescreen">
      <div class="columns is-vcentered">
        <div class="column">
          <div class="content is-medium about-description">
            <h1 class="title is-2" style="color: white">Our Projects</h1>
<!--            <h2 class="subtitle is-3" style="color: white">Deep Into the Community</h2>-->
<!--            <p class="" style="color: white">-->
<!--              Our projects gain a deep understanding of specific community needs and collaborate with users to co-create new ways of interacting.-->
<!--            </p>-->
          </div>
        </div>
<!--        <div class="column has-text-centered" style="justify-content: center;">-->
<!--          <img src="@/assets/img/projects/workshop.jpg" alt="Group Photo"  style="height: 300px; width: 300px; border-radius: 50%; overflow: hidden; object-fit: cover">-->
<!--        </div>-->

      </div>
    </div>
  </section>
  <section class="section">
    <template v-for="project in projectsData.list">
      <ProjectsItemView :project="project" />
    </template>
  </section>
</template>

<script>
import { projectsData } from "@/data/projectsData";
import ProjectsItemView from "@/components/projects/projects/ProjectsItemView.vue";

export default {
  name: "ProjectsView",
  components: {ProjectsItemView},
  data() {
    return {
      projectsData
    }
  }
}
</script>

<style scoped>

</style>