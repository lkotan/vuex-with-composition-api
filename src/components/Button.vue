<script>
export default {
  props: ["name"],
  emits: ["buttonClick"],
  setup() {},
};
</script>

<template>
  <button class="btn" @click="$emit('buttonClick')">{{ name }}</button>
</template>
