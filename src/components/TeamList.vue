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
    const teams = computed(() => store.getters["teams/getTeams"]);
    const updateName = (team) => context.emit("updateName", team);
    const remove = (id) => store.dispatch("teams/deleteTeam", id);

    return {
      teams,
      remove,
      updateName,
    };
  },
};
</script>

<template>
  <div class="team-list" v-for="team in teams" :key="team.id">
    <h3 @click="updateName(team)">{{ team.name }}</h3>
    <Button @buttonClick="remove(team.id)" name="Delete" class="btn--delete" />
  </div>
</template>
