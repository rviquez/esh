<template>
  <div class="container">
    <div class="row align-items-center profile-header">
      <div class="col-md-2">
        <img :src="profile.picture" alt="User's profile picture" class="rounded-circle img-fluid profile-picture">
      </div>
      <div class="col-md">
        <h2>{{ profile.name }}</h2>
        <p class="lead text-muted">{{ profile.email }}</p>
      </div>
    </div>

    <div class="row">
      <pre v-highlightjs class="rounded"><code class="json">{{ JSON.stringify(profile, null, 2) }}</code></pre>
    </div>
  </div>
</template>

<script>
import { RepositoryFactory } from './../repositories/RepositoryFactory'
const PostsRepository = RepositoryFactory.get('login') 
export default {
  data() {
    return {
      profile: this.$auth.profile,
      login: []
    };
  },
  created () {
    this.fetch()
  },
  methods: {
    handleLoginEvent(data) {
      this.profile = data.profile;
    },
    async fetch() {
      const { data } = await PostsRepository.postLogin()
      this.login = data
    }
  }
};
</script>
