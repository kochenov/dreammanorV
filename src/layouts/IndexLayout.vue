<template>
  <header class="header">
    <div class="wrap header__wrap">
      <div class="header__logo-wrap">
        <div class="logo">
          <a class="logo-link" href="#">
            <img src="img/logo.png" alt="" />
          </a>
          <span>УСАДЬБА МЕЧТЫ</span>
        </div>
      </div>
      <div class="header__nav-wrap">
        <Menu />
      </div>
    </div>
  </header>
  <router-view />
</template>
<script>
import Menu from "@/components/main/menu";

export default {
  name: "IndexLayout",
  components: {
    Menu,
  },
};
</script>
