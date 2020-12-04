<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../assets/CookaryLogo.svg')" class="my-3" contain height="100" />
        <p class="description" style="font-size: 40px;">Add Filters</p>
      </v-col>
      <!-- Rows and Columns -->
      
      <v-container class="grey lighten-5 mb-6">
        <v-row no-gutters>
          <v-col v-for="value in obj.radials" :key="value.title">
            <v-card class="pa-2" outlined tile>
              {{ value.title }}
            </v-card>
          </v-col>
          <v-col v-for="value in obj.checkboxes" :key="value.title">
            <v-card class="pa-2" outlined tile>
              {{ value.title }}
            </v-card>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col v-for="value in obj.radials" :key="value.id">
            <v-card class="pa-2" outlined tile>
              <v-radio-group v-model="value.selection">
                <!--p>{{ value.options[value.selection] }}</p-->
                <v-radio v-for="item in value.options" :key="item" :label="item" />
              </v-radio-group>
            </v-card>
          </v-col>
          <v-col v-for="value in obj.checkboxes" :key="value.id">
            <v-card class="pa-2" outlined tile>
              <!--p>{{ value.selection }}</p-->
              <v-checkbox class='mt-0' v-for="item in value.options" v-model="value.selection" :key="item" :label="item" :value="item"/>
            </v-card>
          </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <v-btn color="warning" dark @click="func">
          Confirm
        </v-btn>
      </v-container>
      <!-- -->
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'filters',
  props: ['query', 'curTab'],
  methods: {
    func() {
      let ingred = []
      this.user_selections.maxReadyTime = this.obj.radials[0].options[this.obj.radials[0].selection].split(" ")[0];
      this.user_selections.cuisine = this.obj.radials[1].options[this.obj.radials[1].selection];
      ingred = ingred.concat(this.obj.checkboxes[0].selection,this.obj.checkboxes[1].selection,this.obj.checkboxes[2].selection);
      this.user_selections.ingredients = ingred.join(',');
      
      let url = new URL('http://localhost:8000/search');
      url.search = new URLSearchParams({
          cuisine: this.user_selections.cuisine, // "Italian"
          ingredients: this.user_selections.ingredients, // "chicken,eggs,beef"
          maxReadyTime: this.user_selections.maxReadyTime // "30"
      });
      console.log('URL:',url);
      
      fetch(url)
      .then(response => response.json())
      .then(data => {
          console.log('Data:',data);
          this.$emit('clicked',2,data);
      });
    },
  },
  data: () => ({
    user_selections: {
      cuisine: "",
      ingredients: "",
      maxReadyTime: "600"
    },
    obj: {
        radials:[{
          id: 0,
          title: 'Time',
          selection: 0,
          options: ['60 minutes', '90 minutes', '120 minutes', '180 minutes'],
        },
        {
          id: 1,
          title: 'Cuisine',
          selection: 0,
          options: ['Indian', 'Italian', 'American', 'Chinese', 'Thai', 'Mexican','Mediterranean','Cajun','African'],
        }],
        checkboxes:[{
          id: 2,
          title: 'Protein',
          selection: [],
          options: ['Chicken', 'Beef', 'Tofu', 'Seafood', 'Turkey', 'Eggs', 'Beans'],
        },
        {
          id: 3,
          title: 'Carbs',
          selection: [],
          options: ['Rice', 'Bread', 'Pasta', 'Potato'],
        },
        {
          id: 4,
          title: 'Vegetables',
          selection: [],
          options: ['Broccoli', 'Lettuce', 'Carrot', 'Tomato', 'Garlic', 'Pepper', 'Mushroom'],
        },
    ]},
  }),
};
</script>
