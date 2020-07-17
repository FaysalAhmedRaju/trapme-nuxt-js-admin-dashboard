<template>
  <v-navigation-drawer
    v-model="primaryDrawer.model"
    :mini-variant="primaryDrawer.mini"
    :mini-variant-width="primaryDrawer.miniWidth"
    permanent
    class="hidden-xs-only"
    floating
    app
    v-bind:class="{ primaryTriangle: !primaryDrawer.mini, primaryTriangle1: primaryDrawer.mini}"
  >
    <v-list
      dense
      nav
      class="pa-4"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img width="10" src="/logo.png"/>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            <v-img width="90" src="/trapme.png"/>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list>
      <v-list-item
        v-for="item in primaryDrawer.items"
        :key="item.title"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

    </v-list>
    <div>
      <v-img class="test-click1" src="/a.svg" @click.stop="primaryDrawer.mini = !primaryDrawer.mini"/>
    </div>
  </v-navigation-drawer>

</template>

<script>
  export default {
    name: "NavigationDrawerComponent",
    data: () => ({
      drawer: false,
      primaryDrawer: {
        model: null,
        mini: false,
        miniWidth: 92,
        items: [
          {title: 'Dashboard', icon: 'mdi-view-dashboard'},
          {title: 'Agents', icon: 'mdi-account'},
          {title: 'Clients', icon: 'mdi-help-box'},
        ],
      }
    }),
  }
</script>

<style scoped>

</style>
