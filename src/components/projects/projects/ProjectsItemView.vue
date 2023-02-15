<template>
  <section class="hero">
    <div class="hero-head">
      <div class="container is-max-widescreen theme-background-color" style="height: 30px"></div>
    </div>

    <div class="hero-body">
      <div class="container is-max-widescreen">
        <div class="columns pCanvas">
          <div class="column">
            <router-link :to="{ name: 'project', query: {pid: project.id}}">
              <p class="title is-4 theme-color mb-2 pTitle" v-html="project.title"></p>
            </router-link>
            <p class="subtitle is-6 mb-0" v-html="project.author"></p>
            <p class="subtitle is-6" v-html="project.collaborator"></p>
            <p v-html="project.description"></p>
          </div>
          <div class="column">
            <div class="pCoverCanvas">
              <img class="pCover" :src="project.photo" alt="Project Photo">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectsItemView",
  props: ['project']
}
</script>

<style scoped>
.pCanvas {
  cursor: pointer;
}

.pCanvas:hover .pTitle {
  text-decoration: underline;
}

.pCanvas:hover .pCover {
  -webkit-transform: scale(1.1);
}

.pCoverCanvas {
  max-height: 300px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #e8e8e8;
}

.pCover {
  transition: transform 0.2s linear;
  min-height: 100%;
  object-fit: cover;
}

</style>