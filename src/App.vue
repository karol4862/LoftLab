<template>
  <v-app>
    <v-navigation-drawer v-if="$vuetify.display.mdAndDown" v-model="toggle" temporary>
      <v-list>
        <v-list-item class="pa-0">
          <v-expansion-panels>
            <v-expansion-panel
            >
            <v-expansion-panel-title class="py-1 px-4">
              Oferta
            </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-list>
                  <v-list-item :to="{ name: 'Oferta', params: { id: 'blaty_kuchenne' } }">
                    <v-list-item-title>Blaty kuchenne</v-list-item-title>
                  </v-list-item>
                  <v-list-item :to="{ name: 'Oferta', params: { id: 'stoliki_kawowe' } }">
                    <v-list-item-title>Stoliki kawowe</v-list-item-title>
                  </v-list-item>
                  <v-list-item :to="{ name: 'Oferta', params: { id: 'krzesla_barowe' } }">
                    <v-list-item-title>Krzesła barowe</v-list-item-title>
                  </v-list-item>
                  <v-list-item :to="{ name: 'Oferta', params: { id: 'jadalnia' } }">
                    <v-list-item-title>Stoły do jadalni</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-expansion-panel-text>
              
            </v-expansion-panel>
          </v-expansion-panels>
        </v-list-item>
        <v-list-item :to="{ name: 'Współpraca' }">Współpraca</v-list-item>
        <v-list-item :to="{ name: 'Kontakt' }">Kontakt</v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar height="76" absolute class="border-b-sm border-light-gray border-opacity-75">
      <v-row class="app-row mx-auto">
        <v-col cols="5" style="height: 76px" class="d-flex align-center">
          <v-menu v-if="!$vuetify.display.mdAndDown"">
            <template v-slot:activator="{ props }">
              <v-btn text v-bind="props" class="text-uppercase">Oferta</v-btn>
            </template>
            <v-list>
              <v-list-item :to="{ name: 'Oferta', params: { id: 'blaty_kuchenne' } }">
                <v-list-item-title>Blaty kuchenne</v-list-item-title>
              </v-list-item>
              <v-list-item :to="{ name: 'Oferta', params: { id: 'stoliki_kawowe' } }">
                <v-list-item-title>Stoliki kawowe</v-list-item-title>
              </v-list-item>
              <v-list-item :to="{ name: 'Oferta', params: { id: 'krzesla_barowe' } }">
                <v-list-item-title>Krzesła barowe</v-list-item-title>
              </v-list-item>
              <v-list-item :to="{ name: 'Oferta', params: { id: 'jadalnia' } }">
                <v-list-item-title>Stoły do jadalni</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <!-- <v-btn text class="text-uppercase">Portfolio</v-btn> -->
          <v-btn v-if="!$vuetify.display.mdAndDown" text class="text-uppercase" :to="{ name: 'Współpraca' }">Współpraca</v-btn>
        </v-col>
        <v-col cols="2" style="height: 76px" class="py-0 logo-wrapper">
          <div class="imagelogo-wrapper" style="height: 76px; width: 100px">
            <v-img
              :src="logo"
              height="100"
              width="100"
              class="mx-auto logo-background"
              @click="$router.push('/')"
            ></v-img>
          </div>
        </v-col>
        <v-col cols="5" style="height: 76px" class="d-flex align-center justify-end py-0">
          <div v-if="!$vuetify.display.mdAndDown" class="py-3 border-s-md border-opacity-75 h-100 d-flex align-center">
            <v-btn text :to="{ name: 'Kontakt' }" class="text-uppercase">Kontakt</v-btn>
          </div>
          <v-btn v-else icon="mdi-menu" @click="toggleNavigator"></v-btn>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer class="bg-background py-0">
      <section class="footer py-0 d-flex w-100">
        <div class="footer-logo d-flex justify-space-evenly align-center flex-grow-1 py-16">
          <div>
            <v-img :src="logoblack" height="120" width="120" class="mx-auto"></v-img>
          </div>

          <div class="company-info d-flex flex-column">
            <span class="text-decoration-underline mb-3 ml-1">support@meble.pl</span>
            <span>
              <v-icon size="small">mdi-map-marker-outline</v-icon>
              Kwiatkowskiego 9D
            </span>
            <span class="ml-6">Rzeszów, 35-001</span>
            <span class="mt-2">
              <v-icon class="mr-2">mdi-instagram</v-icon>
              <v-icon>mdi-facebook</v-icon>
            </span>
          </div>
        </div>
        <div class=" shortcuts-footer d-flex flex-grow-1 justify-space-evenly py-16" :class="{
          'border-t-md': $vuetify.display.mdAndDown,
          'border-s-md': !$vuetify.display.mdAndDown
        }">
          <v-list lines="one" class="bg-background">
            <v-list-item class="mb-1">
              <span class="font-weight-bold"> Na skróty </span>
            </v-list-item>
            <v-list-item> <span class="font-weight-bold"> Kategorie produktów </span> </v-list-item>
            <v-list-item :to="{ name: 'Oferta', params: { id: 'stoliki_kawowe' } }">
              Stoliki kawowe
            </v-list-item>
            <v-list-item :to="{ name: 'Oferta', params: { id: 'krzesla_barowe' } }">
              Krzesła barowe
            </v-list-item>
            <v-list-item :to="{ name: 'Oferta', params: { id: 'jadalnia' } }">
              Stoły do jadalni
            </v-list-item>
            <v-list-item :to="{ name: 'Oferta', params: { id: 'blaty_kuchenne' } }">
              Blaty kuchenne
            </v-list-item>
          </v-list>
          <v-list class="bg-background">
            <!-- <v-list-item>
              <span class="font-weight-bold"> Portfolio </span>
            </v-list-item> -->
            <v-list-item :to="{ name: 'Współpraca' }">
              <span class="font-weight-bold"> Współpraca </span>
            </v-list-item>
            <v-list-item :to="{ name: 'Kontakt' }">
              <span class="font-weight-bold"> Kontakt </span>
            </v-list-item>
          </v-list>
        </div>
      </section>
    </v-footer>
  </v-app>
</template>

<script>
import logo from '@/assets/images/logo.png'
import logoblack from '@/assets/images/logoblack.png'

export default {
  name: 'App',
  data() {
    return {
      logo,
      logoblack,
      toggle: false
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push({ name: route })
    },
    toggleNavigator() {
      this.toggle = !this.toggle
    }
  }
}
</script>

<style>
@media (max-width: 961px) {
  html {
    font-size: 18px !important
  }
  h2 {
    font-size: 1.6rem;
  }
  .footer {
    flex-direction: column
  }
}
.v-toolbar__content {
  display: flex;
  justify-content: space-between;
  overflow: visible !important;
  color: white;
}
.v-app-bar {
  background-color: rgba(0, 0, 0, 0.6) !important;
  box-shadow: 0 0 8px 8px rgba(0, 0, 0, 0.5) !important;
}

.logo-background {
  max-height: unset !important;
}
#app {
  padding: 0 !important;
  max-width: 9999px !important;
}

.imagelogo-wrapper {
  margin-top: 1px;
  border-bottom: 1px solid black;
}
.v-main {
  padding-top: 0 !important;
}

.app-row {
  max-width: 1500px;
}

.footer {
  min-height: 55vh;
  max-width: 1300px;
}
</style>
