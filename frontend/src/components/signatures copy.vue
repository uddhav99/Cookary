<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/CookaryLogo.svg')"
          class="my-3"
          contain
          height="100"
        />
      </v-col>

      <!-- Rows and Columns -->
      <v-container class="grey lighten-5 mb-6">
        <v-row no-gutters style="height: 50px;">
          <v-col v-for="value in obj2" :key="value.title">
            <v-card class="pa-2 orange lighten-2" outlined tile>
              {{value.title}}
            </v-card>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col v-for="value in obj2" :key="value.id">
            <v-card class="pa-2" outlined tile>
              <v-list two-line>
                <v-list-item-group
                  multiple
                >
                </v-list-item-group>
                <template v-for="item in value.options">
                  <v-list-item :key="item">
                    <v-list-item-content>
                      <v-img :src="value.img"/>
                      <v-list-item-title v-text="item"/>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <!-- -->
      
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Tab1',
    props: ['tab'],
    data: () => ({
      obj2:[{id: 0, title:"Chicken", options: ["A1", "A2", "A3"], img:"https://picsum.photos/50/50?random"},
            {id: 1, title:"Indian", options: ["B1", "B2", "B3"], img:"https://picsum.photos/50/50?random"},
            {id: 2, title:"Vegetarian", options: ["C1", "C2", "C3"], img:"https://picsum.photos/50/50?random"},
            {id: 3, title:"Italian", options: ["D1", "D2", "D3"], img:"https://picsum.photos/50/50?random"},
            {id: 4, title:"Beef", options: ["E1", "E2", "E3"], img:"https://picsum.photos/50/50?random"},
            {id: 5, title:"Asian", options: ["F1", "F2", "F3"], img:"https://picsum.photos/50/50?random"},
          ],
    }),
    methods: {
      call(){
        
      }
    }
  }
</script>
