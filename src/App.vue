<template>
  <v-app>
    <v-system-bar app>
      <v-spacer></v-spacer>
    </v-system-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-sheet
        color="grey lighten-4"
        class="pa-4"
      >
        Library
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item link>
          <v-list-item-content>
            <router-link to="/"><v-list-item-title>Home</v-list-item-title></router-link>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <router-link to="/catalog"><v-list-item-title>Catalog</v-list-item-title></router-link>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <router-link to="/check-out"><v-list-item-title>Check Out</v-list-item-title></router-link>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <router-link to="/check-in"><v-list-item-title>Check In</v-list-item-title></router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >

        <div>
          <router-view/>
        </div>

        </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
