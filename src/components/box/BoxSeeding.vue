<template>
  <div class="box box-tab">
    <div class="box__header">
      <div class="box__header-wrapper-tabs">
        <h2
          class="box__header-title tab-link"
          :class="{ active: isComponent === 'FormSeeding' }"
        >
          Калькулятор посева томатов
        </h2>
        <h2
          class="box__header-title tab-link box-new"
          :class="{ active: isComponent === 'HistorySeeding' }"
        >
          История рассчётов
        </h2>
        <h2
          class="box__header-title tab-link box-popular"
          :class="{ active: isComponent === 'UserSeeding' }"
        >
          Мои посадки
        </h2>
      </div>
      <div class="box__header-links wrapper-link-tabs">
        <a
          class="box__header-link"
          :class="{ active: isComponent === 'FormSeeding' }"
          href="#"
          @click="isComponent = 'FormSeeding'"
          >Расчёт</a
        ><a
          class="box__header-link"
          href="#"
          :class="{ active: isComponent === 'HistorySeeding' }"
          @click="isComponent = 'HistorySeeding'"
          >История</a
        ><a
          class="box__header-link"
          href="#"
          :class="{ active: isComponent === 'UserSeeding' }"
          @click="isComponent = 'UserSeeding'"
          >Мои посадки</a
        >
      </div>
    </div>
    <component :is="isComponent" />
  </div>
</template>

<script>
import FormSeeding from "@/components/box/tab-panel/FormSeeding.vue";
import HistorySeeding from "@/components/box/tab-panel/HistorySeeding.vue";
import UserSeeding from "@/components/box/tab-panel/UserSeeding.vue";
export default {
  name: "BoxSeeding",
  data: () => ({
    isComponent: "FormSeeding",
  }),
  components: {
    FormSeeding,
    HistorySeeding,
    UserSeeding,
  },
};
</script>
