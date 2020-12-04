<template>
  <v-container
    class="fill-height"
    fluid
    style="min-height: 434px"
  >      
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/CookaryLogo.svg')"
          class="my-3"
          contain
          height="120"
        />
        <p class="description" style="font-size: 50px;">Signature Recipes</p>
        <br>
        <v-divider inset/>
        <br>
      </v-col>
    </v-row>
    
    <v-fade-transition mode="out-in">
      <v-row>
        <v-col cols="6" v-for="card in myJson" :key="card.id">
          <FoodCard :params='card'/>
        </v-col>
      </v-row>
    </v-fade-transition>
  </v-container>
  
</template>


<script>
import FoodCard from './FoodCard';
import json from './test.json'
  export default {
    name: 'Tab1',
    props: ['tab'],
    components: {
      FoodCard
    },
    data: () => ({
      obj2:[{id: 0, title:"Chicken", options: ["A1", "A2", "A3"], img:"https://picsum.photos/50/50?random"},
            {id: 1, title:"Indian", options: ["B1", "B2", "B3"], img:"https://picsum.photos/50/50?random"},
            {id: 2, title:"Vegetarian", options: ["C1", "C2", "C3"], img:"https://picsum.photos/50/50?random"},
            {id: 3, title:"Italian", options: ["D1", "D2", "D3"], img:"https://picsum.photos/50/50?random"},
            {id: 4, title:"Beef", options: ["E1", "E2", "E3"], img:"https://picsum.photos/50/50?random"},
            {id: 5, title:"Asian", options: ["F1", "F2", "F3"], img:"https://picsum.photos/50/50?random"},
          ],
          myJson: json
    }),
    methods: {
      call(){
        
      }
    }
  }
</script>
