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
      :bottom="true"
      transition="scale-transition"
      :close-on-content-click="false"
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
          <v-list-tile-title><v-icon color="primary">account_circle</v-icon><span>Profile</span></v-list-tile-title>
        </v-list-tile>
      </v-list>
      </v-card>
    </v-menu>
</div>
<!-- <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav d-none d-md-block">
    <li v-if="!isAuthenticated" class="nav-item">
        <button
        id="qsLoginBtn"
        class="btn btn-primary btn-margin"
        @click.prevent="login"
        >Login</button>
    </li>

    <li class="nav-item dropdown" v-if="isAuthenticated">
        <a
        class="nav-link dropdown-toggle"
        href="#"
        id="profileDropDown"
        data-toggle="dropdown"
        >
        <img :src="profile.picture" alt="User's profile picture" class="nav-user-profile">
        </a>
        <div class="dropdown-menu dropdown-menu-right">
        <div class="dropdown-header">{{ profile.name }}</div>
        <router-link to="/profile" class="dropdown-item dropdown-profile">
            <span class="icon icon-profile"></span> Profile
        </router-link>
        <a id="qsLogoutBtn" href="#" class="dropdown-item" @click.prevent="logout">
            <span class="icon icon-power"></span> Log out
        </a>
        </div>
    </li>
    </ul>

    <ul class="navbar-nav d-md-none" v-if="!isAuthenticated">
    <button class="btn btn-primary btn-block" @click="login">Log in</button>
    </ul>

    <ul class="navbar-nav d-md-none" v-if="isAuthenticated">
    <li class="nav-item">
        <span class="user-info">
        <img
            :src="profile.picture"
            alt="User's profile picture"
            class="nav-user-profile d-inline-block"
        >
        <h6 class="d-inline-block">{{ profile.name }}</h6>
        </span>
    </li>
    <li>
        <span class="icon icon-profile"></span>
        <router-link to="/profile">Profile</router-link>
    </li>

    <li>
        <span class="icon icon-power"></span>
        <a id="qsLogoutBtn" href="#" class @click.prevent="logout">Log out</a>
    </li>
    </ul>
</div> -->
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