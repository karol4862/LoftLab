<template>
  <div>
    <v-sheet
      class="bg-black d-flex justify-end"
      :class="[$vuetify.display.mdAndDown && 'flex-column']"
      :style="{ paddingTop: '76px' }"
      height="80vh"
      width="100%"
    >
      <div
        class="pa-8 d-flex flex-column w-50 text-wrapper"
        :class="[$vuetify.display.mdAndDown ? 'w-100' : 'w-50']"
      >
        <div class="flex-grow-1 d-flex flex-column justify-center mb-14">
          <h2 class="font-secondary text-h4 font-weight-light font-secondary text-uppercase">
            Jak współpracujemy <br />
            z klientami?
          </h2>
          <p class="mt-6 ml-16">
            Do wstępnej wyceny nie są potrzebne dokładne pomiary – wystarczą rzuty pomieszczeń i
            inspiracje klienta. Projekty wnętrz można opracować na podstawie planów od dewelopera
            lub własnych. Dokładne pomiary wykonujemy po zatwierdzeniu projektu. Warto zaprojektować
            meble przed odbiorem nowego mieszkania, aby uniknąć późniejszych przeróbek. Termin
            realizacji różni się w zależności od złożolności projektu.
          </p>
        </div>
      </div>
      <v-img
        :src="itemImage"
        class=""
        :max-width="$vuetify.display.mdAndDown ? '100vw' : '50vw'"
        height="100%"
        cover
      ></v-img>
    </v-sheet>
    <section class="timeline py-16">
      <h3
        class="font-secondary text-h4 font-weight-light font-secondary text-center text-uppercase mt-10 mb-6"
      >
        Etapy realizacji projektu
      </h3>
      <p class="text-center mb-10">
        Od 30 lat zajmujemy się projektowaniem, produkcją i montażem mebli na wymiar.
      </p>
      <v-timeline
        :direction="$vuetify.display.mdAndDown ? 'vertical' : 'horizontal'"
        :side="$vuetify.display.mdAndDown ? 'end' : 'start'"
        density="compact"
      >
        <v-timeline-item v-for="(item, index) in items" :key="item.title">
          <template v-slot:icon>
            <v-btn
              icon="mdi-circle"
              size="x-small"
              color="gray-background"
              class="text-medium-gray"
              @click="activeTab = index"
            ></v-btn>
          </template>

          <p v-if="!$vuetify.display.mdAndDown">{{ item.title }}</p>

          <v-sheet
            v-else
            color="transparent"
            class="d-flex justify-center window-wrapper mx-auto flex-column"
          >
            <div class="d-flex align-center mb-2">
              <p class="text-h2 text-light-gray mr-4">0{{ index + 1 }}</p>
              <p class="text-h4 font-weight-light text-uppercase font-secondary">
                {{ item.title }}
              </p>
            </div>
            <p>
              {{ item.text }}
            </p>
          </v-sheet>
        </v-timeline-item>
      </v-timeline>
      <v-window v-model="activeTab" class="pa-10" v-if="!$vuetify.display.mdAndDown">
        <template v-for="(item, index) in items" :key="index">
          <v-window-item :value="index">
            <v-sheet
              color="transparent"
              class="d-flex justify-center window-wrapper align-end mx-auto"
            >
              <div class="d-flex flex-column px-6">
                <p class="text-h2 text-light-gray mb-2">0{{ index + 1 }}</p>
                <p
                  class="text-h4 font-weight-light text-uppercase font-secondary"
                  :style="{ maxWidth: '300px' }"
                >
                  {{ item.title }}
                </p>
              </div>
              <p>
                {{ item.text }}
              </p>
            </v-sheet>
          </v-window-item>
        </template>
      </v-window>
    </section>
    <section class="faq bg-gray-background py-16">
      <h3
        class="font-secondary text-h4 font-weight-light font-secondary text-center text-uppercase mt-10 mb-10"
      >
        Często zadawane pytania
      </h3>
      <v-expansion-panels
        variant="accordion"
        bg-color="transparent"
        elevation="0"
        class="mx-auto border-t"
        style="max-width: 620px"
      >
        <v-expansion-panel
          :key="1"
          title="Czym zajmuje się Wasza firma?"
          text="Nasza firma specjalizuje się w projektowaniu i tworzeniu loftowych mebli na wymiar. Oferujemy unikalne, ręcznie wykonane meble, które idealnie komponują się z nowoczesnymi, industrialnymi wnętrzami."
        ></v-expansion-panel>

        <v-expansion-panel
          :key="2"
          title="Jakie materiały używacie do produkcji mebli?"
          text="Wykorzystujemy wysokiej jakości materiały, takie jak stal, drewno lite (np. dąb, jesion, orzech), szkło oraz beton. Każdy z tych materiałów jest starannie wybierany, aby zapewnić trwałość i estetykę naszych produktów."
        ></v-expansion-panel>

        <v-expansion-panel
          :key="3"
          title="Czy mogę zamówić meble według własnego projektu?"
          text="Tak, realizujemy również zamówienia na meble według indywidualnych projektów klientów. Wystarczy, że dostarczysz nam swój pomysł lub szkic, a my przekształcimy go w rzeczywistość."
        ></v-expansion-panel>

        <v-expansion-panel
          :key="4"
          title="Jak długo trwa realizacja zamówienia?"
          text="Czas realizacji zamówienia zależy od jego skomplikowania i aktualnej liczby zamówień. Standardowy czas realizacji wynosi od 4 do 8 tygodni. Dokładny termin podajemy po konsultacji i zaakceptowaniu projektu."
        ></v-expansion-panel>

        <v-expansion-panel
          :key="5"
          title="Czy oferujecie transport i montaż mebli?"
          text="Tak, oferujemy kompleksową usługę, która obejmuje transport i montaż zamówionych mebli na terenie całego kraju. Koszt transportu i montażu jest ustalany indywidualnie, w zależności od odległości i wielkości zamówienia."
        ></v-expansion-panel>
      </v-expansion-panels>
    </section>
  </div>
