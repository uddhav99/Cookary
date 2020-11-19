<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/CookaryLogo.svg')"
          class="my-3"
          contain
          height="200"
        />
        <p><em>Food always comes to those who love to COOK!</em></p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-btn color="orange" dark large>
          Signature Recipes
        </v-btn>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-btn color="orange" dark large>
            Add Filters
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Tab1',

    data: () => ({
    }),
  }
</script>
