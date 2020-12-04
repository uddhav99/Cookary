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
            <v-btn
              v-if="tab != 3"
              class="ml-2 mt-2"
              fab
              dark
              small
              color="orange lighten-2"
              @click="tab==2?tab=1:tab=3"
            >
              <v-icon dark>
                mdi-arrow-left
              </v-icon>
            </v-btn>
              <Signatures v-if="tab == '0'" :tab='tab'/>
              <Filters v-if="tab == '1'" :curTab='tab' @clicked='func'/>
              <Results v-if="tab == '2'" :tab='tab' :query='fetched'/>
              <Splash v-if="tab == '3'" :tab='tab' @filters='tab=1' @signatures='tab=0'/>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Signatures from './components/signatures';
import Filters from './components/filters';
import Results from './components/results';
import Splash from './components/splash';

  export default {
    name: 'App',
    components: {
      Signatures,Filters,Results,Splash,
    },

    data: () => ({
      tab: 3,
      fetched: [],
      items: [
        //'Tab 1', 'Tab 2', 'Tab 3', 'Tab 4',
      ],
    }),
    methods: {
      func(tab,data){
        this.tab = tab;
        this.fetched = data;
      },
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');

  .description{
     font-family: "Caveat";
  }
</style>