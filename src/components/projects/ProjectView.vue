<template>
  <section class="section py-2" v-if="project">
    <div class="container is-max-widescreen">
      <nav class="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <router-link :to="{ name: 'projects', params: {}}">
              Projects
            </router-link>
          </li>
          <li class="is-active"><a href="#" aria-current="page">{{ project.shortTitle }}</a></li>
        </ul>
      </nav>
    </div>
  </section>
  <section class="section pt-2">
    <div class="container is-max-widescreen" v-if="project">
      <div class="title" v-html="project.title"></div>
      <div class="columns">
        <div class="column is-8">
          <div class="content">
            <div class="subtitle">
              {{ project.author }}
            </div>
            <div v-if="project.video">
              <iframe class="youtube-embed-frame" :src="project.video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <p>
              {{ project.description }}
            </p>
            <ul v-if="project.features.length !== 0">
              <li v-for="feature in project.features">
                {{ feature }}
              </li>
            </ul>
            <blockquote v-if="project.reference.length !== 0">
              <div class="subtitle">
                Reference
              </div>
              <ol style="list-style-type: none">
                <li v-for="item in project.reference">
                 <p v-html="item"></p>
                </li>
              </ol>
            </blockquote>
          </div>
        </div>
        <div class="column is-4">
          <img :src="project.photo" alt="Group Photo"
               style="height: 240px; width: 100%; border-radius: 10px; overflow: hidden; object-fit: cover; border: 1px solid #e8e8e8;">
        </div>
      </div>
    </div>

    <div class="container is-max-widescreen" v-else>
      <div class="content">
        <div class="title">
          Don't find the details.
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { projectsData } from "@/data/projectsData";

export default {
  name: "ProjectView",
  data() {
    return {
      projectsData,
      project: null,
    }
  },
  computed: {
    pid() {
      return this.$route.query.pid === undefined ? 1 : this.$route.query.pid
    }
  },
  mounted() {
    this.updateProject(this.pid)
  },
  watch: {
    pid(newPid, oldPid) {
      if (newPid !== oldPid) {
        this.updateProject(newPid)
      }
    }
  },
  methods: {
    updateProject(pid) {
      for (const index in this.projectsData.list) {
        const _project = this.projectsData.list[index]
        if (_project.id.toString() === pid.toString()) {
          this.project = _project
          break
        }
      }
    }
  }
}
</script>

<style scoped>
.youtube-embed-frame {
  height: 400px;
  width: 100%;
}
</style>