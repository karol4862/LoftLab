<template>
  <v-sheet color="black" class="pt-16">
    <section class="contact-section mx-auto mt-6">
      <v-row class="my-0">
        <v-col cols="12" lg="7" class="pa-16">
          <h3 class="font-secondary text-h4 font-weight-light font-secondary mt-10 mb-10">
            Napisz do nas korzystajać z formularza
          </h3>
          <v-alert color="success" class="mb-10" v-if="messageSent"
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
            <v-btn color="primary" block type="submit">Wyślij zapytanie</v-btn>
          </v-form>
        </v-col>
        <v-col
          cols="12"
          lg="5"
          class="pa-16 d-flex align-center border-s-md border-light-gray border-opacity-75"
          :class="{
            'justify-center': $vuetify.display.mdAndDown,
            'border-t-sm': $vuetify.display.mdAndDown
          }"
        >
          <v-sheet class="d-flex flex-column justify-center" color="transparent">
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
        </v-col>
      </v-row>
    </section>
  </v-sheet>
</template>
<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        access_key: '6d71452e-88ee-4509-b1cd-1a7b1d5263c4',
        subject: 'New Submission from Web3Forms',
        name: '',
        phone: '',
        description: '',
        file: null // For handling file uploads
      },
      status: null,
      result: null,
      messageSent: false
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
          this.messageSent = true
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
  }
}
</script>

<style scoped>
.contact-section {
  max-width: 1300px;
}
</style>
