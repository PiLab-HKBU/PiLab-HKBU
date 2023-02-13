<template>
  <section class="hero is-link">
    <div class="hero-body theme-background-color">
      <div class="container  is-max-widescreen">
        <h1 class="title is-2">Intelligent Technology for well-being</h1>
        <h2 class="subtitle is-3">Mental Health, Artificial Intelligent, and Recommender System</h2>
        <div class="content is-large">
          <p>
            Our team is committed to the research and design of human-computer interaction related to mental health and human well-being. Hopefully our research can drive the next generation of mental health revolution.
          </p>
        </div>
<!--        <figure class="image">-->
<!--          <img src="@/assets/img/home/Group_photo.jpeg" alt="Group Photo">-->
<!--        </figure>-->
      </div>
    </div>
  </section>
  <section class="hero">
    <div class="hero-body">
      <div class="container is-max-widescreen">
        <div class="columns">
          <div class="column is-half">
            <p>
              Our research activities include changes and innovations in mental health and human well-being by exploring human-computer interaction. The group is a subgroup within the Human-Computer Interaction Group of the Department of Computer Science, Hong Kong Baptist University. It includes postdoctoral researchers, doctoral students and software engineering experts.
            </p>
          </div>
          <div class="column is-half">
            <p>
              In addition to our research activities, we also offer the application of a range of related technologies. Centred on users, we help social groups and university organizations design and develop related human-computer interaction results to facilitate their research or commercial activities. Our relevant expertise covers the following areas:
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column is-3 is-text-center">
            <figure class="image">
              <img src="@/assets/img/home/fourSmallImgs/Forensic-medicine-rafiki.png" alt="Small Photo">
            </figure>
            <h5 class="subtitle is-5" style="width: 100%; text-align: center">Co-design Workshop for HCI</h5>
          </div>
          <div class="column is-3 is-text-center">
            <figure class="image">
              <img src="@/assets/img/home/fourSmallImgs/Office-management-rafiki.png" alt="Small Photo">
            </figure>
            <h5 class="subtitle is-5" style="width: 100%; text-align: center">Human-Computer Interaction Evaluation</h5>
          </div>
          <div class="column is-3 is-text-center">
            <figure class="image">
              <img src="@/assets/img/home/fourSmallImgs/Lo-fi-concept-rafiki.png" alt="Small Photo">
            </figure>
            <h5 class="subtitle is-5" style="width: 100%; text-align: center">Cross-platform Service Development</h5>
          </div>
          <div class="column is-3 is-text-center">
            <figure class="image">
              <img src="@/assets/img/home/fourSmallImgs/Business-Plan-rafiki.png" alt="Small Photo">
            </figure>
            <h5 class="subtitle is-5" style="width: 100%; text-align: center">Recommender System</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
  <hr>
  <section class="hero">
    <div class="hero-body">
      <div class="container is-max-widescreen">
        <div class="columns is-multiline">
          <template v-for="project in projectsData.list">
            <HomeProjectCardView :project="project"/>
          </template>
          <button class="button is-link my-5" style="width: 100%; font-size: 20px; font-weight: 500"
                  @click="discoverBtnTap">Discover Projects List
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {projectsData} from "@/data/projectsData";
import HomeProjectCardView from "@/components/home/HomeProjectCardView.vue";

export default {
  name: "HomeView",
  components: {HomeProjectCardView},
  data() {
    return {
      projectsData
    }
  },
  methods: {
    discoverBtnTap() {
      this.$router.push({ name: 'projects', params: { } })
    }
  }
}
</script>

<style scoped>
.title {
  color: white;
}


</style>