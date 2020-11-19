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
          <v-col v-for="(value, key) in obj" :key="key">
            <v-card class="pa-2" outlined tile>
              {{key}}
            </v-card>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col v-for="(value, key) in obj" :key="key">
            <v-card class="pa-2" outlined tile>
              <v-list two-line>
                <v-list-item-group
                  multiple
                >
                </v-list-item-group>

                <template v-for="item in value">
                  <v-list-item :key="item">
                    <v-list-item-content>
                      <v-img src="https://picsum.photos/50/50?random"/>
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

    data: () => ({
      obj: {      
        Chicken: ["A1", "A2", "A3"],
        Indian: ["B1", "B2", "B3"],
        Vegetarian: ["C1", "C2", "C3"],
        Italian: ["D1", "D2", "D3"],
        Beef: ["E1", "E2", "E3"],
        Asian: ["F1", "F2", "F3"],
      },
    }),
  }
</script>
