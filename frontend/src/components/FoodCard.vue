<template>
  <v-card class="mx-auto my-12" max-width="450">
    <template slot="progress">
      <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
    </template>

    <v-img height="250" :src="params.image"></v-img>

    <v-card-title>{{params.title}}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-icon color="blue lighten-2">mdi-thumb-up</v-icon>
        <div class="grey--text ml-2">
          ({{params.aggregateLikes}})
        </div>
        <v-icon color="blue lighten-2" class="ml-8">mdi-clock</v-icon>
        <div class="grey--text ml-2" >
          {{params.readyInMinutes}} minutes
        </div>
      </v-row>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text :href="params.sourceUrl" target="_blank">
        Visit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'FoodCard',
  props: ['params'],
  data: () => ({
    obj2: [
      {
        id: 0,
        title: 'Chicken',
        options: ['A1', 'A2', 'A3'],
        img: 'https://picsum.photos/50/50?random',
      },
      {
        id: 1,
        title: 'Indian',
        options: ['B1', 'B2', 'B3'],
        img: 'https://picsum.photos/50/50?random',
      },
      {
        id: 2,
        title: 'Vegetarian',
        options: ['C1', 'C2', 'C3'],
        img: 'https://picsum.photos/50/50?random',
      },
      {
        id: 3,
        title: 'Italian',
        options: ['D1', 'D2', 'D3'],
        img: 'https://picsum.photos/50/50?random',
      },
      {
        id: 4,
        title: 'Beef',
        options: ['E1', 'E2', 'E3'],
        img: 'https://picsum.photos/50/50?random',
      },
      {
        id: 5,
        title: 'Asian',
        options: ['F1', 'F2', 'F3'],
        img: 'https://picsum.photos/50/50?random',
      },
    ],
  }),
  methods: {
    call() {},
  },
};
</script>
