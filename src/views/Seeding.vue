<template>
  <div class="page wrap">
    <main class="page-main home">
      <BoxSeeding />
    </main>
    <aside class="sidebar">
      <div class="box">
        <BoxHeaderBlock
          :box-components="[
            {
              nameComponent: 'FormSeeding',
              title: 'Расчёт посева',
              menu: 'Расчёт посева',
              flag: '',
            },
          ]"
        />
        <div class="box__content">
          <ul class="list-menu-link">
            <li class="active"><a href="#">Посев томатов </a></li>
            <li><a href="#">Посев Огурцов</a></li>
            <li><a href="#">Посев перцев</a></li>
            <li><a href="#">Посев баклажанов</a></li>
            <li><a href="#">Посев кабачков</a></li>
            <li><a href="#">Посев тыквы</a></li>
            <li><a href="#">Посев моркови</a></li>
            <li><a href="#">Посев редиса</a></li>
            <li><a href="#">Посев свеклы</a></li>
            <li><a href="#">Посев капусты</a></li>
            <li><a href="#">Посев арбузов</a></li>
            <li><a href="#">Посев картофеля</a></li>
          </ul>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import BoxSeeding from "@/components/box/BoxSeeding.vue";
import BoxHeaderBlock from "../components/box/BoxHeaderBlock.vue";

export default {
  name: "Seeding",
  data: () => ({
    isComponent: "FormSeeding",
  }),
  components: {
    BoxSeeding,
    BoxHeaderBlock,
  },
};
</script>
