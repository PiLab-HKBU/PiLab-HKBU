<template>
  <section class="hero is-link">
    <div class="hero-body theme-background-color">
      <div class="container  is-max-widescreen">
        <h1 class="title is-2">Intelligent Technology for Well-Being</h1>
        <h2 class="subtitle is-3">Human-Centered AI, Conversational AI, Explainable AI</h2>
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
    <div class="hero-body pt-3  pb-0">
      <div class="container is-max-widescreen">
        <div class="content is-large">
          <p style="color: red;">
            We are looking for motivated Research Assistant Professors，Research Assistants, and PhD students (education background in Computer Science, Information Systems, Psychology, or related majors). If you are interested, please send your CV with an optional research statement to Prof. Li Chen (<a href="mailto:lichen@comp.hkbu.edu.hk" style="color: red; text-decoration: underline;">lichen@comp.hkbu.edu.hk</a>). The shortlisted candidates will be contacted for an interview.
          </p>
        </div>
      </div>
    </div>
  </section>
  <hr>
  <section class="hero">
    <div class="hero-body pb-3">
      <div class="container is-max-widescreen">
        <div class="columns">
          <div class="column is-3 is-text-center">
            <figure class="image">
              <img src="@/assets/img/home/fourSmallImgs/Personal-data-pana.png" style="padding: 20px" alt="Small Photo">
            </figure>
            <h5 class="subtitle is-5" style="width: 100%; text-align: center">User-Centered Interaction Design</h5>
          </div>
          <div class="column is-3 is-text-center">
            <figure class="image">
              <img src="@/assets/img/home/fourSmallImgs/Chatbot-rafiki.png" alt="Small Photo">
            </figure>
            <h5 class="subtitle is-5" style="width: 100%; text-align: center">Conversational AI</h5>
          </div>
          <div class="column is-3 is-text-center">
            <figure class="image">
              <img class="p-5" src="@/assets/img/home/fourSmallImgs/Chatbot-pana.png" alt="Small Photo">
            </figure>
            <h5 class="subtitle is-5" style="width: 100%; text-align: center">Explainable AI</h5>
          </div>
          <div class="column is-3 is-text-center">
            <figure class="image">
              <img src="@/assets/img/home/fourSmallImgs/Personalization-amico.png" style="padding: 20px"
                   alt="Small Photo">
            </figure>
            <h5 class="subtitle is-5" style="width: 100%; text-align: center">Personalized Recommender Systems</h5>
          </div>
        </div>
        <div class="columns mt-3">
          <div class="column is-full" style="font-size: 1.2rem">
            <p class="pb-3">
              By leveraging the power of advanced AI technologies, our research activities primarily focus on finding novel ways to promote human well-being, with a particular emphasis on education and mental health. We strive to revolutionize these areas by harnessing the potential of AI to deliver effective and impactful solutions.
            </p>
            <p class="pb-3">
              In our pursuit of developing AI-powered applications, we place great importance on empirical evidence. We aim to create applications that have been rigorously tested and scientifically proven to be effective. By relying on sound research methodologies and data-driven insights, we ensure that our applications are not only innovative but also reliable and trustworthy.
            </p>
            <p>
              We believe in the importance of inclusivity and accessibility. Our goal is to develop applications that can serve a wide range of users, including the general population and specific groups with unique needs. To achieve this, we actively collaborate with different organizations, such as educational institutions, healthcare providers, and community groups, to understand the specific requirements of diverse user groups and tailor our applications accordingly.
            </p>
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
      teamDescription: "Our team is committed to conducting cutting-edge interdisciplinary research aimed at developing innovative and personalized AI applications that prioritize human well-being. We firmly believe that by combining the expertise of team members from diverse fields, including computer science, social sciences, creative arts, education, and cognitive sciences, we can create AI solutions that truly understand and cater to the unique needs of individuals.",
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
