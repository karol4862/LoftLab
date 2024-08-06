<template>
  <div class="offer" :key="$route.params.id">
    <v-sheet
      class="bg-black d-flex justify-end"
      :class="{
        'flex-column': $vuetify.display.mdAndDown
      }"
      :style="{ paddingTop: '76px' }"
      min-height="80vh"
      width="100%"
    >
      <div
        class="pa-8 d-flex flex-column text-wrapper"
        :class="{
          'w-100': $vuetify.display.mdAndDown,
          'w-50': !$vuetify.display.mdAndDown
        }"
      >
        <span class="text-uppercase text-caption font-primary text-light-gray mb-8"
          >Strona główna / Oferta / {{ layout.title }}</span
        >
        <div class="flex-grow-1 d-flex flex-column justify-center mb-14">
          <h2 class="font-secondary text-h4 font-weight-light font-secondary text-uppercase">
            {{ layout.title }}
          </h2>
          <p class="mt-6 ml-md-16">
            {{ layout.description }}
          </p>
        </div>
      </div>
      <v-img
        :src="layout.titleImage"
        :class="{
          'w-100': $vuetify.display.mdAndDown,
          'w-50': !$vuetify.display.mdAndDown
        }"
        height="100%"
        cover
      ></v-img>
    </v-sheet>
    <section class="py-16 products-review pb-0 pb-md-16">
      <h3 class="text-h4 font-weight-light font-secondary text-uppercase text-center">
        Zobacz nasze realizacje
      </h3>
      <h3 class="text-h4 font-weight-light font-secondary text-uppercase text-center mb-16">
        Blaty kuchenne
      </h3>
      <v-carousel
        :height="$vuetify.display.mdAndDown ? '360px' : '700px'"
        hide-delimiters
        :key="layout.images.length"
      >
        <template #next="{ props }">
          <v-btn v-bind="props" icon="mdi-arrow-right" color="white"></v-btn>
        </template>
        <template #prev="{ props }">
          <v-btn v-bind="props" icon="mdi-arrow-left" color="white"></v-btn>
        </template>
        <v-carousel-item v-for="image in layout.images" :src="image" cover></v-carousel-item>
      </v-carousel>
    </section>
    <section class="bg-gray-background py-16 contact-form px-6 px-md-0">
      <div
        class="contact-wrapper d-flex flex-wrap align-center"
        :class="{
          'flex-column': $vuetify.display.mdAndDown
        }"
      >
        <h3 class="text-h4 font-weight-light font-secondary text-uppercase w-100 mb-12">
          Potrzebujesz wyceny?
        </h3>
        <v-img :src="itemImage" width="400px" class="flex-grow-0 d-none d-md-block" cover></v-img>
        <v-sheet
          :width="$vuetify.display.mdAndDown ? 300 : 480"
          color="transparent"
          class="ml-md-12 pr-md-16 pb-16"
          :class="{
            'border-e-sm': !$vuetify.display.mdAndDown,
            'border-b-sm': $vuetify.display.mdAndDown
          }"
        >
          <v-alert color="success" class="mb-10" v-if="status === 'success'"
            >Dziękujemy za Twoją wiadomość! Rozpatrzymy ją najszybciej, jak to możliwe.</v-alert
          >
          <v-form @submit.prevent="submit">
            <v-text-field
              label="Imię i Nazwisko"
              v-model="form.name"
              name="name"
              required
            ></v-text-field>
            <v-text-field label="Numer telefonu" v-model="form.phone" name="phone"></v-text-field>
            <v-textarea
              label="Napisz czego potrzebujesz (opcjonalnie)"
              v-model="form.description"
              name="description"
            ></v-textarea>
            <!-- <v-file-input
              label="Prześlij pliki (opcjonalnie)"
              v-model="form.file"
              name="file"
            ></v-file-input> -->
            <v-btn color="black" block type="submit">Wyślij zapytanie</v-btn>
          </v-form>
        </v-sheet>
        <v-sheet class="ml-md-16 mt-16 d-flex flex-column justify-center" color="transparent">
          <h4 class="text-h5 font-weight-light font-secondary text-wrap">
            Lub skontaktuj się
            <br />
            z nami bezpośrednio
          </h4>
          <p class="mt-6 text-body-1">
            <v-icon>mdi-phone-outline</v-icon>
            (+48) 881 656 058
          </p>
        </v-sheet>
      </div>
    </section>
  </div>
</template>
<script>
import itemImage4 from '@/assets/images/item3.jpg'

