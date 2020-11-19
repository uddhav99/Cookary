<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="#70A1D7"
      flat
    >
      <div class="d-flex align-center">
        <v-img
          alt="Cookary Logo"
          class="shrink mr-2"
          contain
          :src="require('@/CookaryLogo.svg')"
          transition="scale-transition"
          width="130"
        />
      </div>
      <!-- Tab Options -->
      <v-tabs
        v-model="tab"
        background-color="transparent"
        color="white"
        centered
        grow
      >
        <v-tab
          v-for="item in items"
          :key="item"
        >
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in items"
          :key="item"
        >
        </v-tab-item>
      </v-tabs-items>

      <v-container class="py-0 fill-height">
      </v-container>
    </v-app-bar>

    <v-main class="blue lighten-4">
      <v-container>
        <v-row>
          <!--
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item
                  v-for="n in 5"
                  :key="n"
                  link
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      List Item {{ n }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                  link
                  color="grey lighten-4"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      Refresh
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>
          < Main Content -->
          <v-col>
            <v-sheet
              min-height="50vh"
              rounded="lg"
            >
              <Tab1 v-if="tab == '0'"/>
              <Tab2 v-if="tab == '1'"/>
              <Tab3 v-if="tab == '2'"/>
              <Tab4 v-if="tab == '3'"/>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Tab1 from './components/Tab1';
import Tab2 from './components/Tab2';
import Tab3 from './components/Tab3';
import Tab4 from './components/Tab4';

  export default {
    name: 'App',

    components: {
      Tab1,Tab2,Tab3,Tab4,
    },

    data: () => ({
      tab: null,
      items: [
        'Tab 1', 'Tab 2', 'Tab 3', 'Tab 4',
      ],
    }),
    methods: {
      whatTab(){
        console.log(this.tab);
      }
    }
  }
</script>