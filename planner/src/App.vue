<template>
  <v-app>
    <v-navigation-drawer app
      v-model="drawer"
      absolute
      temporary
    >
    <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.url"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


    <v-app-bar app color="primary" dark>
      <v-container class="d-flex align-center">
        <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="/img/Logos/Logo.svg"
            transition="scale-transition"
            width="50"
          />

          <v-img
            alt="Vuetify Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="/img/Logos/logoText.png"
            width="150"
          />
        </div>
      </v-container>

      
      

    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>


  </v-app>


</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
    items: [
      { title: 'Home', icon: 'mdi-view-dashboard',url:'/' },
      { title: 'About', icon: 'mdi-forum',url:'/about' },
      { title: 'Login', icon: 'mdi-login',url:'/login' }
    ],
  }),
  metaInfo: {
    titleTemplate: '%s | TriPlanner'
  },
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

*{
  font-family: 'Kantumruy Pro', sans-serif;
}

</style>
