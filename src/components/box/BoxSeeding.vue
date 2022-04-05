<template>
  <div class="box box-tab">
    <BoxHeaderBlock
      :current-component="isComponent"
      :tabs="true"
      :box-components="[
        {
          nameComponent: 'FormSeeding',
          title: 'Калькулятор посева овощей',
          menu: 'Расчёт',
          flag: '',
        },
        {
          nameComponent: 'HistorySeeding',
          title: 'История рассчётов',
          menu: 'История',
          flag: 'box-new',
        },
        {
          nameComponent: 'UserSeeding',
          title: 'Мои посадки',
          menu: 'Мои посадки',
          flag: 'box-popular',
        },
      ]"
      @setCurrentComponent="
        (c) => {
          isComponent = c;
        }
      "
    />

    <component :is="isComponent" />
  </div>
</template>

<script>
import FormSeeding from "@/components/box/tab-panel/FormSeeding.vue";
import HistorySeeding from "@/components/box/tab-panel/HistorySeeding.vue";
import UserSeeding from "@/components/box/tab-panel/UserSeeding.vue";
import BoxHeaderBlock from "./BoxHeaderBlock.vue";
export default {
  name: "BoxSeeding",
  data: () => ({
    isComponent: "FormSeeding",
  }),
  methods: {},
  components: {
    FormSeeding,
    HistorySeeding,
    UserSeeding,
    BoxHeaderBlock,
  },
};
</script>
