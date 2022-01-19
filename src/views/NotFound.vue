<template>
  <div class="not-fond">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: "News",
  data: () => ({
    name: "404 Страницы с таким адресом не существует!",
  }),
};
</script>

<style lang="scss" scoped>
.not-fond {
  padding-top: 40vh;
  display: flex;
  justify-content: center;
}
</style>
