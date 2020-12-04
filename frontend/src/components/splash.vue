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
        <p class="description" style="font-size: 40px;">Food always comes to those who love to COOK!!</p>
        
        <v-divider inset/>
        <br>
        <v-col class="mb-4">
          <v-btn color="warning" dark @click="$emit('signatures')">
            Browse through our Signature Recipes and get a Grocery List
          </v-btn>
        </v-col>
        <v-col class="mb-4">
          <v-btn color="warning" dark @click="$emit('filters')">
            Add filters to our Signature Recipes to suit your needs
          </v-btn>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'splash',

    data: () => ({
    }),
  }
</script>

<style>

</style>