</template>
<script>
import itemImage4 from '@/assets/images/item3.jpg'

export default {
  name: 'CoopView',
  data() {
    return {
      activeTab: 0,
      itemImage: itemImage4,
      items: [
        {
          title: 'Wycena',
          text: 'W pierwszym etapie realizacji projektu skupiamy się na dokładnej wycenie zamówienia. Klient dostarcza nam swoje pomysły, wymiary oraz ewentualne szkice lub inspiracje. Na podstawie tych informacji, przygotowujemy szczegółową wycenę, uwzględniając koszty materiałów, pracy oraz ewentualnych dodatkowych usług, takich jak transport czy montaż. Wycena jest bezpłatna i niezobowiązująca, a jej celem jest przedstawienie klientowi pełnego obrazu kosztów związanych z realizacją jego wymarzonego mebla.'
        },
        {
          title: 'Projekt',
          text: 'Po zaakceptowaniu wyceny przechodzimy do fazy projektowania. Nasz zespół współpracuje z klientem, aby stworzyć szczegółowy plan mebla, uwzględniając jego indywidualne potrzeby i preferencje. W tym etapie powstaje wstępny szkic, które pozwalają na lepsze zrozumienie końcowego efektu. Projekt jest dostosowywany do przestrzeni, w której mebel ma się znaleźć, z uwzględnieniem stylu loftowego i estetyki wnętrza. Klient ma możliwość wprowadzenia zmian i zatwierdzenia ostatecznej wersji projektu przed rozpoczęciem produkcji.'
        },
        {
          title: 'Wybór materiałów',
          text: 'W trzecim etapie klient dokonuje wyboru materiałów, które zostaną użyte do produkcji mebla. Nasz zespół prezentuje dostępne opcje, takie jak różne rodzaje drewna, metali, szkła i innych komponentów. Każdy materiał jest szczegółowo omawiany pod kątem jego właściwości, trwałości oraz estetyki, aby klient mógł podjąć świadomą decyzję. Oferujemy również próbki materiałów, które można obejrzeć i dotknąć, co ułatwia dokonanie wyboru. Wybór odpowiednich materiałów jest kluczowy dla osiągnięcia zamierzonego efektu wizualnego i funkcjonalnego, dlatego starannie doradzamy naszym klientom na każdym kroku.'
        },
        {
          title: 'Przygotowanie umowy',
          text: 'Po zatwierdzeniu projektu i wyborze materiałów, przechodzimy do przygotowania umowy. Umowa zawiera wszystkie istotne szczegóły dotyczące zamówienia, takie jak zakres prac, terminy realizacji, koszty, warunki płatności oraz ewentualne dodatkowe usługi, takie jak transport i montaż. Każdy punkt umowy jest dokładnie omawiany z klientem, aby zapewnić pełną przejrzystość i zgodność z jego oczekiwaniami. Umowa służy jako formalne potwierdzenie zobowiązań obu stron i stanowi podstawę do dalszej realizacji projektu. Po podpisaniu umowy, przystępujemy do etapu produkcji mebla.'
        },
        {
          title: 'Montaż',
          text: 'Ostatnim etapem realizacji zamówienia jest montaż mebla w miejscu docelowym. Nasz zespół dba o to, aby wszystkie elementy zostały prawidłowo zainstalowane zgodnie z projektem. Prace montażowe obejmują nie tylko skręcanie i ustawianie mebla, ale również jego precyzyjne wypoziomowanie oraz mocowanie, jeśli jest to konieczne. Cały proces montażu odbywa się z zachowaniem najwyższych standardów jakości i bezpieczeństwa, aby zapewnić pełną satysfakcję klienta. Po zakończeniu montażu przeprowadzamy ostateczną kontrolę, aby upewnić się, że mebel spełnia wszystkie oczekiwania klienta i jest gotowy do użytku.'
        }
      ]
    }
  }
}
</script>

<style scoped>
@media (max-width: 961px) {
  .timeline {
    padding: 0 20px;
  }
}
.text-wrapper {
  max-width: 750px;
}

.window-wrapper {
  max-width: 1000px;
}

.v-tab.v-btn,
.v-tabs {
  --v-tabs-height: 64px !important;
}
</style>
