<template>
<div>
    <v-btn 
      v-if="!isAuthenticated"
      flat 
      color="primary"
      id="qsLoginBtn"
      @click.prevent="login"
      >Login
  </v-btn>
  <v-menu
    v-if="isAuthenticated"
    v-model="showMenu"
    transition="scale-transition"
    :close-on-content-click="true"
    offset-x
  >
    <template v-slot:activator="{ on }">
      <v-avatar  v-on="on">
      <img
          :src="profile.picture"
          alt="Proile picture"
      >
      </v-avatar>
      <v-icon>arrow_drop_down</v-icon>
    </template>
    <v-card>
    <v-list>
      <v-list-tile>
        <v-list-tile-title><h4>{{ profile.name }}</h4></v-list-tile-title>
      </v-list-tile>
      <v-divider></v-divider>
      <v-list-tile>
        <v-list-tile-action><router-link to="/profile"><v-icon color="primary">account_circle</v-icon></router-link></v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title><router-link to="/profile"><span>Profile</span></router-link></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    </v-card>
  </v-menu>
</div>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
      fav: true,
      menu: false,
      message: false,
      hints: true
    }),
  methods: {
    login() {
      this.$auth.login();
    },
    logout() {
      this.$auth.logOut();
      this.$router.push({ path: "/" });
    },
    handleLoginEvent(data) {
      this.isAuthenticated = data.loggedIn;
      this.profile = data.profile;
    }
  },
  data() {
    return {
      isAuthenticated: false,
      profile: {},
      showMenu: false,
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ]
    };
  }
};
</script>