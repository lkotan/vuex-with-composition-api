<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Button from "@/components/Button";

export default {
  components: {
    Button,
  },
  emits: ["updateName"],
  setup(_, context) {
    const store = useStore();
    const remove = (id) => store.dispatch("levels/deleteLevel", id);
    const updateName = (level) => context.emit("updateName", level);
    const levels = computed(() => store.getters["levels/getLevels"]);

    return {
      levels,
      remove,
      updateName,
    };
  },
};
</script>

<template>
  <div class="level-list" v-for="level in levels" :key="level.id">
    <h3 @click="updateName(level)">{{ level.name }}</h3>
    <Button @buttonClick="remove(level.id)" name="Delete" class="btn--delete" />
  </div>
</template>