export default {
  name: 'Offer',
  data() {
    return {
      layout: {
        title: '',
        titleImage: '',
        desciprtion: '',
        images: []
      },
      itemImage: itemImage4,
      form: {
        access_key: 'e97825fd-0425-4296-b938-e7fe8c9a3cb7',
        subject: 'New Submission from Web3Forms',
        name: '',
        phone: '',
        description: '',
        file: null // For handling file uploads
      },
      status: null,
      result: null
    }
  },
  methods: {
    async submit() {
      try {
        this.status = 'loading'

        // Create a FormData object for handling file uploads
        let formData = new FormData()
        formData.append('access_key', this.form.access_key)
        formData.append('subject', this.form.subject)
        formData.append('name', this.form.name)
        formData.append('phone', this.form.phone)
        formData.append('description', this.form.description)
        if (this.form.file) {
          formData.append('file', this.form.file)
        }

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        })

        const data = await response.json()
        this.result = data.message

        if (response.status === 200) {
          this.status = 'success'
        } else {
          console.log(data) // Log for debugging, can be removed
          this.status = 'error'
        }
      } catch (error) {
        console.log(error) // Log for debugging, can be removed
        this.status = 'error'
        this.result = 'Something went wrong!'
      } finally {
        // Reset form after submission
        this.form.name = ''
        this.form.phone = ''
        this.form.description = ''
        this.form.file = null

        // Clear result and status after 5 seconds
        setTimeout(() => {
          this.result = ''
          this.status = ''
        }, 5000)
      }
    },
    async setLayout() {
      switch (this.$route.params.id) {
        case 'blaty_kuchenne':
          this.layout = {
            title: 'Blaty kuchenne',
            titleImage: (await import('@/assets/images/item2.jpg')).default,
            description:
              'Odkryj piękno industrialnego designu z naszą kolekcją blatów kuchennych w stylu loftowym. Połączenie surowych materiałów i minimalistycznego wzornictwa sprawia, że nasze blaty idealnie wpisują się w nowoczesne wnętrza, nadając im niepowtarzalny charakter. Idealne dla tych, którzy cenią sobie zarówno estetykę, jak i funkcjonalność.',
            images: [
              (await import('@/assets/images/item1.webp')).default,
              (await import('@/assets/images/item2.jpg')).default,
              (await import('@/assets/images/item4.jpg')).default
            ]
          }
          break

        case 'stoliki_kawowe':
          this.layout = {
            title: 'Stoliki kawowe',
            titleImage: (await import('@/assets/images/item5.jpg')).default,
            description:
              'Nasze stoliki kawowe w stylu loftowym to doskonałe połączenie funkcjonalności i stylu. Wykonane z wysokiej jakości materiałów, takich jak surowe drewno, stal i beton, dodają każdemu wnętrzu wyjątkowego charakteru. Idealne dla miłośników minimalistycznego designu, którzy chcą stworzyć w swoim domu przestrzeń z nutą industrialnego uroku.',
            images: [
              (await import('@/assets/images/item3.jpg')).default,
              (await import('@/assets/images/item5.jpg')).default
            ]
          }
          break

        case 'krzesla_barowe':
          this.layout = {
            title: 'Krzesła barowe',
            titleImage: (await import('@/assets/images/item2.jpg')).default,
            description:
              'Nasze krzesła barowe w stylu loftowym łączą w sobie surowy design i wygodę, tworząc idealne rozwiązanie do wnętrz, które potrzebują charakteru i funkcjonalności. Wykonane z wysokiej jakości materiałów, takich jak metal, skóra i drewno, te krzesła dodadzą Twojemu wnętrzu industrialnego uroku i nowoczesnego stylu. Doskonale pasują zarówno do domowych kuchni, jak i przestrzeni komercyjnych.',
            images: [
              (await import('@/assets/images/item4.jpg')).default,
              (await import('@/assets/images/item2.jpg')).default
            ]
          }
          break

        case 'jadalnia':
          this.layout = {
            title: 'Stoły do jadalni',
            titleImage: (await import('@/assets/images/item2.jpg')).default,
            description:
              'Styl loftowy to połączenie surowości i elegancji. Nasze stoły do jadalni doskonale oddają tę ideę, oferując minimalistyczny design, który świetnie wpisuje się w nowoczesne aranżacje wnętrz. Proste linie, surowe materiały i staranne wykonanie sprawiają, że każdy stół staje się nie tylko funkcjonalnym meblem, ale także dekoracyjnym elementem, który przyciąga wzrok i dodaje przestrzeni niepowtarzalnego charakteru.',
            images: [
              (await import('@/assets/images/item4.jpg')).default,
              (await import('@/assets/images/item2.jpg')).default
            ]
          }
          break

        default:
          break
      }
    }
  },
  mounted() {
    this.setLayout()
  },
  watch: {
    '$route.params': {
      handler() {
        this.setLayout()
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.text-wrapper {
  max-width: 750px;
}
.products-review {
  max-width: 1300px;
  margin: 0 auto;
}

.contact-wrapper {
  max-width: 1500px;
  margin: 0 auto;
}
</style>
