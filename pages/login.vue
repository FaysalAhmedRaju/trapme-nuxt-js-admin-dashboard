<template>
  <v-layout>
    <v-flex class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5">
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
      <div class="my-2">
        <v-btn color="blue" dark>
          Normal Button
        </v-btn>
      </div>
      <v-row>
        <v-col cols="12">
          <p>Normal</p>
        </v-col>

        <v-col cols="12" sm="3">
          <v-btn icon color="pink">
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </v-col>

        <v-col cols="12" sm="3">
          <v-btn icon color="indigo">
            <v-icon>mdi-star</v-icon>
          </v-btn>
        </v-col>

        <v-col cols="12" sm="3">
          <v-btn icon color="green">
            <v-icon>mdi-cached</v-icon>
          </v-btn>
        </v-col>

        <v-col cols="12" sm="3">
          <v-btn icon color="deep-orange">
            <v-icon>mdi-thumb-up</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>
