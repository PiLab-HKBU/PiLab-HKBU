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
          <div class="content is-medium about-description" style="color: white">
            <h1 class="title is-2" style="color: white">Team Members</h1>
            <small>
              *In alphabetical order
            </small>
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
        <div class="columns is-multiline my-4 mx-2">
          <div v-for="person in section.members" class="column is-4">
            <UserCardView :person="person"/>
          </div>
        </div>
      </template>
    </div>
  </section>
  <section class="section theme-background-color">
    <div class="container is-max-widescreen">
      <div class="columns is-vcentered">
        <div class="column">
          <div class="content is-medium about-description" style="color: white">
            <h1 class="title is-2" style="color: white">Collaborating Organizations</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container is-max-widescreen my-5">
      <template v-for="group in pOrganizationData">
        <div class="tile is-ancestor mx-2">
          <template v-for="item in group">
            <div class="tile is-parent is-4">
              <div class="tile is-child">
                <OrganizationItemView :item="item"/>
              </div>
            </div>
          </template>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
import {membersData} from "@/data/membersData";
import {organizationsData} from "@/data/organizationsData";
import UserCardView from "@/components/about/PersonItemView.vue";
import OrganizationItemView from "@/components/about/OrganizationItemView.vue";

export default {
  name: "AboutView",
  components: {OrganizationItemView, UserCardView},
  data() {
    return {
      membersData,
      organizationsData
    }
  },
  computed: {
    pOrganizationData() {
      let source = this.organizationsData.list;

      let result = [];

      let smallItemGroups = [];
      for (const index in source) {
        const item = source[index];

        if (smallItemGroups.length < 3) {
          smallItemGroups.push(item);
        } else {
          result.push(smallItemGroups);
          smallItemGroups = [item];
        }
      }

      if (smallItemGroups.length > 0) {
        result.push(smallItemGroups);
      }

      return result
    }
  }
}
</script>

<style scoped>

</style>