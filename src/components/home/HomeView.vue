<template>
  <section class="hero is-link">
    <div class="hero-body theme-background-color">
      <div class="container  is-max-widescreen">
        <h1 class="title is-2">Intelligent Technology for Well-Being</h1>
        <h2 class="subtitle is-3">Human-Centered AI, Recommender Systems, Psychological Well-Being</h2>
        <div class="content is-large">
          <p v-html="teamDescription">
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
          <div class="column is-full">
            <p>
              Our research activities mainly focus on innovation of AI-powered solutions for promoting mental health and
              human well-being. We have aimed to deliver empirically demonstrated applications to serve various types of
              users, including general population and specific groups, in collaboration with different mental health
              service organizations.
            </p>
          </div>
        </div>
        <div class="columns">
          <div class="column is-3 is-text-center">
            <figure class="image">
              <img src="@/assets/img/home/fourSmallImgs/Forensic-medicine-rafiki.png" alt="Small Photo">
            </figure>
            <h5 class="subtitle is-5" style="width: 100%; text-align: center">User-centered Interaction Design</h5>
          </div>
          <div class="column is-3 is-text-center">
            <figure class="image">
              <img src="@/assets/img/home/fourSmallImgs/Office-management-rafiki.png" alt="Small Photo">
            </figure>
            <h5 class="subtitle is-5" style="width: 100%; text-align: center">User Interface Evaluation</h5>
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
            <h5 class="subtitle is-5" style="width: 100%; text-align: center">Recommender Systems</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
  <hr>
  <section class="hero">
    <div class="hero-body pt-3">
      <div class="container is-max-widescreen">
        <p class="title mx-5" style="color: black">
          Projects
        </p>
        <div class="columns is-multiline">
          <template v-for="project in projectsData.list">
            <HomeProjectCardView :project="project"/>
          </template>
          <!--          <button class="button is-link my-5" style="width: 100%; font-size: 20px; font-weight: 500"-->
          <!--                  @click="discoverBtnTap">Discover Projects List-->
          <!--          </button>-->
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
      projectsData,
      teamDescription: "Our team is committed to conducting interdisplinary research on developing innovative human-centered AI systems for promoting mental health and human well-being. The team members come from different fields, including computer science, social science, creative art, and psychological and cognitive science. ",
    }
  },
  methods: {
    discoverBtnTap() {
      this.$router.push({name: 'projects', params: {}})
    }
  }
}
</script>

<style scoped>
.title {
  color: white;
}


</style>