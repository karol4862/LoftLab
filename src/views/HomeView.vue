<template>
  <div class="home">
    <v-carousel height="92vh" width="100%" hide-delimiters-background cycle :show-arrows="false">
      <v-carousel-item>
        <v-sheet height="100%" width="100vw">
          <v-img :src="itemImage" height="100%" width="100%" cover></v-img>
          <div class="content-carousel">
            <div
              class="d-flex flex-column"
              :class="{
                'align-center': $vuetify.display.mdAndDown,
                'justify-start': $vuetify.display.mdAndDown
              }"
            >
              <span> meble do kuchni </span>
              <h2 class="text-uppercase font-secondary mt-2 mb-6 text-center">
                Blaty kuchenne na wymiar
              </h2>
              <v-btn
                variant="outlined"
                class="px-10"
                :to="{ name: 'Oferta', params: { id: 'blaty_kuchenne' } }"
              >
                Zobacz
              </v-btn>
            </div>
          </div>
          <!-- // tutaj block jako rodzic z blockiem do rozmazywania i blokiem tekstu -->
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item>
        <v-sheet height="100%" width="100vw">
          <v-img :src="itemImage2" height="100%" width="100%" cover></v-img>
          <div class="content-carousel reverse">
            <div
              class="d-flex flex-column"
              :class="{
                'align-center': $vuetify.display.mdAndDown,
                'justify-start': $vuetify.display.mdAndDown
              }"
            >
              <span> meble do kuchni </span>
              <h2 class="text-uppercase font-secondary mt-2 mb-6">Krzesła barowe</h2>
              <v-btn
                variant="outlined"
                class="px-10"
                :to="{ name: 'Oferta', params: { id: 'krzesla_barowe' } }"
              >
                Zobacz
              </v-btn>
            </div>
          </div>
          <!-- // tutaj block jako rodzic z blockiem do rozmazywania i blokiem tekstu -->
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item>
        <v-sheet height="100%" width="100vw">
          <v-img :src="itemImage3" height="100%" width="100%" cover></v-img>
          <div class="content-carousel">
            <div
              class="d-flex flex-column"
              :class="{
                'align-center': $vuetify.display.mdAndDown,
                'justify-start': $vuetify.display.mdAndDown
              }"
            >
              <span> meble do kuchni </span>
              <h2 class="text-uppercase font-secondary mt-2 mb-6">Stoły do jadalni</h2>
              <v-btn
                variant="outlined"
                class="px-10"
                :to="{ name: 'Oferta', params: { id: 'jadalnia' } }"
              >
                Zobacz
              </v-btn>
            </div>
          </div>
          <!-- // tutaj block jako rodzic z blockiem do rozmazywania i blokiem tekstu -->
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item>
        <v-sheet height="100%" width="100vw">
          <v-img :src="itemImage4" height="100%" width="100%" cover></v-img>
          <div class="content-carousel reverse">
            <div
              class="d-flex flex-column"
              :class="{
                'align-center': $vuetify.display.mdAndDown,
                'justify-start': $vuetify.display.mdAndDown
              }"
            >
              <span> meble do kuchni </span>
              <h2 class="text-uppercase font-secondary mt-2 mb-6">Stoliki kawowe</h2>
              <v-btn
                variant="outlined"
                class="px-10"
                :to="{ name: 'Oferta', params: { id: 'stoliki_kawowe' } }"
              >
                Zobacz
              </v-btn>
            </div>
          </div>
          <!-- // tutaj block jako rodzic z blockiem do rozmazywania i blokiem tekstu -->
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <section class="text-section d-flex justify-center align-center">
      <div class="text-wrapper">
        <span class="text-body-2 w-100 font-weight-bolder">
          <v-icon size="small">mdi-map-marker-outline</v-icon>
          Rzeszów
        </span>
        <h2 class="text-uppercase w-100 font-secondary mt-2">Producent mebli</h2>
        <div class="d-flex" :class="{ 'flex-column': $vuetify.display.mdAndDown }">
          <h2 class="text-uppercase font-secondary text-no-wrap mr-6">Na wymiar</h2>
          <span class="mt-1">
            Od 30 lat zajmujemy się projektowaniem, produkcją i montażem mebli na wymiar. Obecnie
            jesteśmy jednym z większych producentów mebli na Podkarpaciu. Stale poszerzamy ofertę
            i unowocześniamy produkcję, aby sprostać wymaganiom naszych klientów. Jako firma
            z wieloletnim doświadczeniem posiadamy wyjątkowo bogatą ofertę wzorów i materiałów.
            Do każdego zamówienia podchodzimy indywidualnie oraz dostosowujemy wyposażenie
            do budżetu odbiorcy. Działamy na podstawie nowoczesnego i szybkiego systemu produkcji,
            a także sprawnej realizacji – od pierwszego spotkania, poprzez szczegółowo przygotowany
            projekt, aż do montażu i odbioru u klienta.
          </span>
        </div>
      </div>
    </section>
    <section class="d-flex justify-center align-center bg-gray-background py-16">
      <div
        class="image-wrapper d-flex"
        :class="{
          'flex-column': $vuetify.display.mdAndDown
        }"
      >
        <div :style="$vuetify.display.mdAndDown ? '' : 'height: 520px'" class="d-flex flex-column">
          <h2 class="w-100 text-no-wrap font-secondary text-uppercase mr-14 mb-4">
            Szukaj produktów <br />
            według kategorii
          </h2>
          <v-spacer></v-spacer>
          <div class="d-flex align-center mb-6 mb-lg-0">
            <v-btn icon="mdi-arrow-left" variant="text" @click="prev"></v-btn>
            |
            <v-btn icon="mdi-arrow-right" variant="text" @click="next"></v-btn>
          </div>
        </div>

        <carousel
          :items-to-show="$vuetify.display.mdAndDown ? 2 : 3.5"
          index="0"
          autoplay="6000"
          wrapAround
          ref="myCarousel"
        >
          <slide index="0">
            <v-sheet height="520px" width="370px" class="mx-1">
              <v-img width="100%" height="100%" :src="carouselImage1" cover></v-img>
              <h3 class="font-secondary text-uppercase text-h5">Stoliki kawowe</h3>
            </v-sheet>
          </slide>
          <slide index="1">
            <v-sheet height="520px" width="370px" class="mx-1">
              <v-img width="100%" height="100%" :src="carouselImage2" cover></v-img>
              <h3 class="font-secondary text-uppercase text-h5">Krzesła barowe</h3>
            </v-sheet>
          </slide>
          <slide index="3">
            <v-sheet height="520px" width="370px" class="mx-1">
              <v-img width="100%" height="100%" :src="carouselImage3" cover></v-img>
              <h3 class="font-secondary text-uppercase text-h5">Stoły do jadalni</h3>
            </v-sheet>
          </slide>
          <slide index="4">
            <v-sheet height="520px" width="370px" class="mx-1">
              <v-img width="100%" height="100%" :src="carouselImage4" cover></v-img>
              <h3 class="font-secondary text-uppercase text-h5">Blaty kuchenne</h3>
            </v-sheet>
          </slide>
        </carousel>
      </div>
    </section>
    <section class="inspiration-section d-flex align-end">
      <div class="inspiration-content py-8 w-100 text-center text-white font-secondary">
        <h3 class="font-secondary text-uppercase text-h5 font-secondary mb-3">Zainspiruj się</h3>
        <p class="text-body-1 font-secondary">
          zapoznaj się z dotychczas <br />
          wykonanymi przez nas meblami
        </p>
        <v-btn variant="outlined" class="px-10 mt-4">Portfolio</v-btn>
      </div>
    </section>
    <section class="gallery-section pa-12">
      <div
        class="gallery-wrapper d-flex justify-space-between align-center mx-auto my-12"
        :class="{
          'flex-column': $vuetify.display.mdAndDown
        }"
      >
        <div class="gallery-item pt-16">
          <img :src="galleryImage1" width="240px" height="240px" cover class="mb-8" />
          <h4 class="text-h5 text-uppercase text-dark-gray font-secondary text-center">
            indywidualne
          </h4>
          <h4 class="text-h5 text-uppercase text-dark-gray font-secondary text-center">
            podejście
          </h4>
        </div>
        <div class="gallery-item pt-16">
          <img :src="galleryImage2" width="240px" height="240px" cover class="mb-8" />
          <h4 class="text-h5 text-uppercase text-dark-gray font-secondary text-center">
            najwyższa jakość
          </h4>
          <h4 class="text-h5 text-uppercase text-dark-gray font-secondary text-center">
            materiałów
          </h4>
        </div>
        <div class="gallery-item pt-16">
          <img :src="galleryImage3" width="240px" height="240px" cover class="mb-8" />
          <h4 class="text-h5 text-uppercase text-dark-gray font-secondary text-center">
            profesjonalne
          </h4>
          <h4 class="text-h5 text-uppercase text-dark-gray font-secondary text-center">
            doradztwo
          </h4>
        </div>
        <div class="gallery-item pt-16">
          <img :src="galleryImage4" width="240px" height="240px" cover class="mb-8" />
          <h4 class="text-h5 text-uppercase text-dark-gray font-secondary text-center">
            nowoczesne
          </h4>
          <h4 class="text-h5 text-uppercase text-dark-gray font-secondary text-center">
            wzornictwo
          </h4>
        </div>
      </div>
    </section>
    <section class="contact-section d-flex flex-column justify-center align-center text-background">
      <h3 class="text-h4 text-uppercase font-secondary">Umów się</h3>
      <p class="text-h4 font-secondary text-light-gray font-weight-light text-center">
        na bezpłatny pomiar i wycenę
      </p>
      <v-btn class="px-12 mt-10" color="background" :to="{ name: 'Kontakt' }">Umów się!</v-btn>
    </section>
  </div>
