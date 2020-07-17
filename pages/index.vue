<template>
  <v-main>
    <navigation-drawer/>
    <v-navigation-drawer
      v-model="secondaryDrawer.model"
      floating
      right
      permanent
      class="secondary-triangle hidden-xs-only"
      app
    >
      <template>
        <v-toolbar flat>
          <v-row
            align="center"
            justify="center"
          >
            <v-card
              class="white ma-5 pt-3 pr-3 pl-1 pb-1"

            >
<!--              @click=""-->
              <v-badge
                color="error"
                overlap
                :content="secondaryDrawer.notificationCount"
                offset-x="12"
              >
                <v-icon color="#2C3040" medium>mdi-bell</v-icon>
              </v-badge>

            </v-card>
            <v-avatar
              class="mr-2"
              size="32">
              <v-img width="5" src="/logo.png"/>
            </v-avatar>
            <v-list-item-content style="max-width: 73px">
              <v-list-item-title>John Doe</v-list-item-title>
            </v-list-item-content>
            <img src="/tri.svg"/>
          </v-row>
        </v-toolbar>
      </template>
    </v-navigation-drawer>
    <v-main>
      <v-container>
      </v-container>
    </v-main>
  </v-main>
</template>

<script>
  import NavigationDrawer from "~/components/NavigationDrawerComponent.vue"
  export default {
    name: "AdminComponent",
    components: {
      NavigationDrawer
    },
    data: () => ({
      secondaryDrawer: {
        model: null,
        mini: false,
        items: [
          {title: 'Dashboard', icon: 'mdi-view-dashboard'},
          {title: 'Agents', icon: 'mdi-users'},
          {title: 'Clients', icon: 'mdi-help-box'},
        ],
        notificationCount: 9,
      }
    }),
  }
</script>

<style>
  .primaryTriangle:before {
    content: '';
    display: block;
    position: absolute;
    top: 27px;
    right: -13px;
    width: 25px;
    height: 25px;
    background: #F6F7FB;
    -moz-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -webkit-box-shadow: inset 2px 2px 2px 0px rgba(183, 183, 183, 0.39);
    -moz-box-shadow: inset 2px 2px 2px 0px rgba(183, 183, 183, 0.39);
    box-shadow: inset 2px 2px 2px 0px rgba(183, 183, 183, 0.39);
  }

  .primaryTriangle1:after {
    content: '';
    display: block;
    position: absolute;
    top: 27px;
    right: -12px;
    width: 25px;
    height: 25px;
    background: #FFFFFF;
    -moz-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -webkit-box-shadow: 2px 2px 2px 0px rgba(183, 183, 183, 0.39);
    -moz-box-shadow: 2px 2px 2px 0px rgba(183, 183, 183, 0.39);
    box-shadow: 2px 2px 2px 0px rgba(183, 183, 183, 0.39);
  }

  .test-click1 {
    right: -12px;
    top: 50%;
    position: absolute;
  }

  .v-navigation-drawer {
    overflow: visible;
    box-shadow: 0 0 5px rgba(97, 97, 97, 0.4);
  }

  .v-badge__badge {
    font-size: 12px !important;
    min-width: 17px !important;
    max-height: 17px !important;
    padding: 3px 2px !important;
  }
</style>


<!--<template>-->
<!--  <v-layout column justify-center align-center>-->
<!--    <v-flex xs12 sm8 md6>-->
<!--      <div class="text-center">-->
<!--        <logo />-->
<!--        <vuetify-logo />-->
<!--      </div>-->
<!--      <v-card>-->
<!--        <v-card-title class="headline">-->
<!--          Welcome to the Vuetify + Nuxt.js template-->
<!--        </v-card-title>-->
<!--        <v-card-text>-->
<!--          <p>-->
<!--            Vuetify is a progressive Material Design component framework for-->
<!--            Vue.js. It was designed to empower developers to create amazing-->
<!--            applications.-->
<!--          </p>-->
<!--          <p>-->
<!--            For more information on Vuetify, check out the-->
<!--            <a-->
<!--              href="https://vuetifyjs.com"-->
<!--              target="_blank"-->
<!--              rel="noopener noreferrer"-->
<!--            >-->
<!--              documentation </a>.-->
<!--          </p>-->
<!--          <p>-->
<!--            If you have questions, please join the official-->
<!--            <a-->
<!--              href="https://chat.vuetifyjs.com/"-->
<!--              target="_blank"-->
<!--              rel="noopener noreferrer"-->
<!--              title="chat"-->
<!--            >-->
<!--              discord </a>.-->
<!--          </p>-->
<!--          <p>-->
<!--            Find a bug? Report it on the github-->
<!--            <a-->
<!--              href="https://github.com/vuetifyjs/vuetify/issues"-->
<!--              target="_blank"-->
<!--              rel="noopener noreferrer"-->
<!--              title="contribute"-->
<!--            >-->
<!--              issue board </a>.-->
<!--          </p>-->
<!--          <p>-->
<!--            Thank you for developing with Vuetify and I look forward to bringing-->
<!--            more exciting features in the future.-->
<!--          </p>-->
<!--          <div class="text-xs-right">-->
<!--            <em><small>&mdash; John Leider</small></em>-->
<!--          </div>-->
<!--          <hr class="my-3">-->
<!--          <a-->
<!--            href="https://nuxtjs.org/"-->
<!--            target="_blank"-->
<!--            rel="noopener noreferrer"-->
<!--          >-->
<!--            Nuxt Documentation-->
<!--          </a>-->
<!--          <br>-->
<!--          <a-->
<!--            href="https://github.com/nuxt/nuxt.js"-->
<!--            target="_blank"-->
<!--            rel="noopener noreferrer"-->
<!--          >-->
<!--            Nuxt GitHub-->
<!--          </a>-->
<!--        </v-card-text>-->
<!--        <v-card-actions>-->
<!--          <v-spacer />-->
<!--          <v-btn color="primary" nuxt to="/inspire">-->
<!--            Continue-->
<!--          </v-btn>-->
<!--        </v-card-actions>-->
<!--      </v-card>-->
<!--    </v-flex>-->
<!--  </v-layout>-->
<!--</template>-->

<!--<script>-->
<!--import Logo from '~/components/Logo.vue'-->
<!--import VuetifyLogo from '~/components/VuetifyLogo.vue'-->

<!--export default {-->
<!--  components: {-->
<!--    Logo,-->
<!--    VuetifyLogo-->
<!--  }-->
<!--}-->
<!--</script>-->
