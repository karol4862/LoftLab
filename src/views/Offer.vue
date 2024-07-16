<template>
  <div class="offer" :key="$route.params.id">
    <v-sheet
      class="bg-black d-flex justify-end"
      :style="{ paddingTop: '76px' }"
      height="80vh"
      width="100%"
    >
      <div class="pa-8 d-flex flex-column w-50 text-wrapper">
        <span class="text-uppercase text-caption font-primary text-light-gray"
          >Strona główna / Oferta / {{ layout.title }}</span
        >
        <div class="flex-grow-1 d-flex flex-column justify-center mb-14">
          <h2 class="font-secondary text-h4 font-weight-light font-secondary text-uppercase">
            {{ layout.title }}
          </h2>
          <p class="mt-6 ml-16">
            {{ layout.description }}
          </p>
        </div>
      </div>
      <v-img :src="layout.titleImage" class="" max-width="50vw" height="100%" cover></v-img>
    </v-sheet>
    <section class="py-16 products-review">
      <h3 class="text-h4 font-weight-light font-secondary text-uppercase text-center">
        Zobacz nasze realizacje
      </h3>
      <h3 class="text-h4 font-weight-light font-secondary text-uppercase text-center mb-12">
        Blaty kuchenne
      </h3>
      <v-carousel height="700px" hide-delimiters :key="layout.images.length">
        <template #next="{ props }">
          <v-btn v-bind="props" icon="mdi-arrow-right" color="white"></v-btn>
        </template>
        <template #prev="{ props }">
          <v-btn v-bind="props" icon="mdi-arrow-left" color="white"></v-btn>
        </template>
        <v-carousel-item v-for="image in layout.images" :src="image" cover></v-carousel-item>
      </v-carousel>
    </section>
    <section class="bg-gray-background py-16 contact-form">
      <div class="contact-wrapper d-flex flex-wrap">
        <h3 class="text-h4 font-weight-light font-secondary text-uppercase w-100 mb-12">
          Potrzebujesz wyceny?
        </h3>
        <v-img :src="itemImage" width="400px" class="flex-grow-0" cover></v-img>
        <v-sheet width="480" color="transparent" class="ml-12 pr-16 border-e-sm">
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
        <v-sheet class="ml-16 d-flex flex-column justify-center" color="transparent">
          <h4 class="text-h5 font-weight-light font-secondary text-wrap">
            Lub skontaktuj się z
            <br />
            z nami bezpośrednio
          </h4>
          <p class="mt-6 text-body-1">
            <v-icon>mdi-phone-outline</v-icon>
            (+48) 530 357 063
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
        access_key: '6d71452e-88ee-4509-b1cd-1a7b1d5263c4',
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
    }
  },
  async mounted() {
    switch (this.$route.params.id) {
      case 'blaty_kuchenne':
        this.layout = {
          title: 'Blaty kuchenne',
          titleImage: (await import('@/assets/images/item2.jpg')).default,
          description: 'opis',
          images: [
            (await import('@/assets/images/item1.png')).default,
            (await import('@/assets/images/item2.jpg')).default,
            (await import('@/assets/images/item4.jpg')).default
          ]
        }
        break

      default:
        break
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
