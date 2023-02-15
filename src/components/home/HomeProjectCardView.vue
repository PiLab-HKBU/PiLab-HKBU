<template>
  <div class="column is-4">
    <router-link :to="{ name: 'project', query: {pid: project.id}}">
      <div class="box m-1 p-0 pCanvas" style="border-radius: 10px; overflow: hidden;">
        <div class="pCoverCanvas">
          <img class="pCover" :src="project.photo" alt="Project Photo">
        </div>
        <div class="px-5 mt-2">
          <p class="theme-color pTitle" v-html="project.title"></p>
          <p class="my-2 pDescription">
            {{ project.description }}
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeProjectCardView",
  props: ["project"]
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
  overflow: hidden;
  height: 200px;
  width: 100%;
}

.pCover {
  transition: transform 0.2s linear;
  min-height: 100%;
  object-fit: cover;
  border: 1px solid #e8e8e8;
}

.pTitle {
  font-size: 18px;
  font-weight: bold;
  line-height: 25px;
  height: 50px;
  overflow: hidden;
  display: -webkit-box;
  webkit-box-orient: vertical;
  webkit-line-clamp: 2;
}

.pDescription {
  font-size: 16px;
  line-height: 25px;
  height: 75px;
  overflow: hidden;
  display: -webkit-box;
  webkit-box-orient: vertical;
  webkit-line-clamp: 3;
}
</style>