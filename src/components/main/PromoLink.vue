<template>
  <div class="promo-info-link">
    <button class="promo-info-link__btn-left">
      <fa icon="angle-left" />
    </button>
    <ul class="promo-info-link__items">
      <li class="promo-info-link__item">
        <a class="promo-info-link__link" href="#">
          Весна близко!
          <span class="color-red"> Распланируй свой огород</span></a
        >
      </li>
    </ul>
    <button class="promo-info-link__btn-right">
      <fa icon="angle-right" />
    </button>
  </div>
</template>

<style lang="scss">
$promo-info-link-color1: rgb(245, 250, 255);

.promo-info-link {
  height: 34px;
  background-color: #17696a;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  ul {
    list-style: none;
    padding: 0 5px;
  }

  a {
    text-decoration: none;
    color: $promo-info-link-color1;
    font-size: 13px;

    span {
      padding-left: 4px;
    }

    &:hover {
      color: #b6fafb;
    }
  }

  button {
    background: none;
    border: none;
    color: $promo-info-link-color1;
    font-size: 9px;
    cursor: pointer;
  }
}
</style>
