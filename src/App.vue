<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase" color="primary">
        <span>Evatic</span>
        <span class="font-weight-light"> Service Hub</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <Login/>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Login from './components/Login'
import Error from "./components/Error";

export default {
  name: 'App',
  components: {
    HelloWorld,
    Login,
    Error
  },
  data () {
    return {
      //
    }
  },
  async created() {
    try {
      await this.$auth.renewTokens();
    } catch {
      // Supress the 'not logged in' error as we can illegitimately get that
      // when processing the callback url
    }
  } 
}
</script>
