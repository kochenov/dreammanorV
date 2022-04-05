<template>
  <div class="box__header">
    <div class="box__header-wrapper-tabs">
      <h2
        v-for="(item, index) in boxComponents"
        :key="index"
        class="box__header-title"
        :class="[
          tabs ? 'tab-link' : '',
          currentComponent === item.nameComponent ? 'active' : '',
          item.flag,
        ]"
      >
        {{ item.title }}
      </h2>
    </div>
    <div v-if="tabs" class="box__header-links wrapper-link-tabs">
      <a
        v-for="(item, index) in boxComponents"
        :key="index"
        class="box__header-link"
        :class="{ active: currentComponent === item.nameComponent }"
        href="#"
        @click="$emit('setCurrentComponent', item.nameComponent)"
        >{{ item.menu }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "BoxHeaderBlock",
  props: {
    tabs: { type: Boolean, default: false },
    /**
     * Имя файла текущего компонента
     */
    currentComponent: {
      type: String,
      default: "",
      require: true,
    },
    /**
     * Список компонентов , см. default()
     */
    boxComponents: {
      type: Array,
      default() {
        return [
          {
            nameComponent: "FormSeeding", // Имя файла компонента
            title: "Калькулятор посева овощей", // Заголовок текущего компонента
            menu: "Расчёт", // Имя вкладки
            flag: "", // Флаг блока {'box-new' / 'box-popular' }
          },
        ];
      },
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
