<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3" style="overflow: hidden">
        <img class="memberPicture" :src="person.photo" alt="Placeholder image" style="object-fit: cover">
      </figure>
    </div>
    <div class="card-content">
      <div class="media mb-2">
        <div class="media-content">
          <p class="title is-4">{{ person.displayName }}</p>
          <p class="subtitle is-6 mb-0">{{ person.cnName }}</p>
          <p class="subtitle is-6">{{ person.title }}</p>
        </div>
      </div>

      <div class="content" style="overflow-wrap: break-word;">
        <p class="p-0" style="font-size: 14px; line-height: 16px; height: 48px;  overflow: hidden; display: -webkit-box; webkit-box-orient: vertical; webkit-line-clamp: 3;">{{ person.position }}</p>
        <template v-if="person.location !== ''">
          <span><i class="fas fa-location-arrow"></i> <span style="font-size: 14px"> {{ person.location }}</span></span>
          <br>
        </template>
        <template v-if="person.contact !== ''">
          <span><i class="fa-solid fa-envelope"></i> <a :href="'mailto:' + person.contact" style="font-size: 14px">Contact Me</a></span>
          <br>
        </template>
        <template v-if="person.website !== ''">
          <span><i class="fas fa-globe-asia"></i> <a :href="person.website" target="_blank" style="font-size: 14px">Personal Website</a></span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCardView",
  props: ["person"]
}
</script>

<style scoped>

.card:hover .memberPicture {
  -webkit-transform: scale(1.1);
}

.memberPicture {
  transition: transform 0.2s linear;
}

</style>