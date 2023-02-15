<template>
  <section class="section theme-background-color">
    <div class="container is-max-widescreen">
      <div class="columns is-vcentered">
<!--        <div class="column">-->
<!--          <figure class="image">-->
<!--            <img src="@/assets/img/home/Group_photo.jpeg" alt="Group Photo">-->
<!--          </figure>-->
<!--        </div>-->
        <div class="column">
          <div class="content is-medium about-description">
            <h1 class="title is-2" style="color: white">Team Members</h1>
<!--            <h2 class="subtitle is-3" style="color: white">A Creative Team</h2>-->
<!--            <p class="" style="color: white">-->
<!--              As a group with diverse backgrounds in artificial intelligence, recommender systems, human-computer interaction, software engineering, etc., we work in various fields such as chatbots, education, mental health, recommender systems, etc.-->
<!--            </p>-->
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container is-max-widescreen mt-5">
      <template v-for="section in membersData.list">
<!--        <p class="title mx-5">-->
<!--          {{ section.title }}-->
<!--        </p>-->
        <div class="columns is-multiline my-4 mx-2">
          <div v-for="person in section.members" class="column is-4">
            <UserCardView :person="person" />
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
import { membersData } from "@/data/membersData";
import UserCardView from "@/components/about/PersonCardView.vue";

export default {
  name: "AboutView",
  components: {UserCardView},
  data() {
    return {
      membersData
    }
  },
}
</script>

<style scoped>

</style>