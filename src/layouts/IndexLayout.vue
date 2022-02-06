<template>
  <div>
    <header class="header">
      <div class="wrap header__wrap">
        <div class="header__logo-wrap">
          <div class="logo">
            <a class="logo-link" href="#">
              <img src="/img/logo.png" alt="" />
            </a>
            <span>УСАДЬБА МЕЧТЫ</span>
          </div>
        </div>
        <div class="header__nav-wrap">
          <MainMenu />
        </div>
      </div>
    </header>

    <PromoLink />
    <Breadcrumbs />
    <router-view />
  </div>
</template>
<script>
import MainMenu from "@/components/main/MainMenu";
import PromoLink from "@/components/main/PromoLink";
import Breadcrumbs from "@/components/main/Breadcrumbs";

export default {
  name: "IndexLayout",
  components: {
    MainMenu,
    PromoLink,
    Breadcrumbs,
  },
};
</script>
