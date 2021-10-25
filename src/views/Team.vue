<script>
import { v4 as uuidv4 } from "uuid";
import { ref, watch } from "vue";
import { useStore } from "vuex";
import Button from "@/components/Button";
import TeamList from "@/components/TeamList";

export default {
  components: {
    Button,
    TeamList,
  },
  setup() {
    const store = useStore();
    let newTeam = {};
    const name = ref("");
    const isEdit = ref(false);

    const save = () => {
      store.dispatch("teams/addTeam", { id: uuidv4(), name: name.value });
      name.value = "";
    };

    const edit = () => {
      store.dispatch("teams/editTeam", { id: newTeam.id, name: name.value });
      name.value = "";
    };

    const updateName = (team) => {
      newTeam = team;
      name.value = team.name;
      isEdit.value = true;
    };

    watch(name, () => {
      if (name.value == "" && isEdit.value) isEdit.value = false;
    });

    return {
      name,
      save,
      updateName,
      isEdit,
      edit,
    };
  },
};
</script>

<template>
  <form @submit.prevent class="team-form">
    <input type="text" placeholder="Team" v-model="name" />
    <Button
      v-if="!isEdit"
      :disabled="name == '' ? true : false"
      @buttonClick="save"
      name="Save"
      class="btn--save"
    />
    <Button
      v-else
      :disabled="name == '' ? true : false"
      @buttonClick="edit"
      name="Edit"
      class="btn--edit"
    />
  </form>
  <TeamList @updateName="updateName" />
</template>