</template>

<script>
import itemImage from '@/assets/images/item1.webp'
import itemImage2 from '@/assets/images/item2.jpg'
import itemImage3 from '@/assets/images/item4.jpg'
import itemImage4 from '@/assets/images/item3.jpg'
import galleryImage1 from '@/assets/images/galleryitem1.webp'
import galleryImage2 from '@/assets/images/galleryitem2.png'
import galleryImage3 from '@/assets/images/galleryitem3.png'
import galleryImage4 from '@/assets/images/galleryitem4.png'
import carouselImage1 from '@/assets/images/coffeeTable.jpg'
import carouselImage2 from '@/assets/images/chair.jpg'
import carouselImage3 from '@/assets/images/kitchen1.jpg'
import carouselImage4 from '@/assets/images/kitchen2.jpg'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

export default {
  name: 'Home',
  data() {
    return {
      itemImage,
      itemImage2,
      itemImage3,
      itemImage4,
      carouselImage1,
      carouselImage2,
      carouselImage3,
      carouselImage4,
      galleryImage1,
      galleryImage2,
      galleryImage3,
      galleryImage4
    }
  },
  methods: {
    next() {
      this.$refs.myCarousel.next()
    },
    prev() {
      this.$refs.myCarousel.prev()
    }
  },
  components: {
    Carousel,
    Slide
  }
}
</script>

