<template>
  <div>{{ $route.matched[0].meta }}</div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    name: "Home",
  }),
};
</script>
