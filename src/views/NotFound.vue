<template>
  <div class="wrap">
    <div class="not-fond">
      <span>Ошибка 404!</span>
      <h1>{{ name }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "404",
  data: () => ({
    name: "Страницы с таким адресом не существует!",
  }),
};
</script>

<style lang="scss" scoped>
.not-fond {
  padding-top: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    font-size: 30px;
    padding: 15px;
    font-weight: 600;
  }
  h1 {
    text-align: center;
    font-size: 35px;
  }
}
</style>
