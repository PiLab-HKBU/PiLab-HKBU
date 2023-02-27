<template>
  <div class="card">
    <a :href="item.website" target="_blank">
      <div class="card-image">
        <figure class="image is-2by1" style="overflow: hidden">
          <img class="memberPicture" :src="item.photo" alt="Placeholder image" style="object-fit: contain">
        </figure>
      </div>
    </a>
    <div class="card-content p-4">
      <div class="media mb-2">
        <div class="media-content">
          <p class="title is-4">{{ item.displayName }}</p>
          <p class="subtitle is-6 mb-0">{{ item.cnName }}</p>
          <p class="subtitle is-6">{{ item.title }}</p>
        </div>
      </div>
    </div>
    <div class="card-footer p-4">
      <div class="content" style="overflow-wrap: break-word;">
        <template v-if="item.location !== ''">
          <span><ion-icon name="location-outline"></ion-icon> <span
              style="font-size: 14px; color: black"> {{ item.location }}</span></span>
          <br>
        </template>
        <template v-if="item.website !== ''">
          <span><ion-icon name="browsers-outline"></ion-icon> <a :href="item.website" target="_blank"
                                                                 style="font-size: 14px; color: black">Website</a></span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrganizationItemView",
  props: ["item"]
}
</script>

<style scoped>
ion-icon {
  font-size: 16px;
  vertical-align: middle;
}

.card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-footer {
  margin-top: auto;
}

span {
  vertical-align: middle;
}

a {
  vertical-align: middle;
}

.card:hover .memberPicture {
  -webkit-transform: scale(1.1);
}

.memberPicture {
  transition: transform 0.2s linear;
}

</style>