<style scoped>
/* Style specyficzne dla tej strony */
@media (max-width: 961px) {
  .content-carousel {
    width: 100% !important;
    padding-bottom: 100px;
    text-shadow: 1px 1px 4px #000000;
  }
  .content-carousel::before {
    background-color: rgba(5, 5, 5, 0.411) !important;
    backdrop-filter: blur(0) !important;
  }

  .text-section {
    padding: 60px 16px;
  }

  .image-wrapper {
    /* max-width: 1240px; */
    margin-left: 0 !important;
    width: 100% !important;
    padding: 0 16px;
  }
}

.content-carousel {
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.reverse {
  right: 0;
  left: auto;
}
.content-carousel::before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(5, 5, 5, 0.36);
  backdrop-filter: blur(6px);
  z-index: -1;
}

.text-wrapper {
  max-width: 1000px;
}
.text-section {
  min-height: 55vh;
}

.carousel {
  overflow: hidden;
  max-width: 1300px;
}

.gallery-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.image-wrapper {
  /* max-width: 1240px; */
  margin-left: 20vw;
  width: 80vw;
  max-width: 100vw;
}

.image-wrapper h3 {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
}

.inspiration-section {
  min-height: 55vh;
  background-image: url('@/assets/images/item2.jpg');
  background-size: cover;
  background-position: center;
}

.inspiration-content {
  background-color: rgba(5, 5, 5, 0.66);
}

.gallery-wrapper {
  max-width: 1200px;
}

.contact-section {
  min-height: 55vh;
  background-image: url('@/assets/images/woodenbackground.webp');
  background-size: cover;
  background-position: center;
}
</style>
