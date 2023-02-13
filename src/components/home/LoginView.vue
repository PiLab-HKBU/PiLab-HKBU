<template>
  <section class="hero is-link is-fullheight-with-navbar">
    <div class="hero-body theme-background-color">
      <div class="container  is-max-widescreen">
        <h1 class="title is-2">Please Login First</h1>
        <h2 class="subtitle is-3">HKBU COMP RecSys Group</h2>
        <div class="columns">
          <div class="column is-4">
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label" style="color: white">Password</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input class="input" type="password" placeholder="password" v-model="passwordInput" @keyup.enter="login">
                  </p>
                </div>
              </div>
            </div>
            <button class="button is-white mt-3" style="width: 100%;" @click="login">Login</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {store} from "@/data/store";
export default {
  name: "LoginView",
  data() {
    return {
      store,
      passwordInput: ""
    }
  },
  methods: {
    login() {
      console.log("123")
      if (this.passwordInput === store.password) {
        this.store.isNotAuthenticated = true;
        this.$router.push({ name: 'home', params: { } })
      } else {
        alert("The password is wrong!")
      }
    }
  }
}
</script>

<style scoped>

</style>