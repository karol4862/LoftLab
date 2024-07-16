import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#232323',
    primary: '#3B3B3B',
    'dark-gray': '#3B3B3B',
    'medium-gray': '#92908E',
    secondary: '#F4F4F4',
    black: '#232323',
    'light-gray': '#D1D1D1',
    'gray-background': '#f4f4f4',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00'
  }
}

const vuetify = createVuetify({
  directives,
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme
    }
  }
})

const app = createApp(App)

app.use(router)

app.use(vuetify)

app.mount('#app')
