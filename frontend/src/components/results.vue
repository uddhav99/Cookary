<template>
  <v-container class="fill-height" fluid style="min-height: 434px">
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../assets/CookaryLogo.svg')" class="my-3" contain height="110" />
        <p class="description" style="font-size: 40px;">Your Customized Recipes</p>
        <br />
        <v-divider inset />
        <br />
      </v-col>
    </v-row>
    <v-fade-transition mode="out-in">
      <v-row>
        <v-col cols="6" v-for="card in query" :key="card.id">
          <FoodCard :params="card" />
        </v-col>
      </v-row>
    </v-fade-transition>
  </v-container>
</template>

<script>
import FoodCard from './FoodCard';
import json from './test.json';
export default {
  name: 'results',
  components: {
    FoodCard,
  },
  props: ['query', 'tab'],
  data: () => ({
    myJson: json,
    empty: false,
  }),
  methods: {
    call() {
      //console.log(this.myJson);
    },
  },
};
</script>
