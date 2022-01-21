<template>
  <pre>{{ $route.matched[0].meta.parent }}</pre>
</template>

<script>
export default {
  name: "News",
  data: () => ({
    name: "News",
  }),
};
</script>
